# Deployment Architecture

## Overview
CityVoice is designed for a Serverless or Edge deployment model to ensure high availability and scale-to-zero capabilities.

## Infrastructure
- **Hosting Provider**: Vercel (preferred for Next.js App Router) or AWS (via SST/Amplify).
- **Database**: Managed PostgreSQL (e.g., Supabase, Neon, or AWS RDS).
- **Storage**: AWS S3 or Cloudflare R2.
- **CI/CD Pipeline**: GitHub Actions.

## Environment Segregation
1. **Development**: Local environment pointing to a local Docker PostgreSQL instance or a dedicated dev branch database.
2. **Preview/Staging**: Ephemeral environments generated on PR creation. Connects to a staging database.
3. **Production**: Main branch deployments. Connects to the highly-available production cluster.

## Rollout Strategy
- **Zero-Downtime Deployments**: Next.js immutable builds ensure that old instances keep serving traffic until the new build is healthy.
- **Database Migrations**: Prisma migrations (`prisma migrate deploy`) are executed as part of the CI/CD build step before traffic is routed to the new containers.
