import React, {useRef, useEffect} from 'react';
import { SubscribeBox, ButtonBox, TopText } from './styles';
import StandartButton from '../StandartButton';
import {subscribeEventRequest} from '../../store/modules/eventsData/actions'
import { useSelector, useDispatch } from 'react-redux';
import { isMobile } from "react-device-detect";

function SubscribeComponent({isRender, eventID}) {
  const dispatch = useDispatch()
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

  function handleNewSubsEvent(e)
  {
    e.preventDefault();
    dispatch(subscribeEventRequest(eventID, user))
    isRender();  
  }

  return (
    <SubscribeBox ref={wrapperRef} mobile={isMobile}>
        <TopText mobile={isMobile}>Deseja se inscrever neste evento?</TopText>
        <ButtonBox>  
            <StandartButton  text={"Não"} fontsize={isMobile? "20px" : "30px"} customStyle={isMobile? {width:'35%', height:'35px'} : {width:'35%', height:'55px'}} onClick={isRender}/>
            <StandartButton  text={"Sim"} fontsize={isMobile? "20px" : "30px"} customStyle={isMobile? {width:'35%', height:'35px'} : {width:'35%', height:'55px'}} onClick={(e) => {handleNewSubsEvent(e)}}/>
        </ButtonBox>
    </SubscribeBox>
  );
}
export default SubscribeComponent;