# 🚀 Deployment Guide

Follow these steps to push your project to GitHub and deploy on Vercel.

## Step 1: Push to GitHub

### Option A: Using Command Line

Open PowerShell or Command Prompt in your project folder:

```powershell
# Navigate to the project directory
cd "C:\Users\91733\Documents\Testing Academy\AI\AI TesterBlueprint 2026\Project10_JobAssistantDashboard_KimiCode\job-board"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit: JobBoard Pro - Job Application Tracker"

# Add your GitHub repository as remote
git remote add origin https://github.com/bhagya554/AITesterBlueprint_Project10_JobAssistantDashboard_KimiCode.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** If prompted, enter your GitHub username and password (or personal access token).

### Option B: Using GitHub Desktop (Easier)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Click "Add existing repository"
3. Select the `job-board` folder
4. Add a summary: "Initial commit"
5. Click "Commit to main"
6. Click "Publish repository"
7. Enter the repository URL: `https://github.com/bhagya554/AITesterBlueprint_Project10_JobAssistantDashboard_KimiCode.git`
8. Click "Publish"

---

## Step 2: Deploy on Vercel

### Option A: Using Vercel Website (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Connect your GitHub account
4. Select the repository: `AITesterBlueprint_Project10_JobAssistantDashboard_KimiCode`
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `job-board` (IMPORTANT!)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"
7. Wait for the build to complete (usually 1-2 minutes)
8. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Using Vercel CLI

```powershell
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project
cd "C:\Users\91733\Documents\Testing Academy\AI\AI TesterBlueprint 2026\Project10_JobAssistantDashboard_KimiCode\job-board"

# Deploy
vercel

# Follow the prompts:
# - Login with your Vercel account
# - Link to existing project or create new
# - Set build command: npm run build
# - Set output directory: dist
```

---

## 🔧 Important Configuration

### Vercel.json

The `vercel.json` file is already configured for you:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ]
}
```

### Build Settings

Make sure your Vercel project settings are:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## 🐛 Troubleshooting

### Issue: "Root Directory" not found

**Solution**: In Vercel settings, change Root Directory from `./` to `job-board`

### Issue: Build fails with "Cannot find module"

**Solution**: 
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Push changes to GitHub
4. Redeploy on Vercel

### Issue: Blank page after deployment

**Solution**: Check browser console for errors. Usually caused by:
- Missing `dist` folder in build output
- Incorrect base path in `vite.config.js`

### Issue: "git push" fails with authentication

**Solution**: 
- Use Personal Access Token instead of password
- Or use GitHub Desktop for easier authentication

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Dashboard loads correctly
- [ ] Kanban board displays 4 columns
- [ ] Can add a new job
- [ ] Can drag and drop jobs between columns
- [ ] Data persists in local storage
- [ ] Export/Import functions work
- [ ] Responsive on mobile devices

---

## 🌐 Custom Domain (Optional)

To use your own domain:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

---

## 📞 Support

If you encounter issues:

1. Check Vercel build logs for errors
2. Verify `job-board` is set as root directory
3. Ensure all files are committed to GitHub
4. Try clearing browser cache

---

## 🎉 Success!

Your JobBoard Pro should now be:
- ✅ On GitHub: `https://github.com/bhagya554/AITesterBlueprint_Project10_JobAssistantDashboard_KimiCode`
- ✅ Live on Vercel: `https://your-domain.vercel.app`

Share your deployed link with others! 🚀
