# Resume Tailor Skill

Tailor Cooper Kerr's resume from this repository's career context.

## Quick Start

Use this skill when a job posting, resume request, application bullet request, or ATS alignment request should be grounded in Cooper's actual experience.

The skill reads `career_context.md` first, then uses the structured data files under `data/` only when a field needs verification or site-backed wording needs to be updated.

## Source Files

- `career_context.md`
- `data/profile.json`
- `data/experience.json`
- `data/projects.json`
- `data/skills.json`

## Guardrail

Keep metrics, dates, tools, degrees, employers, and project claims tied to the repo or to facts Cooper provides in the current conversation.
