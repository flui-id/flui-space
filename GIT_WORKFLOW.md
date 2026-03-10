# Git Setup & Workflow Guide

## 🚀 Initial Setup

### 1. Repository Initialisierung (auf deinem MacBook)

```bash
# Navigiere zum Projekt-Ordner
cd /pfad/zu/flui-space

# Git initialisieren
git init

# Alle Dateien zum Staging hinzufügen
git add .

# Initial Commit
git commit -m "Initial commit: FLUI.SPACE v1.0.0 - Circular Ecosystems Architect Portfolio"

# Branch umbenennen (falls noch 'master')
git branch -M main
```

### 2. GitHub Repository erstellen

**Option A: Via GitHub Web Interface**
1. Gehe zu: https://github.com/new
2. Repository Name: `flui-space`
3. Description: "Circular Ecosystems Architect Portfolio"
4. Public/Private: Deine Wahl
5. **NICHT** initialisieren mit README, .gitignore oder License (wir haben diese schon!)
6. Create Repository

**Option B: Via GitHub CLI (falls installiert)**
```bash
# Install GitHub CLI (falls noch nicht vorhanden)
brew install gh

# Authentifizieren
gh auth login

# Repository erstellen
gh repo create flui-space --public --source=. --remote=origin --push
```

### 3. Lokales Repository mit GitHub verbinden

```bash
# Remote hinzufügen (ersetze DEIN-USERNAME)
git remote add origin https://github.com/DEIN-USERNAME/flui-space.git

# Initial Push
git push -u origin main
```

---

## 🔄 Täglicher Workflow

### Änderungen committen

```bash
# Status checken
git status

# Geänderte Dateien hinzufügen
git add .
# ODER spezifische Dateien:
git add index.html styles.css

# Commit mit aussagekräftiger Message
git commit -m "feat: Add projects section"
# ODER für Bug-Fixes:
git commit -m "fix: Correct mobile spacing in header"

# Push zu GitHub
git push origin main
```

### Commit Message Convention (empfohlen)

```bash
feat:     # Neue Features
fix:      # Bug-Fixes
docs:     # Dokumentation
style:    # Formatierung, keine Code-Änderung
refactor: # Code-Umstrukturierung
perf:     # Performance-Verbesserung
test:     # Tests hinzufügen
chore:    # Build-Tasks, Dependencies

# Beispiele:
git commit -m "feat: Add contact form component"
git commit -m "fix: Resolve mobile navigation overflow"
git commit -m "docs: Update deployment instructions"
git commit -m "style: Format CSS according to guidelines"
```

---

## 🌿 Branch-Management (für größere Features)

### Feature Branch erstellen

```bash
# Neuen Branch erstellen und wechseln
git checkout -b feature/blog-integration

# Änderungen machen...
# (Code schreiben)

# Committen
git add .
git commit -m "feat: Add blog markdown parser"

# Push Feature Branch
git push -u origin feature/blog-integration
```

### Feature Branch mergen

```bash
# Zurück zu main
git checkout main

# Feature Branch mergen
git merge feature/blog-integration

# Push nach GitHub
git push origin main

# Optional: Feature Branch löschen
git branch -d feature/blog-integration
git push origin --delete feature/blog-integration
```

---

## 👥 Team Collaboration

### Repository für Team-Mitglieder zugänglich machen

**GitHub:**
1. Repository → Settings → Collaborators
2. Add people → Email/Username eingeben
3. Invitation senden

### Pull Request Workflow

```bash
# Team-Mitglied erstellt Feature Branch
git checkout -b feature/neue-funktion

# Entwickelt Feature...
git add .
git commit -m "feat: Neue Funktion implementiert"

# Push Branch zu GitHub
git push -u origin feature/neue-funktion

# Auf GitHub: Create Pull Request
# → Code Review durch dich
# → Merge wenn approved
```

---

## 🔧 Nützliche Git-Commands

### Änderungen rückgängig machen

```bash
# Unstaged Änderungen verwerfen
git checkout -- index.html

# Alle unstaged Änderungen verwerfen
git checkout -- .

# Letzten Commit rückgängig machen (Änderungen behalten)
git reset --soft HEAD~1

# Letzten Commit komplett löschen (VORSICHT!)
git reset --hard HEAD~1
```

### History anschauen

```bash
# Log anzeigen
git log

# Log kompakt
git log --oneline

# Log mit Graph
git log --graph --oneline --all

# Änderungen einer Datei anzeigen
git log -p index.html
```

### Branch-Übersicht

```bash
# Lokale Branches anzeigen
git branch

# Alle Branches (inkl. remote)
git branch -a

# Branch löschen
git branch -d branch-name
```

---

## 🚨 Troubleshooting

### Merge Conflicts

```bash
# Conflict entsteht beim Merge
git merge feature-branch
# → CONFLICT in index.html

# Datei öffnen und Conflicts manuell lösen
# (<<<<<<< HEAD ... >>>>>>> feature-branch)

# Nach Lösung:
git add index.html
git commit -m "fix: Resolve merge conflict in header"
```

### Versehentlich falschen Branch gepusht

```bash
# Remote Branch löschen
git push origin --delete falscher-branch

# Richtigen Branch pushen
git checkout main
git push origin main
```

### "fatal: remote origin already exists"

```bash
# Remote entfernen
git remote remove origin

# Neu hinzufügen
git remote add origin https://github.com/DEIN-USERNAME/flui-space.git
```

---

## 📱 Git auf iPhone (via Working Copy App)

### Setup

1. **App installieren:**
   - Working Copy (empfohlen, Pro für Push-Funktion)
   - GitHub App (basic Git-Funktionen)

2. **Repository klonen:**
   - Open Working Copy
   - → Clone Repository
   - → GitHub Login
   - → flui-space auswählen

3. **Änderungen machen:**
   - Datei in Working Copy bearbeiten
   - → Stage Changes
   - → Commit
   - → Push (Pro-Version erforderlich)

---

## 🔐 SSH Setup (empfohlen für häufiges Pushen)

```bash
# SSH Key generieren (auf MacBook)
ssh-keygen -t ed25519 -C "deine-email@example.com"

# Key zu ssh-agent hinzufügen
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Public Key anzeigen
cat ~/.ssh/id_ed25519.pub

# Auf GitHub:
# Settings → SSH and GPG keys → New SSH key
# → Key einfügen → Add

# Remote URL auf SSH ändern
git remote set-url origin git@github.com:DEIN-USERNAME/flui-space.git
```

---

## ✅ Workflow Checkliste

**Vor dem Entwickeln:**
- [ ] `git pull origin main` (Updates holen)
- [ ] `git status` (Sauberer Zustand?)

**Nach dem Entwickeln:**
- [ ] Änderungen testen (lokal)
- [ ] `git status` (Alle Dateien gecheckt?)
- [ ] `git add .`
- [ ] `git commit -m "aussagekräftige message"`
- [ ] `git push origin main`

**Bei größeren Features:**
- [ ] Feature Branch erstellen
- [ ] Entwickeln & Committen
- [ ] Pull Request auf GitHub
- [ ] Code Review
- [ ] Merge

---

## 📊 Git Aliases (optional, für Effizienz)

```bash
# Git Aliases setzen
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.pl pull
git config --global alias.ps push

# Verwendung:
git st      # statt git status
git co main # statt git checkout main
git cm -m "message" # statt git commit -m "message"
```

---

**Happy Coding! 🚀**
