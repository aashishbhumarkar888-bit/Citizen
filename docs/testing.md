# Testing Architecture

## Overview
Quality assurance is maintained through a layered testing strategy.

1. **Unit Testing (Vitest/Jest)**
   - Tests pure functions, utility methods, and Zod schemas.
   - Tests isolated React components.

2. **Integration Testing**
   - Tests Next.js Server Actions and API route handlers.
   - Uses an ephemeral, isolated test database (via Docker or Prisma environment switching) to ensure database interactions work.

3. **End-to-End (E2E) Testing (Playwright/Cypress)**
   - Simulates the core user workflow: Citizen Submission -> Operator Validation -> Officer Resolution -> Citizen Verification.
   - Runs against a fully seeded staging environment.

## CI/CD Enforcement
- Tests must pass in the GitHub Actions pipeline before a Pull Request can be merged.
- Coverage thresholds are enforced for critical paths (e.g., State Machine, RBAC middleware).
