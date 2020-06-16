import * as Firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAI4el8BEWs97NAOLwM6SbKthnqyqLEFeA",
    authDomain: "helptu.firebaseapp.com",
    databaseURL: "https://helptu.firebaseio.com",
    projectId: "helptu",
    storageBucket: "helptu.appspot.com",
    messagingSenderId: "770482334222",
    appId: "1:770482334222:web:6ab2409eaabb1632a6aa5f"
}

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();