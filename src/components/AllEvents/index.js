import React, { useEffect } from 'react';
import { Container } from './styles';
import { getToken } from "../../services/auth";
import EventContainer from '../../components/EventContainer/';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addEventsData } from '../../store/modules/eventsData/actions'


/** 
* @description Componente com todos os eventos listados
*/
export default function AllEvents() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);
    const eventsDate = useSelector(state => state.eventsData);

    useEffect(() => {
        let token = getToken();
        if(user.tipo_usuario === 4)
        {
            api.get("evento/",{
               headers:{
                 'x-access-token':token
               }
            })
            .then(response => {
                dispatch(addEventsData(response.data))
            })
            .catch(error => {
                console.log(error);
                alert("Não foi possível receber os eventos!")
            })
        }
        else{
            api.get(`evento/usuario/${parseInt(user.id_usuario)}`,{
            headers:{
                'x-access-token':token
            }
            })
            .then(response => {
                dispatch(addEventsData(response.data))
            })
            .catch(error => {
                console.log(error);
                alert("Não foi possível receber os eventos!")
            })}

    }, [user.tipo_usuario, user.id_usuario, dispatch])

    return(
        <Container>
                {eventsDate !== undefined? eventsDate.sort((dateA, dateB) => {return new Date(dateB.data_evento) - new Date(dateA.data_evento)}).map((event, index) => {
            return(<EventContainer key={index} event={event}/>)}) : null}
        </Container>
    );
}