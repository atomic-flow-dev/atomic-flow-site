---
title: Guarantees and limitations
description: How Atomic Flow intends to document guarantees honestly and avoid misleading claims of cross-system atomicity.
---

Atomic Flow is guided by a simple principle: **never claim a stronger guarantee than the implementation can actually provide.**

## Proposed documentation model

For every feature and implementation, the project aims to document:

- **Guarantee:** what behavior is expected and how it is measured.
- **Assumptions:** required properties of storage, external services, and user-supplied operations.
- **Failure modes:** cases where execution or recovery can still fail.
- **Observability:** how the caller can distinguish a successful outcome from an uncertain one.
- **Verification:** the tests or evidence supporting the claim.

## Explicit non-goals

Atomic Flow does not aim to:

- Replace native database transactions.
- Guarantee global ACID transactions over independent services.
- Reverse arbitrary external side effects.
- Automatically repair every partial failure without application involvement.
- Make an unverified recovery outcome look successful.

## Status of guarantees

**No stable Atomic Flow runtime guarantees are published yet.** The current documentation is architectural direction. Supported guarantees will be stated precisely after behavior is implemented and tested.

For the implementation roadmap, see [Development status](/docs/project/status/).
