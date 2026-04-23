# How to Push Backend and Frontend to GitHub

## Prerequisites
- GitHub account
- Git installed on your machine
- Two separate GitHub repositories created (one for backend, one for frontend)

## Step-by-Step Instructions

### Step 1: Create Repositories on GitHub
1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top-right → **New repository**
3. Create first repository:
   - Name: `mern-backend` (or your preferred name)
   - Description: Item Manager Backend (optional)
   - Initialize as empty (no README, .gitignore, or license)
   - Click "Create repository"
4. Create second repository:
   - Name: `mern-frontend` (or your preferred name)
   - Description: Item Manager Frontend (optional)
   - Initialize as empty (no README, .gitignore, or license)
   - Click "Create repository"

### Step 2: Push Backend to GitHub
Open PowerShell and run:

```powershell
cd "c:\Users\ASUS\Downloads\mern-lab-test\mern-lab-test\starter-project\backend"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mern-backend.git
git push -u origin main
```

Replace:
- `YOUR_GITHUB_USERNAME` with your GitHub username
- `mern-backend` with your actual backend repository name

### Step 3: Push Frontend to GitHub
Open PowerShell and run:

```powershell
cd "c:\Users\ASUS\Downloads\mern-lab-test\mern-lab-test\starter-project\frontend"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mern-frontend.git
git push -u origin main
```

Replace:
- `YOUR_GITHUB_USERNAME` with your GitHub username
- `mern-frontend` with your actual frontend repository name

## What Gets Pushed
✅ **Included:**
- All source code files
- package.json and package-lock.json
- .env.example (shows required environment variables)
- .gitignore
- controllers, models, routes, components, etc.

❌ **NOT Included (protected by .gitignore):**
- node_modules/ (will be reinstalled with `npm install`)
- .env (with your actual MongoDB credentials)
- .DS_Store
- Log files

## After Pushing
1. Verify repositories appear on your GitHub profile
2. Each repository will have its own git history
3. To work on the project elsewhere:
   ```powershell
   git clone https://github.com/YOUR_GITHUB_USERNAME/mern-backend.git
   cd mern-backend
   npm install
   # Add your .env file before running
   npm run dev
   ```

## Troubleshooting
- **"fatal: remote origin already exists"**: Run `git remote rm origin` first, then add the new remote
- **"fatal: could not read Username"**: Use HTTPS URLs or set up SSH keys for HTTPS authentication
- **Authentication issues**: GitHub may require a personal access token instead of password for HTTPS

