import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

//Possiveis erros
function errorFirebase(error) {
    let mensagem = '';
    switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
            mensagem = "Esse email já está em uso"
            break;
        case AuthErrorCodes.INVALID_EMAIL:
            mensagem = "Email invalido"
            break;
        case AuthErrorCodes.WEAK_PASSWORD:
            mensagem = "A senha precisa de no minimo 6 caracteres"
            break;
        default:
            mensagem = "Erro desconhecido";

    }
    return mensagem
}

export async function cadastrar(email, senha) {

    //Função de cadastro
    createUserWithEmailAndPassword(auth, email, senha)
        .then((dadosUsuario) => {
            console.log(dadosUsuario)
            return "Sucesso"
        })
        .catch((error) => {
            console.log(error)
            return errorFirebase(error)
        });
}