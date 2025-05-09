# Calorie Tracker

Une application **React** mobile-first pour suivre votre apport calorique et vos macros, avec authentification **Firebase**, mise en page en **Tailwind CSS** et navigation protégée.

---

## 📖 Description

Calorie Tracker vous permet de :

- Créer un compte et compléter votre profil (poids, taille, âge, sexe, niveau d’activité et objectif).
- Visualiser votre TDEE (Total Daily Energy Expenditure) et votre objectif calorique ajusté selon votre objectif (perte, maintien, prise de masse).
- Consigner vos repas et suivre vos apports macros (protéines, lipides, glucides, calories).
- Gérer une balance d’eau quotidienne.
- Ajouter, modifier ou consulter des recettes.
- Mettre à jour vos paramètres de profil à tout moment.

L’app est optimisée pour le mobile (BottomNav) et s’adapte au desktop (navbar + sidebar).

---

## ⚙️ Tech Stack

- **Framework** : React (v18+)
- **Styling** : Tailwind CSS
- **Routing** : React Router v6
- **Auth & Database** : Firebase Auth & Firestore
- **Icons** : react-icons
- **State & Hooks** : Context API, hooks personnalisés
- **Utilities** : utilitaires de calcul nutritionnel

---

## 🚀 Getting Started

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/b0o0o0o/calorie-tracker.git
   cd calorie-tracker 
   ```
   
2. **Installer les dépendances**
   ```bash
    npm install
    # ou
    yarn
   ```
   
3. **Configurer les variables d’environnement**
Créez un fichier .env.local à la racine avec vos clés Firebase :
   ```bash
    VITE_FIREBASE_API_KEY=…
    VITE_FIREBASE_AUTH_DOMAIN=…firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=…
    VITE_FIREBASE_STORAGE_BUCKET=…appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=…
    VITE_FIREBASE_APP_ID=…
   ```
   
4. **Lancer le serveur de développement**
   ```bash
    npm run dev
    # ou
    yarn dev
   ```

5. **Ouvrir http://localhost:5173 dans votre navigateur.**

---

## 🗂️ Structure du projet

    ```bash
    calorie-tracker/
    ├─ .env.local             # Variables d’environnement Firebase
    ├─ tailwind.config.js     # Configuration Tailwind
    ├─ vite.config.ts         # Config Vite
    └─ src/
    ├─ App.tsx             # Point d’entrée React & Routes
    ├─ firebase.ts         # Init Firebase Auth & Firestore
    ├─ services/
    │  └─ auth.ts          # signup / signin / signout
    ├─ contexts/
    │  └─ AuthContext.tsx  # useAuth() & AuthProvider
    ├─ hooks/
    │  ├─ useProfileFields.ts   # config champs profil
    │  └─ useUserProfileState.ts# état utilisateur partagé
    ├─ utils/
    │  └─ nutrition.ts     # calcTDEE & calcCaloricGoal
    ├─ components/
    │  ├─ Layout.tsx
    │  ├─ Navbar.tsx
    │  ├─ Sidebar.tsx
    │  ├─ BottomNav.tsx
    │  ├─ FormField.tsx
    │  ├─ ProfileForm.tsx
    │  └─ FormPageLayout.tsx
    └─ pages/
    ├─ SignUp.tsx
    ├─ SignIn.tsx
    ├─ Profile.tsx
    ├─ Settings.tsx
    ├─ Home.tsx
    ├─ Diary.tsx
    ├─ Recipes.tsx
    └─ NotFound.tsx       # (optionnel)
    ```
Configuration Firebase (src/firebase.ts)

Service d’auth (src/services/auth.ts)

Contexte d’authentification (src/contexts/AuthContext.tsx)

Routes et Layout (src/App.tsx, Layout.tsx, Navbar.tsx, Sidebar.tsx, BottomNav.tsx)

Hooks (useProfileFields.ts, useUserProfileState.ts)

Utilitaires nutritionnels (src/utils/nutrition.ts)

Pages principales (SignUp.tsx, SignIn.tsx, Profile.tsx, Settings.tsx, Home.tsx, Diary.tsx, Recipes.tsx)

Composants réutilisables (FormField.tsx, ProfileForm.tsx, FormPageLayout.tsx)

---

## 📜 Scripts utiles

- `npm run dev` / `yarn dev` : démarre le serveur de dev.
- `npm run build` / `yarn build` : génère le build de production.
- `npm run preview` / `yarn preview` : prévisualise le build.

---

## 🤝 Contribuer

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout : nouvelle fonctionnalité'`)
4. Pushez (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

---

## 📄 License

Ce projet est sous licence MIT.

---

Bonne traque ! 🚀