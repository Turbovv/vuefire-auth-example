import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCHnCHV0fa7TPC1uu8mpEgxuZijL7nETgw",
    authDomain: "vuefire-auth-4a691.firebaseapp.com",
    databaseURL: "https://vuefire-auth-4a691-default-rtdb.firebaseio.com",
    projectId: "vuefire-auth-4a691",
    storageBucket: "vuefire-auth-4a691.appspot.com",
    messagingSenderId: "424319876474",
    appId: "1:424319876474:web:7b2264c169e15f0c182ac3",
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };