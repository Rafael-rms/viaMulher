import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function cad(email, senha, confirmaSenha) {

    //Função de cadastro
    createUserWithEmailAndPassword(auth, email, senha)
        .then((dadosUsuario) => {

            console.log(dadosUsuario)
        })
        .catch((error) => {
            console.log(error)
        });
}