# 🕌 MyAdhan Landing Page

Site de présentation moderne et responsive pour l'application MyAdhan - Votre compagnon de prière intelligent.

## 🚀 Fonctionnalités

### ✨ Design Moderne

- **Design responsive** adapté à tous les appareils
- **Animations fluides** avec Framer Motion
- **Gradients et effets visuels** modernes
- **Navigation fluide** avec scroll automatique

### 📱 Sections Principales

1. **Hero Section** - Présentation principale avec CTA
2. **Fonctionnalités** - 6 fonctionnalités clés de l'app
3. **Premium** - Plans d'abonnement avec comparaison
4. **Téléchargement** - Liens vers les stores
5. **À propos** - Statistiques et mission
6. **Footer** - Liens et informations légales

### 🎨 Technologies Utilisées

- **React 19** - Framework principal
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations avancées
- **Lucide React** - Icônes modernes

## 🛠️ Installation

```bash
# Cloner le repository
git clone [repository-url]
cd prayer-times-landing

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du Projet

```
prayer-times-landing/
├── public/                 # Assets statiques
├── src/
│   ├── App.jsx            # Composant principal
│   ├── App.css            # Styles personnalisés
│   ├── main.jsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── index.html             # Template HTML
├── package.json           # Dépendances
├── vite.config.js         # Configuration Vite
└── tailwind.config.js     # Configuration Tailwind
```

## 🎯 Sections Détaillées

### Hero Section

- Titre accrocheur avec gradient
- Description claire de l'application
- Boutons CTA (Télécharger, Démo)
- Statistiques utilisateurs

### Fonctionnalités

- **Horaires Précis** - Calculs automatiques
- **Direction Qibla** - Boussole intégrée
- **Contenu Religieux** - Coran, Hadiths, Dhikr
- **Notifications Intelligentes** - Widget Android
- **13 Langues** - Support multilingue
- **Mode Hors Ligne** - Fonctionnement offline

### Plans Premium

- **Mensuel** - 1.99€/mois
- **Annuel** - 19.99€/an (économisez 17%)
- **Familial** - 29.99€/an (jusqu'à 6 membres)

### Statistiques

- 50,000+ utilisateurs actifs
- 13 langues supportées
- 4.8/5 étoiles
- 1615€ d'économies réalisées

## 🎨 Personnalisation

### Couleurs

```css
/* Couleurs principales */
--primary: #10b981 (emerald-600)
--secondary: #3b82f6 (blue-600)
--accent: #8b5cf6 (purple-600)
```

### Animations

- **Fade In Up** - Apparition des éléments
- **Hover Effects** - Effets de survol
- **Scroll Animations** - Animations au scroll
- **Parallax** - Effets de profondeur

## 📱 Responsive Design

### Breakpoints

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

### Optimisations

- Images optimisées
- Lazy loading
- Preconnect pour les fonts
- Compression CSS/JS

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Upload du dossier dist/
```

### GitHub Pages

```bash
npm run build
# Push du dossier dist/ sur gh-pages
```

## 📊 Performance

### Lighthouse Score

- **Performance** : 95+
- **Accessibility** : 100
- **Best Practices** : 100
- **SEO** : 100

### Optimisations

- Code splitting automatique
- Images WebP
- Minification CSS/JS
- Cache headers optimisés

## 🔧 Configuration

### Variables d'Environnement

```env
VITE_APP_TITLE=MyAdhan
VITE_APP_DESCRIPTION=Application horaires de prière
VITE_API_URL=https://myadhanapp.com/api
```

### Tailwind Config

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#3b82f6",
      },
    },
  },
};
```

## 📈 Analytics

### Google Analytics

```javascript
// Ajouter dans index.html
gtag("config", "GA_MEASUREMENT_ID");
```

### Hotjar

```javascript
// Ajouter pour le tracking utilisateur
```

## 🐛 Dépannage

### Problèmes Courants

1. **Build échoue** - Vérifier les dépendances
2. **Animations lentes** - Optimiser les images
3. **SEO manquant** - Vérifier les meta tags

### Debug

```bash
# Vérifier les erreurs
npm run lint

# Analyser le bundle
npm run build -- --analyze
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

## 📞 Support

- **Email** : support@myadhanapp.com
- **Documentation** : [docs.myadhanapp.com](https://docs.myadhanapp.com)
- **Issues** : [GitHub Issues](https://github.com/myadhan/landing/issues)

---

**Développé avec ❤️ pour la communauté musulmane**
