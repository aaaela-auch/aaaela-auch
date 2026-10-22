# Site de l'Amicale (AAAELA) – mode d'emploi

- Le site public est généré par **Eleventy** à partir des fichiers de `src/`.
- L'espace d'administration est à l'adresse **/admin** (ex. https://aaaela.netlify.app/admin).
- Textes des pages : `src/pages/*.md` · Bandeau, photo d'accueil, pied de page : `src/_data/site.yml`
- Cartes « Actualités » : `src/_data/actualites.yml` · Galerie d'archives : `src/_data/galerie.yml`
- Photos ajoutées depuis l'admin : `src/img/uploads/`

## Mise en ligne (une seule fois)
1. Créer un compte gratuit sur https://github.com puis un dépôt nommé `aaaela-site` et y déposer le contenu de ce dossier (Add file › Upload files).
2. Créer un compte gratuit sur https://www.netlify.com avec « Sign up with GitHub », puis Add new project › Import from Git › GitHub › `aaaela-site` › Deploy (les réglages sont lus dans `netlify.toml`).
3. GitHub › Settings › Developer settings › OAuth Apps › New OAuth App : Homepage = adresse Netlify du site, Callback URL = `https://api.netlify.com/auth/done`. Copier Client ID et générer un Client secret.
4. Netlify › Project configuration › Access & security › OAuth › Install provider › GitHub : coller Client ID et secret.
5. Dans `src/admin/config.yml`, remplacer `VOTRE-COMPTE-GITHUB/aaaela-site` par votre nom GitHub/aaaela-site, et `aaaela.netlify.app` par l'adresse réelle du site.

## Utilisation
Aller sur `/admin`, cliquer « Se connecter avec GitHub », modifier une page, cliquer **Publier › Publier maintenant**. Le site est mis à jour en 1 à 2 minutes.

## Test sur un ordinateur (facultatif, technique)
`npm install` puis, dans deux terminaux : `npm start` et `npm run cms` → http://localhost:8080/admin/
