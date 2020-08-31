import React from 'react';
import { Container } from './styles';

function StandartButton({className, icon, text, customStyle, onClick, type="button", fontsize='20px'}) {
  return (
    <Container className={className} type={type} widthStyle={customStyle.width} heightStyle={customStyle.height} onClick={onClick} fontsize={fontsize}>
        {icon? <img src={icon} alt={"Icon"}/> : null}
        <div>{text}</div>    
    </Container>)
  ;
}

export default StandartButton;