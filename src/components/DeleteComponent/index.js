import React, {useRef, useEffect} from 'react';
import { DeleteBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import {useDispatch} from 'react-redux'
import { removeEventRequest } from "../../store/modules/eventsData/actions";

function DeleteComponent({isRender, eventID}){
    const dispatch = useDispatch();
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
        isRender();
        dispatch(removeEventRequest(eventID));
        
        e.preventDefault();
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