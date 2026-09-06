# Repository Analysis - Juliet Arakal Portfolio Website

**Last Updated:** 2026-09-06
**Claude Analysis Version:** 1.0
**Repository:** julietarakal.github.io

---

## Overview

This is a Jekyll-based portfolio website for **Juliet Arakal**, a Voice Over Artist and English Newsreader with All India Radio. The site showcases her voice-over work, portfolio samples, and contact information.

### Key Information
- **Platform:** Jekyll static site generator
- **Hosting:** GitHub Pages (julietarakal.github.io)
- **Current Branch:** jekyll-site
- **Main Branch:** main
- **Base Location:** Based in Bangalore, India
- **Studio Setup:** Home studio

---

## Repository Structure

```
julietarakal.github.io/
├── _config.yml              # Jekyll configuration
├── _data/
│   ├── content.yml          # Main content data (text, portfolio items)
│   └── navigation.yml       # Navigation menu structure
├── _includes/               # Reusable page components
│   ├── masthead.html       # Hero section
│   ├── about.html          # About section
│   ├── portfolio.html      # Portfolio with media samples
│   ├── contact.html        # Contact form
│   ├── header.html         # Site header
│   ├── footer.html         # Site footer
│   ├── navigator.html      # Navigation component
│   └── scripts.html        # JavaScript includes
├── _layouts/
│   └── default.html        # Main page layout template
├── _posts/                 # Blog posts (Jekyll default)
├── _site/                  # Generated static site (git ignored)
├── assets/
│   ├── videos/             # Portfolio video samples
│   └── audio/              # Portfolio audio samples
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── scripts.js          # Main JavaScript
│   └── emailscript.js      # Email form handling
├── index.html              # Homepage (uses default layout)
├── about.markdown          # About page (standard Jekyll)
├── Gemfile                 # Ruby dependencies
└── Gemfile.lock           # Locked dependency versions
```

---

## Content Management

### Primary Content File: `_data/content.yml`

This is the **single source of truth** for most content. Update this file to change:

- Site name and title
- Main heading and subheadings
- About section text
- Portfolio descriptions
- Contact information
- Media file references

**Key Fields:**
```yaml
name: Juliet Arakal
title: Voice Over Professional - Juliet Arakal
mainsectionpart1: Welcome message
mainsectionpart1a1: Brief introduction
address: Physical address in Bangalore
about: About section content
portfolioitempart1: Portfolio introduction
contactmetext: Contact section text

# Portfolio Media
corpvideos: Corporate video samples
docuvideos: Documentary video samples
newsvideos: News coverage samples
ivrsenglishaudios: English IVR samples
ivrshindiaudios: Hindi IVR samples
elearningenglishaudios: English e-learning samples
elearninghindiaudios: Hindi e-learning samples
youtubevoiceaudios: YouTube voice samples
```

### Location Information
- **Current:** Based in Bangalore, India (updated 2026-09-06)
- **Address:** 19081, Tower 19 Prestige Ferns Residency, Haralur Road, Bangalore South 560102 Karnataka India

---

## Common Tasks

### 1. Update Content (Text)
**File:** `_data/content.yml`

```yaml
# Example: Update about section
about: >
  New about text here...
```

### 2. Add/Update Portfolio Items

**Videos:**
```yaml
corpvideos:
  - name: Video Title
    media: assets/videos/filename.mp4
```

**Audio:**
```yaml
ivrsenglishaudios:
  - media: assets/audio/filename.mp3
```

### 3. Change Styling
**File:** `css/styles.css`

Custom styles for colors, fonts, spacing, etc.

### 4. Modify Page Sections
**Files:** `_includes/*.html`

Each section is a separate include file that can be edited independently.

---

## Development Workflow

### Running Locally

```bash
# Start Jekyll development server
bundle exec jekyll serve --host 0.0.0.0

# Access at: http://localhost:4000/
# Server has auto-regeneration enabled
```

**Build Time:** ~30 seconds initial build, <1 second for updates

### Making Changes

1. **Edit files** (content, styles, templates)
2. **Jekyll auto-regenerates** (watch server output)
3. **Refresh browser** to see changes
4. **Commit when satisfied**

### Git Workflow

```bash
# Check status
git status

# View changes
git diff

# Stage specific files
git add _data/content.yml

# Commit with message
git commit -m "Description of changes

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# Push to remote
git push origin jekyll-site
```

---

## Recent Changes

### 2026-09-06
- **Updated location:** Changed from "Based in Pune" to "Based in Bangalore" in about section
- **File modified:** `_data/content.yml`
- **Commit:** dad8384 "Update location from Pune to Bangalore in about section"
- **Status:** Committed and pushed to remote

### Historical Context (from git log)
- 97f13cd: Changed the sub heading
- 3ea8158: Changes to css on heading
- 6afd49a: Changes on 03 Mar 2024 templates and css
- 419d9c2: Changes on 03 March 2024
- bebe4e5: Added home credit personal loan

---

## Technical Details

### Jekyll Configuration (`_config.yml`)
```yaml
title: Your awesome title
theme: minima
plugins:
  - jekyll-feed
show_sidebar: true
```

**Note:** Config changes require server restart

### Dependencies (Gemfile)
- Jekyll
- jekyll-feed plugin
- Minima theme (base theme, heavily customized)

### Page Structure
```html
<!-- index.html uses modular includes -->
layout: default
  ├── masthead.html (hero section)
  ├── about.html (about section)
  ├── portfolio.html (portfolio section)
  └── contact.html (contact section)
```

---

## Media Assets

### Video Samples
- **Corporate:** Home Credit, AU Bank, Arya College, Reprosci
- **Documentary:** Nand & Jeet Khemka Foundation, Fertilator, Covid-19 news
- **News:** All India Radio studio coverage
- **YouTube:** Saffron oil ad, incense stick ad

### Audio Samples
- **IVRs:** English and Hindi samples
- **E-Learning:** English (general + instructional) and Hindi (general + religious)

**Location:** `/assets/videos/` and `/assets/audio/`

---

## Quick Reference

### File You'll Edit Most
- `_data/content.yml` - 90% of content updates

### Files for Design Changes
- `css/styles.css` - Visual styling
- `_includes/*.html` - Section layouts

### Don't Edit
- `_site/` - Auto-generated, git ignored
- `.jekyll-cache/` - Build cache
- `Gemfile.lock` - Managed by bundler

---

## Useful Commands

```bash
# Development
bundle exec jekyll serve          # Start dev server
bundle exec jekyll build          # Build site once
bundle exec jekyll clean          # Clear cache

# Git
git status                        # Check changes
git diff                          # View changes
git log --oneline -10             # Recent commits
git branch                        # List branches

# File Operations
ls -la _data/                     # List data files
cat _data/content.yml             # View content
```

---

## Future Considerations

### Potential Framework Migration
User expressed interest in migrating from Jekyll to a more modern framework. Considerations:
- **Current:** Jekyll (Ruby-based, slow builds ~30s)
- **Alternatives:** Next.js, Astro, 11ty (faster builds, modern tooling)
- **Decision pending:** User feedback on requirements

### Plugin Marketplace Issue
- **Status:** Unable to add Claude CLI plugin marketplaces
- **Version:** 2.1.263 (latest)
- **Error:** Schema validation failures
- **Action:** Bug reported to Anthropic via `/feedback`

---

## Contact Information

**Website Owner:** Juliet Arakal
**Email:** julietarakal@gmail.com
**Location:** Bangalore, India
**Services:** Voice Over, English News Reading

---

## Notes for Future Sessions

1. **Always read this file first** to understand the repository structure
2. **Update this file** when making significant changes or discoveries
3. **Content changes** go through `_data/content.yml`
4. **Jekyll server** takes ~30s to build initially
5. **Current branch** is `jekyll-site`, not `main`
6. **GitHub Pages** auto-deploys from the repository

---

**End of Analysis**
