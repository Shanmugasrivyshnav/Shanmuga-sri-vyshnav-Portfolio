# Troubleshooting Guide

## Backend Issues

### 1. Backend Won't Start

**Error**: `Port 5000 already in use`

```bash
# Find process using port 5000
# Mac/Linux:
lsof -i :5000

# Windows:
netstat -ano | findstr :5000

# Kill the process (Mac/Linux)
kill -9 <PID>

# Kill the process (Windows)
taskkill /PID <PID> /F
```

**Error**: `Cannot find module 'dotenv'`

```bash
cd portfolio-backend
npm install
```

**Error**: `DATABASE_URL is not set`

1. Check `.env` file exists in `portfolio-backend/` folder
2. Verify `DATABASE_URL` line is present
3. Restart the backend server

**Error**: `listen EADDRINUSE`

- Same as "Port 5000 already in use" above

### 2. Database Connection Issues

**Error**: `connect ECONNREFUSED 127.0.0.1:5432`

```
PostgreSQL is not running locally
Solution: Start PostgreSQL service or use cloud database (Neon, Supabase)
```

**Error**: `Too many connections`

```
Too many client connections to database
Solution: Reduce connection pool or restart database
```

**Error**: `Invalid connection string`

```
DATABASE_URL format is wrong
Correct format:
postgresql://username:password@host:port/database?schema=public

For cloud databases:
- Neon: Get from dashboard
- Supabase: Get from Project Settings
- Railway: Get from Variables
```

### 3. Migration Issues

**Error**: `Prisma migration failed`

```bash
# Regenerate Prisma client
npm run prisma:generate

# Try migration again
npm run prisma:migrate
```

**Error**: `Schema out of sync with database`

```bash
# Reset database (⚠️ deletes all data)
npx prisma migrate reset

# Re-run migrations
npm run prisma:migrate
```

## Frontend Issues

### 1. Frontend Won't Start

**Error**: `Port 3000 already in use`

```bash
# Find process using port 3000
# Mac/Linux:
lsof -i :3000

# Windows:
netstat -ano | findstr :3000

# Kill the process (Mac/Linux)
kill -9 <PID>

# Kill the process (Windows)
taskkill /PID <PID> /F
```

**Error**: `Cannot find module 'react'`

```bash
npm install
```

**Error**: `REACT_APP_API_URL not set`

1. Create `.env.local` in frontend root (if not exists)
2. Add: `REACT_APP_API_URL=http://localhost:5000/api`
3. Restart frontend

### 2. API Connection Issues

**Error**: CORS error in browser console

```
Access to XMLHttpRequest has been blocked by CORS policy
```

**Solutions**:

1. Check backend `.env` has `FRONTEND_URL=http://localhost:3000`
2. Restart backend server
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try different browser

**Error**: `Cannot POST /api/contact - 404`

```
Backend route doesn't exist
Solution: Ensure backend is running and routes are loaded
```

**Error**: `Network request failed` or `Failed to fetch`

```
Backend is not running or not accessible
Solutions:
1. Check backend is running on http://localhost:5000
2. Test: curl http://localhost:5000/api/health
3. Check firewall settings
4. Verify API_BASE_URL in .env.local
```

### 3. Component Issues

**Error**: Contact form doesn't submit

```
Possible causes:
1. Backend not running
2. API_BASE_URL wrong in .env.local
3. Form validation failing

Solution: Check browser console for error messages
```

**Error**: Projects/Certifications show blank

```
Possible causes:
1. Backend not returning data (expected - database empty)
2. API error
3. Component not rendering

Solution: Should fall back to default data. Check console for errors.
```

**Error**: Page shows loading forever

```
Component is stuck in loading state

Solutions:
1. Open DevTools (F12) → Console tab
2. Check for error messages
3. Verify backend is responding
4. Test health endpoint: curl http://localhost:5000/api/health
```

## Database Issues

### 1. Database Connection Problems

**Test Connection String**:

```bash
# For PostgreSQL
psql "postgresql://username:password@host:port/database"

# If using cloud:
# Neon: psql neon_connection_string
# Supabase: psql supabase_connection_string
```

**Check Connection Details**:

```bash
# Mac/Linux - check environment variable
echo $DATABASE_URL

# Windows - check environment variable
echo %DATABASE_URL%
```

### 2. Migration Issues

**Check Migration Status**:

```bash
npx prisma migrate status
```

**Reset and Retry**:

```bash
# ⚠️ DELETES ALL DATA
npx prisma migrate reset

# Then run migrations
npm run prisma:migrate
```

### 3. Data Issues

**Check Data**:

```bash
npm run prisma:studio
# Opens http://localhost:5555 for managing data
```

**Seed Data**:

```bash
npm run seed
```

## Network Debugging

### Check Backend Response

```bash
# Health check
curl http://localhost:5000/api/health

# Get projects
curl http://localhost:5000/api/projects

# Get certifications
curl http://localhost:5000/api/certifications

# Test contact submission
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

### Check Frontend DevTools

1. Open browser
2. Press F12 (or right-click → Inspect)
3. Go to **Network** tab
4. Perform action (e.g., submit form)
5. Look for API requests
6. Check response and errors

## Performance Issues

### Slow Backend Response

**Solutions**:

1. Check database connection speed
2. Monitor backend logs for slow queries
3. Add database indexes for frequently queried fields
4. Check system resources (CPU, RAM, disk)

### Slow Frontend

**Solutions**:

1. Open DevTools → Performance tab
2. Record page load
3. Look for long-running tasks
4. Reduce component re-renders
5. Lazy load components

## Email Issues

**Contact form submits but no email received**:

1. Get free Resend API key: https://resend.com
2. Add to backend `.env`:
   ```env
   RESEND_API_KEY="re_xxxxxxxxxxxx"
   CONTACT_NOTIFICATION_EMAIL="your-email@gmail.com"
   ```
3. Restart backend
4. Check backend console for email errors

**Error: RESEND_API_KEY is not set**:

```bash
1. Go to https://resend.com
2. Sign up (free)
3. Get API key
4. Add to .env
5. Restart backend
```

## Production Issues

### Backend Deployment Problems

**Issue**: API not accessible from frontend

```
1. Check FRONTEND_URL in production .env
2. Must match your deployed frontend URL
3. Verify CORS headers in response
```

**Issue**: Database connection timeout

```
For cloud databases:
1. Check IP whitelist
2. Verify connection string
3. Check database service is running
```

### Frontend Deployment Problems

**Issue**: Frontend can't reach backend

```
1. Update REACT_APP_API_URL to backend domain
2. Rebuild frontend
3. Verify backend is accessible from production
```

**Issue**: 404 on API calls\*\*

```
Check that your backend URL in REACT_APP_API_URL is correct
Example: https://your-api-domain.com/api
```

## Getting Help

### 1. Check Console Errors

- Frontend: Browser DevTools (F12) → Console tab
- Backend: Terminal where server is running

### 2. Check Network Requests

- Browser DevTools (F12) → Network tab
- Filter by API requests
- Check response status and body

### 3. Check Logs

```bash
# Backend logs show in terminal
# Frontend errors show in browser console

# Database queries (with verbose logging)
# Set DEBUG=* when running dev
DEBUG=* npm run dev
```

### 4. Verify Configuration

- Check `.env` file exists and is readable
- Verify DATABASE_URL format
- Confirm ports (3000, 5000) are correct
- Check CORS origin is correct

### 5. Test Endpoints Individually

```bash
# Test each endpoint separately
curl http://localhost:5000/api/health
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/certifications
```

## Quick Fixes Checklist

- [ ] Backend running on http://localhost:5000?
- [ ] Frontend running on http://localhost:3000?
- [ ] `.env` file exists in backend folder?
- [ ] `DATABASE_URL` in `.env` is valid?
- [ ] `.env.local` exists in frontend root?
- [ ] `REACT_APP_API_URL` in `.env.local`?
- [ ] Cleared browser cache?
- [ ] Restarted both servers?
- [ ] Checked browser console for errors?
- [ ] Checked backend terminal for errors?

---

**Still having issues?** Check:

1. The specific error message above
2. Browser console (DevTools → Console)
3. Backend terminal output
4. `.env` and `.env.local` files
5. Network tab in DevTools
