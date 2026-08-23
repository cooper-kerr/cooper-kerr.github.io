---
name: resume-tailor
description: "Map Cooper Kerr's repo-backed career context to a job posting when the user asks for a resume, CV, application bullets, ATS alignment, or role-specific resume tailoring."
version: "2.0.0"
author: Cooper Kerr
license: MIT
category: career
tags:
  - resume
  - cv
  - job-application
  - career-context
---

# Resume Tailor

Map the job to Cooper's evidence. The output should read like Cooper: quantitative, practical, specific, and grounded in the repo's career facts.

## Source Order

Use these files as the single source of truth, in this order:

1. `career_context.md` for the full resume-ready background, exact bullets, metrics, contact details, education, skills, experience, and project descriptions.
2. `data/profile.json`, `data/experience.json`, `data/projects.json`, and `data/skills.json` when the user asks to update site data, verify structured fields, or reconcile a mismatch.
3. `index.html` and `assets/js/content.js` only when the user asks for portfolio-site wording or public-page alignment.
4. User-provided resume text only for current formatting, ordering preferences, or newly supplied facts. When it conflicts with `career_context.md`, surface the conflict instead of silently choosing.

When the user asks for ATS strategy, bullet rewrites, resume formatting, or examples of strong resume language, read `RESUME_REFERENCE.md` before drafting.

## Steps

1. Read `career_context.md` and the full job posting.
   Completion criterion: the job's required skills, preferred skills, responsibilities, seniority, and domain are accounted for.

2. Build a match map.
   Completion criterion: every major job requirement is marked as strong match, partial match, gap, or unsupported, with the repo-backed evidence that justifies the label.

3. Choose the resume angle.
   Completion criterion: the top three proof themes are selected from Cooper's actual background, such as predictive modeling, SQL/Python/R analysis, experimentation, dashboards, stakeholder communication, sports analytics, finance analytics, full-stack product work, or mathematical/statistical training.

4. Draft the tailored resume or requested resume section.
   Completion criterion: each bullet preserves true metrics and technical specificity from the repo; no achievement, employer, tool, date, degree, certification, or number is invented.

5. Return the tailoring notes.
   Completion criterion: include the final resume content plus a concise change log covering included evidence, omitted lower-priority evidence, keyword alignment, gaps to handle honestly, and any facts that need Cooper's confirmation.

## Writing Rules

- Keep Cooper's strongest default positioning: math and quantitative analysis student applying predictive modeling, data science, and product-minded analysis to sports, finance, and applied research.
- Prefer exact repo metrics: `40,000 times/day`, `87%`, `roughly 40%`, `25+ stocks and funds`, `30,000+ real-time options records daily`, `15 athletes`, `120 practices and games`, `60 athletes`, `3 teams`, `GPA 3.88/4.00`.
- Prioritize PING Golf, University of Sydney, and University of Utah sports-science experience for data, analytics, product, experimentation, ML, dashboard, SQL/Python/R, and stakeholder-facing roles.
- Prioritize projects by `relevance_tags` in `career_context.md`; academic math is lower priority unless the role values proof, mathematics, research, or theoretical rigor.
- Translate job language into Cooper's evidence, but keep the claim honest. For example, if a posting asks for A/B testing and the repo shows pre/post redesign analysis, position that as product measurement or experiment-adjacent analysis unless Cooper supplies direct A/B testing evidence.
- Use a personable but professional tone for summaries. Use concise, metric-led bullets for experience.
- Use standard section headers and simple formatting unless the user supplies a target template.

## Output Shapes

For a full resume, use:

```markdown
## Match Map

| Job Need | Cooper Evidence | Fit |
| --- | --- | --- |

## Tailored Resume

[resume text]

## Tailoring Notes

- Included:
- De-emphasized:
- Gaps / confirm:
```

For a smaller request, return only the requested section and a short note on the source evidence used.
