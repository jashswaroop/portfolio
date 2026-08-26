---
name: Swaroop Portfolio
description: Personal portfolio showcasing AI & LLM engineering expertise with premium liquid glass design.
colors:
  primary: "#3B82F6"
  accent-teal: "#22D3EE"
  accent-violet: "#A78BFA"
  accent-warm: "#FBBF24"
  neutral-bg: "#080c18"
  neutral-bg-1: "#0c1224"
  neutral-bg-2: "#101830"
  text-primary: "#F1F5F9"
  text-secondary: "#CBD5E1"
  text-muted: "#94A3B8"
  glass: "rgba(255,255,255,0.05)"
  glass-strong: "rgba(255,255,255,0.10)"
  glass-border: "rgba(255,255,255,0.10)"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "clamp(28px, 4vw, 44px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Inter', sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "12px"
    letterSpacing: "0.16em"
rounded:
  sm: "18px"
  md: "26px"
  pill: "999px"
spacing:
  sm: "24px"
  md: "32px"
  lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
---

# Design System: Swaroop Portfolio

> [!NOTE]
> **Design Read**: Solo developer portfolio for technical recruiters and collaborators, with a Liquid Glass dark-tech vibe, leaning toward vanilla CSS/JS + custom GSAP scroll physics + modern sans display typography.
>
> **Design Dials**:
> - **`DESIGN_VARIANCE: 6`** (Offset layout balancing clean grid spacing with fluid asymmetry)
> - **`MOTION_INTENSITY: 6`** (Fluid GSAP scroll marquee & spring physics, but no chaotic page hijacks)
> - **`VISUAL_DENSITY: 4`** (Airy, focused card paddings allowing components to breathe)

## Overview

**Creative North Star: "The Liquid Glass Prism"**

The Swaroop Portfolio design system adopts a premium, dark-mode, glassmorphism theme that highlights cutting-edge engineering with fluid, organic visual assets. The canvas uses a deeply saturated navy background, layered with thin, highly translucent glass elements. Ambient multi-point light gradients shine through the glass surfaces, creating depth and a 3D refraction effect.

Key characteristics:
- Deep dark navy canvases for high-contrast glass readability.
- Multi-point glowing background orbs that shift independently to create a depth parallax.
- Smooth transitions and physical easing properties (such as custom spring deceleration on interactive marquee scrolls).
- Crisp specular white border highlights simulating glass refraction.

## Colors

The system uses a highly curated, dark palette structured around vibrant cobalt, cyan, and violet accents operating over dark backgrounds.

### Primary
- **Electric Cobalt** (#3B82F6): The main brand accent color, used for high-impact buttons, focal outlines, and primary status indicators.

### Secondary
- **Neon Cyan** (#22D3EE): A supporting accent used for tech tags, code accents, highlights, and secondary glowing background orbs.
- **Soft Violet** (#A78BFA): A decorative accent used to represent neural networks, RAG structures, and visual depth gradients.

### Neutral
- **Stealth Navy** (#080c18): The core background canvas color.
- **Midnight Deck** (#0c1224): Card and section background container color.
- **Liquid White** (#F1F5F9): The primary typography and content color.
- **Slate Text** (#CBD5E1): Body copy and supporting metadata color.
- **Muted Glass** (rgba(255,255,255,0.05)): The standard background for translucent glass panels.

### Named Rules
**The Rarity Rule.** Glowing neon accents and highlight borders must occupy less than 15% of any screen surface area. Use them strictly to draw attention to interactive elements and tool classifications.

## Typography

**Display Font:** 'Plus Jakarta Sans' (sans-serif)
**Body Font:** 'Inter' (sans-serif)
**Label/Mono Font:** 'JetBrains Mono' (monospace)

### Hierarchy
- **Display** (600, clamp(28px, 4vw, 44px), 1.15): Used for main page headers, hero section typography, and signature labels.
- **Headline** (600, 24px, 1.25): Section subtitles and major card headers.
- **Body** (400, 16px, 1.6): Used for descriptive copy and paragraph content. Max line length is restricted to 70ch for readability.
- **Label** (500, 12px, 0.16em letter-spacing, uppercase): Used for tags, micro-labels, dates, and technology classifications.

## Layout

The page utilizes a standard 12-column grid with a `--gutter` of `24px`.
- Page sections sit within a centered block with a `max-width` of `1200px` and `margin: 0 auto`.
- The spacing system is driven by regular increments: `--section-gap` is `96px` (vertical spacing between segments), and `--card-padding` is `32px` (internal padding of cards).

## Elevation & Depth

**Ambient Layering.** The system avoids heavy black drop shadows. Depth is instead created by layering transparent glass panels (varying opacity levels from `rgba(255,255,255,0.02)` to `0.10`) over colorful ambient light orbs and using `backdrop-filter: blur(...)` to visually isolate stacked surfaces.

### Named Rules
**The Glass Blur Rule.** Every elevated card or overlay panel must apply at least `backdrop-filter: blur(24px)` to guarantee readability of light text over complex background gradient blobs.

## Shapes

Container elements feature generous, soft rounded corners to offset the strict technical nature of the content.
- Primary container cards use a `--radius` of `26px`.
- Secondary components (such as project images) use a `--radius-sm` of `18px`.
- Small pill buttons and tag elements use `--radius-pill` of `999px` to represent cohesive units.
- Borders use a very thin `1px solid rgba(255,255,255,0.10)` specular outline to simulate glass refraction.

## Components

### Buttons
- **Shape:** Round pill shape (999px radius).
- **Primary:** Electric Cobalt background with Liquid White text, padded at `14px 28px`.
- **Hover:** Scales up `1.02x` with a fast, subtle transition.

### Cards / Containers
- **Corner Style:** `26px` rounded corners.
- **Background:** `rgba(255, 255, 255, 0.015)` with `backdrop-filter: blur(32px)`.
- **Border:** `1px solid rgba(255, 255, 255, 0.04)`.

### Skill Pills
- **Style:** Compact capsule, `rgba(255, 255, 255, 0.04)` background, `1px` subtle outline, JetBrains Mono tags.
- **Hover:** Scales `1.03x` with a soft light sweep effect.

## Do's and Don'ts

### Do:
- **Do** align the horizontal margins of the Skills marquee card and Projects card container (use `max-width: 1120px; margin: 80px auto;` for block components).
- **Do** use GSAP timeScale properties to decelerate animations smoothly on user interaction, rather than pausing abruptly.
- **Do** use CSS masks to fade out scrolling tracks towards the edges of the parent container.

### Don't:
- **Don't** use solid or dark black borders on glass cards.
- **Don't** stack multiple glass panels on top of each other without increasing the background blur factor (`backdrop-filter`).
- **Don't** introduce generic, un-curated colors (like standard bright red or green) for alerts or indicators.
