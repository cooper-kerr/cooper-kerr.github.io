---
name: cover-letter
description: "Pitch Cooper Kerr's repo-backed experience for a job application when the user asks for a cover letter, application email, statement of interest, recruiter note, or personable role-specific introduction."
version: "2.0.0"
author: Cooper Kerr
license: MIT
category: career
tags:
  - cover-letter
  - job-application
  - career-context
  - writing
---

# Cover Letter

Pitch Cooper as a specific person, not a generic applicant. The letter should connect the job's problem to Cooper's repo-backed evidence and sound direct, curious, and human.

## Source Order

Use these files as the single source of truth, in this order:

1. `career_context.md` for Cooper's full career background, exact metrics, education, links, projects, and experience bullets.
2. `data/profile.json`, `data/experience.json`, `data/projects.json`, and `data/skills.json` when checking structured profile details or updating site-backed wording.
3. User-provided job posting, company context, referral details, tone preferences, or draft text.
4. Current web/company research only when the user asks for it or when a company-specific claim would otherwise be speculative.

When the user asks for examples, structure, tone options, referral letters, career-change framing, or a stronger draft, read `COVER_LETTER_REFERENCE.md` before drafting.

## Steps

1. Read `career_context.md` and the user's job material.
   Completion criterion: the role's core problem, company/domain, required skills, preferred skills, and tone constraints are accounted for.

2. Pick the pitch.
   Completion criterion: select one central through-line that is true for Cooper and useful to the role, such as privacy-safe measurement, predictive modeling, product analytics, sports/data science, finance dashboards, stakeholder communication, or quant-heavy experimentation.

3. Select proof.
   Completion criterion: choose two or three concrete evidence points from the repo, preserving exact metrics and tools. If the role asks for something not directly supported, frame adjacent evidence clearly rather than overstating.

4. Draft the letter or note.
   Completion criterion: the draft is role-specific, under one page unless asked otherwise, and contains no invented company facts, experience, metrics, dates, credentials, or personal motivations.

5. Return review notes.
   Completion criterion: include the draft plus brief notes on the evidence used, assumptions made, and any details Cooper should confirm before sending.

## Cooper Voice

- Personable, direct, and grounded.
- Confident about evidence, modest about gaps.
- Uses plain language over inflated corporate phrasing.
- Shows curiosity through the work Cooper has done, not through generic enthusiasm.
- Connects data work to decisions: product changes, stakeholder findings, athlete workload, recommendation accuracy, policy or investor discussion, and user-facing tools.
- Uses first person naturally; the letter should sound like Cooper is writing it, not like a resume summary was converted into paragraphs.

## Reliable Proof Points

Use these only when relevant to the posting:

- PING Golf: product analytics on PING Copilot API/menu usage, WebFit Fullbag refactor for a site historically used about `40,000 times/day`, and wedge launch prediction model with `87%` accuracy and `roughly 40%` MAE reduction.
- University of Sydney: Vercel-hosted finance analytics platform using Yahoo Finance and U.S. Treasury APIs across `25+ stocks and funds`, plus a Python/GitHub pipeline modeling `30,000+` options records daily.
- University of Utah sports science: SQL/Python/R analysis, Smartabase recovery recommendations for `15 athletes`, workload analysis across `120 practices and games`, and QC across `60 athletes` and `3 teams`.
- Portfolio projects: F1 predictive pipelines with target-leakage auditing, Exploit Poker Trainer as a solo full-stack product, sports-science positional demands, financial bubble dashboard, and proof-based spherical geometry research.
- Education: BS Mathematics with Statistics Emphasis and BS Quantitative Analysis of Markets and Organizations, University of Utah, May 2028, GPA `3.88/4.00`.

## Output Shape

```markdown
## Cover Letter

[draft]

## Notes

- Evidence used:
- Assumptions:
- Confirm before sending:
```

For short introductions, recruiter messages, or application questions, skip the formal letter format and keep the same pitch/proof discipline.
