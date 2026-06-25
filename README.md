# DeutschFlow

A German language learning platform with AI conversation, grammar lessons, vocabulary training, and speaking practice.

## Tech Stack

**Frontend**
- React 19 + Vite 8
- React Router v7
- react-hot-toast
- Lucide React icons
- Pure CSS with design tokens (no Tailwind)

**Backend**
- Node.js + Express
- Prisma ORM + PostgreSQL
- JWT authentication
- Resend (transactional email)
- OpenAI API (AI Tutor / Talk with Mia)
- express-rate-limit

## Local Setup

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or hosted)
- Resend account + API key
- OpenAI API key

### 1. Clone the repo

```bash
git clone <repo-url>
cd mydeutsch
```

### 2. Frontend

```bash
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies `/api` to `http://localhost:5000` in dev mode.

### 3. Backend

```bash
cd backend
npm install
cp .env.example .env   # fill in values (see below)
npx prisma migrate dev
node server.js
```

The backend runs on `http://localhost:5000`.

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `PORT` | Server port (default `5000`) |
| `FRONTEND_URL` | Frontend origin for CORS (e.g. `http://localhost:5173`) |
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret used to sign JWT tokens — use a long random string |
| `OPENAI_API_KEY` | OpenAI API key for AI Tutor and Talk with Mia |
| `RESEND_API_KEY` | Resend API key for OTP / password reset emails |

### Frontend

No `.env` file required in development — the Vite proxy handles API routing. In production, the frontend calls `/api` routes which must resolve to the deployed backend URL (configure via your hosting platform's rewrite rules or set `VITE_API_URL` if you add a custom axios base URL).

## Available Scripts

```bash
# Frontend
npm run dev        # start dev server
npm run build      # production build → dist/
npm run preview    # preview production build locally

# Backend
node server.js     # start server
npx prisma studio  # browse database
```

## API Health Check

```
GET /api/health
→ { "status": "ok", "timestamp": "..." }
```

## Deployment

### Backend → Render

1. Create a new **Web Service** on [render.com](https://render.com).
2. Connect your GitHub repo.
3. Set **Root Directory** to `backend`.
4. **Build command:** `npm install && npx prisma generate && npx prisma migrate deploy`
5. **Start command:** `node server.js`
6. Add all environment variables from the table above under **Environment**.
7. Add a **PostgreSQL** database on Render and copy the internal `DATABASE_URL` into your service env vars.
8. Set `FRONTEND_URL` to your Vercel deployment URL (e.g. `https://deutschflow.vercel.app`).

### Frontend → Vercel

1. Import the repo on [vercel.com](https://vercel.com).
2. Set **Root Directory** to `/` (the repo root).
3. **Build command:** `npm run build`
4. **Output directory:** `dist`
5. Add a rewrite rule so client-side routing works:
   - In `vercel.json` (create at repo root if it doesn't exist):
     ```json
     {
       "rewrites": [{ "source": "/((?!api/).*)", "destination": "/index.html" }]
     }
     ```
6. If you need the frontend to reach the backend by an explicit URL (instead of a same-origin proxy), add `VITE_API_URL=https://your-render-service.onrender.com` to Vercel environment variables and update `src/utils/api.js` accordingly.

## Project Structure

```
.
├── src/                    # React frontend
│   ├── components/         # Shared components (Layout, ProtectedRoute, ErrorBoundary)
│   ├── context/            # AuthContext
│   ├── data/               # Static data (vocabulary, scenarios, sentences)
│   ├── pages/              # Route-level page components
│   ├── styles/             # CSS files with design tokens
│   └── utils/              # axios instance, speechRecognition helper
├── backend/
│   ├── prisma/             # Prisma schema + migrations
│   ├── routes/             # Express routers (auth, ai, grammar, vocabulary, …)
│   ├── utils/              # sendEmail, auth middleware
│   └── server.js           # App entry point
├── vite.config.js
└── package.json
```
