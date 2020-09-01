import React, {useRef, useEffect} from 'react';
import { UnSubscribeBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import { getToken } from "../../services/auth";
import api from '../../services/api';
import { useSelector } from 'react-redux';

function SubscribeComponent({isRender, event, eventClone}) {
    const selector = useSelector(state => state.user);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function useOutsideAlerter(ref) {
      useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
              if (ref.current && !ref.current.contains(event.target)) {
                isRender()
              }
          }
  
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              // Unbind the event listener on clean up
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
  }
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
          alert(`Você não está mais inscrito no evento ${event.titulo}!`);
          eventClone[0].map((clone) => {
            if(clone.id_evento === event.id_evento)
            {     
              return clone.inscritos.splice(clone.inscritos.indexOf(selector.id_usuario), 1)
            }
            return null;
          });
            
          isRender();
          eventClone[1](eventClone[0]);
        })
        .catch(error => {
            console.log(error);
    
            alert("Problema com o servidor, não foi possível receber o seus dados!");
        })
        
    }

  return (
    <UnSubscribeBox ref={wrapperRef}>
        <TopText>Deseja cancelar a inscrição desse evento?</TopText>
        <ButtonBox>  
            <StandartButton  text={"Não"} fontsize={"30px"} customStyle={{width:'35%', height:'55px'}} onClick={isRender}/>
            <StandartButton  text={"Sim"} fontsize={"30px"} customStyle={{width:'35%', height:'55px'}} onClick={handleDeleteEvent}/>
        </ButtonBox>
    </UnSubscribeBox>
  );
}

export default SubscribeComponent;