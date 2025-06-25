[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy%20on-Vercel-black?logo=vercel)](https://vercel.com)

# Sam Bowen Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark/light mode, and a beautiful design system.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📦 Build for Production](#-build-for-production)
- [🚀 Deployment](#-deployment)
- [🎨 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [♿ Accessibility](#-accessibility)
- [🔧 Development](#-development)
- [📄 License](#-license)
- [🤝 Contributing](#-contributing)
- [📞 Contact](#-contact)

## ✨ Features

- **Modern Design**: Clean, professional design with a custom color palette
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessible**: WCAG compliant with proper focus states and keyboard navigation
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0, Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Animations**: Framer Motion 12.19.1
- **Icons**: Lucide React 0.523.0
- **Linting**: ESLint 9.25.0
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sam-bowen-portfolio.git
cd sam-bowen-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration and deploy

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

### Environment Variables

No environment variables are required for this project.

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  ash: '#7F7F56',
  moss: '#2A2E18', 
  fog: '#D2DCE2',
  sand: '#D0CD8A',
  forest: '#122620',
}
```

### Content

Update the following files to customize your portfolio:

- `src/components/Hero.jsx` - Hero section content and call-to-action
- `src/components/About.jsx` - About section and personal information
- `src/components/Projects.jsx` - Project data and descriptions
- `src/components/TechStack.jsx` - Technology stack and skills
- `src/components/Contact.jsx` - Contact information and form
- `src/components/Footer.jsx` - Footer links and social media

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are defined in individual components using Framer Motion

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

All components are designed to work seamlessly across all screen sizes.

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h6)
- Keyboard navigation support
- Focus indicators and visible focus states
- Screen reader friendly with ARIA labels
- WCAG 2.1 AA compliant
- High contrast ratios for text readability

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production with optimization
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form and info
│   ├── Footer.jsx      # Footer with links
│   ├── Hero.jsx        # Hero section
│   ├── Navbar.jsx      # Navigation bar
│   ├── ProjectCard.jsx # Individual project card
│   ├── Projects.jsx    # Projects section
│   └── TechStack.jsx   # Skills and technologies
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

### Code Quality

- ESLint configuration for consistent code style
- React best practices and hooks rules
- TypeScript-ready structure (can be easily converted)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: sam@example.com
- **GitHub**: [@sambowencode](https://github.com/sambowencode)
- **LinkedIn**: [Sam Bowen](https://www.linkedin.com/in/samuelbowencode/)
- **Portfolio**: [sam-bowen-portfolio.vercel.app](https://sam-bowen-portfolio.vercel.app)

---

<div align="center">

Made with ❤️ by Sam Bowen

[⬆️ Back to top](#sam-bowen-portfolio)

</div>
