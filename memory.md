# Project Memory & Context: Jaswanth Swaroop Portfolio

## 1. Project Overview
- **Owner**: Jaswanth Swaroop Kandregula
- **Role**: AI Engineer (Specialized in production-grade RAG systems, GenAI pipelines, LangChain, Python, AWS)
- **Location**: Bengaluru, India
- **Core File**: `swaroop-portfolio.html` (Single-file portfolio architecture combining HTML, CSS, and JS)

---

## 2. Key Architecture & Technology Stack
- **Single-File Pattern**: Everything is cleanly modularized within `swaroop-portfolio.html`.
- **Styling**: Pure Vanilla CSS with custom design tokens, CSS variables, backdrop blurs, and glassmorphism.
- **Smooth Scroll**: Lenis Smooth Scroll (`lenis@1.3.26`).
- **Animations**: GSAP 3.12.5 with `ScrollTrigger` and `ScrollToPlugin`.
- **Liquid Glass Refraction System**:
  - Injected SVG filter with ID `#liquid-glass-refraction` using `<feTurbulence>` and `<feDisplacementMap>`.
  - Driven dynamically by JS `LiquidGlassController` reacting to mouse movements.

---

## 3. Section Architecture & Highlights

### A. Hero Section (Glass Aperture Concept)
- Clean, high-end aperture glass pill layout.
- CSS-only parallax and mask-reveal animation.
- Includes location chip ("BENGALURU, INDIA") and title badge.

### B. About Section (Apple Music Lyrics Concept)
- **Layout**: 2-column split-screen layout (`.about-music-container`).
- **Left Column**: Sticky, 1:1 aspect ratio profile image with heavily rounded corners (`32px`), zero outer bezels, and mock playback controls (`.music-profile-col`).
- **Right Column**: Short, punchy philosophy text rendered in massive editorial typography (`.lyrics-line`).
- **Scroll Behavior**: GSAP `ScrollTrigger` toggles `.active` and `.past` classes to blur/fade non-active lines while highlighting the active line in bright white as you scroll.
- **Background**: Multi-layered dark theme mesh gradient combined with backdrop blur (`backdrop-filter: blur(80px) saturate(200%)`).

### C. Featured Projects & Gallery
- Grid layout featuring tilt-responsive glass cards.
- Embedded modal dialog (`#certModal`) for viewing certificates and project details.

### D. Contact & Footer
- Minimalist contact CTAs (Email, Phone, LinkedIn, GitHub).
- Theme toggle support (Dark mode default with high-contrast Light mode).

---

## 4. Design Mandates & Conventions
1. **Anti-Generic AI Aesthetic**:
   - Rejects standard Tailwind / generic bootstrap cards.
   - Enforces rich editorial typography, subtle micro-animations, liquid glass refraction, and custom mesh gradients.
2. **Minimalist / Lazy Principle (`/ponytail`)**:
   - Prefer native HTML/CSS/JS features over heavy external libraries wherever possible.
   - Avoid redundant JS frame loops or over-engineered abstractions.
3. **No Bezels / Clean Integration**:
   - Profile images bleed directly into the background with rounded corners rather than double-nested card frames.
4. **Maintenance Guidelines**:
   - Maintain document integrity: keep CSS variables centralized at top of `<style>`.
   - Preserve existing API contracts and DOM IDs (`#about`, `#certModal`, `#liquid-glass-refraction`).

---

## 5. Important Files & Assets
- `swaroop-portfolio.html`: Primary single-file app.
- `passport size photo/`: Directory holding profile photos.
- `memory.md`: Central source of truth for project architecture and decisions.
