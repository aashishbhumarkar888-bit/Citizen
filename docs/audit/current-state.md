# CityVoice Reality Audit - Current State

## 1. Executive Summary
This audit evaluates the reality of the CityVoice codebase against production requirements. While significant architectural foundations have been written (Prisma schemas, Zod schemas, SLA abstractions, and Server Actions), the application is severely limited by local environment package resolution failures preventing dependency installation. Because dependencies like `prisma`, `zod`, and `next-auth` cannot be installed, the backend logic is essentially disconnected, uncompiled, and untested. 

**PRODUCTION READINESS: NOT VERIFIED**

## 2. Current Architecture
- **Frontend**: Next.js 14 App Router (UI built with Tailwind CSS v3).
- **Backend**: Next.js Server Actions connecting to a Prisma ORM layer (currently set to SQLite for local dev).
- **Validation Boundaries**: Zod schemas defined in `src/schemas/grievance.ts`.
- **RBAC & Auth**: NextAuth scaffolding and utility wrappers in `src/lib/auth.ts`.
- **SLA & Notifications**: Abstractions located in `src/lib/sla.ts` and `src/lib/notifications.ts`.

## 3. What Actually Works
- **UI Components**: The Tailwind UI for `/login`, `/register`, `/report`, `/dashboard`, and `/authority/dashboard` are visually complete and responsive.
- **Server Action Mapping**: The frontend dashboards are correctly wired up to call the `src/actions/grievances.ts` server actions.
- **Prisma Schema**: The schema correctly models the entities and relationships required for the grievance lifecycle.

## 4. What is Only Architecture/Code (Not Functional)
- **Database Connection**: `npx prisma generate` failed due to NPM environment issues. The Prisma client does not exist, so all database queries in the Server Actions will crash at runtime.
- **Auth.js / NextAuth**: The `src/lib/auth.ts` file exists, but `next-auth` is not installed, and the actual API route (`/api/auth/[...nextauth]/route.ts`) has not been implemented.
- **SLA Engine**: `src/lib/sla.ts` exists but is not hooked into a cron job. It is dead code.
- **Notification Engine**: `src/lib/notifications.ts` exists but only `console.log`s messages.

## 5. Remaining Mocks
- **Citizen Session**: In `src/app/report/page.tsx`, the server action is called with a hardcoded `citizenEmail: "citizen@example.com"`.
- **Authority Session**: `src/app/authority/dashboard/page.tsx` does not enforce RBAC via session checking; it simply fetches all grievances.

## 6. Broken Functionality
- **Build / Compilation**: The project will fail to build because modules like `@prisma/client`, `zod`, and `next-auth` are missing from `node_modules`.

## 7. Security Vulnerabilities
- **[P0] No Session Enforcement**: The server actions currently trust the email passed from the frontend client instead of extracting the identity from a secure server-side JWT session.
- **[P0] Missing API RBAC**: `getAllGrievances` and `updateGrievanceStatus` do not verify if the caller is an authorized `OPERATOR` or `DEPARTMENT_OFFICER`.

## 8. Authentication Findings
- **[P0] Missing Auth Provider**: No identity provider is configured in `auth.ts`, meaning logins and registrations will fail or are entirely mocked.

## 9. Authorization Findings
- **[P0] Server Actions bypass RBAC**: The utility functions `requireAuth()` and `requireRole()` exist in `auth.ts` but are not actually invoked inside `src/actions/grievances.ts`.

## 10. Database Findings
- **[P0] Client Not Generated**: Cannot perform DB queries.
- **[P2] SQLite limitations**: Currently using SQLite to bypass Docker/PostgreSQL setup overhead locally, which lacks some concurrency capabilities of Postgres.

## 11. API Findings
- **Server Actions**: Used in place of REST endpoints for mutations. They lack authentication validation middleware.

## 12. SLA Findings
- **[P1] Unscheduled Execution**: The `SLAService.checkAndEscalateBreaches()` function is completely unreferenced. Needs a chron job (e.g., GitHub Actions, Vercel Cron) to actually execute.

## 13. Notification Findings
- **[P3] Missing Provider Integration**: Currently a mocked implementation. Needs Twilio/SendGrid integration for production.

## 14. Testing Gaps
- **[P1] No Tests Written**: There are no unit, integration, or E2E tests in the repository yet.

## 15. Build/Dependency Problems
- **[P0] NPM Resolution Error**: `npm install` crashes with `npm error notarget No matching version found for prettier@^3.9.6.`. This is blocking all backend compilation and dependency resolution.

## 16. Production Blockers
1. Resolve NPM cache/registry error to install `prisma`, `zod`, `next-auth`.
2. Generate Prisma Client.
3. Wire Auth.js API Route and enforce sessions in Server Actions.
4. Hook SLA cron job.
5. Fix mock email injection in Grievance creation.

---
**PRODUCTION READINESS: NOT VERIFIED**
