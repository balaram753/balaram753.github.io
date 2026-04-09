# Balaram - IoT Security & CyberSecurity Portfolio

A professional, modern, and minimal personal portfolio website built with **React** for a B.Tech ECE student specializing in IoT Security and Cybersecurity.

## 🌐 Live Site

Visit my portfolio at **[balaram.me](https://balaram.me)**

## ✨ Features

- ⚡ Built with React for optimal performance
- 🎨 Modern dark theme with cybersecurity aesthetic
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Smooth animations and micro-interactions
- ✅ Accessible and SEO-optimized
- 📦 Production-ready build system
- 🔒 Premium design - clean, minimal, professional

## 📚 Portfolio Sections

1. **Hero Section** - Name, title, and CTA with animated terminal
2. **About** - B.Tech ECE background and interests
3. **Skills** - Categorized expertise in IoT, Cybersecurity, Programming, Tools
4. **Projects** - Featuring 6 security research and development projects
5. **Experience** - Timeline of learning and professional development
6. **Contact** - Contact form and social media links
7. **Navigation** - Sticky navbar with smooth scrolling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

The site will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   ├── Experience.js & Experience.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
public/
├── index.html (React root)
package.json
.gitignore
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Styling**: CSS3 (CSS Variables, Grid, Flexbox)
- **Icons**: react-icons
- **Hosting**: GitHub Pages
- **Domain**: balaram.me

## 📝 Customization

### Update Social Links

Edit the links in:
- `src/components/Hero.js` - Hero social links
- `src/components/Footer.js` - Footer social links
- `src/components/Contact.js` - Contact information

### Update Projects

Edit `src/components/Projects.js` to add your own projects:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    tags: ['Tag1', 'Tag2'],
    github: 'https://github.com/yourname/repo',
    featured: true,
  },
  // Add more projects
];
```

### Update Skills

Edit `src/components/Skills.js` to modify skill categories:
```javascript
const skillCategories = [
  {
    title: 'Category Name',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
  // Add more categories
];
```

### Customize Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #1e40af;
  --secondary-color: #0891b2;
  /* ... more variables */
}
```

## 🚀 Deployment to GitHub Pages

### Setup

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` homepage:
```json
"homepage": "https://balaram753.github.io"
```

3. Deploy:
```bash
npm run deploy
```

### Custom Domain (balaram.me)

1. Update `package.json` homepage to your custom domain:
```json
"homepage": "https://balaram.me"
```

2. CNAME file (already configured in repository)

3. Update DNS settings to point to GitHub Pages

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Design Highlights

- **Color Scheme**: Dark theme with blue/cyan accents
- **Typography**: Clean system fonts with proper hierarchy
- **Spacing**: Consistent 8px grid system
- **Animations**: Smooth transitions and subtle effects
- **Mobile First**: Optimized for all screen sizes

## 📝 Featured Projects

1. **IoT Intrusion Detection System** - ESP32-based IDS
2. **Evil Twin Attack Simulator** - WiFi security learning tool
3. **RF Signal Analysis Tool** - Radio frequency analysis
4. **Smart Home Vulnerability Scanner** - IoT device security
5. **Firmware Extraction & Analysis** - Reverse engineering toolkit
6. **CTF Write-ups** - Security challenge documentation

## 🔗 Quick Links

- **GitHub**: [github.com/balaram753](https://github.com/balaram753)
- **LinkedIn**: [linkedin.com/in/balaram753](https://linkedin.com/in/balaram753)
- **Twitter**: [@balaram753](https://twitter.com/balaram753)
- **Email**: [hello@balaram.me](mailto:hello@balaram.me)

## 📄 License

This portfolio source is open source and available under the MIT License.

## 🤝 Contributing

If you found this portfolio helpful, feel free to star the repository or use it as inspiration for your own!

---

**Building secure systems, one line at a time** 🔐