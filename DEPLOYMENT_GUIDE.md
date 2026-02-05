# Futurix 2K26 - GitHub Pages Deployment Guide

## ✅ Project Setup Complete!

Your Futurix 2K26 website is now ready for deployment! The project has been:
- ✅ Built successfully with React + Vite + Tailwind CSS
- ✅ Initialized with Git
- ✅ Configured for GitHub Pages deployment
- ✅ All components and pages created
- ✅ Event data populated with 24 events across 6 departments

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name it **`FuturiX_2026`** (or any name you prefer)
5. Keep it **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Update Configuration

Open `package.json` and update the homepage field with your GitHub username:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/FuturiX_2026"
```

**Example:** If your username is `johndoe`:
```json
"homepage": "https://johndoe.github.io/FuturiX_2026"
```

**Note:** If you named your repository differently, update both the package.json homepage AND vite.config.js base path accordingly.

### Step 3: Connect to GitHub and Push

Run these commands in your terminal:

```bash
# Set your Git identity (if not already set)
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Add the remote repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/FuturiX_2026.git

# Verify the remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

After pushing successfully, run:

```bash
npm run deploy
```

This command will:
1. Build your production-ready app (`npm run build`)
2. Create a `dist` folder with optimized files
3. Deploy the `dist` folder to a `gh-pages` branch
4. Push to GitHub

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **"Source"**, select branch: **`gh-pages`**
5. Keep folder as **`/ (root)`**
6. Click **Save**
7. Wait 1-2 minutes for deployment

### Step 6: Access Your Website

Your website will be live at:
```
https://YOUR_USERNAME.github.io/FuturiX_2026/
```

**Note:** It may take a few minutes for the site to be published after the first deployment.

---

## 🔄 Making Updates

After making changes to your website:

```bash
# Add and commit changes
git add .
git commit -m "Description of your changes"

# Push to GitHub
git push origin main

# Deploy updated version
npm run deploy
```

---

## 🛠️ Customization Guide

### Update College Name

1. **Footer** (`src/components/Footer.jsx`): Update college name and address
2. **About** (`src/pages/About.jsx`): Update college references
3. **Data** (`src/data/eventsData.js`): Update coordinators and details

### Add/Edit Events

Edit `src/data/eventsData.js`:

```javascript
{
  id: 'event-id',
  name: 'Event Name',
  department: 'cse', // cse, it, ece, eee, mech, civil
  category: 'technical', // technical, non-technical, workshop
  shortDescription: 'Brief description',
  description: 'Full description',
  rules: ['Rule 1', 'Rule 2'],
  eligibility: 'Who can participate',
  teamSize: '1-2 members',
  requirements: ['Requirement 1', 'Requirement 2'],
  coordinators: [
    { name: 'Name', phone: '+91 XXXXX XXXXX' }
  ],
  prizePool: '₹10,000',
}
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#00D9FF', // Change this color
    // ... other shades
  },
  secondary: {
    DEFAULT: '#A855F7', // Change this color
    // ... other shades
  }
}
```

### Update Google Form Link

Edit `src/pages/Register.jsx`:

```javascript
href="YOUR_GOOGLE_FORM_LINK"
```

---

## 📱 Testing Locally

```bash
# Development server
npm run dev

# Production build preview
npm run build
npm run preview
```

---

## 🎯 Features Included

### Pages
- ✅ Home - Hero section with animations
- ✅ About - Vision, mission, and core values
- ✅ Events - Filterable event listings
- ✅ Event Details - Individual event pages
- ✅ Departments - Department showcase
- ✅ Schedule - Day-wise timeline
- ✅ Register - Google Form integration
- ✅ Contact - Contact information and coordinators

### Event Data
- **24 Events** across 6 departments
- **3 Categories**: Technical, Non-Technical, Workshops
- **Detailed Information**: Rules, requirements, coordinators, prizes

### Design Features
- ✅ Dark theme with neon accents
- ✅ Smooth animations (Framer Motion)
- ✅ Fully responsive design
- ✅ Premium glass-morphism effects
- ✅ Particle backgrounds
- ✅ Mesh gradients

---

## ❓ Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js` matches your repository name
- Verify `homepage` in `package.json` is correct

### 404 Error
- Make sure GitHub Pages source is set to `gh-pages` branch
- Wait a few minutes after deployment
- Clear browser cache

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
npm run build
```

### Deployment Issues
```bash
# Verify you're on main branch
git branch

# Check remote
git remote -v

# Re-deploy
npm run deploy
```

---

## 📞 Support

If you encounter issues:
1. Check the README.md for common solutions
2. Review the deployment logs for errors
3. Verify all configuration files are correct

---

## 🎉 Congratulations!

Your Futurix 2K26 symposium website is ready to go live! Simply follow the steps above to deploy it to GitHub Pages.

**Happy deploying! 🚀**
