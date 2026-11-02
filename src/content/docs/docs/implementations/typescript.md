---
title: TypeScript / JavaScript
description: The first Atomic Flow implementation and its packages.
---

The first Atomic Flow implementation is being developed in TypeScript, in the [atomic-flow-ts repository](https://github.com/atomic-flow-dev/atomic-flow-ts).

:::caution[Not yet released]
The packages listed below are part of the planned workspace structure. This page deliberately contains **no installation command** or sample API until a real public release exists.
:::

## Packages

| Package | Purpose | Status |
| --- | --- | --- |
| `@atomic-flow/core` | Workflow execution and recovery runtime | Early development |
| `@atomic-flow/failure-lab` | Failure injection and testing tools | Early development |

The repository uses a pnpm monorepo. Its workspace keeps the runtime and its testing companion separate while allowing them to evolve together.

## Before the first alpha

The initial implementation will need well-defined lifecycle states, typed execution results, documented recovery semantics, and failure-oriented tests. Its public API and runtime requirements are not finalized.

Follow the [roadmap](/roadmap/) or inspect the [TypeScript source](https://github.com/atomic-flow-dev/atomic-flow-ts).
