# Security Architecture

## Core Principles
1. **Server is Authoritative**: Client inputs are inherently untrusted.
2. **No Secrets in Source Code**: All keys (DB, OAuth, S3) are injected via environment variables. `.env.local` is git-ignored.
3. **No In-Memory Production State**: All state is persisted in PostgreSQL or Redis to ensure horizontal scalability and resilience.

## Audit Log Architecture
- **Append-Only Ledger**: The `AuditLog` table records all significant administrative actions (status changes, role assignments, deletions).
- **Metadata**: Each log captures `actorId`, `timestamp`, `ipAddress` (where legal), `actionType`, and before/after state diffs in a JSON column.
- **Immutability**: Audit logs cannot be updated or deleted via the application UI.

## Data Privacy
- **PII Protection**: Citizen phone numbers and exact addresses are encrypted at rest or strictly gated behind RBAC.
- **CSRF & XSS**: Next.js App Router and React mitigate XSS by default. Auth.js handles CSRF protection for session management.
