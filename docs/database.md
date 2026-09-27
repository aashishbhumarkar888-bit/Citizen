# Database Architecture

## Overview
CityVoice uses PostgreSQL, accessed via Prisma ORM (`prisma` and `@prisma/client` v5.14.0), to ensure strong relational integrity and type safety.

## Configuration & Deployment State

### Verified locally
- npm installation
- Prisma version (5.22.0 via CLI, 5.14.0 client)
- dependency compatibility
- schema inspection (Prisma validate)
- generation result (Prisma generate)
- lint, TypeScript, build

### Requires external environment
- PostgreSQL connectivity
- migration status
- migration deployment
- **DATABASE_URL**: Required for actual database access. A placeholder is used locally merely to allow Prisma Client generation.

## Core Entities

1. **User**
   - `id`, `email`, `name`, `role`, `createdAt`, `updatedAt`
   - Relations: Auth records, Submitted Grievances, Assigned Grievances, Audit Logs.

2. **Grievance**
   - `id`, `title`, `description`, `categoryId`, `departmentId`, `status`, `location`, `citizenId`, `assignedOfficerId`, `createdAt`, `updatedAt`, `resolvedAt`
   - Relations: Category, Department, Evidence, Audit Logs, Comments.

3. **Category & Department**
   - Lookup tables defining taxonomy and organizational structure.

4. **Evidence (File)**
   - `id`, `grievanceId`, `uploaderId`, `s3Key`, `mimeType`, `createdAt`
   - Represents photos/documents attached to a grievance.

5. **AuditLog**
   - `id`, `action`, `entityType`, `entityId`, `actorId`, `metadata` (JSON), `createdAt`
   - Immutable ledger of all system actions.

## SLA & Escalation Architecture
- **SLA Tracking**: Each Category/Department has a defined SLA duration (e.g., 48 hours). 
- **Escalation Mechanism**: Background cron jobs query grievances where `(createdAt + SLA) < NOW()` and `status != RESOLVED`. These are flagged and reassigned to Supervisors automatically.
