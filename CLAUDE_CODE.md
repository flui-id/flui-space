# Claude Code Integration Guide

## 🤖 Über Claude Code

Claude Code ist ein Kommandozeilen-Tool, das es ermöglicht, Coding-Tasks direkt von deinem Terminal an Claude zu delegieren. Ideal für:
- Automatisierte Code-Generierung
- Refactoring-Tasks
- Bug-Fixing
- Feature-Implementation

---

## 📦 Installation

### Voraussetzungen

- **Node.js 18+** (LTS-Version empfohlen)
- **macOS, Windows oder Linux**
- **Anthropic API Key**

### Node.js Installation (falls noch nicht vorhanden)

**macOS (via Homebrew):**
```bash
brew install node
```

**macOS (via nvm - empfohlen):**
```bash
# nvm installieren
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Terminal neu starten oder:
source ~/.zshrc

# Node.js LTS installieren
nvm install --lts
nvm use --lts
```

**Verification:**
```bash
node --version  # sollte v18+ anzeigen
npm --version
```

### Claude Code Installation

```bash
# NPM Installation (global)
npm install -g claude-code

# Verification
claude-code --version
```

---

## 🔑 API Key Setup

### 1. Anthropic API Key erhalten

1. Gehe zu: https://console.anthropic.com/
2. Account erstellen/einloggen
3. → Settings → API Keys
4. → Create Key
5. Key kopieren (wird nur einmal angezeigt!)

### 2. API Key konfigurieren

**Option A: Environment Variable (empfohlen)**
```bash
# In ~/.zshrc oder ~/.bash_profile:
export ANTHROPIC_API_KEY="dein-api-key-hier"

# Reload:
source ~/.zshrc
```

**Option B: Claude Code Config**
```bash
claude-code config set apiKey dein-api-key-hier
```

**Verification:**
```bash
claude-code config show
```

---

## 🚀 Verwendung in FLUI.SPACE

### Basic Commands

**Im Projekt-Ordner:**
```bash
cd /pfad/zu/flui-space

# Claude Code starten
claude-code
```

### Beispiel-Workflows

#### 1. Neue Sektion hinzufügen

```bash
claude-code "Add a new 'Projects' section to index.html following the existing 
design pattern. Include 3 placeholder project cards with title, description, 
and tech stack. Update styles.css with matching brutalist styling."
```

#### 2. Responsive Bug fixen

```bash
claude-code "Fix mobile layout issue: Header text overflows on screens 
smaller than 375px. Adjust font-size clamp() values in styles.css to ensure 
proper scaling."
```

#### 3. Performance Optimierung

```bash
claude-code "Optimize script.js: 
1. Implement debouncing for scroll event listeners
2. Use requestAnimationFrame for animations
3. Add lazy loading for images (future-proof for when images are added)"
```

#### 4. Feature Implementation

```bash
claude-code "Implement a dark/light mode toggle:
1. Add toggle button in header
2. Create CSS custom property overrides for dark mode
3. Use localStorage to persist user preference
4. Add smooth transition animation
Follow the existing brutalist design system."
```

---

## 🔧 Advanced: MCP Server Integration

Claude Code unterstützt Model Context Protocol (MCP) für erweiterte Funktionen.

### GitHub MCP Server Setup

```bash
# Package installieren
npm install -g @anthropic-ai/mcp-server-github

# Config in ~/.claude/mcp-servers.json:
{
  "github": {
    "command": "mcp-server-github",
    "env": {
      "GITHUB_TOKEN": "dein-github-token"
    }
  }
}

# Verwendung:
claude-code "Check latest issues in my flui-space repository and create 
a prioritized task list"
```

### Weitere nützliche MCP Server

**Google Drive (für Dokumentation):**
```bash
npm install -g @anthropic-ai/mcp-server-google-drive
```

**Slack (für Team-Communication):**
```bash
npm install -g @anthropic-ai/mcp-server-slack
```

---

## 💡 Best Practices

### 1. Klare Task-Beschreibungen

**Gut:**
```bash
claude-code "Refactor the ScrollAnimations module in script.js: 
Extract observer configuration into a separate CONFIG object, 
add JSDoc comments, and implement error handling for missing elements."
```

**Schlecht:**
```bash
claude-code "make the scroll thing better"
```

### 2. Context bereitstellen

```bash
claude-code "I want to add a blog section. Current stack: Vanilla JS, 
no build tools. Blog posts should be stored as markdown files in /blog/ 
directory. Create a simple parser and renderer that follows the existing 
brutalist design system."
```

### 3. Iteratives Arbeiten

```bash
# Schritt 1: Grundgerüst
claude-code "Create basic structure for contact form component"

# Schritt 2: Validation
claude-code "Add client-side form validation with clear error messages"

# Schritt 3: Styling
claude-code "Apply brutalist styling consistent with existing design system"

# Schritt 4: Accessibility
claude-code "Ensure form is fully accessible with proper ARIA labels and 
keyboard navigation"
```

---

## 📁 Empfohlene Projekt-Struktur für Claude Code

```
flui-space/
├── src/
│   ├── components/       # Zukünftige Komponenten
│   ├── modules/          # JavaScript-Module
│   └── styles/           # CSS-Module
├── docs/                 # Dokumentation
│   ├── ARCHITECTURE.md   # System-Architektur
│   ├── COMPONENTS.md     # Komponenten-Docs
│   └── GUIDELINES.md     # Coding-Guidelines
├── .claude/              # Claude Code Config
│   └── context.md        # Projekt-Kontext für Claude
└── README.md
```

### .claude/context.md erstellen

```markdown
# FLUI.SPACE Context

## Project Overview
Brutalist portfolio website for Circular Ecosystems Architect Jonas Brosch.

## Tech Stack
- Vanilla HTML5, CSS3, ES6+ JavaScript
- No frameworks, no build tools
- Mobile-first responsive design

## Design System
- Grid: 20px base unit
- Colors: #050505 (base), #FFFF00 (accent)
- Typography: Rajdhani (display), System Sans (body)

## Coding Guidelines
- Modular architecture
- CSS Custom Properties for all design tokens
- ES6 modules with clear separation of concerns
- Extensive commenting for future maintainability

## Current Priorities
1. Performance optimization
2. Accessibility (WCAG 2.1 AA)
3. Progressive enhancement
```

---

## 🔄 Workflow-Integration

### Mit Git kombinieren

```bash
# Feature Branch erstellen
git checkout -b feature/blog-integration

# Claude Code Task delegieren
claude-code "Implement blog functionality as described in docs/FEATURES.md"

# Changes reviewen
git diff

# Committen
git add .
git commit -m "feat: Add blog integration via Claude Code"

# Push
git push origin feature/blog-integration
```

### CI/CD Integration (zukünftig)

```yaml
# .github/workflows/claude-review.yml
name: Claude Code Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Claude Code Review
        run: |
          npm install -g claude-code
          claude-code "Review this pull request for:
          1. Code quality
          2. Design system consistency
          3. Performance implications
          4. Accessibility issues"
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
```

---

## 📊 Cost Management

### API Usage Tracking

```bash
# Claude Code Usage anzeigen
claude-code usage

# Budget Limit setzen
claude-code config set budgetLimit 50  # $50/month
```

### Tipps zur Kostenoptimierung

1. **Konkrete Tasks:** Je spezifischer, desto effizienter
2. **Batch-Processing:** Mehrere kleinere Tasks zusammenfassen
3. **Local Development:** Simple Änderungen selbst machen
4. **Context Management:** Nur relevante Files im Kontext halten

---

## 🆘 Troubleshooting

### "Command not found: claude-code"

```bash
# NPM global bin path checken
npm config get prefix

# Sollte in PATH sein, sonst:
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### "API Key Invalid"

```bash
# Key neu setzen
claude-code config set apiKey dein-neuer-key

# Oder Environment Variable checken
echo $ANTHROPIC_API_KEY
```

### Rate Limiting

```bash
# Warten und retry, oder:
claude-code config set retryDelay 5000  # 5 Sekunden
```

---

## 🔮 Zukünftige Möglichkeiten

### Automatisiertes Testing

```bash
claude-code "Generate comprehensive test suite for all JavaScript modules 
using Jest. Include unit tests, integration tests, and accessibility tests."
```

### Documentation Generation

```bash
claude-code "Generate detailed JSDoc comments for all functions in script.js 
and create API documentation in docs/API.md"
```

### Refactoring

```bash
claude-code "Refactor styles.css to use CSS Modules pattern. Split into:
- _variables.css (design tokens)
- _layout.css (grid system)
- _components.css (all components)
- _utilities.css (helper classes)
Maintain backward compatibility."
```

---

## 📚 Ressourcen

- **Claude Code Docs:** https://docs.claude.com/en/docs/build-with-claude/claude-code
- **MCP Servers:** https://github.com/anthropics/anthropic-cookbook/tree/main/mcp
- **API Reference:** https://docs.anthropic.com/en/api/getting-started

---

**Happy Coding with Claude! 🚀🤖**
