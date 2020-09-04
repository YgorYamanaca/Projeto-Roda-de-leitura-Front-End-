import React, {useRef, useEffect} from 'react';
import { UnSubscribeBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import { useSelector, useDispatch } from 'react-redux';
import {cancelSubEventRequest} from '../../store/modules/eventsData/actions'

function UnSubscribeComponent({isRender, eventID}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
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
        isRender();
        dispatch(cancelSubEventRequest(eventID, user.id_usuario))
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

export default UnSubscribeComponent;