import { db } from '../config/firebase'
import { auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    AuthErrorCodes
} from "firebase/auth";

import { setDoc, doc, getDoc} from 'firebase/firestore'


//Possiveis erros que pode dar ao cadastrar o email e senha
export function errorFirebase(error) {
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
    try {
        //resultado vai receber o valor da criação da autenticação 
        const resultado = await createUserWithEmailAndPassword(auth, email, senha)
        //users vai receber a const resultado com .user, para pegar as informações da autenticação
        const users = resultado.user.uid
        const id = users
        // Aqui é feito a criação do usuario no banco do firestore, db sendo o banco, usuarios sendo a collection e users.uid é o UID gerado na autenticação
        await setDoc(doc(db, 'usuarios', users), { email, nome, celular, nascimento, id })
    }
    catch (error) {
        console.log(error)
        return errorFirebase(error)
    };
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

//Captura de dados no banco do Firestore
export async function capturaDadosUsuario(id) {

    try {
        const docRef = doc(db, "usuarios", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            //console.log("Documento existente", docSnap.data());
            return docSnap.data()
        }
    } catch (error) {
        console.log(error)
        return error
    }

}

export async function capturaDadosFormulario(id) {
    try {
        const docRef = doc(db, "formulario", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Documento existente", docSnap.data());
            return docSnap.data()
        }
    } catch (error) {
        console.log(error)
        return error
    }

}


// Salvar contatos de emergencia
export async function salvarContatos(data) {
    try {
        await setDoc(doc(db, 'contatos', data.id), data)
        return 'ok'
    } catch (error) {
        console.log('Erro ao cadastrar contato', error)
        return 'error'
    }
}

// Capturar dados dos contatos
export async function capturaDadosContatos(id) {
    try {
        const docRef = doc(db, "contatos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Documento existente", docSnap.data());
            return docSnap.data()
        }
    } catch (error) {
        console.log(error)
        return error
    }

}


//Salvar informações do formulario
export async function salvarFormulario(data) {
    try {
        await setDoc(doc(db, 'formulario', data.id), data)
        return data
    } catch (error) {
        console.log('Erro ao cadastrar formulario', error)
        return 'error'
    }
}

