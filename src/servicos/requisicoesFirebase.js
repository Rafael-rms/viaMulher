import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function cadastrar(email, senha) {

    //Função de cadastro
    createUserWithEmailAndPassword(auth, email, senha)
        .then((dadosUsuario) => {

            console.log(dadosUsuario)
        })
        .catch((error) => {
            console.log(error)
        });
}