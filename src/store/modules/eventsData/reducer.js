import produce from "immer"
const initialState = [];
export default function eventsData(state = initialState, action)
{
    switch (action.type) {
        case 'ADD_EVENTS_DATA_SUCCESS':
            return action.eventsInfo
        case 'ADD_EVENT_SUCCESS':
            return produce(state, draft => {
                draft.push(action.eventData)
            })   
        case 'REMOVE_EVENT_SUCCESS':
            return produce(state, draft => {
                return draft.filter(event=> event.id_evento !== action.eventID)
            })
        case 'EDIT_EVENT_SUCCESS':
            return produce(state, draft => {
                draft[draft.findIndex(event => event.id_evento === action.eventData.id_evento)] = action.eventData;
            })
        case 'SUBSCRIBE_EVENT_SUCCESS':
            return produce(state, draft => {
                draft[draft.findIndex(event => event.id_evento === action.eventID)].inscritos.push(action.user);
            })
        case 'CANCEL_SUBSCRIBE_EVENT_SUCCESS':
        return produce(state, draft => {
            draft[draft.findIndex(event => event.id_evento === action.eventID)].inscritos = draft[draft.findIndex(event => event.id_evento === action.eventID)].inscritos.filter(subscribe => subscribe.id_usuario !== action.userID);
        })
        default:
            return state;
    }
}