---
title: Why Atomic Flow?
description: Why application workflows need explicit failure semantics, recovery contracts, and consistency checks.
---

A single application workflow may affect multiple systems: a database, payment provider, inventory service, and an email gateway. Those systems often cannot participate in one shared, globally atomic transaction.

## The partial execution problem

Suppose an application tries to:

1. Reserve a product in inventory.
2. Create a shipping request.
3. Notify the customer.

If the shipping request fails, the inventory reservation may already exist. Retrying everything without a clear contract risks duplicate work. Pretending the entire operation was rolled back risks masking a state that still needs attention.

**Atomic Flow aims to help make these intermediate outcomes explicit.** It is a framework for reasoning about application-level workflows and their recovery obligations, not a replacement for transactional databases.

## Project priorities

- **Consistency:** identify which invariants must hold and under which conditions.
- **Explicit state:** make progress, failures, and unresolved recovery actions visible.
- **Predictable recovery:** define what recovery attempts do and how outcomes are reported.
- **Verification:** include failure scenarios in automated tests.
- **Portability:** establish language-independent behavior where practical.

:::note[Scope]
The exact workflow API, failure model, and persistence strategy are still under design. This page introduces the problem space, not a finalized specification.
:::

Next: [Execution lifecycle](/docs/concepts/execution-lifecycle/).
