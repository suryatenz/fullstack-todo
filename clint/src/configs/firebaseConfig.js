// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuQIFwenJhb3Ajld4yUY8MgT_ury7eKQo",
  authDomain: "top-sunrise-412306.firebaseapp.com",
  projectId: "top-sunrise-412306",
  storageBucket: "top-sunrise-412306.appspot.com",
  messagingSenderId: "346964982960",
  appId: "1:346964982960:web:7e666bfdfdb3203e4a4f75",
  measurementId: "G-032HE3V1BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
