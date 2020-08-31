import React from 'react';
import { SubscribeBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import { getToken } from "../../services/auth";
import api from '../../services/api';

import { useSelector } from 'react-redux';
function SubscribeComponent({isRender, event, eventClone}) {
    
  const selector = useSelector(state => state.user);

    function handleDeleteEvent()
    {
        let token = getToken();
        api.post(`/inscricao`, {id_evento : event.id_evento, id_usuario : parseInt(selector.id_usuario)},{
          headers:{
              'x-access-token':token
              }
          })
        .then(response => {
          alert(`Você se inscreveu no evento ${event.titulo}!`);
          eventClone[0].map((clone) => {
            if(clone.id_evento === event.id_evento)
            {
                clone.inscritos.push(selector);
            }})

          eventClone[1](eventClone[0]);
          isRender();
        })
        .catch(error => {
            console.log(error);
    
            alert("Problema com o servidor, não foi possível se inscrever no evento!");
        })
    }

  return (
    <SubscribeBox>
        <TopText>Deseja se inscrever neste evento?</TopText>
        <ButtonBox>  
            <StandartButton  text={"Não"} fontsize={"30px"} customStyle={{width:'35%', height:'55px'}} onClick={isRender}/>
            <StandartButton  text={"Sim"} fontsize={"30px"} customStyle={{width:'35%', height:'55px'}} onClick={(e) => {handleDeleteEvent(e)}}/>
        </ButtonBox>
    </SubscribeBox>
  );
}
export default SubscribeComponent;