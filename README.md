# Ito Portfolio

A modern, responsive portfolio website built with React.js. Showcase your skills, projects, and contact information with a beautiful and professional design.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scrolling navigation
- 🎯 Interactive sections: Hero, About, Skills, Projects, Contact
- 💼 Project showcase with tags and links
- 📧 Contact form with validation
- 🌐 Social media integration

## Technologies Used

- React 18.2.0
- CSS3 (Custom styling with animations)
- Font Awesome Icons
- Google Fonts (Poppins)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Ito_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Project Structure

```
Ito_Portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Change name, title, and description
   - Update social media links

2. **About Section** (`src/components/About.js`):
   - Update your bio and experience details

3. **Skills Section** (`src/components/Skills.js`):
   - Modify the skills array with your technologies and proficiency levels

4. **Projects Section** (`src/components/Projects.js`):
   - Replace the projects array with your actual projects
   - Update project links and GitHub repositories

5. **Contact Section** (`src/components/Contact.js`):
   - Update email, phone, and social media links
   - Configure form submission (currently logs to console)

### Styling

All component styles are in their respective `.css` files. The color scheme uses:
- Primary: `#6366f1` (Indigo)
- Gradient: `#667eea` to `#764ba2`
- You can customize colors throughout the CSS files

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/Ito_Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`


