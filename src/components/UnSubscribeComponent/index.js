import React from 'react';
import { UnSubscribeBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import { getToken } from "../../services/auth";
import api from '../../services/api';
import { useSelector } from 'react-redux';

function SubscribeComponent({isRender, event, eventClone}) {
    const selector = useSelector(state => state.user);
    function handleDeleteEvent()
    {
        let token = getToken();
        api.delete(`/inscricao`,{
          data:{
            id_evento : parseInt(event.id_evento), 
            id_usuario : parseInt(selector.id_usuario)
          },
          headers:{
              'x-access-token':token
              }
          })
        .then(response => {
          alert(`Você se desinscreveu do evento ${event.titulo}!`);
          eventClone[0].map((clone) => {
            if(clone.id_evento === event.id_evento)
            {     
              clone.inscritos.splice(clone.inscritos.indexOf(selector.id_usuario), 1)
            }});
            
          isRender();
          eventClone[1](eventClone[0]);
        })
        .catch(error => {
            console.log(error);
    
            alert("Problema com o servidor, não foi possível receber o seus dados!");
        })
        
    }

  return (
    <UnSubscribeBox>
        <TopText>Deseja desinscrever desse evento?</TopText>
        <ButtonBox>  
            <StandartButton  text={"Não"} fontsize={"30px"} customStyle={{width:'35%', height:'55px'}} onClick={isRender}/>
            <StandartButton  text={"Sim"} fontsize={"30px"} customStyle={{width:'35%', height:'55px'}} onClick={handleDeleteEvent}/>
        </ButtonBox>
    </UnSubscribeBox>
  );
}

export default SubscribeComponent;