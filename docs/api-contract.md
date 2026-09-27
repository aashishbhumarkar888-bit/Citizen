# API & Validation Architecture

## API Design
- **Paradigm**: REST-ish JSON APIs via Next.js Route Handlers (`/api/...`) and Next.js Server Actions for form mutations.
- **Data Fetching**: React Server Components (RSC) fetch data directly from Prisma where possible to avoid network overhead.

## Validation Architecture (Zod)
- **Shared Schemas**: Validation schemas are defined in `src/schemas/` and shared between the client (for UX/form errors) and the server (for security).
- **Strict Parsing**: The server uses `schema.parse(data)` to strip unknown fields. Never blindly save client payloads to the database.

## Error Handling Architecture
- **Standardized Responses**: All APIs return a consistent JSON structure: `{ success: boolean, data?: any, error?: string, issues?: ZodIssue[] }`.
- **Masked Internal Errors**: In production, unhandled exceptions return generic "Internal Server Error" messages to the client. Stack traces are logged to the APM (e.g., Sentry) but never leaked.
