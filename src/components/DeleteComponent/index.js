import React, {useRef, useEffect} from 'react';
import { DeleteBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import { getToken } from "../../services/auth";
import api from '../../services/api';

function DeleteComponent({isRender, eventID, eventClone}){
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
    function handleDeleteEvent(e)
    {
        e.preventDefault();
        let token = getToken();
        api.delete("/evento", {
            data:{
                'id_evento' : eventID
            },
            headers:{
                'x-access-token':token
                }
            })
        .then(res => {
            eventClone[1](eventClone[0].filter(entry => entry.id_evento !== eventID))
            alert("Evento deletado com sucesso!");
            isRender();
        })
        .catch(error => {
            console.log(error);
            alert("Houve um problema ao tentar deletar o evento");
        })
    }

    return (
    <DeleteBox ref={wrapperRef}>
        <TopText>Deseja mesmo excluir este evento?</TopText>
        <ButtonBox>  
            <StandartButton  text={"Não"} fontsize={"30px"} customStyle={{width:'35%', height:'55px'}} onClick={isRender}/>
            <StandartButton  text={"Sim"} fontsize={"30px"} customStyle={{width:'35%', height:'55px'}} onClick={handleDeleteEvent}/>
        </ButtonBox>
    </DeleteBox>
    );
}

export default DeleteComponent;