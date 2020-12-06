import React, {useRef, useEffect} from 'react';
import { UnSubscribeBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import {useDispatch } from 'react-redux';
import {cancelSubEventRequest} from '../../store/modules/eventsData/actions'
import { isMobile } from "react-device-detect";
/** 
 * @description Componente de desisnscrever
 * @param {boolean} isRender Se está renderizado
 * @param {string} eventID Id do evento
 */
function UnSubscribeComponent({isRender, subscribeID}) {
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
 * @description Executa a requisição de cancelar a inscrição do evento
 */
    function handleDeleteEvent(e)
    {
        e.preventDefault();
        isRender();
        dispatch(cancelSubEventRequest(subscribeID.Inscricao.id_inscricao))
    }

  return (
    <UnSubscribeBox ref={wrapperRef} mobile={isMobile}>
        <TopText mobile={isMobile}>Deseja cancelar a inscrição desse evento?</TopText>
        <ButtonBox>  
          <StandartButton  text={"Não"} fontsize={isMobile? "20px" : "30px"} customStyle={isMobile? {width:'35%', height:'35px'} : {width:'35%', height:'55px'}} onClick={isRender}/>
          <StandartButton  text={"Sim"} fontsize={isMobile? "20px" : "30px"} customStyle={isMobile? {width:'35%', height:'35px'} : {width:'35%', height:'55px'}} onClick={handleDeleteEvent}/>
        </ButtonBox>
    </UnSubscribeBox>
  );
}

export default UnSubscribeComponent;