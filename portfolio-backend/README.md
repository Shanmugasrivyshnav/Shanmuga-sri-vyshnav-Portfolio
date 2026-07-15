# Portfolio Backend API

Production backend for [shanmuga-sri-vyshnav-portfolio.vercel.app](https://shanmuga-sri-vyshnav-portfolio.vercel.app/), built to replace hardcoded frontend data with real API + PostgreSQL storage — no changes required to the existing React UI, only to how it fetches data.

## Stack

Node.js · Express · PostgreSQL · Prisma ORM · JWT auth · Zod validation · Resend (email)

## 1. Setup

```bash
npm install
cp .env.example .env
# fill in DATABASE_URL, JWT_SECRET, FRONTEND_URL, RESEND_API_KEY
```

Get a free PostgreSQL instance in ~2 minutes at [neon.tech](https://neon.tech) or [supabase.com](https://supabase.com), copy the connection string into `DATABASE_URL`.

## 2. Database

```bash
npx prisma migrate dev --name init   # creates all tables
npm run seed                         # seeds an admin user + sample data
```

Default seeded admin login: `shanmukhasri00@gmail.com` / `ChangeMe123!` — **change this password immediately** by hashing a new one with bcrypt and updating the `admin_users` row (or add a "change password" endpoint before going live).

## 3. Run

```bash
npm run dev     # local dev, http://localhost:5000
npm start        # production
```

Your frontend's `package.json` already has `"proxy": "http://localhost:5000"`, so in local dev `fetch("/api/projects")` from the React app will just work.

## 4. API Reference

### Public

| Method | Route | Description |
|---|---|---|
| GET | `/api/projects` | List projects. Query: `?tag=react`, `?featured=true` |
| GET | `/api/projects/:id` | Single project |
| GET | `/api/skills` | Skills grouped by category |
| GET | `/api/certifications` | List certifications |
| GET | `/api/education` | Education timeline |
| GET | `/api/blog` | Published blog posts |
| GET | `/api/blog/:slug` | Single published post |
| POST | `/api/contact` | Submit contact form → saves to DB + emails you |
| GET | `/api/health` | Health check |

### Admin (require `Authorization: Bearer <token>`)

| Method | Route | Description |
|---|---|---|
| POST | `/api/admin/login` | Get a JWT |
| POST/PUT/DELETE | `/api/admin/projects[/:id]` | Manage projects |
| POST/PUT/DELETE | `/api/admin/skills[/:id]` | Manage skills |
| POST/PUT/DELETE | `/api/admin/certifications[/:id]` | Manage certifications |
| POST/PUT/DELETE | `/api/admin/education[/:id]` | Manage education |
| GET/POST/PUT/DELETE | `/api/admin/blog[/:id]` | Manage blog posts (draft + published) |
| GET/PATCH/DELETE | `/api/admin/contact-messages[/:id]` | Read/manage contact submissions |

## 5. Connecting the existing frontend

Add one file to your **frontend** repo (no UI changes):

```js
// src/utils/api.js
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getProjects = () => fetch(`${API_BASE}/api/projects`).then(r => r.json());
export const getSkills = () => fetch(`${API_BASE}/api/skills`).then(r => r.json());
export const getCertifications = () => fetch(`${API_BASE}/api/certifications`).then(r => r.json());
export const getEducation = () => fetch(`${API_BASE}/api/education`).then(r => r.json());
export const submitContact = (data) =>
  fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(r => r.json());
```

Then in each component that currently reads a hardcoded array (e.g. `const projects = [...]`), swap it for a `useEffect` + `useState` call to the matching function above. The shape returned by each endpoint matches the Prisma models in `prisma/schema.prisma` — adjust field names in the component if your existing UI expects slightly different keys (e.g. `imageUrl` vs `image`).

In Vercel's dashboard, add an environment variable `REACT_APP_API_URL` pointing to your deployed backend URL, then redeploy.

## 6. Deploy

- **Backend**: Render or Railway (both have a free/hobby tier, auto-deploy from GitHub, and support long-lived Node processes). Set the same env vars from `.env.example` in their dashboard, and run `npx prisma migrate deploy` as a post-deploy/build step.
- **Database**: Neon or Supabase (already set up in step 2).
- **Frontend**: stays on Vercel — no change, just the new `REACT_APP_API_URL` env var.

## 7. Notes on matching your exact frontend field names

I built this against your `package.json` and README (Projects, Skills, Certifications, Education, Contact Form — CRA + react-router-dom + styled-components), but I wasn't able to crawl your `src/` component tree directly. The **contact form** is the one place field-name mismatches are most likely (e.g. `fullName` vs `name`). If your `ContactForm` component's input names differ from `name` / `email` / `subject` / `message`, either:
- rename the fields in `src/validators/contact.validator.js`, or
- send me the component code and I'll align it exactly.

Everything else (projects/skills/certs/education) returns generic, sensibly-named JSON that you map into your existing JSX — no schema surprises, just plug in the field names your components already expect.
