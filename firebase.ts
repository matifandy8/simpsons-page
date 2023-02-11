import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyCxXRtk4S0qhjtWMNmL31RkcPBxvtsugf4',
  authDomain: 'dev-dashboard-9eff0.firebaseapp.com',
  projectId: 'dev-dashboard-9eff0',
  storageBucket: 'dev-dashboard-9eff0.appspot.com',
  messagingSenderId: '508965551787',
  appId: '1:508965551787:web:1797220739ba7ba7eac1ee'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);