import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "PROJECT_ID_NAME",
  storageBucket: "BUCKET",
  messagingSenderId: "ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID"
};

let app, db;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

db = getFirestore(app);

export { db }
