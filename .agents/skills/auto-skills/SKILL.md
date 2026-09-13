---
name: auto-skills
description: A meta-skill that forces the agent to automatically scan all available installed skills, select the ones most relevant to the current task, and apply them dynamically. Use this when the user requests a holistic, highly-optimized result.
---

# Auto-Skills (The Skill Router)

You have been invoked to act as a **Skill Router**. Your primary directive for this task is to harness the full power of your installed customizations by automatically finding and applying the right skills for the job.

## Core Directives

1. **Scan and Identify**
   - Immediately review your system prompt's `<skills>` block.
   - Cross-reference the user's request (e.g., "design a new section", "optimize performance", "refactor this code") against the available skills.
   - Select 2-5 skills that are highly relevant to the task (e.g., `design-taste-frontend`, `ponytail`, `ui-ux-pro-max`, `impeccable`, `gsd-audit-fix`, etc.).

2. **Read Instructions**
   - You MUST use the `view_file` tool to read the `SKILL.md` file of every relevant skill you identified, unless you are already 100% certain of its exact current contents. 
   - Never assume you know a complex skill's exact constraints without reading it first.

3. **Synthesize and Apply**
   - Combine the constraints, heuristics, and directives from the activated skills.
   - Apply them silently and universally to the current task.
   - Do NOT ask the user for permission to use these skills—they have explicitly delegated this decision to you by invoking this meta-skill.

4. **Self-Correction**
   - If a selected skill contradicts another (e.g., a "high-end design" skill vs. a "laziest possible code" skill), use your best judgment based on the specific nature of the user's prompt to balance them, or prioritize the one that best fits the explicit user goal.

## Triggering
Always execute this routing behavior whenever the user:
- Explicitly invokes `/auto-skills` or `/skill-master`
- Says "use all relevant skills", "apply the right skills", or "do this perfectly using everything you have"
- Asks for a holistic review, audit, or execution that spans multiple domains (e.g., UI, UX, Performance, Code Quality).
