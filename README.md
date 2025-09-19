# Gokul Kannan - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive**: Smooth scrolling navigation and hover effects
- **Comprehensive**: Showcases 29+ projects across web, mobile, and backend development
- **Skills Showcase**: 40+ technologies with progress indicators
- **Contact Form**: Functional contact form with email integration
- **Resume Download**: Easy access to download resume
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

- **Framework**: Next.js 13.5.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations and transitions
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
gokul-portfolio-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects portfolio
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
│   └── assets/           # Images and documents
├── tailwind.config.js     # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.13.0 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd gokul-portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `out` folder to your hosting provider

## 📝 Customization

### Adding Your Resume
1. Place your resume PDF in `public/assets/`
2. Name it `GokulKannan-resume.pdf`
3. The download button will automatically work

### Updating Profile Image
1. Replace `public/assets/profile.jpg` with your image
2. Ensure it's a square format for best results

### Modifying Content
- Update project information in `components/Projects.tsx`
- Modify skills in `components/Skills.tsx`
- Edit personal information in `components/About.tsx`
- Update contact details in `components/Contact.tsx`

## 🎨 Color Scheme

- **Primary**: Blue (#3b82f6) to Purple (#8b5cf6) gradient
- **Background**: White with subtle gradients
- **Text**: Gray scale for readability
- **Accents**: Various colors for technology badges

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Performance Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: Tailwind CSS purging
- **SEO**: Meta tags and structured data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Gokul Kannan**
- Email: gokulprofessional5797@gmail.com
- LinkedIn: [Gokul Kannan](https://www.linkedin.com/in/gokul-kannan-141096140/)
- Portfolio: [Your deployed portfolio URL]

---

Built with ❤️ by Gokul Kannan
