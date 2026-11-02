---
title: Execution lifecycle
description: Proposed concepts for tracking progress and outcomes of an Atomic Flow workflow.
---

A reliable workflow should have an explicit lifecycle: a developer ought to know whether it finished, failed, entered recovery, or needs human intervention.

## Conceptual phases

The following is a **design sketch**, not a committed API or finalized state machine.

| Phase | Intent |
| --- | --- |
| Start | Establish the execution context and invariants relevant to the workflow. |
| Execute | Run one or more steps and record meaningful outcomes. |
| Detect | Classify a failed operation or an interruption. |
| Recover | Attempt an appropriate recovery strategy, if one exists. |
| Report | Expose the resulting state, including unresolved or uncertain outcomes. |

Possible implementations may represent these phases with different states, events, or type systems. Shared specifications should define externally observable behavior before declaring conformance.

## Questions the specification must answer

- What is considered a *completed* step?
- How are retries distinguished from first attempts?
- What happens when a process crashes after a side effect but before recording its outcome?
- What does a failed compensation mean for the workflow's final state?
- Which properties require durable persistence rather than in-memory execution?

These decisions are fundamental; they should be backed by tests, not inferred from naming.

Continue with [Failures and recovery](/docs/concepts/failures-and-recovery/).
