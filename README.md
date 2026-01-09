# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcase your projects, experience, skills, and get in touch with visitors through a sleek, animated interface.

## ✨ Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Light Mode** - Theme toggle with smooth transitions
- **Smooth Animations** - Framer Motion animations for engaging UI
- **Multiple Sections** - Hero, About, Experience, Projects, Blog, Achievements, Contact
- **Social Integration** - Links to your social profiles and contact information
- **Project Showcase** - Display featured projects with descriptions and tech stacks
- **Experience Timeline** - Detailed work experience and employment history
- **Contact Form** - Get in touch section for visitor inquiries
- **SEO Ready** - Clean, semantic HTML structure
- **Fast & Modern** - Built with Vite for lightning-fast builds and HMR

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **State Management**: React Query
- **Package Manager**: Bun

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or with npm
   npm install
   ```

3. **Configure your portfolio data**
   Edit [src/data/portfolioData.ts](src/data/portfolioData.ts) to add your personal information, projects, experience, skills, and social links.

4. **Start the development server**
   ```bash
   bun run dev
   # or with npm
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Customization

### Personal Information
Update your details in [src/data/portfolioData.ts](src/data/portfolioData.ts):
- Personal info (name, tagline, email, location)
- Social links
- Skills and expertise
- Project portfolio
- Work experience
- Blog posts
- Achievements

### Styling
- **Tailwind CSS**: Modify [tailwind.config.ts](tailwind.config.ts) for custom colors and theme
- **Components**: UI components are located in [src/components/ui/](src/components/ui/)
- **Global Styles**: Main styles in [src/index.css](src/index.css)

### Theme
The portfolio includes dark/light mode toggle via [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx).

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable shadcn/ui components
│   ├── AboutSection.tsx
│   ├── AchievementsSection.tsx
│   ├── BlogSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── portfolioData.ts    # All portfolio content configuration
├── pages/
│   ├── Index.tsx           # Main portfolio page
│   └── NotFound.tsx        # 404 page
├── hooks/
│   ├── use-mobile.tsx      # Mobile responsive hook
│   └── use-toast.ts        # Toast notifications hook
├── lib/
│   └── utils.ts            # Utility functions
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css               # Global styles
```

## 🚀 Build & Deployment

### Build for Production
```bash
bun run build
# or with npm
npm run build
```

### Preview Production Build
```bash
bun run preview
# or with npm
npm run preview
```

### Deployment Options
- **Vercel** - Recommended for best performance. Connect your GitHub repo and deploy with one click.
- **Netlify** - Simple deployment with git integration
- **GitHub Pages** - Free static hosting
- **AWS Amplify** - AWS hosted solution
- **Docker** - Containerized deployment

## 📝 Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint checks

## 🎯 Sections Overview

### Hero Section
Eye-catching introduction with your name, tagline, and call-to-action buttons.

### About Section
Brief overview of who you are, your skills, and professional summary.

### Experience Section
Timeline view of your work history and employment details.

### Projects Section
Showcase your best work with descriptions, tech stacks, and links to live demos and repositories.

### Blog Section
Share your thoughts and expertise through blog posts.

### Achievements Section
Highlight certifications, awards, and notable accomplishments.

### Contact Section
Allow visitors to reach out with a contact form.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file if needed for any API endpoints or third-party services.

### Analytics
Add your analytics provider (Google Analytics, Vercel Analytics, etc.) in `App.tsx` for tracking.

## 🌐 SEO

The project is SEO-ready with:
- Semantic HTML structure
- Meta tags support
- Open Graph tags
- Structured data support

Consider adding a SEO component or meta tags library for enhanced SEO.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your portfolio. If you make improvements, consider sharing them back!

## 💡 Tips

- **Keep it updated**: Regularly update your projects, experience, and achievements
- **Use high-quality images**: Optimize and compress images for better performance
- **Test on mobile**: Ensure your portfolio looks great on all devices
- **Share your links**: Add your GitHub, LinkedIn, and other professional profiles
- **Write compelling copy**: Make your descriptions clear and impressive

## 📞 Support

For issues or questions about the portfolio template, please open an issue in the repository.

---

**Happy sharing your work! 🚀**
