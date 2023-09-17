import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkD4-hnIysx8GFDU_UB1kO5r4rzibCiYw",
    authDomain: "netflox-a8844.firebaseapp.com",
    projectId: "netflox-a8844",
    storageBucket: "netflox-a8844.appspot.com",
    messagingSenderId: "856151687541",
    appId: "1:856151687541:web:c08159cf5f341662ccd33c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth };
export default db;
 