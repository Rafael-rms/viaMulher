
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from 'firebase/firestore'

// Chave de acesso para o projeto no firebase
const firebaseConfig = {
    apiKey: "AIzaSyAWziNOK4erWol4obw_Vd8Z5oQM-xEetw8",
    authDomain: "via-mulher-e1608.firebaseapp.com",
    projectId: "via-mulher-e1608",
    storageBucket: "via-mulher-e1608.appspot.com",
    messagingSenderId: "446301506180",
    appId: "1:446301506180:web:26be9a5490f258c94a10d1"
};

// Email do projeto: viamulher022@gmail.com


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

const db = getFirestore(app)

export { auth, db }