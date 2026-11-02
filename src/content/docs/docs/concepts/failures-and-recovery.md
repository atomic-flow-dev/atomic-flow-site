---
title: Failures and recovery
description: Recovering from partial workflow execution without pretending every side effect is reversible.
---

When an external operation fails, an application must decide what is known, which operations have completed, and whether recovery can be attempted safely.

## Recovery is not always rollback

A payment capture, an email, or a message sent to a third-party system cannot necessarily be undone. A *compensating operation* may instead perform a new action (for example, issuing a refund) whose result must be verified separately.

Compensation can also fail. In that case, a trustworthy execution system must not misreport the workflow as successfully restored.

## Important failure scenarios

1. A step fails before producing any external side effect.
2. A step succeeds, but the application loses its acknowledgement.
3. A later step fails after earlier operations completed.
4. A compensation attempt fails or only partially succeeds.
5. The application restarts while recovery is in progress.

Handling these scenarios may require application-specific idempotency keys, durable state, external reconciliation, or manual intervention. No library can make those needs disappear.

:::caution[No universal atomicity]
Atomic Flow does **not** promise that arbitrary operations across unrelated systems can be atomically committed or rolled back. Each supported guarantee must be scoped to a concrete implementation and its assumptions.
:::

See also: [Guarantees and limitations](/docs/concepts/guarantees/).
