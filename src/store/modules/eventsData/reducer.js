import produce from "immer"
const initialState = [];
export default function eventsData(state = initialState, action)
{
    switch (action.type) {
        case 'ADD_EVENTS_DATA_SUCCESS':
            return action.eventsInfo
        case 'ADD_EVENT_SUCCESS':
            return produce(state, draft => {
                action.eventData.inscritos = [];
                draft.push(action.eventData)
            })   
        case 'REMOVE_EVENT_SUCCESS':
            return produce(state, draft => {
                return draft.filter(event=> event.id_evento !== action.eventID)
            })
        case 'EDIT_EVENT_SUCCESS':
            return produce(state, draft => {
                draft[draft.findIndex(event => event.id_evento === action.eventData.id_evento)].id_evento = action.eventData.id_evento;
                draft[draft.findIndex(event => event.id_evento === action.eventData.id_evento)].data_evento = action.eventData.data_evento;
                draft[draft.findIndex(event => event.id_evento === action.eventData.id_evento)].descricao = action.eventData.descricao;
                draft[draft.findIndex(event => event.id_evento === action.eventData.id_evento)].local = action.eventData.local;
                draft[draft.findIndex(event => event.id_evento === action.eventData.id_evento)].nome_mediador = action.eventData.nome_mediador;
                draft[draft.findIndex(event => event.id_evento === action.eventData.id_evento)].max_participantes = action.eventData.max_participantes;
                draft[draft.findIndex(event => event.id_evento === action.eventData.id_evento)].titulo = action.eventData.titulo;
            })
        case 'SUBSCRIBE_EVENT_SUCCESS':
            return produce(state, draft => {
                console.log(action);
                draft[draft.findIndex(event => event.id_evento === action.eventID)].inscritos.push(action.user);
            })
        case 'CANCEL_SUBSCRIBE_EVENT_SUCCESS':
            return produce(state, draft => {
                console.log(action);
                draft[draft.findIndex(event => event.inscritos.map(inscrito => inscrito.Inscricao.id_inscricao === action.subscribeID? true : false).includes(true))].inscritos = draft[draft.findIndex(element => element.inscritos.map(teste => teste.Inscricao.id_inscricao === action.subscribeID? true : false).includes(true))].inscritos.filter(element => element.Inscricao.id_inscricao !== action.subscribeID);
            })
        default:
            return state;
    }
}