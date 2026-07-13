(function() {
	function asString(value, fallback) {
		if (typeof value === 'string' && value.trim() !== '')
			return value.trim();

		return fallback || '';
	}

	function asArray(value) {
		return Array.isArray(value) ? value : [];
	}

	function stringArray(value) {
		return asArray(value).map(function(item) {
			return asString(item);
		}).filter(Boolean);
	}

	function normalizeLink(link) {
		var label = asString(link && link.label);
		var url = asString(link && link.url);

		if (!label || !url)
			return null;

		return {
			label: label,
			url: url,
			isExternal: /^https?:\/\//i.test(url)
		};
	}

	function normalizeProfile(raw) {
		raw = raw || {};

		return {
			name: asString(raw.name, 'Cooper P. Kerr'),
			bio: asString(raw.bio),
			email: asString(raw.email),
			linkedin: asString(raw.linkedin),
			github: asString(raw.github),
			gpa: asString(raw.gpa),
			education: asArray(raw.education).map(function(entry) {
				return {
					institution: asString(entry && entry.institution),
					degree: asString(entry && entry.degree),
					graduation: asString(entry && entry.graduation)
				};
			}).filter(function(entry) {
				return entry.institution || entry.degree || entry.graduation;
			}),
			scholarships: stringArray(raw.scholarships),
			coursework: stringArray(raw.coursework)
		};
	}

	function normalizeSkills(raw) {
		var skills = {};

		Object.keys(raw || {}).forEach(function(category) {
			var values = stringArray(raw[category]);

			if (values.length > 0)
				skills[category] = values;
		});

		return skills;
	}

	function normalizeExperience(raw) {
		return asArray(raw).map(function(role) {
			return {
				company: asString(role && role.company),
				location: asString(role && role.location),
				title: asString(role && role.title, 'Experience'),
				dates: asString(role && role.dates),
				bullets: stringArray(role && role.bullets)
			};
		});
	}

	function normalizeProject(raw) {
		var title = asString(raw && raw.title, 'Untitled Project');
		var imagePaths = stringArray(raw && raw.image_paths);
		var captions = stringArray(raw && raw.image_captions);
		var media = imagePaths.map(function(path, index) {
			var caption = captions[index] || '';

			return {
				src: path,
				caption: caption,
				alt: caption || title
			};
		});
		var links = asArray(raw && raw.links).map(normalizeLink).filter(Boolean);
		var status = asString(raw && raw.status, 'unknown')
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '') || 'unknown';

		return {
			title: title,
			slug: asString(raw && raw.slug),
			description: stringArray(raw && raw.description),
			techStack: stringArray(raw && raw.tech_stack),
			links: links,
			media: media,
			relevanceTags: stringArray(raw && raw.relevance_tags),
			status: status,
			statusLabel: titleFromKey(status),
			statusClass: 'project-status-' + status
		};
	}

	function normalizeProjects(raw) {
		return asArray(raw).map(normalizeProject);
	}

	function titleFromKey(key) {
		return asString(key)
			.split('_')
			.join('-')
			.split('-')
			.filter(Boolean)
			.map(function(part) {
				return part.charAt(0).toUpperCase() + part.slice(1);
			})
			.join(' ') || 'Unknown';
	}

	function normalize(raw) {
		raw = raw || {};

		return {
			profile: normalizeProfile(raw.profile),
			skills: normalizeSkills(raw.skills),
			experience: normalizeExperience(raw.experience),
			projects: normalizeProjects(raw.projects)
		};
	}

	window.PortfolioData = {
		normalize: normalize,
		titleFromKey: titleFromKey
	};
})();
