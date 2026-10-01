# Fichiers à remplacer dans votre repo GitHub

## Ce ZIP contient
- `index.html` — la version complète et à jour du site (logo, textes, bouton Apply vers votre Google Form). Tout le CSS et le JS sont **déjà intégrés dedans**.

## Dans votre repo GitHub, faites ceci

**1. Remplacer**
- `index.html` → écrasez avec celui-ci.

**2. Supprimer (ne servent plus à rien avec cette version)**
- `style.css`
- `styles.css`
- `script.js`
- `jdai_partnership_contractor_site_updated` (et le logo qui s'y trouvait)
- `dj_ai_partnership_recruitment_platform.zip` (sauf si vous voulez qu'on regarde son contenu séparément)
- `dj-ai-partnership-llc-logo.png` (le logo est déjà intégré dans `index.html`, plus besoin d'un fichier séparé)

**3. Garder tel quel (ne pas toucher)**
- `CNAME` — lié à votre nom de domaine personnalisé
- `robots.txt`
- `sitemap.xml`
- `googlee30496626dd58ba6 (1).html` et `(2).html` — fichiers de vérification Google Search Console, nécessaires si vous avez déjà vérifié votre domaine sur Google

## Pourquoi nettoyer

Avoir deux fichiers CSS (`style.css` et `styles.css`) et des restes de versions précédentes crée de la confusion sur quelle version est réellement en ligne, et peut faire planter l'affichage si GitHub Pages charge le mauvais fichier. Un seul `index.html` autonome évite ce problème.
