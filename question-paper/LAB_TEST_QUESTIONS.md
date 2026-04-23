# WMT Lab Test – MERN Item Manager
**Duration:** 2 Hours  
**Module:** Web and Mobile Technologies (SE2020)  
**Read all instructions carefully before starting.**

---

## Instructions

- You are provided with a **starter MERN Item Manager** project (see `/starter-project/`)
- The project has separate `frontend/` and `backend/` folders
- Complete ALL tasks below within the 2-hour window
- **Submit:** Public GitHub repository URL + deployed frontend URL

---

## Task 1 – Run the Starter Project Locally (10 marks)

1. Clone / copy the starter project to your machine
2. Set up the backend:
   - Navigate to `backend/`
   - Run `npm install`
   - Create a `.env` file with your own `MONGO_URI` from MongoDB Atlas and `PORT=5000`
   - Start the backend: `npm start`
3. Set up the frontend:
   - Navigate to `frontend/`
   - Run `npm install`
   - Start the frontend: `npm start`
4. Verify the app runs locally and items can be **created, viewed, and deleted**

**Evidence:** Working app on `localhost` (examiner will verify during deployment)

---

## Task 2 – Add a New Field: `category` (30 marks)

Extend the Item Manager by adding a `category` field to every item.

### 2.1 – Backend: Update Mongoose Schema (10 marks)

Open `backend/models/Item.js` and add the `category` field:

```js
category: {
  type: String,
  required: true,
  enum: ["Electronics", "Clothing", "Food", "Furniture", "Other"]
}
```

### 2.2 – Backend: Update Controller (5 marks)

Ensure `category` is accepted in the `createItem` and `updateItem` controller functions in `backend/controllers/itemController.js`.

### 2.3 – Frontend: Update the Add Item Form (10 marks)

In `frontend/src/components/ItemForm.jsx`:
- Add a `<select>` dropdown for `category` with the same options as the schema enum
- Make sure `category` is included in the POST request body

### 2.4 – Frontend: Display Category (5 marks)

In `frontend/src/components/ItemCard.jsx`:
- Show the `category` value alongside the other item details

---

## Task 3 – Push to GitHub (20 marks)

1. Create a **new public repository** on GitHub named `mern-item-manager`
2. Push the completed project (both `frontend/` and `backend/` folders)
3. Make sure `.env` is listed in `.gitignore` — **never push your MongoDB URI**
4. Your `README.md` should include:
   - Brief project description
   - How to run locally (setup steps)
   - Live deployment URLs (add after Task 4)

---

## Task 4 – Deploy Backend to Render (20 marks)

1. Go to [https://render.com](https://render.com) and create a new **Web Service**
2. Connect your GitHub repository
3. Set the root directory to `backend`
4. Set the start command to: `node server.js`
5. Add the following environment variables in Render:
   - `MONGO_URI` = your MongoDB Atlas connection string
   - `PORT` = 5000
6. Wait for the deployment to complete and copy the live backend URL

**Expected result:** `https://your-app.onrender.com/api/items` returns a JSON array

---

## Task 5 – Deploy Frontend to Vercel/Netlify (20 marks)

1. Go to [https://vercel.com](https://vercel.com) or [https://netlify.com](https://netlify.com)
2. Import your GitHub repository
3. Set the root directory to `frontend`
4. Add an environment variable:
   - `REACT_APP_API_URL` = your Render backend URL (e.g. `https://your-app.onrender.com`)
5. Deploy and verify the live site works end-to-end

**Expected result:** You can add, view, and delete items on the live deployed site

---

## Task 6 – CORS Configuration (Bonus – 10 marks)

In `backend/server.js`, configure CORS so that **only your deployed frontend URL** is allowed:

```js
const cors = require("cors");

app.use(cors({
  origin: "https://your-frontend.vercel.app"
}));
```

Replace the origin with your actual deployed frontend URL.

---

## Submission Checklist

| # | Item | Done |
|---|------|------|
| 1 | Project runs locally with `category` field working | ☐ |
| 2 | Mongoose schema updated with `category` | ☐ |
| 3 | Frontend form has category dropdown | ☐ |
| 4 | Frontend displays category on item cards | ☐ |
| 5 | Code pushed to public GitHub repo | ☐ |
| 6 | `.env` is in `.gitignore` | ☐ |
| 7 | Backend deployed on Render and accessible | ☐ |
| 8 | Frontend deployed on Vercel/Netlify and accessible | ☐ |
| 9 | Live site works end-to-end | ☐ |
| 10 | README updated with live URLs | ☐ |

---

## Marks Breakdown

| Task | Marks |
|------|-------|
| Task 1 – Run Locally | 10 |
| Task 2 – Add `category` Field | 30 |
| Task 3 – GitHub | 20 |
| Task 4 – Deploy Backend | 20 |
| Task 5 – Deploy Frontend | 20 |
| Task 6 – CORS (Bonus) | +10 |
| **Total** | **100 (+10)** |

---

*Good luck! Manage your time — deployment can take 5–10 minutes on free tiers.*
