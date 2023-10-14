import { db } from '../config/firebase'
import { addDoc, collection } from 'firebase/firestore'


//Função para criação de usuario no banco
// Utiliza o try catch para a captura de erro, se caso acontecer
// A função utilizada addDoc e collection vem da importação do Firestore
// Importação do banco pela const 'db'
// Adicionado os parametros que poderá receber
export async function criarUsuario(email, nome, celular, nascimento) {
    try {
        await addDoc(collection(db, 'usuario'),{email, nome, celular, nascimento})
        return 'ok'
    }
    catch (error) {
        console.log('Erro no cadastro do usuário', error)
        return 'error'
    }
}