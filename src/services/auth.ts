import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
} from 'firebase/auth';

/**
 * Crée un nouveau compte Firebase avec email/mot de passe
 */
export function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Connecte un utilisateur existant
 */
export function signin(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Déconnecte l’utilisateur courant
 */
export function signout() {
    return firebaseSignOut(auth);
}
