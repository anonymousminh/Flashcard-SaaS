import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqotJkvrDknVSfaaoK-UGVGxhaMsiar1s",
  authDomain: "flashcardsaas-655a4.firebaseapp.com",
  projectId: "flashcardsaas-655a4",
  storageBucket: "flashcardsaas-655a4.appspot.com",
  messagingSenderId: "885697123039",
  appId: "1:885697123039:web:267257316580c1c9f94f6a",
  measurementId: "G-RNED4N4YPZ"
};

let app, db;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

db = getFirestore(app);

export { db }