# Architectural Decisions Log

This document records the major architectural decisions for CityVoice.

## ADR-001: Next.js App Router for Full-Stack
**Context**: We need a framework that can handle both the rich interactive frontend (Dashboards) and the backend API logic without maintaining two separate repositories.
**Decision**: Use Next.js App Router.
**Consequences**: Unifies the stack (TypeScript everywhere), simplifies deployment, but couples the frontend and backend tightly.

## ADR-002: PostgreSQL and Prisma
**Context**: Grievance management requires strong relational data (Grievance -> Department -> Officer) and ACID compliance.
**Decision**: Use PostgreSQL managed via Prisma ORM.
**Consequences**: Ensures data integrity, prevents orphaned records. Prisma provides type safety from DB to client.

## ADR-003: Delegated Authentication
**Context**: Building custom auth is risky and distracts from core business logic.
**Decision**: Use a managed provider (Auth.js / Clerk).
**Consequences**: We don't store passwords, reducing security liability. We must rely on an external service for identity.

## ADR-004: Strict State Machine Enforcement
**Context**: Grievance statuses cannot change arbitrarily (e.g., skipping straight from Submitted to Resolved).
**Decision**: Implement a strict state machine at the API layer.
**Consequences**: Prevents data corruption and malicious actor interference. Increases API complexity slightly.
