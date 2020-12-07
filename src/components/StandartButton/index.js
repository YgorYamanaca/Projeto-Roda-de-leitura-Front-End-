import React from 'react';
import { Container } from './styles';
import { isMobile } from "react-device-detect";

/** 
 * @description Botão customizado do projeto
 * @param {string} className Classname do componente 
 * @param {JSX.element} icon Icone do componente
 * @param {string} text texto do botão
 * @param {Object} customStyle css do componente
 * @param {Function} onClick função do onClick
 * @param {string} type tipo do botão
 * @param {string} fontsize tamanho da fonte
 * @param {boolean} disabled propriedade para desabilitar o botão
 */
function StandartButton({className, icon, text, customStyle, onClick, type="button", fontsize='20px', disabled=false}) {
  return (
    <Container mobile={isMobile} text={text? true : false} className={className} type={type} widthStyle={customStyle.width} heightStyle={customStyle.height} onClick={onClick} fontsize={fontsize} disabled={disabled? true : false}>
        {icon? <img src={icon} alt={"Icon"}/> : null}
        <div>{text}</div>    
    </Container>)
  ;
}

export default StandartButton;