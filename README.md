# Pêche Mel'Ba - Site Vitrine

Site vitrine pour la pâtisserie **Pêche Mel'Ba**.

## 🎨 Fonctionnalités

- **Design responsive** - S'adapte à tous les écrans (mobile, tablette, desktop)
- **Navigation fluide** - Menu de navigation avec smooth scroll
- **Galerie automatique** - Charge automatiquement les photos depuis le dossier `assets/photo/`
- **Formulaire de contact** - Section contact avec formulaire intégré
- **Animations** - Effets visuels élégants au scroll et au survol

## 📁 Structure du projet

```
PecheMel'ba/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript pour les interactions
├── assets/
│   ├── logo.png        # Logo (à ajouter)
│   └── photo/          # Dossier pour les photos de pâtisseries
└── README.md           # Ce fichier
```

## 🚀 Utilisation

1. **Ouvrir le site** : Double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur
2. **Ajouter des photos** : Placez vos photos de pâtisseries dans `assets/photo/`
3. **Personnaliser** : Modifiez le texte, les couleurs et les informations selon vos besoins

## 📸 Galerie de photos

Le site charge automatiquement les images depuis `assets/photo/`. Les noms de fichiers supportés :
- patisserie1.jpg, patisserie2.jpg, etc.
- gateau1.jpg, gateau2.jpg, etc.
- tarte1.jpg, tarte2.jpg, etc.
- macaron1.jpg, etc.

Vous pouvez ajouter d'autres noms dans le fichier `script.js` (tableau `possibleImages`).

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `styles.css` :
```css
:root {
    --primary-color: #ff9fb3;      /* Rose principal */
    --secondary-color: #ffd4a3;    /* Pêche */
    --accent-color: #ffb6c1;       /* Rose clair */
}
```

### Informations de contact
Modifiez les informations dans la section `#contact` de `index.html` :
- Adresse
- Téléphone
- Email
- Horaires d'ouverture

### Logo
Placez votre logo dans `assets/logo.png` (formats supportés : PNG, JPG, SVG)

## 🌐 Mise en ligne

Pour mettre le site en ligne, vous pouvez utiliser :
- **GitHub Pages** (gratuit)
- **Netlify** (gratuit)
- **Vercel** (gratuit)
- Votre hébergeur web habituel

## 📱 Sections du site

1. **Accueil** - Présentation avec call-to-action
2. **Nos Créations** - Galerie de photos des pâtisseries
3. **À Propos** - Histoire et présentation de la pâtisserie
4. **Contact** - Informations de contact et formulaire

## 💡 Conseils

- Utilisez des images de haute qualité (mais optimisées pour le web)
- Recommandé : 1200x800px, format JPG, poids < 500Ko par image
- Mettez à jour régulièrement les photos pour montrer vos nouvelles créations
- Pensez à ajouter vos liens de réseaux sociaux dans le footer

---

Créé avec ❤️ pour Pêche Mel'Ba
