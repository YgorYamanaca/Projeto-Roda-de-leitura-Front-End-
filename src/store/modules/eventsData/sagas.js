import { call, takeLatest, all, put} from 'redux-saga/effects';
import api from '../../../services/api';
import { getToken } from "../../../services/auth";
import {addEventSuccess, cancelSubEventSuccess, subscribeEventSuccess, removeEventSuccess, editEventSuccess} from "./actions";

function postEvent(eventData)
{
    let token = getToken();
    return api.post("/evento", eventData,{
    headers:{
        'x-access-token':token
        }
    })
}

function deleteEvent(eventID)
{
    let token = getToken();
    return api.delete("/evento", {
        data:{
            'id_evento' : eventID
        },
        headers:{
            'x-access-token':token
            }
        })
}

function patchEvent(eventData)
{
    let token = getToken();
    return api.patch("/evento", eventData, {
        headers:{
            'x-access-token':token
            }
    })
}

function subscribePostEvent(eventID, user)
{
    let token = getToken();
    return api.post(`/inscricao`, {id_evento : eventID, id_usuario : parseInt(user.id_usuario)},{
            headers:{
                'x-access-token':token
                }
            })
}

function cancelSubDeleteEvent(eventID, userID)
{
    let token = getToken();
    return api.delete(`/inscricao`,{
            data:{
            id_evento : parseInt(eventID), 
            id_usuario : parseInt(userID)
            },
            headers:{
                'x-access-token':token
                }
            })
}
function* addEvent({eventData})
{
    const response = yield call(postEvent, eventData)
    console.log(response)
    if(response.status === 200 || response.status ===201)
    { 
        yield put(addEventSuccess(response.data));
        alert("Evento criado com sucesso!")
    }
    else
    {
        alert("Houve um problema no cadastro, verifique as informações digitadas."); 
    }
}

function* removeEvent({eventID})
{
    const response = yield call(deleteEvent, eventID)
    console.log(response)
    if(response.status === 200|| response.status ===204)
    { 
        yield put(removeEventSuccess(eventID));
        alert("Evento deletado com sucesso!");
    }
    else
    {
        alert("Houve um problema ao tentar deletar o evento");
    }
}

function* editEvent({eventData})
{
    const response = yield call(patchEvent, eventData)
    if(response.status === 200 || response.status ===201)
    {
        yield put(editEventSuccess(response.data));
        alert("Evento editado com sucesso!")
    }
    else
    {
        alert("Houve um problema na hora de editar os eventos!");
    }
}

function* subscribeEvent({eventID, user})
{ 
    const response = yield call(subscribePostEvent, eventID, user)
    if(response.status === 200|| response.status ===201)
    { 
        yield put(subscribeEventSuccess(eventID, user));
        alert(`Você se inscreveu no evento!`);
    }
    else
    {
        alert("Problema com o servidor, não foi possível se inscrever no evento!");
    }
}

function* cancelSubEvent({eventID, userID})
{
    const response = yield call(cancelSubDeleteEvent, eventID, userID)
    if(response.status === 200|| response.status ===201)
    { 
        yield put(cancelSubEventSuccess(eventID, userID));
        alert(`Você não está mais inscrito no evento!`);
    }
    else
    {
        alert("Problema com o servidor, não foi possível receber o seus dados!");
    }
}

export default all([
    takeLatest('ADD_EVENT_REQUEST', addEvent),
    takeLatest('REMOVE_EVENT_REQUEST', removeEvent),
    takeLatest('EDIT_EVENT_REQUEST', editEvent),
    takeLatest('SUBSCRIBE_EVENT_REQUEST', subscribeEvent),
    takeLatest('CANCEL_SUBSCRIBE_EVENT_REQUEST', cancelSubEvent)
])