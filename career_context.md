This document contains Cooper Kerr's full career background: education, skills, work experience, and projects. When given a job posting alongside this file, use it to draft a resume tailored to that specific role. Prioritize experience and projects whose relevance_tags align with the posting. Use exact metrics and bullet content as given -- do not invent, round, or embellish numbers or achievements not stated here. Projects tagged "academic" are lower priority for most data/quant roles unless the posting specifically values mathematical/research background. Preserve the specificity of technical details (model types, tools, metrics) rather than generalizing them into vague resume-speak.

# Cooper Kerr Career Context

## Contact / Profile

**Name:** Cooper P. Kerr

**Bio:** Math and Quantitative Analysis student at the University of Utah building predictive models at the intersection of sports and data — currently applying that at PING Golf, in university sports-science research, and in independent projects.

**Email:** coopkerr@icloud.com

**LinkedIn:** https://www.linkedin.com/in/cooper-kerr/

**GitHub:** https://cooper-kerr.github.io/

## Education

### University of Utah, David Eccles School of Business

**Degree:** BS in Mathematics, Statistics Emphasis

**Graduation:** May 2028

### University of Utah, College of Science

**Degree:** BS in Quantitative Analysis of Markets and Organizations

**Graduation:** May 2028

**GPA:** 3.88/4.00

**Scholarships:**

- Utah Flagship Scholarship
- Marriner S. Eccles Scholarship

**Coursework:**

- Business Econometrics
- Introduction to Data Science
- Mathematical Finance
- Applied Statistics
- Banking & Financial Systems
- Game Theory

## Skills

### Programming Languages

- Python/Scikit-Learn/TensorFlow
- R
- SQL
- JavaScript

### ML Data Libraries

- Scikit-Learn
- TensorFlow

### Cloud Platforms

- Vercel
- Firebase/Firestore
- AWS S3/EC2
- GitHub Pages

### Web Content

- HTML
- CSS
- JSON

### Tools

- Git
- Claude Code
- PowerBI

## Experience

### Data Scientist Intern, PING Golf – Fitting & Performance Science

**Location:** Phoenix, AZ

**Dates:** May 2026 – Present

- Analyzed API request volume and menu-usage patterns for PING Copilot pre- and post-redesign, identifying usage and engagement shifts and delivering actionable, data-backed findings to stakeholders across PING's Copilot ecosystem
- Leading the refactor and redesign of PING's WebFit Fullbag website (historically used ~40,000 times/day), improving core logic to increase recommendation accuracy ahead of a planned relaunch
- Redesigned a predictive model estimating wedge launch conditions from 7-iron launch data alone, achieving prediction accuracy of 87% and reducing mean absolute error by roughly 40% across all launch condition metrics

### Research Intern, University of Sydney (Study Abroad)

**Location:** Sydney, Australia

**Dates:** July – December 2025

- Built a web-based analytics platform (hosted on Vercel) that ingested real-time options and equity market data across 25+ stocks and funds via Yahoo Finance and U.S. Treasury APIs to identify and visualize financial bubbles
- Engineered an automated Python and GitHub pipeline to extract, clean, and model 30,000+ real-time options records daily, allowing for free daily updates of bubble estimates instead of paying and waiting 1 year for data releases
- Translated theoretical finance research into a client-ready decision tool used to inform policy and investor discussions, bridging technical modeling with business-facing communication

### Sports Science Research & Data Analytics Intern, Applied Health & Performance Science – University of Utah

**Location:** Salt Lake City, UT

**Dates:** Spring 2025, Spring 2026

- Built an automated recovery-recommendation system (SmartAbase + R) using decision-tree logic to deliver personalized recovery plans to 15 athletes based on soreness, physical, and neurological fatigue metrics
- Queried and analyzed athlete performance databases in SQL and Python, cross-referencing exercise science literature to identify positional differences in physiological load across 120 practices and games
- Synthesized findings into reports and visualizations for coaches and performance staff, supporting data-backed decisions on athlete workload management and position-specific training targets
- Collected and quality-controlled performance data (Catapult wearables, Force plates, VBT systems) across 60 different athletes and 3 different teams to track force output, player load and velocity-based metrics that are key in ensuring athlete performance

## Projects

### F1 Predictive Analysis Project

**Slug:** f1-predictive-analysis

**Status:** active

**Relevance Tags:** data-science, machine-learning, sports-analytics, python

**Description:**

Built five predictive and descriptive analysis pipelines on FastF1 data: tire degradation modeling, weather-effects analysis, pit-window forecasting, undercut/overcut strategy classification, and race-position predictability.

The project is methodology-focused as much as feature-focused: it included auditing and fixing real target-leakage bugs across multiple pipelines, improving the validity of the modeling workflow instead of only optimizing headline accuracy.

The Streamlit demo is currently local-only; no public demo URL is listed yet.

**Tech Stack:** Python, FastF1, Streamlit, machine learning

**Links:**

- GitHub Repo: https://github.com/cooper-kerr/F1-Predictive-Analysis-Project

### Exploit Poker Trainer

**Slug:** poker-trainer

**Status:** active

**Relevance Tags:** full-stack, ai-assisted-development, product, poker

**Description:**

Shipped an interactive poker training product focused on accelerating decision-making through structured play against adaptive bots and node-locking workflows that isolate specific game states.

Built as a solo full-stack product with Claude Code, combining poker-domain logic, game-tree constraints, and UX refinements into a practice environment for opponent archetypes and targeted repetition.

The product evolved through an AWS-to-Firebase/Firestore migration and includes an automated social content pipeline through Claude Cowork.

**Tech Stack:** Claude Code, Firebase/Firestore, AWS S3/EC2

**Links:**

- Live Product: https://exploitpt.com

**Image Paths:**

- images/Poker_Dashboard.png

**Image Captions:**

- Exploit Poker Trainer dashboard showing the interactive training interface.

### Sports Science / Positional Demands

**Slug:** sports-science-positional-demands

**Status:** active

**Relevance Tags:** sports-analytics, data-science, statistics, research

**Description:**

Built sports-science analytics work for Applied Health & Performance Science, including an automated recovery-recommendation system using decision-tree logic, Smartabase workflows, 120 practices/games, and 60 athletes across 3 teams.

Merged the positional-demands analysis into the same body of work: Catapult wearable data was used to study match and training exposures across goalkeepers, defenders, midfielders, and attackers, with secondary defender analysis separating outside backs and center backs.

Supporting methodology included summary statistics, independent t-tests for duration, player load, PL/min, total distance, and high-speed distance, plus Mann-Whitney U tests for non-normal IMA metrics. Statistical significance was evaluated at p-values <= 0.05.

**Tech Stack:** Catapult, Smartabase, statistical testing, decision-tree logic

**Image Paths:**

- images/Table_Soccer.png
- images/Figure_1.1.png
- images/Figure_1.2.png

**Image Captions:**

- Summary table comparing positional demands across team and positional groupings.
- Figure 1.1: percent difference in high-speed distance by position during training.
- Figure 1.2: percent difference in high-speed distance by position during matches.

### Financial Bubble Project

**Slug:** financial-bubble-internship

**Status:** completed

**Relevance Tags:** finance, data-science, python, dashboard

**Description:**

During my research internship at the University of Sydney, I designed and built a web-based platform that identifies and visualizes financial market bubbles using Dr. Simon Kwok's theoretical research on bubble dynamics.

The system integrates real-time options and equity market data across more than 25 stocks and funds by leveraging Yahoo Finance and U.S. Treasury APIs, transforming complex financial signals into interactive visualizations.

To support scalability and automation, I developed an optimized Python-based GitHub pipeline that extracts, cleans, and models 30,000+ real-time options records daily and refreshes bubble indicators for a client-ready decision-support tool.

**Tech Stack:** Python, Yahoo Finance API, U.S. Treasury APIs, GitHub automation, Vercel

**Links:**

- Live Dashboard: https://financial-bubble-detection-dashboar.vercel.app/

**Image Paths:**

- images/Financial_Bubble_ss.png

### Summer Math Research

**Slug:** math-research

**Status:** academic

**Relevance Tags:** mathematics, proof-based, research

**Description:**

Conducted an independent research project exploring the geometry of the 2-dimensional unit sphere, with a focus on distance-preserving transformations and the limits of mapping curved spaces to the plane.

The project formally classified isometries of the sphere, showing that every spherical isometry can be expressed as a composition of at most three reflections, leading to rotations and glide reflections as fundamental cases.

Investigated stereographic and Archimedean projections, analyzed the tradeoff between angle and area preservation, and proved that no isometry exists between the 2-dimensional sphere and 2-dimensional plane.

**Tech Stack:** spherical geometry, proof writing, metric spaces

**Links:**

- Research Paper: assets/Spherical.pdf

**Image Paths:**

- images/Spherical_triangle_3d.png

**Image Captions:**

- Spherical triangle diagram used in the geometry research project.

### Recruiter Portfolio System

**Slug:** recruiter-portfolio-system

**Status:** active

**Relevance Tags:** portfolio, frontend, content-systems, ai-assisted-development

**Description:**

Built a static, recruiter-facing portfolio site that presents projects, experience, skills, education, links, and project visuals from structured JSON content instead of hard-coded page copy.

Refactored the site into a maintainable content model using browser-native JavaScript rendering, with `data/projects.json`, `data/experience.json`, `data/skills.json`, and `data/profile.json` serving as the portfolio's source of truth.

Added `career_context.md` as an AI-assisted resume-generation source so project descriptions, exact metrics, relevance tags, and experience bullets can be reused consistently when tailoring applications.

**Tech Stack:** HTML, CSS, JavaScript, JSON, GitHub Pages

**Links:**

- Live Portfolio: https://cooper-kerr.github.io/
- GitHub Repo: https://github.com/cooper-kerr/cooper-kerr.github.io

<!--
Regeneration note:
After editing data/profile.json, data/skills.json, data/experience.json, or data/projects.json, regenerate this derived export by re-running the same process used to create career_context.md: pull the updated content from those four JSON files, preserve full experience bullets and project descriptions verbatim, keep experience ordered in reverse chronological order by start date, and commit the refreshed file.
-->
