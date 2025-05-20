# Calorie Tracker

Ce projet est une application web permettant de suivre les calories et les macronutriments en fonction des informations de profil de l'utilisateur. L'application calcule le TDEE (Total Daily Energy Expenditure), les objectifs caloriques, et les macronutriments (protéines, glucides, lipides) en fonction des données saisies par l'utilisateur.

## Fonctionnalités

- **Profil Utilisateur** : Saisie des informations personnelles (âge, taille, poids, tour de taille, sexe, niveau d'activité, objectif).
- **Calculs Automatiques** : Calcul du TDEE, des objectifs caloriques, et des macronutriments.
- **Affichage des Résultats** : Visualisation des résultats calculés sur une page dédiée.
- **Stockage des Données** : Sauvegarde des données utilisateur dans Firestore.

## Technologies Utilisées

- **React** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **TypeScript** : Langage de programmation typé basé sur JavaScript.
- **Firebase** : Plateforme pour le développement d'applications web et mobiles, utilisée pour l'authentification et le stockage des données.
- **Tailwind CSS** : Framework CSS pour la conception d'interfaces utilisateur modernes.

## Installation

1. **Cloner le Répertoire** :
   ```bash
   git clone https://github.com/votre-utilisateur/calorie-tracker.git
   cd calorie-tracker
   ```

2. **Installer les Dépendances** :
   ```bash
   pnpm install
   ```

3. **Configurer Firebase** :
   - Créez un projet sur [Firebase](https://firebase.google.com/).
   - Ajoutez une application web et configurez l'authentification et Firestore.
   - Copiez les informations de configuration dans un fichier `src/firebase.ts`.

4. **Lancer l'Application** :
   ```bash
   pnpm dev
   ```

## Utilisation

1. **Compléter le Profil** : Remplissez les informations demandées dans le formulaire de profil.
2. **Générer les Résultats** : Cliquez sur le bouton "Generate" pour calculer et afficher les résultats.
3. **Consulter les Résultats** : Les résultats seront affichés sur la page de résultats, incluant le bodyfat actuel, les calories quotidiennes, et les macronutriments.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.