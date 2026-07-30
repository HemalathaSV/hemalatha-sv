# Hemalatha S V AI — Professional AI Engineer Portfolio

A premium, production-ready developer portfolio and case study platform for an AI/ML Engineer and Agentic AI Developer. Built with a modern dark aesthetic, modular architecture, dynamic routing, and instant command-palette search.

## 🚀 Key Features
- **Dynamic Portfolio Grid**: Interactive client-side filtering and real-time live search by project name, tech chip, category, or description.
- **Dynamic Case Study Engine**: Dynamic routing (`/projects/[slug]`) mapping detailed multi-agent system workflows, system architecture, challenges, and learnings.
- **Research Publication Showcase**: Academic publications page presenting IJCRT articles with category tags, abstract overviews, and external link support.
- **Resume Viewer**: Responsive resume summary page with download and quick navigation support.
- **Command Palette**: Global search interface (<kbd>Ctrl + K</kbd>) providing quick fuzzy-search navigation across the entire portfolio.
- **Scroll & Navigation Enhancements**: Top page scroll depth progress bar, smooth scroll-spy active state navigation link underlining, and floating back-to-top button.
- **Production Released**: High-performance static HTML generation (SSG) with optimized next/font and Tailwind CSS tokens.

## 🛠️ Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & SSG)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com/)

## 📂 Folder Structure
```text
├── app/
│   ├── portfolio/             # Portfolio list grid
│   ├── projects/[slug]/       # Dynamic case study pages
│   ├── research/              # Academic publications page
│   ├── resume/                # Resume viewer page
│   ├── layout.tsx             # Root Layout with metadata
│   └── page.tsx               # Homepage sections composition
├── components/
│   ├── layout/                # Global wrappers & Footer
│   ├── navigation/            # Sticky Glassmorphism Navbar
│   ├── portfolio/             # Filtering & Search components
│   ├── projects/              # Reusable project details modules
│   └── ui/                    # Scroll progress, Back to top
├── config/
│   └── profile.ts             # Central profile configurations
└── data/
    ├── projects.ts            # Project database and helper filters
    └── research.ts            # Research library database
```

## ⚙️ Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HemalathaSV/hemalatha-sv.git
   cd hemalatha-sv
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Production Release Build

1. **Compile production build:**
   ```bash
   npm run build
   ```
   This generates an optimized static production bundle.

2. **Start production server locally:**
   ```bash
   npm run start
   ```

## 👤 Author
- **Name**: Hemalatha S V
- **Email**: heamalathasv@gmail.com
- **GitHub**: [HemalathaSV](https://github.com/HemalathaSV)
- **LinkedIn**: [hemalatha-sv](https://www.linkedin.com/in/hemalatha-sv)

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
