# CityVoice Definition of Done (DoD)

This document defines the strict, measurable criteria that must be met before any individual task, feature, or phase can be considered complete in the CityVoice platform.

## 1. Code Quality & Standards
- [ ] **Compilation**: `npx tsc --noEmit` passes with 0 errors.
- [ ] **Linting**: `npm run lint` passes with 0 errors or warnings.
- [ ] **Build**: `npm run build` succeeds without strict type or resolution errors.
- [ ] **No Mocks**: No mock data arrays, simulated delays, or hardcoded emails remain in the affected module.

## 2. Security & RBAC
- [ ] **Server-Side Validation**: All client inputs are validated via Zod schemas on the server.
- [ ] **Auth Enforcement**: The route/server action explicitly calls `requireAuth()` or `getServerSession()`.
- [ ] **Role Enforcement**: The route/server action explicitly calls `requireRole()` where authority privileges are required.
- [ ] **Resource Ownership**: Endpoints affecting citizen data explicitly verify that the session user ID matches the target resource ID (Prevent IDOR).
- [ ] **No Client Trust**: Role flags and state values from the client request payload are strictly ignored for authorization purposes.

## 3. Database & State Integrity
- [ ] **Migrations**: All Prisma schema changes have been successfully migrated (`prisma migrate dev`).
- [ ] **Transactions**: Multi-step database operations (e.g., updating a status and creating an audit log) are wrapped in `$transaction`.
- [ ] **Audit Logging**: Any administrative action or status transition generates an immutable `AuditLog` record.

## 4. Testing Requirements
- [ ] **Unit Tests**: Business logic functions and Zod schemas have passing unit tests.
- [ ] **Integration Tests**: Server Actions / API routes have tests verifying behavior against a test database.
- [ ] **Security Tests**: Explicit tests exist verifying that unauthorized roles (e.g., CITIZEN trying to access OPERATOR actions) are rejected.
- [ ] **Edge Cases**: Failure paths (e.g., invalid data, missing user) are explicitly tested.

## 5. Peer Review & Architecture
- [ ] **Architecture Alignment**: The implementation adheres strictly to the defined `/docs/architecture.md` and `/docs/security.md`.
- [ ] **CodeRabbit Audit**: (When enabled) AI code review returns no P0 or P1 security/architectural defects.
- [ ] **Documentation**: Any new API parameters, error codes, or environment variables are documented.

*A phase is only complete when 100% of the above criteria that apply to its scope are satisfied.*
