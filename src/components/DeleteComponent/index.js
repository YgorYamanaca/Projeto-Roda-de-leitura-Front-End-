import React, {useRef, useEffect} from 'react';
import { DeleteBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import {useDispatch} from 'react-redux'
import { removeEventRequest } from "../../store/modules/eventsData/actions";
import { isMobile } from "react-device-detect";

/** 
 * @description Componente para deletar eventos
 */

function DeleteComponent({isRender, eventID}){
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function useOutsideAlerter(ref) {
      useEffect(() => {
          function handleClickOutside(event) {
              if (ref.current && !ref.current.contains(event.target)) {
                isRender()
              }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
  }
    /** 
     * @description Função para executar a requisição de deletar evento
     */
    function handleDeleteEvent(e)
    {
        isRender();
        dispatch(removeEventRequest(eventID));
        
        e.preventDefault();
    }

    return (
    <DeleteBox ref={wrapperRef} mobile={isMobile}>
        <TopText mobile={isMobile}>Deseja mesmo excluir este evento?</TopText>
        <ButtonBox>  
            <StandartButton  text={"Não"} fontsize={isMobile? "20px" : "30px"} customStyle={isMobile? {width:'35%', height:'35px'} : {width:'35%', height:'55px'}} onClick={isRender}/>
            <StandartButton  text={"Sim"} fontsize={isMobile? "20px" : "30px"} customStyle={isMobile? {width:'35%', height:'35px'} : {width:'35%', height:'55px'}} onClick={handleDeleteEvent}/>
        </ButtonBox>
    </DeleteBox>
    );
}

export default DeleteComponent;