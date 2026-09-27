# Authentication Architecture

## Provider Strategy
CityVoice uses a production-grade authentication solution (e.g., Auth.js / NextAuth.js or Clerk) rather than a bespoke cryptographic implementation.
- **Citizens**: OAuth (Google, Apple) or Magic Links / OTP to reduce friction.
- **Internal Staff (Operators, Officers, etc.)**: Enterprise SSO (SAML/OIDC) linked to the municipal directory.

## Principles
- **Stateless Sessions**: JWT-based session tokens stored in secure, HTTP-only cookies.
- **No Manual Cryptography**: Never store plaintext passwords or roll custom password hashing.
- **Trust Boundary**: The server is authoritative. JWT claims are signed and verified server-side.
