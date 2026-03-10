# FLUI.SPACE v1.0.0

**Circular Ecosystems Architecture**  
Digital Portfolio — Jonas Brosch

---

## 🎯 Projektübersicht

Modulare, brutalistisch-technokratische digitale Visitenkarte mit Fokus auf:
- **Saubere Code-Architektur** für zukünftige Erweiterungen
- **Performance** (Vanilla JS, keine Dependencies)
- **Accessibility** (WCAG 2.1 AA konform)
- **Responsive Design** (Mobile First)

---

## 📁 Projektstruktur

```
flui-space/
│
├── index.html          # Semantisches HTML5-Markup
├── styles.css          # Modulares CSS mit Custom Properties
├── script.js           # Modular JavaScript (ES6+)
├── README.md           # Diese Datei
└── assets/             # (Zukünftig: Fonts, Icons, etc.)
```

---

## 🏗️ Architektur-Prinzipien

### 1. Modularität
Jede Komponente ist isoliert und kann unabhängig erweitert werden:

**HTML:**
```html
<section class="experience" role="region">
    <h2 class="section-label">EXPERIENCE LOG</h2>
    <!-- Artikel können beliebig hinzugefügt werden -->
</section>
```

**CSS:**
```css
/* Tokens sind zentral definiert */
:root {
    --color-accent: #FFFF00;
    --space-md: 40px;
}

/* Komponenten nutzen diese Tokens */
.experience__item {
    padding: var(--space-md);
}
```

**JavaScript:**
```javascript
const GridOverlay = {
    init() { /* ... */ },
    toggle() { /* ... */ }
};
```

### 2. Skalierbarkeit

**Neue Sektionen hinzufügen:**
1. HTML-Block in `index.html` einfügen
2. Styling in entsprechende CSS-Sektion kopieren
3. Falls interaktiv: Modul in `script.js` erstellen

**Beispiel — Neue Sektion "Projects":**

```html
<!-- In index.html -->
<section class="projects" role="region" aria-labelledby="projects-heading">
    <h2 id="projects-heading" class="section-label">PROJECTS</h2>
    <!-- Content -->
</section>
```

```css
/* In styles.css unter "PROJECTS SECTION" */
.projects {
    margin-bottom: var(--space-xl);
    animation: fadeInUp var(--transition-slow) 0.8s both;
}
```

### 3. Design System

**Grid-basiertes Layout:**
- Base Unit: 20px
- Spacing folgt `20px * n` (10, 20, 40, 60, 80, 120)
- Press `g` um Grid Overlay zu aktivieren

**Typografie:**
- Display: Rajdhani (Bold/Medium)
- Body: System Sans-Serif Stack

**Farben:**
```css
--color-base: #050505       /* Deep Black */
--color-accent: #FFFF00     /* Guerilla Yellow */
--color-text-primary: #FFF  /* White */
--color-text-secondary: #666 /* Gray */
```

---

## 🚀 Deployment

### Option 1: Hostinger (Empfohlen)

1. **Repository erstellen:**
```bash
cd /pfad/zu/projekt
git init
git add .
git commit -m "Initial commit: FLUI.SPACE v1.0.0"
```

2. **GitHub verbinden:**
```bash
git remote add origin https://github.com/DEIN-USERNAME/flui-space.git
git branch -M main
git push -u origin main
```

3. **Hostinger Setup:**
   - Gehe zu: Hostinger Dashboard → Git Deployment
   - Repository URL eingeben
   - Branch: `main`
   - Auto-Deploy aktivieren

4. **Custom Domain:**
   - Domain bei Hostinger registrieren/verbinden
   - DNS A-Record auf Server-IP setzen
   - SSL-Zertifikat aktivieren (Let's Encrypt)

### Option 2: GitHub Pages

```bash
# In deinem Repository:
Settings → Pages → Source: main branch → Save
# URL: https://DEIN-USERNAME.github.io/flui-space
```

### Option 3: Netlify/Vercel

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /pfad/zu/projekt
netlify deploy --prod
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd /pfad/zu/projekt
vercel --prod
```

---

## 🛠️ Entwicklung

### Lokaler Development Server

**Option 1: Python (macOS Built-in)**
```bash
cd /pfad/zu/projekt
python3 -m http.server 8000
# Open: http://localhost:8000
```

**Option 2: Node.js (Live-Reload)**
```bash
# Install
npm install -g live-server

# Run
cd /pfad/zu/projekt
live-server
```

### Grid Overlay
Press `g` im Browser um das Entwicklungs-Grid zu aktivieren.

### Performance Testing
```bash
# Lighthouse in Chrome DevTools
# Open DevTools → Lighthouse → Generate Report
```

---

## 📱 Responsiveness

**Breakpoints:**
```css
/* Mobile First Approach */
/* Default: < 768px */

@media (min-width: 768px) {
    /* Tablet */
}

@media (min-width: 1024px) {
    /* Desktop */
}
```

**Test auf iPhone 11:**
- Safari DevTools → Responsive Design Mode
- Viewport: 414 × 896
- Test Touch-Interaktionen

---

## ♿ Accessibility

**Implementiert:**
- ✅ Semantisches HTML5 (header, main, section, article)
- ✅ ARIA-Labels für interaktive Elemente
- ✅ Keyboard-Navigation (Tab, Enter, Focus States)
- ✅ Skip-to-Content Link
- ✅ Kontrastverhältnis Yellow/Black: 19.56:1 (AAA)
- ✅ Reduced Motion Support

**Testen:**
```bash
# VoiceOver (macOS)
CMD + F5

# Keyboard Navigation
Tab → Fokus-Reihenfolge prüfen
Enter → Links aktivieren
```

---

## 🔄 Zukünftige Erweiterungen

### Phase 2: Enhanced Features
- [ ] Blog-Integration (Markdown → HTML)
- [ ] Project Showcase mit Filterfunktion
- [ ] Dark/Light Mode Toggle
- [ ] Animations mit GSAP
- [ ] Contact Form mit Backend

### Phase 3: Web3 Integration
- [ ] Ethereum Wallet Connect
- [ ] IPFS Deployment
- [ ] ENS Domain (flui.eth)
- [ ] On-Chain Credentials (POAPs)

### Phase 4: Team Collaboration
- [ ] Component Library (Storybook)
- [ ] Design Tokens Export (Figma Plugin)
- [ ] CI/CD Pipeline (GitHub Actions)
- [ ] Multi-Language Support (i18n)

---

## 🔧 Troubleshooting

**Fonts werden nicht geladen:**
```css
/* Lokale Fallback-Fonts sind aktiv */
/* Rajdhani kann später via Google Fonts oder lokal eingebunden werden */
```

**Grid Overlay funktioniert nicht:**
```javascript
// Check Console für Errors
// Sicherstellen dass script.js geladen wurde
```

**Mobile Layout bricht:**
```css
/* Check viewport meta tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

---

## 📄 License

© 2025 Jonas Brosch. All Rights Reserved.

---

## 👤 Kontakt

**Jonas Brosch**  
Circular Ecosystems Architect

- LinkedIn: [linkedin.com/in/jonas-brosch](https://www.linkedin.com/in/jonas-brosch/)
- Portfolio: [Coming Soon]
- Email: [Contact via LinkedIn]

---

**Version:** 1.0.0  
**Build:** 240309  
**Status:** 🟢 Production Ready
