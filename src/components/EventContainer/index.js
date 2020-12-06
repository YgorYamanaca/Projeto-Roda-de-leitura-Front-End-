import React, { memo, useState, useEffect } from 'react'
import { Container, WhiteContainer, TitleContainer, IconBox,
    EventInfoContainer, InfoContainer, DescriptionContainer,} from './styles';
import trashIcon from '../../assets/Icon/icon_trash.png';
import editIcon from '../../assets/Icon/icon_edit.png';
import checkIcon from '../../assets/Icon/icon_checkbox.png';
import unCheckIcon from '../../assets/Icon/icon_cancel.png';
import analyticIcon from '../../assets/Icon/icon_Analytics - Blue.png';
import {useLocation} from 'react-router-dom';
import EditComponent from '../EditComponent/';
import DeleteComponent from '../DeleteComponent/';
import SubscribeComponent from '../SubscribeComponent/';
import UnSubscribeComponent from '../UnSubscribeComponent/';
import EventAnalyticComponent from '../EventAnalyticsComponent/';
import { useSelector } from 'react-redux';
import { isMobile } from "react-device-detect";

/** 
 * @description Container de um evento 
 * @param {eventData} event recebe um evento como parâmetro
 */
function EventContainer({event}) {
    const toDay = new Date();
    const [isDeletePageRender, setDeletePage] = useState(false);
    const [isEditPageRender, setEditPage] = useState(false);
    const [isSubscribePageRender, setSubPage] = useState(false);
    const [isUnSubscribePageRender, setUnSubPage] = useState(false);
    const [isAnalyticPageRender, setAnalyticPage] = useState(false);
    const actualPath = useLocation();
    const [title, setTitle] = useState("");
    const [mediator, setMediator] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [numberParticipant, setParticipant] = useState("");
    const [numberMax, setNumberMax] = useState("");
    // const [eventType, setEventT] = useState("");
    
        
    /** 
     * @description Função para editar o formato de data
     * @param {data} tiomezone Objeto data do Js.
     * @return data formatada
     */const user = useSelector(state => state.user);
   function handleDate(timezone)
    {
        let newDate=new Date(timezone);
        newDate = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
        return newDate;
    }

    /** 
     * @description Função para editar o formato de tempo
     * @param {data} tiomezone Objeto data do Js.
     * @return tempo formatado
     */
    function handleTime(timezone)
    {
        let newDate=new Date(timezone);
        newDate = `${newDate.getHours() > 9? newDate.getHours():'0' + newDate.getHours()}:${newDate.getMinutes() > 9? newDate.getMinutes(): '0' + newDate.getMinutes()}`;
        return newDate;
    }
    /** 
     * @description Função para renderizar componente de edição
     * */
    function handleEditPage()
    {
        setEditPage(!isEditPageRender)
    }

    /** 
     * @description Função para renderizar componente de deletar
     * */
    function handleDelete()
    {
        setDeletePage(!isDeletePageRender)
    }

    /** 
     * @description Função para renderizar componente de inscrição
     * */
    function handleSubPage()
    {
        setSubPage(!isSubscribePageRender)
    }

    /** 
     * @description Função para renderizar componente de cancelar inscrição
     * */
    function handleUnSubPage()
    {
        setUnSubPage(!isUnSubscribePageRender)
    }

    /** 
     * @description Função para renderizar componente de cancelar inscrição
     * */
    function handleAnalyticPage()
    {
        setAnalyticPage(!isAnalyticPageRender)
    }

    useEffect(() => {
        setTitle(event.titulo);
        setMediator(event.nome_mediador);
        setPlace(event.local);
        setDescription(event.descricao);
        setDate(event.data_evento);
        setNumberMax(event.max_participantes);
        setParticipant(event.inscritos !== undefined? event.inscritos : "");
    }, [event])
    
    return ( 
        <Container mobile={isMobile}>
        {isEditPageRender?
            <WhiteContainer path={actualPath.pathname} mobile={isMobile}>
                <EditComponent isRender={handleEditPage} editDate={event}></EditComponent>
            </WhiteContainer>
            : null}
        
        {isDeletePageRender?
            <WhiteContainer path={actualPath.pathname} mobile={isMobile}>
                <DeleteComponent isRender={handleDelete} eventID={event.id_evento}></DeleteComponent>
            </WhiteContainer>
            : null}

        {isSubscribePageRender?
            <WhiteContainer path={actualPath.pathname} mobile={isMobile}>
                <SubscribeComponent isRender={handleSubPage} eventID={event.id_evento}></SubscribeComponent>
            </WhiteContainer>
            : null}

        {isUnSubscribePageRender?
            <WhiteContainer path={actualPath.pathname} mobile={isMobile}>
                <UnSubscribeComponent isRender={handleUnSubPage} subscribeID={event.inscritos[event.inscritos.findIndex(userArray => parseInt(userArray.id_usuario) === user.id_usuario)]}></UnSubscribeComponent>
            </WhiteContainer>
            : null}

        {isAnalyticPageRender?
            <WhiteContainer path={actualPath.pathname} mobile={isMobile}>
                <EventAnalyticComponent isRender={handleAnalyticPage} subscribes={event.inscritos} />
            </WhiteContainer>
            : null}
            
            <EventInfoContainer>
                <TitleContainer mobile={isMobile}>     
                    <div className="titleText">
                        <div className="titleSquare"></div>
                        {title}
                    </div>
                    {user.tipo_usuario === 4?
                    <IconBox  mobile={isMobile}>
                        {event.inscritos.length > 0 && <img src={analyticIcon} alt="logoStatistic" onClick={handleAnalyticPage}/>}
                        <img src={editIcon} alt="logoEdit" onClick={handleEditPage}/>
                        <img src={trashIcon} alt="logoTrash" onClick={handleDelete}/>
                    </IconBox>:
                     null}

                    {user.tipo_usuario !== 4 & toDay < new Date(event.data_evento)?
                    <IconBox  mobile={isMobile}>
                        {numberParticipant[0] !== undefined? 
                            numberParticipant.find(element => parseInt(element.id_usuario) === user.id_usuario)? 
                                <img src={unCheckIcon} alt="logoCancelSubscribe" onClick={handleUnSubPage}/> : numberParticipant.length === numberMax? null : <img src={checkIcon} alt="logoSubscribe" onClick={handleSubPage}/>
                         : <img src={checkIcon} alt="logoSubscribe" onClick={handleSubPage}/>}
                    </IconBox>:
                     null}
                </TitleContainer>

                <InfoContainer mobile={isMobile}>
                    <label>Mediador:</label>
                    <div>{mediator}</div>
                    <label>Participantes:</label>
                    <div>{numberParticipant.length} / {numberMax}</div>
                </InfoContainer>
                <InfoContainer mobile={isMobile}>
                    <label>Data:</label>
                    <div>{handleDate(date)}</div>
                    <label>Horário:</label>
                    <div>{handleTime(date)}</div>
                    <label>Local:</label>
                    <div>{place}</div>
                </InfoContainer>
                <InfoContainer mobile={isMobile}>
                    <label>Descrição:</label>
                </InfoContainer>
                <DescriptionContainer mobile={isMobile}>
                    <section>      
                        <div>{description}</div>
                    </section>
                </DescriptionContainer>
            </EventInfoContainer>
        </Container>
    )
}

export default memo(EventContainer);
