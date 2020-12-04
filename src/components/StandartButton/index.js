import React from 'react';
import { Container } from './styles';
import { isMobile } from "react-device-detect";

function StandartButton({className, icon, text, customStyle, onClick, type="button", fontsize='20px', disabled=false}) {
  return (
    <Container mobile={isMobile} text={text? true : false} className={className} type={type} widthStyle={customStyle.width} heightStyle={customStyle.height} onClick={onClick} fontsize={fontsize} disabled={disabled? true : false}>
        {icon? <img src={icon} alt={"Icon"}/> : null}
        <div>{text}</div>    
    </Container>)
  ;
}

export default StandartButton;