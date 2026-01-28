---
name: generating-test-plans
description: Generates professional, industry-standard test plans based on Product Requirement Documents (PRD). Maps requirements to testing strategies, defines scope, identifies risks, and estimates effort. Use when the user mentions PRD, Test Plan, testing strategy, or QA planning.
---

# Test Plan Generator

## When to use this skill
- User provides a PRD and needs a testing roadmap
- User asks for a test plan for a specific feature or project
- User needs to define testing scope, strategy, or resource requirements
- User wants to formalize the QA process for a new release

## Workflow

### Step 1: Context Gathering
Ask the user for the following if not already provided:
```
📋 **Test Plan Context**

Please provide:
1. **The PRD/Requirements** (Paste content or provide link/file)
2. **Test Plan Template** (Optional: I can use a standard IEEE 829/Agile template if you don't have one)
3. **Project Timeline** (Release dates, sprint cycles)
4. **Target Platforms** (Browsers, OS, Mobile devices)
5. **Project Constraints** (Budget, team size, tools already in use)
```

### Step 2: Analysis & Mapping
- [ ] Parse PRD for functional and non-functional requirements.
- [ ] Categorize requirements (e.g., UI, API, Security, Performance).
- [ ] Map requirements to the provided (or standard) template sections.
- [ ] Identify gaps in requirements that need clarification (Edge cases, negative paths).

### Step 3: Test Plan Generation
Generate the plan focusing on these core pillars:

#### 1. Scope & Strategy
- **In-Scope**: Explicit features from PRD.
- **Out-of-Scope**: Dependencies, legacy features, or items explicitly excluded.
- **Test Types**: Unit, Integration, E2E, Regression, UAT, etc.

#### 2. Environment & Tools
- **Test Environments**: Staging, QA, Dev.
- **Tools**: Playwright, Selenium, Jira, Postman, etc.
- **Data Needs**: Mock data vs. Sanity data.

#### 3. Risk Analysis
| Risk | Impact | Mitigation Strategy |
|------|--------|---------------------|
| [e.g., Late API dev] | High | Mock APIs initially |
| [e.g., Flaky third-party] | Med | Isolate with stubs |

### Step 4: Quality Check
Before presenting, verify the plan meets these standards:
- [ ] **Traceability**: Every major PRD feature has a corresponding testing entry.
- [ ] **Measurability**: Entry and Exit criteria are clear.
- [ ] **Practicality**: The plan matches the user's timeline and constraints.

## Standard Test Plan Template
Use this if the user does *not* provide a template:

```markdown
# TEST PLAN: [Project Name]

## 1. Introduction
Brief overview of the project and the purpose of this test plan.

## 2. Test Items (Features to be tested)
- Feature 1: [Description]
- Feature 2: [Description]

## 3. Features Not to be Tested
- [List items and reasons]

## 4. Testing Strategy
- **Automation Approach**: [Framework/Tools]
- **Manual Testing**: [Exploratory/Checklist]
- **Levels of Testing**: [Component, Integration, System, Acceptance]

## 5. Item Pass/Fail Criteria
- **Pass**: [All critical functional paths verify correctly]
- **Fail**: [Any P0/P1 bugs found]

## 6. Suspension & Resumption Requirements
- [e.g., If 20% of tests fail, suspend testing]

## 7. Test Deliverables
- [Test Plan, Test Cases, Bug Reports, Test Summary Report]

## 8. Environmental Needs
- Browsers: [Chrome, Firefox, Safari]
- Hardware: [Desktop, iOS, Android]

## 9. Risks and Contingencies
- [Risk 1] -> [Mitigation]

## 10. Approvals
- [Stakeholders]
```

## Instructions for the Agent
1. **Be Proactive**: If a PRD is vague about performance, add a "Performance Testing" section and suggest metrics like Load Time < 2s.
2. **Standard Alignment**: Follow modern Agile/DevOps principles (Shift-left testing).
3. **Depth**: Go beyond just listing features. Explain *how* they will be tested (e.g. "Boundary Value Analysis for field X").
4. **Tool Specificity**: If the user is using Playwright (check current workspace), tailor the strategy to include Trace View and Snapshot testing.

## Resources
- [Example Agile Test Plan](examples/agile-test-plan.md)
- [Risk Assessment Matrix](resources/risk-matrix.png)
