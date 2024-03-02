import { defineStore } from 'pinia';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { firebaseApp } from '../services/firebase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async signInWithGoogle() {
      const auth = getAuth(firebaseApp);
      const provider = new GoogleAuthProvider();

      try {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;

        const db = getFirestore();
        const userDocRef = doc(db, 'users', result.user.uid);
        await setDoc(userDocRef, {
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        });
      } catch (error) {
        console.error('Google sign-in failed:', error);
      }
    },
    async signOut() {
      const auth = getAuth(firebaseApp);

      try {
        if (this.user) {
          const db = getFirestore();
          const userDocRef = doc(db, 'users', this.user.uid);
          await setDoc(userDocRef, {});
        }

        await firebaseSignOut(auth);
        this.user = null;
      } catch (error) {
        console.error('Sign out failed:', error);
      }
      window.location.reload();
    },
    checkAuthentication() {
      const auth = getAuth(firebaseApp);

      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    },
  },
});