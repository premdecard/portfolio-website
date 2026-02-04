# 🎨 Prem Panchal - Professional Portfolio

A modern, responsive portfolio website showcasing full-stack development expertise with Angular and .NET.

![Portfolio Preview](https://img.shields.io/badge/React-19.0.0-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎯 **Modern Design** - Professional monochrome palette with animated background
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with React 19 and optimized bundles
- 🎨 **Animated Background** - Floating elements and geometric patterns
- 📊 **Project Showcase** - Interactive project cards with technology tags
- 📝 **Contact Form** - Built-in contact form with validation
- 🎭 **Smooth Animations** - Micro-interactions and hover effects

## 🚀 Technologies Used

### Frontend
- **React 19.0.0** - Modern UI library
- **React Router DOM 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components (Radix UI)
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client

### UI Components
- Custom animated background with SVG graphics
- shadcn/ui components (Button, Card, Badge, Input, Textarea, Toast)
- Responsive navigation with mobile menu
- Smooth scroll behavior

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

The app will open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be in the `build/` directory.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Create React App settings
5. Click Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Add new site from Git
4. Build command: `npm run build`
5. Publish directory: `build`

## 🎨 Customization

### Update Personal Information

Edit `src/mock.js`:

```javascript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  phone: "+1234567890",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  location: "Your City, Country",
  // ...
};
```

### Change Colors

Edit `src/index.css` and modify the CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... */
}
```

### Add Projects

Edit the `projects` array in `src/mock.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", ".NET", "SQL Server"],
    features: ["Feature 1", "Feature 2"],
    image: "https://your-image-url.com",
    link: "#"
  },
  // Add more projects...
];
```

## 📂 Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing section
│   │   ├── About.jsx             # About & skills
│   │   ├── Experience.jsx        # Work history
│   │   ├── Projects.jsx          # Project showcase
│   │   ├── Contact.jsx           # Contact form
│   │   ├── Header.jsx            # Navigation
│   │   ├── Footer.jsx            # Footer
│   │   ├── AnimatedBackground.jsx # Background effects
│   │   └── ui/                   # shadcn/ui components
│   ├── hooks/
│   │   └── use-toast.js          # Toast notifications
│   ├── lib/
│   │   └── utils.js              # Utility functions
│   ├── mock.js                   # Portfolio data
│   ├── App.js                    # Main component
│   ├── App.css                   # App styles
│   └── index.css                 # Global styles
├── package.json
├── tailwind.config.js
└── craco.config.js
```

## 🎯 Key Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Professional bio and categorized skills
3. **Experience** - Timeline of work history
4. **Projects** - Showcase of 4 featured projects
5. **Contact** - Contact form and social links

## 🔧 Development

### Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests

### Technologies Deep Dive

- **CRACO** - Used for extending Create React App configuration
- **Tailwind CSS** - Utility-first styling with custom animations
- **Radix UI** - Accessible component primitives
- **Custom Animations** - Float, spin, and line-draw effects

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Prem Panchal**

- Email: prempanchal222@gmail.com
- LinkedIn: [@prem-panchal](https://linkedin.com/in/prem-panchal-3a324316b)
- Location: Ahmedabad, Gujarat, India

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the amazing component library
- [Lucide Icons](https://lucide.dev/) - For the beautiful icons
- [Unsplash](https://unsplash.com/) - For project placeholder images

---

⭐ **Star this repo if you find it helpful!**

Built with ❤️ using React & Tailwind CSS
