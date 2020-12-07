const INITIAL_STATE = {}

export default function user(state = INITIAL_STATE, action){
    switch(action.type)
    {
        case 'ADD_USER':
            return {
                email:action.email,
                id_usuario:action.id_usuario,
                nome:action.nome,
                tipo_usuario:action.tipo_usuario,
                isAdmin:action.isAdmin
            };

        case 'CLEAR_USER':
            return INITIAL_STATE;

        default:
            return state;
    }
} 