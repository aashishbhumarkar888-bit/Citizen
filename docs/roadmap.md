# CityVoice Implementation Roadmap

This roadmap breaks down the CityVoice production implementation into small, independently verifiable phases. It is dependency-aware and based on the `/docs/audit/current-state.md` reality audit.

---

## Phase 1 — Build & Dependency Stabilization
**Objective**: Resolve the underlying NPM cache/resolution errors blocking all compilation and backend work.
**Dependencies**: None.
**Files Affected**: `package.json`, `package-lock.json`.
**Database Changes**: None.
**API Changes**: None.
**Security Requirements**: Ensure no malicious packages are installed.
**Tests Required**: N/A.
**Acceptance Criteria**: `npm install`, `npx tsc --noEmit`, and `npm run build` succeed without dependency resolution errors.
**Failure Conditions**: `ETARGET` or `ERESOLVE` errors during install.
**Rollback Considerations**: Revert `package.json` to previous commit.

---

## Phase 2 — Database Verification
**Objective**: Connect Prisma to the actual local/remote database (resolving the current disconnected state) and generate the client.
**Dependencies**: Phase 1.
**Files Affected**: `prisma/schema.prisma`, `prisma/seed.ts`, `.env.local`.
**Database Changes**: First migration applied.
**API Changes**: None.
**Security Requirements**: `DATABASE_URL` must not be hardcoded.
**Tests Required**: DB connection script passes.
**Acceptance Criteria**: `npx prisma generate` and `npx prisma migrate dev` succeed; seed data exists in DB.
**Failure Conditions**: Connection timeouts; schema validation errors.
**Rollback Considerations**: Drop database and rerun migrations.

---

## Phase 3 — Authentication Integration
**Objective**: Implement Auth.js and configure providers to eliminate mock logins.
**Dependencies**: Phase 1, Phase 2.
**Files Affected**: `src/lib/auth.ts`, `src/app/api/auth/[...nextauth]/route.ts`, Auth UI components.
**Database Changes**: None (User schema already exists).
**API Changes**: Auth.js REST endpoints created.
**Security Requirements**: Secure cookies; no plaintext secrets; CSRF protection enabled.
**Tests Required**: Login success, login failure, logout, session persistence.
**Acceptance Criteria**: Users can log in; `getServerSession()` returns valid JWT payload.
**Failure Conditions**: Infinite redirects; session nullification.
**Rollback Considerations**: Revert to mock auth for UI testing.

---

## Phase 4 — Authorization (RBAC) Enforcement
**Objective**: Protect API routes and Server Actions using strict server-side RBAC wrappers.
**Dependencies**: Phase 3.
**Files Affected**: `src/lib/auth.ts`, `src/actions/grievances.ts`, Middleware.
**Database Changes**: None.
**API Changes**: Server actions now throw 401/403 for invalid roles.
**Security Requirements**: Prevent IDOR; never trust client payload for roles.
**Tests Required**: Unauthorized access attempts are rejected.
**Acceptance Criteria**: A CITIZEN cannot execute `updateGrievanceStatus`.
**Failure Conditions**: Privilege escalation successful.
**Rollback Considerations**: Revert RBAC wrappers.

---

## Phase 5 — Grievance Domain & State Machine
**Objective**: Lock down the grievance state machine logic (Valid transitions, Zod validation).
**Dependencies**: Phase 2, Phase 4.
**Files Affected**: `src/actions/grievances.ts`, `src/schemas/grievance.ts`.
**Database Changes**: None.
**API Changes**: Server actions fully validate inputs with Zod.
**Security Requirements**: Prevent arbitrary client status injections (e.g., straight to RESOLVED).
**Tests Required**: Invalid transitions rejected; valid transitions succeed.
**Acceptance Criteria**: Grievances can only transition along the defined DAG path (Submitted -> Assigned -> In Progress).
**Failure Conditions**: Client successfully injects invalid status.
**Rollback Considerations**: Revert server actions to permissive mode.

---

## Phase 6 — Audit System 
**Objective**: Ensure every state transition generates an immutable audit log.
**Dependencies**: Phase 5.
**Files Affected**: `src/actions/grievances.ts`.
**Database Changes**: Inserts to `AuditLog` table.
**API Changes**: None.
**Security Requirements**: Audit logs must be append-only.
**Tests Required**: Verify log creation on status update.
**Acceptance Criteria**: `$transaction` ensures Grievance Update + Audit Log creation happen atomically.
**Failure Conditions**: Grievance updates but log fails.
**Rollback Considerations**: Remove audit hook.

---

## Phase 7 — Citizen Integration
**Objective**: Connect the `/dashboard` and `/report` UIs to the secure Server Actions.
**Dependencies**: Phase 5.
**Files Affected**: `src/app/dashboard/page.tsx`, `src/app/report/page.tsx`.
**Database Changes**: None.
**API Changes**: None.
**Security Requirements**: UI must not expose other citizens' data.
**Tests Required**: E2E submission flow.
**Acceptance Criteria**: Citizen sees only their grievances; submission works end-to-end.
**Failure Conditions**: Mock emails still used in submission.
**Rollback Considerations**: Revert UI to mock data.

---

## Phase 8 — Authority Integration
**Objective**: Connect the `/authority/dashboard` UI to the secure Server Actions.
**Dependencies**: Phase 5.
**Files Affected**: `src/app/authority/dashboard/page.tsx`.
**Database Changes**: None.
**API Changes**: None.
**Security Requirements**: Only SUPERVISOR, ADMIN, or OPERATOR can load this view.
**Tests Required**: Authority E2E status update flow.
**Acceptance Criteria**: Dashboard fetches real data; status dropdown triggers secure backend transition.
**Failure Conditions**: Dashboard fails to load or crashes on update.
**Rollback Considerations**: Revert UI to mock data.

---

## Phase 9 — File Storage (Evidence)
**Objective**: Allow citizens to upload photo evidence to AWS S3 / Cloudflare R2.
**Dependencies**: Phase 7.
**Files Affected**: `src/app/api/upload/route.ts`, Report Form UI.
**Database Changes**: Inserts to `Attachment` table.
**API Changes**: Pre-signed URL generation endpoint.
**Security Requirements**: Files are private; no public bucket access; enforce MIME type & size limits.
**Tests Required**: Upload success; invalid file rejection.
**Acceptance Criteria**: Uploaded file URL is securely stored and linked to the Grievance.
**Failure Conditions**: Unauthenticated uploads permitted.
**Rollback Considerations**: Disable upload UI.

---

## Phase 10 — SLA & Escalation
**Objective**: Implement cron job to check SLA breaches and trigger escalations.
**Dependencies**: Phase 8.
**Files Affected**: `src/lib/sla.ts`, `src/app/api/cron/sla/route.ts`.
**Database Changes**: Updates `Grievance` status; Inserts to `Escalation`.
**API Changes**: Secure Cron endpoint.
**Security Requirements**: Cron endpoint must be authenticated (e.g., via Vercel CRON_SECRET).
**Tests Required**: Overdue grievance is escalated; In-time grievance is ignored.
**Acceptance Criteria**: Script accurately identifies breaches and updates status transactionally.
**Failure Conditions**: Idempotency fails (duplicate escalations).
**Rollback Considerations**: Disable Cron trigger.

---

## Phase 11 — Notifications
**Objective**: Wire up the Notification service to SendGrid/Twilio.
**Dependencies**: Phase 6, Phase 10.
**Files Affected**: `src/lib/notifications.ts`.
**Database Changes**: Inserts to `Notification` table.
**API Changes**: None.
**Security Requirements**: API keys stored in env vars.
**Tests Required**: Mock notification fires on status change.
**Acceptance Criteria**: Emails are sent when a grievance status is updated or SLA breaches.
**Failure Conditions**: Main thread blocked by email service failure.
**Rollback Considerations**: Revert to `console.log`.

---

## Phase 12-17 (Testing, Security, Deploy)
These final phases focus on running comprehensive E2E playwright suites, implementing rate limiting (Upstash), resolving P0 CodeRabbit audit findings, and provisioning the final Vercel/Supabase production environments prior to the final sign-off.
