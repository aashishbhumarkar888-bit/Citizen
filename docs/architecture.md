# System Architecture

## Overview
CityVoice is a citizen grievance management platform utilizing a modern serverless-first architecture. It leverages Next.js App Router for both frontend and backend API layers to reduce infrastructure complexity.

## 1. System Architecture
- **Frontend**: Next.js App Router (React, TypeScript, Tailwind CSS)
- **Backend API**: Next.js Server Actions and Route Handlers (`/api/`)
- **Database**: PostgreSQL (Relational persistence)
- **ORM**: Prisma (Type-safe database access)
- **Authentication**: Auth.js (formerly NextAuth.js) / Clerk
- **Storage**: Amazon S3 or compatible object storage for evidentiary files
- **Validation**: Zod (Schema validation shared between client and server)

## 2. Folder Architecture
```
/
├── src/
│   ├── app/                # Next.js App Router (Pages, Layouts, API Routes)
│   │   ├── (auth)/         # Authentication routes
│   │   ├── api/            # Route handlers
│   │   ├── dashboard/      # Citizen dashboard
│   │   └── authority/      # Authority command center
│   ├── components/         # Shared React components (UI, Forms, Layout)
│   ├── lib/                # Utility functions (prisma, s3, etc.)
│   ├── types/              # Global TypeScript interfaces
│   ├── schemas/            # Zod validation schemas
│   └── actions/            # Next.js Server Actions
├── prisma/                 # Prisma schema and migrations
├── public/                 # Static assets
└── docs/                   # Engineering documentation
```

## 3. Notification Architecture
- **Channels**: Email (SendGrid/Resend), SMS (Twilio), In-App.
- **Trigger**: State transitions (e.g., Assigned, Resolved, Rejected).
- **Asynchronous Processing**: Webhooks or background queue (e.g., Upstash/QStash) to prevent blocking HTTP requests.

## 4. File/Evidence Architecture
- **Upload Flow**: Client requests a pre-signed S3 URL via API. Client uploads file directly to S3. Server saves S3 URL to PostgreSQL.
- **Security**: Files are private by default. Access requires signed URLs generated on-the-fly by the server based on RBAC authorization.

## 5. AI Architecture
- **Categorization**: AI models (e.g., OpenAI/Gemini via API) analyze grievance descriptions to suggest categories and severity.
- **Principle**: AI recommendations must remain distinguishable from authoritative system decisions. A human Operator always confirms AI suggestions.
