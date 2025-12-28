# Portfolio Website Implementation Plan
## georgesheppard.dev

### Overview
Create a minimalist portfolio website inspired by soulwire.co.uk with:
- Dark theme with light text
- Fade-in animations on page load
- Subtle hover effects
- Homepage with projects, skills, bio, and subdomain links
- Dedicated dissertation page showcasing board game robot arm project with 3D models

---

## Technology Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router (HashRouter for GitHub Pages compatibility)
- **Styling**: CSS with CSS Variables (no preprocessor)
- **Animations**: CSS-based (GPU accelerated, zero bundle cost)
- **3D Viewing**: @google/model-viewer (for robot arm models)
- **Hosting**: GitHub Pages with custom domain
- **CI/CD**: GitHub Actions

---

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/          # Project screenshots, photos
│   │   ├── models/          # 3D models (.glb files)
│   │   └── documents/       # PDFs, resume
│   ├── CNAME                # Custom domain config
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Card.jsx
│   │   │   ├── Button.jsx
│   │   │   └── AnimatedText.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   └── ContactSection.jsx
│   │   └── dissertation/
│   │       ├── ModelViewer.jsx
│   │       └── ImageGallery.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Dissertation.jsx
│   ├── hooks/
│   │   └── useIntersectionObserver.js
│   ├── styles/
│   │   ├── index.css        # Theme variables, global styles
│   │   └── animations.css   # Animation keyframes
│   ├── utils/
│   │   └── constants.js     # All content/data
│   ├── App.jsx
│   ├── main.jsx
│   └── Router.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml       # Auto-deployment
├── vite.config.js
└── package.json
```

---

## Implementation Phases

### Phase 1: Project Setup (Homepage Only)
1. Initialize Vite + React project
2. Install dependencies: `react-router-dom` (for navigation structure)
3. Configure `vite.config.js` for GitHub Pages (base path: '/')
4. Create project folder structure (homepage components only)
5. Set up CSS variables for dark theme
6. Create CNAME file with `georgesheppard.dev`

**Note**: Skipping `@google/model-viewer` for now - will install when building dissertation page later

**Key Files**:
- `vite.config.js` - Configure build for GitHub Pages
- `src/styles/index.css` - Define theme (colors, spacing, typography)
- `public/CNAME` - Custom domain configuration

---

### Phase 2: Core Layout & Components
1. Create Layout component (Header + Footer wrapper)
2. Build Header with navigation (Home, Dissertation)
3. Build Footer with social links
4. Create reusable Card component with hover effects
5. Create AnimatedText component for fade-in effects
6. Set up Router with HashRouter
7. Create animation keyframes in `animations.css`
8. Implement `useIntersectionObserver` hook for scroll-triggered animations

**Key Files**:
- `src/Router.jsx` - HashRouter setup
- `src/components/common/Card.jsx` - Reusable card with hover
- `src/styles/animations.css` - Fade-in, hover keyframes
- `src/hooks/useIntersectionObserver.js` - Scroll animations

---

### Phase 3: Content Management
1. Create `constants.js` as single source of truth
2. Define PROJECTS array with all project data
3. Define SKILLS object grouped by category
4. Define SOCIAL_LINKS and SUBDOMAINS
5. All future content updates happen here only

**Key File**:
- `src/utils/constants.js` - All site content/data

---

### Phase 4: Homepage
1. Build Hero section with animated name/title
2. Build ProjectsSection that maps over PROJECTS
3. Create ProjectCard component (large cards with descriptions)
4. Build SkillsSection grouped by category
5. Build section for subdomain project links
6. Build ContactSection with social links
7. Apply staggered fade-in animations to sections

**Content Needed**:
- Bio text (1-2 paragraphs)
- Project descriptions
- Skills list
- Social media URLs
- Subdomain URLs

---

### Phase 5: Dissertation Page (LATER - Not in initial implementation)
1. Install and set up @google/model-viewer
2. Create ModelViewer component wrapper
3. Build dissertation page sections:
   - Hero (title, summary)
   - 3D model viewer (main robot arm)
   - Project overview (text)
   - Image gallery (build photos, diagrams)
   - Technical details (AI explanation)
4. Prepare 3D models (.glb format, optimized)
5. Add images and organize in public/assets

**Note**: This phase will be implemented after the homepage is complete and deployed

**Content Needed**:
- Robot arm 3D models (.glb files)
- Photos of physical build
- Diagrams/schematics
- Written explanation of project, AI, challenges

---

### Phase 6: Styling & Polish
1. Implement responsive design (mobile, tablet, desktop)
2. Add hover effects to all interactive elements
3. Ensure consistent spacing and typography
4. Optimize images (WebP format, lazy loading)
5. Test animations on lower-end devices
6. Add accessibility features (alt text, ARIA labels, keyboard nav)

**Design Principles**:
- Dark background (#0a0a0a), light text (#e8e8e8)
- Minimalist with lots of whitespace
- Subtle animations (nothing jarring)
- Clear visual hierarchy
- One accent color for links/CTAs

---

### Phase 7: Deployment Setup
1. Create GitHub Actions workflow (`.github/workflows/deploy.yml`)
2. Configure workflow to build and deploy on push to main
3. Enable GitHub Pages in repository settings
4. Set source to "GitHub Actions"
5. Add custom domain in GitHub Pages settings
6. Configure DNS records at domain registrar:
   - A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
7. Wait for DNS propagation (24-48 hours)
8. Enable HTTPS

**Key File**:
- `.github/workflows/deploy.yml` - Auto-deployment workflow

---

### Phase 8: SEO & Meta Tags
1. Update `index.html` with proper meta tags
2. Add Open Graph tags for social sharing
3. Add description, title, favicon
4. Create robots.txt (optional)
5. Submit to Google Search Console

---

## Critical Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Custom domain
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
```

### Router.jsx (HashRouter for GitHub Pages)
```jsx
import { HashRouter, Routes, Route } from 'react-router-dom'

export function Router() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Dissertation route will be added later */}
        </Routes>
      </Layout>
    </HashRouter>
  )
}
```

### CSS Theme Variables
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #121212;
  --text-primary: #e8e8e8;
  --text-secondary: #a0a0a0;
  --accent: #4a9eff;
  --accent-hover: #6bb0ff;
}
```

---

## Key Dependencies

### For Homepage (Phase 1)
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.1.0"
  }
}
```

### For Dissertation Page (Phase 5 - Later)
```json
{
  "dependencies": {
    "@google/model-viewer": "latest"
  }
}
```

---

## Animation Strategy

**CSS-First Approach**:
- Fade-in on page load using `@keyframes fadeIn`
- Staggered children animations with nth-child delays
- Hover effects with transform and box-shadow transitions
- Link underline animations with pseudo-elements
- Use IntersectionObserver for scroll-triggered animations

**Benefits**:
- Zero JavaScript bundle overhead
- GPU-accelerated performance
- Works without JS enabled

---

## 3D Model Implementation

**Using @google/model-viewer**:
- Web component, minimal setup required
- Built-in controls (rotate, zoom, pan)
- Auto-loading and error handling
- Mobile-friendly touch controls

**Model Preparation**:
1. Export CAD models as .glb (binary GLTF)
2. Optimize using glTF-Pipeline
3. Target: <5MB per model
4. Create poster images (loading thumbnails)

---

## Content Update Workflow

To add/update projects:
1. Edit `src/utils/constants.js`
2. Add images to `public/assets/images/`
3. Commit and push to main branch
4. GitHub Actions auto-deploys

---

## Deployment Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

---

## Challenges & Solutions

### 3D Model Performance on Mobile
- **Solution**: Compress models, use lower-poly versions for mobile
- Add "Load 3D Model" button on mobile instead of auto-load

### Client-Side Routing on GitHub Pages
- **Solution**: Use HashRouter (#/dissertation URLs)
- Works immediately, no server config needed

### Large Image Sizes
- **Solution**: WebP format, lazy loading, responsive images with srcset
- Compress with TinyPNG or similar

### Animation Performance
- **Solution**: CSS animations only, use `will-change` sparingly
- Test on lower-end devices

---

## Design Inspiration (soulwire.co.uk)

Key elements to adopt:
1. Minimalist aesthetic with whitespace
2. Typography focus (large, readable fonts)
3. Subtle animations (gentle, not excessive)
4. Card-based project layout
5. Gentle hover lift effect
6. Muted color palette with one accent
7. Clear content hierarchy

---

## Success Metrics

- Fast load time (<3 seconds)
- Responsive on all devices
- Smooth animations (60fps)
- Accessible (WCAG AA)
- Easy to update content
- Works with JS disabled (graceful degradation)

---

## Future Enhancements (Optional)

- Blog section
- Contact form with backend
- More interactive dissertation elements
- Dark/light mode toggle
- Analytics integration
- Pre-rendering for better SEO
