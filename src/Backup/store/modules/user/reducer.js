const INITIAL_STATE = {}

export default function user(state = INITIAL_STATE, action){
    switch(action.type)
    {
        case 'ADD_USER':
            return{...state, user: action.user};

        case 'CLEAR_USER':
            return INITIAL_STATE;

        default:
            return state;
    }
} 