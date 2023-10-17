import { db } from '../config/firebase'
import { auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    AuthErrorCodes
} from "firebase/auth";

import { setDoc, doc  } from 'firebase/firestore'


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



//Função para criação de usuario no banco
// Utiliza o try catch para a captura de erro, se caso acontecer
// A função utilizada addDoc e collection vem da importação do Firestore
// Importação do banco pela const 'db'
// Adicionado os parametros
    //Função de cadastro com parametros que irá receber
    // Utiliza o try para iniciar caso tudo estiver certo, catch para a captura de erro, se caso houver
    export async function cadastrar(nome, celular, nascimento, email, senha) {
            try{
            const resultado = await createUserWithEmailAndPassword(auth, email, senha)
            const users = resultado.user
            await setDoc(doc(db, 'usuarios',users.uid),{email, nome, celular, nascimento})
        }
            catch(error) {
                console.log(error)
                return errorFirebase(error)
            };
    }
// export async function criarUsuario(email, nome, celular, nascimento) {
//     try {
//         await setDoc(doc(db, 'usuario',user.uid),{email, nome, celular, nascimento})
//         return 'ok'
//     }
//     catch (error) {
//         console.log('Erro no cadastro do usuário', error)
//         return 'error'
//     }
// }

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