import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC16sAdmhzXWQWaALKFWZUhHNHhVOmzYbk",
  authDomain: "xuvaydo-4fc58.firebaseapp.com",
  projectId: "xuvaydo-4fc58",
  storageBucket: "xuvaydo-4fc58.appspot.com",
  messagingSenderId: "252887360348",
  appId: "1:252887360348:web:b61be150d1e1612a125799"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore()
const auth = getAuth(app);
const provider = new GoogleAuthProvider()