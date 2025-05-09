import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
} from 'firebase/auth';

// Service d’authentification : signup / signin / signout
export function signup(email: string, pwd: string) {
    return createUserWithEmailAndPassword(auth, email, pwd);
}
export function signin(email: string, pwd: string) {
    return signInWithEmailAndPassword(auth, email, pwd);
}
export function signout() {
    return firebaseSignOut(auth);
}
