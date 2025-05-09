// src/firebase.ts
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    setPersistence,
    browserLocalPersistence
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey:             import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:         import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:          import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:      import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:              import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const db   = getFirestore(app);

// On force la persistence locale (session survit aux fermetures/rechargements).
setPersistence(auth, browserLocalPersistence)
    .catch(err => {
        console.error('[firebase] échec setPersistence', err);
    });
