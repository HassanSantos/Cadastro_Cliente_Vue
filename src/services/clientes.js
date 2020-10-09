import { http } from './config'

export default {
    
    listar:() => {
        return http.get('clientes');
    },

    salvar:(cliente) =>{
        return http.post('clientes', cliente);
    },

    atualizar:(id, cliente) => {
        return http.put(`clientes/${id}`, cliente);
    }
}