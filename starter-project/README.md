# MERN Item Manager – Starter Project

A simple full-stack Item Manager app built with MongoDB, Express, React, and Node.js.

---

## Project Structure

```
starter-project/
├── backend/        ← Express + MongoDB API
└── frontend/       ← React app
```

---

## Getting Started Locally

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your MongoDB Atlas connection string
npm start
```

Backend runs on: `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
# .env already points to localhost:5000 by default
npm start
```

Frontend runs on: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/items | Get all items |
| GET | /api/items/:id | Get single item |
| POST | /api/items | Create item |
| PUT | /api/items/:id | Update item |
| DELETE | /api/items/:id | Delete item |

---

## Live Deployment

- **Frontend:** _Add your Vercel/Netlify URL here_
- **Backend:** _Add your Render/Railway URL here_

---

## Tasks Completed

- [x] Project runs locally
- [ ] `category` field added to schema, controller, form, and display
- [ ] Code pushed to GitHub
- [ ] Backend deployed on Render
- [ ] Frontend deployed on Vercel/Netlify
