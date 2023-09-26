
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
// Chave de acesso para o projeto no firebase
const firebaseConfig = {
    apiKey: "AIzaSyBsrc7cfLqzR9XYeXB8tnQ-5OraIMrqlnA",
    authDomain: "viamulher-40a7d.firebaseapp.com",
    projectId: "viamulher-40a7d",
    storageBucket: "viamulher-40a7d.appspot.com",
    messagingSenderId: "1023188149524",
    appId: "1:1023188149524:web:4330bfdafe3e811b334e01"
};

// Email do projeto: viamulher022@gmail.com


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})

export{auth}