# Keycloak Integration Documentation

Complete guide for integrating Keycloak as the identity and access management platform for our company product.

## Architecture Overview

Our product consists of:

| Component | Stack | Role |
| --- | --- | --- |
| **Backend Gateway** | Node.js | Single entry point, validates JWT, proxies to services |
| **SysAdmin Frontend** | Next.js | Internal staff — manages organizations/tenants |
| **Admin Frontend** | Next.js | Org owner — manages their organization and users |
| **App Frontend** | Next.js | End users of the organization |
| **Account App** | Next.js | Shared login/registration UI, profile & credentials |
| **Keycloak** | — | Central IAM: authn, authz, org model, email/SMS verify |

All browser-facing apps delegate login to the **Account App**, which in turn uses Keycloak as the OIDC provider. The Gateway verifies access tokens on every request.

## Table of Contents

### 1. Getting Started

- [Introduction & Concepts](content/docs/index.mdx) — what Keycloak gives us, realms/clients/roles, token flow
- [Architecture & Flow](content/docs/architecture.mdx) — how the gateway, frontends, and account app interact with Keycloak

### 2. Setup (Manual)

- [Run Keycloak Locally](content/docs/setup/local.mdx) — docker-compose, first boot, admin console
- [Realm & Clients](content/docs/setup/realm-and-clients.mdx) — create the realm, 4 clients (gateway, sysadmin, admin, app, account)
- [Roles & Groups](content/docs/setup/roles-and-groups.mdx) — realm roles, client roles, composite roles
- [Organizations](content/docs/setup/organizations.mdx) — enable the Organizations feature, first org, invites
- [Email & SMS](content/docs/setup/email-and-sms.mdx) — SMTP config, SMS authenticator SPI
- [Themes & Branding](content/docs/setup/themes.mdx) — custom login theme used by the account app (optional)

### 3. APIs (curl examples + sample JSON responses)

- [Authentication](content/docs/apis/authentication.mdx) — `/token`, refresh, logout, introspect, userinfo
- [User Management](content/docs/apis/user-management.mdx) — profile read/update, password change, email/username update
- [Email & SMS Verification](content/docs/apis/verification.mdx) — trigger verify email, SMS OTP flow
- [Organizations](content/docs/apis/organizations.mdx) — create, list, members, invites
- [Admin APIs](content/docs/apis/admin.mdx) — users, roles, role mappings, sessions

### 4. Integration

- [Backend Gateway (Node.js)](content/docs/integration/gateway-nodejs.mdx) — JWT verification, JWKS caching, role checks, service-to-service
- [Next.js Frontends (sysadmin / admin / app)](content/docs/integration/nextjs-apps.mdx) — auth.js config, silent refresh, RBAC
- [Account App](content/docs/integration/account-app.mdx) — custom login/register/account UI on top of Keycloak

## Conventions Used

- Base URL placeholder: `https://iam.example.com` — replace with your Keycloak host
- Realm placeholder: `product` — replace with your realm name
- All curl examples assume `jq` is installed for pretty-printing
- Tokens in samples are truncated (`eyJhbGciOi...`) for readability
- Sample JSON responses are **representative**, not literal — IDs and timestamps are fabricated
