import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCcKWqICRR1nd-i9gjDy7hDM1AadjHeDA4",
  authDomain: "xuvaydo-d1368.firebaseapp.com",
  projectId: "xuvaydo-d1368",
  storageBucket: "xuvaydo-d1368.appspot.com",
  messagingSenderId: "408853223004",
  appId: "1:408853223004:web:26045a47a857452caab899"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()