# Portfolio App - Backend & Frontend Integration Guide

## Overview

This guide explains how to properly set up and run your portfolio application with both the backend API and React frontend working together seamlessly.

## Project Structure

```
shannu-portfolio-app/
├── portfolio-backend/        # Express.js backend API
│   ├── src/
│   │   ├── app.js           # Express app setup
│   │   ├── routes/          # API routes
│   │   ├── controllers/      # Route handlers
│   │   ├── middleware/       # Custom middleware
│   │   ├── validators/       # Input validation
│   │   ├── utils/            # Utility functions
│   │   └── config/           # Configuration files
│   ├── prisma/              # Database schema
│   ├── .env                 # Environment variables
│   ├── server.js            # Server entry point
│   └── package.json
├── src/                      # React frontend
│   ├── Components/          # React components
│   ├── services/            # API service layer
│   └── ...
├── .env.local               # Frontend env variables
└── package.json
```

## Prerequisites

- Node.js (v18+)
- npm or yarn
- PostgreSQL database (local or cloud: Neon, Supabase, Railway)
- Git

## Backend Setup

### 1. Database Configuration

Create or obtain a PostgreSQL database connection string. You can use:

- **Local PostgreSQL**: `postgresql://user:password@localhost:5432/portfolio_db?schema=public`
- **Neon** (Free): https://neon.tech
- **Supabase** (Free): https://supabase.com
- **Railway** (Free tier): https://railway.app

### 2. Install Backend Dependencies

```bash
cd portfolio-backend
npm install
```

### 3. Configure Environment Variables

Edit the `.env` file in the `portfolio-backend` folder:

```env
# Database connection
DATABASE_URL="postgresql://user:password@host:5432/portfolio_db?schema=public"

# Server settings
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL="http://localhost:3000"

# Authentication
JWT_SECRET="your-secret-key-change-in-production"
JWT_EXPIRES_IN="7d"

# Email notifications (Resend - https://resend.com)
RESEND_API_KEY="re_xxxxxxxxxxxx"
CONTACT_NOTIFICATION_EMAIL="your-email@gmail.com"
```

### 4. Set Up Database Schema

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Optional: Seed database with sample data
npm run seed
```

### 5. Start Backend Server

```bash
# Development (with hot reload)
npm run dev

# Production
npm start
```

The backend should now run at: **http://localhost:5000**

## Frontend Setup

### 1. Install Frontend Dependencies

```bash
cd ..
npm install
```

### 2. Configure Environment Variables

A `.env.local` file has been created with the correct backend API URL:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

**For production**, update this to your deployed backend URL:

```env
REACT_APP_API_URL=https://your-backend-domain.com/api
```

### 3. Start Frontend Development Server

```bash
npm start
```

The frontend will run at: **http://localhost:3000**

## API Endpoints

### Public Endpoints

- `GET /api/health` - Health check
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project
- `GET /api/skills` - List all skills
- `GET /api/certifications` - List all certifications
- `GET /api/education` - List all education
- `GET /api/blog` - List all blog posts
- `POST /api/contact` - Submit contact form

### Admin Endpoints (Protected)

- `GET /api/admin/contact-messages` - List contact messages
- `PATCH /api/admin/contact-messages/:id/read` - Mark as read
- `DELETE /api/admin/contact-messages/:id` - Delete message

## Frontend API Integration

The frontend uses a centralized API service (`src/services/api.js`) for all backend calls:

### Example Usage

**Contact Form:**

```javascript
import { submitContactForm } from "../../services/api.js";

await submitContactForm({
  name: "John Doe",
  email: "john@example.com",
  subject: "Hello",
  message: "Your message here",
});
```

**Fetch Projects:**

```javascript
import { getProjects } from "../../services/api.js";

const projects = await getProjects();
```

**Fetch Certifications:**

```javascript
import { getCertifications } from "../../services/api.js";

const certs = await getCertifications();
```

## Troubleshooting

### Backend Won't Start

1. Check if port 5000 is already in use: `lsof -i :5000` (Mac/Linux) or `netstat -ano | findstr :5000` (Windows)
2. Verify DATABASE_URL is correct
3. Check if migrations have run: `npm run prisma:migrate`

### Frontend Can't Connect to Backend

1. Ensure backend is running on `http://localhost:5000`
2. Check `.env.local` has correct `REACT_APP_API_URL`
3. Open browser DevTools → Network tab → Check API calls
4. Look for CORS errors - verify `FRONTEND_URL` in backend `.env`

### CORS Errors

If you see CORS errors in the browser console:

1. Check backend `.env` file has correct `FRONTEND_URL`
2. Restart backend server after changing `.env`
3. For production, use your deployed frontend URL

### Database Connection Issues

1. Verify PostgreSQL is running
2. Check connection string format
3. For cloud databases, ensure IP whitelist allows your connection
4. Test connection: `psql [CONNECTION_STRING]`

## Running Both Together

### Terminal 1 - Backend

```bash
cd portfolio-backend
npm run dev
```

### Terminal 2 - Frontend

```bash
npm start
```

Now your application runs with:

- **Backend API**: http://localhost:5000/api
- **Frontend**: http://localhost:3000
- **Automatic proxy**: Frontend requests to `/api/*` go to backend

## Production Deployment

### Backend (Railway/Heroku/Vercel)

1. Push code to GitHub
2. Connect repository to deployment platform
3. Set environment variables from your `.env`
4. Deploy

### Frontend (Vercel/Netlify)

1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Set `REACT_APP_API_URL` to your backend URL
4. Deploy

## Key Features Configured

✅ **CORS** - Cross-origin requests enabled  
✅ **Security** - Helmet middleware for security headers  
✅ **Validation** - Input validation with Zod  
✅ **Rate Limiting** - Contact form rate limiter  
✅ **Error Handling** - Centralized error handling  
✅ **Logging** - Morgan HTTP logger  
✅ **Database** - Prisma ORM with migrations  
✅ **Authentication** - JWT ready (for future auth features)  
✅ **Email** - Resend integration for notifications

## Next Steps

1. Add database data through Prisma Studio: `npm run prisma:studio`
2. Customize API endpoints based on your needs
3. Add admin authentication for protected routes
4. Deploy to production
5. Set up environment variables for production

## Support

For issues or questions:

1. Check the troubleshooting section
2. Review backend logs in terminal
3. Check browser console for frontend errors
4. Verify all environment variables are set correctly
