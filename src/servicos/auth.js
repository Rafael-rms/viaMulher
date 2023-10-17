import { auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    AuthErrorCodes
} from "firebase/auth";

//Possiveis erros que pode dar ao cadastrar o email e senha
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


//Função de logar
// Utiliza o try catch para a captura de erro, se caso acontecer
export async function logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((dadosDoUsuario) => {
            console.log(dadosDoUsuario)
            return "Sucesso"
        })
        .catch((error) => {
            console.log(error)
            return "error"
        });

    return resultado
}