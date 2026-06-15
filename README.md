# Cash App Advocate Workflow Guidance Tool

## Overview

The Cash App Advocate Workflow Guidance Tool is a web-based decision support platform designed to assist Customer Support Advocates in navigating complex customer interactions through structured workflows, guided verification processes, dynamic recommendations, and centralized knowledge references.

The application aims to standardize advocate handling procedures, improve compliance with operational policies, reduce dependency on manual knowledge article searches, and improve overall customer experience by providing a single source of workflow guidance.

---

## Problem Statement

Customer support advocates often need to navigate multiple knowledge articles, tools, and processes simultaneously while maintaining compliance with verification requirements and handling expectations.

Common challenges include:

* Navigating multiple Knowledge Articles (KAs) during a call
* Inconsistent issue resolution approaches
* High dependency on advocate experience and memory
* Difficulty locating relevant tools and references
* Increased handling time caused by manual process navigation
* Verification complexity across different customer scenarios

This solution addresses these challenges by consolidating workflow guidance into a single, easy-to-use platform.

---

## Key Features

### Shared Verification Engine

A reusable verification framework that serves as the foundation for all workflows.

Supports:

* Account Holder Verification
* Tap to Confirm (TTC)
* Manual PII Verification
* Identity Verification (IDV)
* Sponsored Account Handling
* Third-Party Caller Identification
* Unable-to-Verify Workflows
* IDV Troubleshooting Paths

---

### Dynamic Workflow Guidance

Interactive decision-tree driven workflows that guide advocates through issue resolution.

Features include:

* Guided workflow progression
* Previous step navigation
* Workflow reset functionality
* Status tracking
* Dynamic recommendations
* Context-sensitive guidance

---

### Knowledge Hub

Centralized repository for workflow-related Knowledge Articles.

Purpose:

* Provide advocates with quick access to supporting documentation
* Serve as workflow validation references
* Reduce time spent searching across multiple systems

---

### Dynamic Resource Engine

Automatically updates based on workflow stage.

Displays:

* Recommended Actions
* Knowledge Article References
* Tool References
* Script Guidance

---

### Workflow Journey Tracking

Provides visibility into workflow progress.

Stages:

1. Verification
2. Investigation
3. Assessment
4. Resolution
5. Call Closure

---

## Supported Workflows (Phase 1)

### Account Access Recovery

Assist customers who are unable to access their account.

---

### Missing Direct Deposit

Assist customers reporting delayed or missing direct deposits.

---

### P2P Misdirected Payment

Assist customers who accidentally sent money to an unintended recipient.

---

### Unauthorized Cash Card Transaction

Assist customers reporting unauthorized card activity.

---

### Account Takeover (ATO)

Assist customers reporting unauthorized access to their account.

---

## Shared Verification Model

The verification engine executes before any issue-specific workflow begins.

### Verification Flow

```text
Caller Classification
        │
        ▼
Tap To Confirm Available?
        │
 ┌──────┴──────┐
 │             │
Yes            No
 │             │
 ▼             ▼
Verified   Manual PII
 │             │
 ▼             ▼
Continue   Verification Passed?
 Workflow       │
                │
         ┌──────┴──────┐
         │             │
        Yes            No
         │             │
         ▼             ▼
      Continue    IDV Assessment
      Workflow         │
                       ▼
             Unable To Verify
```

---

## Knowledge Article Integration

The application is designed around approved Knowledge Articles.

Workflow logic is developed and validated using business-approved documentation.

### Knowledge Article Dependency

Each workflow is supported by one or more Knowledge Articles that act as the source of truth.

Examples:

| Workflow                | Supporting References                |
| ----------------------- | ------------------------------------ |
| Shared Verification     | Voice - PII, IDV                     |
| Account Access Recovery | Account Access Recovery, Voice - PII |
| Direct Deposit          | Direct Deposit, Voice - PII          |
| P2P Misdirected Payment | P2P Payment KA                       |
| Unauthorized Cash Card  | Cash Card KA                         |
| Account Takeover        | ATO KA                               |

The application serves as a workflow guidance layer and does not replace official policy documentation.

---

## User Interface

### Dashboard

Provides:

* Workflow Statistics
* Knowledge Article Statistics
* Tool Statistics
* Recent Updates
* Release Information

---

### Workflow Guidance

Provides:

* Workflow Intake
* Dynamic Decision Trees
* Script Guidance
* Workflow Navigation
* Progress Tracking

---

### Knowledge Hub

Provides:

* Knowledge Article Repository
* Workflow References
* Future Search Capability

---

## Technology Stack

### Front-End

* HTML5
* CSS3
* Vanilla JavaScript

### Hosting

* GitHub Pages

### Architecture

* Single Page Application (SPA)
* Client-Side Rendering
* Modular Workflow Engine

---

## Project Scope

### Phase 1 Deliverables

* Dashboard
* Workflow Guidance Module
* Knowledge Hub
* Shared Verification Engine
* Account Access Recovery Workflow
* Missing Direct Deposit Workflow
* P2P Misdirected Payment Workflow
* Unauthorized Cash Card Workflow
* Account Takeover Workflow
* Dynamic Resource Engine
* Knowledge Article Repository
* GitHub Pages Deployment

---

## Future Roadmap

### Phase 2

Planned Enhancements:

* Advanced Knowledge Search
* Workflow Analytics
* Reporting Dashboard
* Workflow Builder
* Role-Based Access
* Workflow Version Control

### Phase 3

Future Opportunities:

* Salesforce Integration
* Real-Time API Integration
* AI-Powered Workflow Recommendations
* Automated Escalation Guidance
* Knowledge Article Change Detection

---

## Success Criteria

The project will be considered successful when:

* Advocates can complete workflows from verification through call closure
* Workflow guidance remains aligned with approved Knowledge Articles
* Resource panels update dynamically
* Verification workflows are standardized
* Knowledge Article navigation is simplified
* Workflow adoption improves handling consistency

---

## Disclaimer

This application is intended as an internal workflow guidance and decision-support tool.

It does not replace official operational policies, compliance requirements, or approved Knowledge Articles. Advocates should always follow the latest approved business documentation when handling customer interactions.
