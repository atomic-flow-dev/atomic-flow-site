---
title: Atomic Flow documentation
description: Explore the concepts, language implementations, and current development status of Atomic Flow.
---

Welcome to the **Atomic Flow documentation**.

Atomic Flow is an open-source project exploring explicit workflow execution, failure handling, and predictable recovery beyond the boundaries of a single database transaction.

:::caution[Early development]
Atomic Flow is in **pre-alpha**. There is no stable API or published release to install yet. The concepts described here are design goals, not verified guarantees of a released implementation.
:::

## Explore the project

- **[Why Atomic Flow?](/docs/concepts/overview/)** — The problems the project aims to address.
- **[Execution lifecycle](/docs/concepts/execution-lifecycle/)** — A proposed model for reasoning about workflow progress.
- **[Failures and recovery](/docs/concepts/failures-and-recovery/)** — What happens when a step fails, and what recovery can realistically accomplish.
- **[Guarantees and limitations](/docs/concepts/guarantees/)** — What Atomic Flow should and should not promise.
- **[TypeScript implementation](/docs/implementations/typescript/)** — The first implementation and its repository.
- **[Failure Lab](/docs/tools/failure-lab/)** — Testing failure scenarios and application invariants.

## Repositories

| Repository | Responsibility |
| --- | --- |
| [atomic-flow](https://github.com/atomic-flow-dev/atomic-flow) | Shared specifications, architecture, and project coordination |
| [atomic-flow-ts](https://github.com/atomic-flow-dev/atomic-flow-ts) | TypeScript / JavaScript implementation |
| [atomic-flow-site](https://github.com/atomic-flow-dev/atomic-flow-site) | Website and documentation |

You can also review the [current roadmap](/roadmap/) or learn [about the project](/about/).
