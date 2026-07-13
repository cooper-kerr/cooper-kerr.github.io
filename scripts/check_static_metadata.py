#!/usr/bin/env python3
"""Check hand-authored static metadata for the GitHub Pages site."""

from html.parser import HTMLParser
import json
from pathlib import Path
import sys
import urllib.parse
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
SITE_URL = "https://cooper-kerr.github.io/"
SITEMAP_URL = urllib.parse.urljoin(SITE_URL, "sitemap.xml")


class MetadataParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self._in_title = False
        self.links = {}
        self.meta = {}

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)

        if tag == "title":
            self._in_title = True
        elif tag == "link" and attrs.get("rel"):
            self.links[attrs["rel"]] = attrs.get("href", "")
        elif tag == "meta":
            key = attrs.get("property") or attrs.get("name")
            if key:
                self.meta[key] = attrs.get("content", "")

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False

    def handle_data(self, data):
        if self._in_title:
            self.title += data


def fail(message):
    return "FAIL: " + message


def parse_index():
    parser = MetadataParser()
    parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
    parser.title = parser.title.strip()
    return parser


def check_absolute_site_url(label, value):
    errors = []
    parsed = urllib.parse.urlparse(value)

    if parsed.scheme != "https" or parsed.netloc != "cooper-kerr.github.io":
        errors.append(fail(f"{label} must be an absolute cooper-kerr.github.io HTTPS URL"))

    return errors


def local_path_from_site_url(url):
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme != "https" or parsed.netloc != "cooper-kerr.github.io":
        return None

    return parsed.path.lstrip("/")


def check_index_metadata(parser, profile):
    errors = []
    canonical = parser.links.get("canonical", "")
    og_url = parser.meta.get("og:url", "")
    og_image = parser.meta.get("og:image", "")
    og_title = parser.meta.get("og:title", "")
    profile_name = profile.get("name", "")

    if canonical != SITE_URL:
        errors.append(fail(f"canonical URL is {canonical!r}, expected {SITE_URL!r}"))

    if og_url != SITE_URL:
        errors.append(fail(f"og:url is {og_url!r}, expected {SITE_URL!r}"))

    if parser.title != og_title:
        errors.append(fail("title and og:title must match exactly"))

    if profile_name not in parser.title:
        errors.append(fail("title must include the profile name from data/profile.json"))

    if profile_name != "Cooper P. Kerr":
        errors.append(fail("profile identity in data/profile.json must remain Cooper P. Kerr"))

    if not og_image:
        errors.append(fail("og:image is missing"))
    else:
        errors.extend(check_absolute_site_url("og:image", og_image))
        local_path = local_path_from_site_url(og_image)
        if local_path and not (ROOT / local_path).is_file():
            errors.append(fail(f"og:image local file does not exist: {local_path}"))

    return errors


def check_robots():
    errors = []
    robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
    sitemap_lines = [
        line.split(":", 1)[1].strip()
        for line in robots.splitlines()
        if line.lower().startswith("sitemap:")
    ]

    if sitemap_lines != [SITEMAP_URL]:
        errors.append(fail(f"robots.txt must contain exactly one Sitemap line for {SITEMAP_URL}"))

    return errors


def check_sitemap():
    errors = []
    tree = ET.parse(ROOT / "sitemap.xml")
    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    locs = [node.text for node in tree.findall(".//sm:loc", namespace)]

    if locs != [SITE_URL]:
        errors.append(fail("sitemap.xml must list only the site root URL"))

    return errors


def main():
    profile = json.loads((ROOT / "data/profile.json").read_text(encoding="utf-8"))
    parser = parse_index()
    errors = []
    errors.extend(check_index_metadata(parser, profile))
    errors.extend(check_robots())
    errors.extend(check_sitemap())

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1

    print("Static metadata checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
