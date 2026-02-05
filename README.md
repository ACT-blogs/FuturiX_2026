# Futurix 2K26 - Technical Symposium Website

A modern, premium website for the Futurix 2K26 national-level technical symposium organized by Arjun College of Technology. Built with React, Tailwind CSS, and Framer Motion.

## 🎯 Features

- **Modern Design**: Dark theme with neon blue and electric purple accents
- **Smooth Animations**: Powered by Framer Motion for premium user experience
- **Responsive**: Fully responsive design that works on all devices
- **Event Management**: Comprehensive event listing with filtering by department and category
- **Department Showcase**: Dedicated pages for each engineering department
- **Event Details**: Detailed pages for each event with rules, requirements, and coordinators
- **Schedule**: Day-wise timeline of all events and activities
- **Registration**: Integrated Google Form for event registration
- **Contact**: Contact information and coordinator details

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/FuturiX_2026.git
cd FuturiX_2026
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🚀 Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub named `FuturiX_2026`

2. Initialize Git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Futurix 2K26 website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/FuturiX_2026.git
git push -u origin main
```

3. Update the `homepage` field in `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/FuturiX_2026"
```

4. Update the `base` in `vite.config.js` if your repository name is different:
```javascript
base: '/FuturiX_2026/'
```

### Deploy

Run the deployment command:
```bash
npm run deploy
```

This will:
1. Build the production-ready app
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://YOUR_USERNAME.github.io/FuturiX_2026`

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select `gh-pages` branch
5. Click **Save**
6. Your site will be published at the URL shown

## 📁 Project Structure

```
FuturiX_2026/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── EventCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Departments.jsx
│   │   ├── Schedule.jsx
│   │   ├── Register.jsx
│   │   └── Contact.jsx
│   ├── data/            # Event data
│   │   └── eventsData.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: { /* Neon Blue */ },
  secondary: { /* Electric Purple */ },
  dark: { /* Dark theme colors */ }
}
```

### Event Data

Update event information in `src/data/eventsData.js`:
- Add/remove departments
- Add/remove events
- Update event details (rules, requirements, coordinators)

### Google Form

Replace the Google Form link in `src/pages/Register.jsx`:
```javascript
href="YOUR_GOOGLE_FORM_LINK"
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📝 Event Categories

- **Technical Events**: Coding competitions, AI challenges, robotics, circuit design, etc.
- **Non-Technical Events**: Quizzes, treasure hunts, paper presentations, urban planning
- **Workshops**: 3D printing, renewable energy, modern surveying techniques

## 🏆 Departments

- Computer Science & Engineering (CSE)
- Information Technology (IT)
- Electronics & Communication Engineering (ECE)
- Electrical & Electronics Engineering (EEE)
- Mechanical Engineering (MECH)
- Civil Engineering (CIVIL)

## 📅 Event Schedule

- **Day 1** (March 15, 2026): Inaugural ceremony, technical events, workshops
- **Day 2** (March 16, 2026): Non-technical events, workshops, finals, prize distribution

## 📞 Contact

For any queries, reach out to:
- **Email**: futurix@arjuntech.edu
- **Phone**: +91 98765 43210

## 📄 License

This project is created for Futurix 2K26 symposium. Feel free to use it as a template for your own college events.

## 🙏 Acknowledgments

- Built with ❤️ for innovation and technology
- Designed for Arjun College of Technology
- Inspired by modern web design principles

---

**Note**: Remember to replace `YOUR_USERNAME` with your actual GitHub username in the deployment URLs and commands.
