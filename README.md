# KVA Backend (Node.js + MySQL)

This is a minimal Express boilerplate for a rider/driver app backend.

## Features
- Express API with health check
- MySQL connection pool (mysql2/promise)- ESLint + Prettier
- Jest + Supertest
- GitHub Actions CI for PRs to `staging`, auto-merging and syncing to `main`

## Getting started
1. `npm install`
2. `.env`
3. `npm run dev`
4. Visit `http://localhost:3000/health`

## Branch strategy
- `dev`: active development
- `staging`: integration branch; PRs from feature branches target `staging`
- `main`: production-ready snapshot; automatically synced from `staging`

## CI overview
When you open a PR **into `staging`**:
- Lint, Prettier check, and tests run.
- If they pass, the PR is auto-merged into `staging`.
- A PR from `staging` → `main` is created/updated and set to auto-merge.