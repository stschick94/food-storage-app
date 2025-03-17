import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';
import { storage } from './storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
};

// Debug: Log config (without exposing sensitive data)
console.log('Firebase Config Check:', {
  apiKeyLength: firebaseConfig.apiKey?.length || 0,
  hasAuthDomain: !!firebaseConfig.authDomain,
  hasProjectId: !!firebaseConfig.projectId,
  hasStorageBucket: !!firebaseConfig.storageBucket,
  hasMessagingSenderId: !!firebaseConfig.messagingSenderId,
  hasAppId: !!firebaseConfig.appId,
  hasDatabaseURL: !!firebaseConfig.databaseURL
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export const firebase = {
  // Current user
  currentUser: null,

  // Initialize Firebase auth state
  init() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        this.currentUser = user;
        if (user) {
          this.loadUserData();
        }
        resolve(user);
      });
    });
  },

  // Sign in with email/password
  async signInWithEmail(email, password) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await this.mergeLocalData(result.user);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Sign up with email/password
  async signUp(email, password) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await this.mergeLocalData(result.user);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Sign out
  async signOut() {
    try {
      await firebaseSignOut(auth);
      this.currentUser = null; // Explicitly set currentUser to null
      // Clear any cached data
      storage.clear();
      return { success: true };
    } catch (error) {
      console.error('Error signing out:', error);
      return { success: false, error: error.message };
    }
  },

  // Save user data to Firebase
  async saveUserData(data) {
    if (!this.currentUser) return false;
    try {
      await set(ref(db, `users/${this.currentUser.uid}/data`), data);
      return true;
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      return false;
    }
  },

  // Load user data from Firebase
  async loadUserData() {
    if (!this.currentUser) return null;
    try {
      const snapshot = await get(ref(db, `users/${this.currentUser.uid}/data`));
      return snapshot.val();
    } catch (error) {
      console.error('Error loading from Firebase:', error);
      return null;
    }
  },

  // Merge local data with Firebase data
  async mergeLocalData(user) {
    const localData = storage.load();
    if (!localData) return;

    try {
      const snapshot = await get(ref(db, `users/${user.uid}/data`));
      const cloudData = snapshot.val();

      if (!cloudData) {
        // No cloud data exists, save local data
        await this.saveUserData(localData);
      } else {
        // Merge cloud and local data
        const mergedData = this.mergeData(cloudData, localData);
        await this.saveUserData(mergedData);
      }
    } catch (error) {
      console.error('Error merging data:', error);
    }
  },

  // Helper function to merge data sets
  mergeData(cloudData, localData) {
    return {
      ...cloudData,
      ...localData,
      items: [...(cloudData.items || []), ...(localData.items || [])]
    };
  }
}; 