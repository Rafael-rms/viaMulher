
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
// Chave de acesso para o projeto no firebase
const firebaseConfig = {
    apiKey: "AIzaSyC2dAAtr7UuGl_dFBcplxzBh3a1gGJenb0",
    authDomain: "teste-viamulher.firebaseapp.com",
    projectId: "teste-viamulher",
    storageBucket: "teste-viamulher.appspot.com",
    messagingSenderId: "103745059088",
    appId: "1:103745059088:web:9a3d123889c0e714ec0d95"
};


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})

export{auth}