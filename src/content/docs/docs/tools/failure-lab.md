---
title: Failure Lab
description: The planned testing companion for controlled failures, recovery scenarios, and consistency invariants.
---

**Atomic Flow Failure Lab** is envisioned as a testing-focused companion to the Core runtime.

Its purpose is to help developers answer a question that happy-path unit tests often miss: *what state is the application left in when something fails halfway through?*

## Intended testing scenarios

- Inject failures before, during, or after a workflow step.
- Exercise recovery paths and report their outcomes.
- Check developer-defined invariants after interrupted execution.
- Reproduce partial successes and uncertain external outcomes.
- Identify regressions when execution behavior changes.

## Runtime separation

Failure Lab is **not intended to be a mandatory production dependency**. The Core should not require test-only failure-injection machinery in a production application.

:::note[Design in progress]
This is a proposed scope, not an announcement that these capabilities are implemented or available to install.
:::

See [Failures and recovery](/docs/concepts/failures-and-recovery/) for the conceptual background.
