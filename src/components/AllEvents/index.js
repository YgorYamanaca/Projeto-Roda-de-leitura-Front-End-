import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { getToken } from "../../services/auth";
import EventContainer from '../../components/EventContainer/';
import api from '../../services/api';
import { useSelector } from 'react-redux';

export default function AllEvents() {
    const [eventsDate, setEvents] = useState();
    const user = useSelector(state => state.user);
    
    useEffect(() => {
        let token = getToken();
        if(user.tipo_usuario === "4")
        {
            api.get("evento/",{
               headers:{
                 'x-access-token':token
               }
            })
            .then(response => {
                setEvents(response.data);
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
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error);
                alert("Não foi possível receber os eventos!")
            })}

    }, [user.tipo_usuario, user.id_usuario])

    return(
        <Container>
            {eventsDate !== undefined? eventsDate.map((event, index) => {
        return(<EventContainer key={index} event={event} eventClone={[eventsDate, setEvents]}/>)}) : null}
        </Container>
    );
}