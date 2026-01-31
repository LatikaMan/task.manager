# Backend (NestJS) — minimal scaffold

This folder contains a minimal NestJS-like scaffold with an in-memory tasks API. It's intended as a lightweight starting point; for a production-ready backend use the Nest CLI to scaffold and add proper validation, DTOs, and a database.

Run (cmd.exe):

```
cd "C:\Users\LATIKA MANDAL\Task manager app\backend"
npm install
npm run start:dev
```

The dev server runs on http://localhost:3001 and exposes a simple REST API at `/tasks`.

Endpoints:
- GET /tasks — list tasks
- GET /tasks/:id — get a task
- POST /tasks — create task { title, description }
- PUT /tasks/:id — update task { title, description }
- DELETE /tasks/:id — delete

Notes:
- This scaffold includes minimal dependencies in package.json. Install them with `npm install` before running.
- If you'd prefer a full Nest project (with CLI, modules, providers, validation pipes), I can scaffold that instead.
