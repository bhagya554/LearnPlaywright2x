---
name: generating-resumes
description: Builds professional, ATS-friendly resumes. Use when the user wants to create a CV, resume, or update their career profile. Supports chronological, functional, and combination formats.
---

# Resume Generator

## When to use this skill
- User asks to create a resume or CV from scratch
- User wants to tailor an existing resume for a specific job description
- User needs help with professional career objective or skill descriptions
- User wants to convert career details into a clean, formatted document

## Workflow

### Step 1: Profile Discovery
Ask the user to provide their current details or upload an existing file:
```
📄 **Resume Builder: Profile Discovery**

Please provide (or upload a file with):
1. **Target Role**: (e.g., Senior QA Engineer, Frontend Developer)
2. **Personal Info**: Full Name, Email, LinkedIn, Portfolio.
3. **Experience**: Roles, Companies, Dates, Key Achievements (use bullet points).
4. **Education**: Degrees, Institutions, Graduation Years.
5. **Skills**: Hard skills (tech stack) and Soft skills.
6. **Projects/Certifications**: Optional but recommended.
```

### Step 2: Format & Style Selection
Ask the user to choose a resume format:
- **Chronological**: Best for steady career progression (most common).
- **Functional**: Best for career changers or gaps (focuses on skills).
- **Combination**: Highlights both skills and chronological history.

### Step 3: Generation & Tailoring
Generate the resume using these **ATS-Optimization Rules**:
- [ ] Use **Action Verbs** (e.g., "Led", "Optimized", "Architected").
- [ ] Quantify results (e.g., "Reduced latency by 30%").
- [ ] Standard headings (Experience, Education, Skills).
- [ ] No complex graphics, tables, or images that break ATS parsers.

### Step 4: Preview & Refine
Present the resume in Markdown format first.
Ask user:
```
Resume generated! Would you like to:
1. **Refine a section**: "Update the projects section with more focus on AI."
2. **Change tone**: "Make the summary more aggressive/ambitious."
3. **Format for Role**: "Tailor this for a Google job description."
```

## Resume Structure Templates

### 1. Professional Header
```markdown
# [Full Name]
[Location] | [Phone] | [Email]
[LinkedIn Profile URL] | [Portfolio/GitHub URL]
```

### 2. Tailored Summary
- Write 3-4 lines focusing on years of experience and top 2 unique value propositions.

### 3. Experience (Bullet Point Strategy)
- *Structure*: [Action Verb] + [Job Responsibility] + [Outcome/Metric]
- *Example*: "Implemented Playwright framework across 3 microservices, reducing regression time by 40%."

## Instructions for the Agent
1. **Role Tailoring**: If a user provides a Job Description, cross-reference it with their profile. Highlight overlapping keywords in the "Skills" and "Experience" sections.
2. **Conciseness**: Keep resumes to 1 page for <10 years exp, 2 pages for >10 years.
3. **Drafting Strategy**: Always provide the output in clean Markdown. If the user likes it, suggest tools like `pandoc` or "Print to PDF" for the final version.
4. **Iterative Editing**: If the user says "Change section X", only rewrite that section and show how it fits back into the whole.

## Resources
- [Action Verbs List](resources/action-verbs.md)
- [Chronological Template](examples/chronological.md)
- [Functional Template](examples/functional.md)
