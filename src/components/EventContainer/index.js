import React, { memo, useState, useEffect } from 'react'
import { Container, WhiteContainer, EventdialogContainer, TitleContainer, IconBox,
    EventInfoContainer, InfoContainer, DescriptionContainer, WhiteContainerz5} from './styles';
import trashIcon from '../../assets/Icon/icon_trash.png';
import editIcon from '../../assets/Icon/icon_edit.png';
import checkIcon from '../../assets/Icon/icon_checkbox.png';
import unCheckIcon from '../../assets/Icon/icon_cancel.png';
import {useLocation} from 'react-router-dom';
import EditComponent from '../EditComponent/';
import DeleteComponent from '../DeleteComponent/';
import SubscribeComponent from '../SubscribeComponent/';
import UnSubscribeComponent from '../UnSubscribeComponent/';
import { useSelector } from 'react-redux';

function EventContainer({event, eventClone}) {
    const [isDeletePageRender, setDeletePage] = useState(false);
    const [isEditPageRender, setEditPage] = useState(false);
    const [isSubscribePageRender, setSubPage] = useState(false);
    const [isUnSubscribePageRender, setUnSubPage] = useState(false);
    const actualPath = useLocation();
    const [title, setTitle] = useState("");
    const [mediator, setMediator] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [numberParticipant, setParticipant] = useState("");
    const [numberMax, setNumberMax] = useState("");
    const [eventType, setEventT] = useState("");
    const selector = useSelector(state => state.user);
   function handleDate(timezone)
    {
        let newDate=new Date(timezone);
        newDate = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
        return newDate;
    }

    function handleTime(timezone)
    {
        let newDate=new Date(timezone);
        newDate = `${newDate.getHours() > 9? newDate.getHours():'0' + newDate.getHours()}:${newDate.getMinutes() > 9? newDate.getMinutes(): '0' + newDate.getMinutes()}`;
        return newDate;
    }
    
    function handleEditPage()
    {
        setEditPage(!isEditPageRender)
    }

    function handleDelete()
    {
        setDeletePage(!isDeletePageRender)
    }
    
    function handleSubPage()
    {
        setSubPage(!isSubscribePageRender)
    }

    function handleUnSubPage()
    {
        setUnSubPage(!isUnSubscribePageRender)
    }

    useEffect(() => {
        setTitle(event.titulo);
        setMediator(event.nome_mediador);
        setPlace(event.local);
        setDescription(event.descricao);
        setDate(event.data_evento);
        setNumberMax(event.max_participantes);
        setEventT(event.tipo);
        setParticipant(event.inscritos !== undefined? event.inscritos : "");
    }, [event])
    return ( 
        <Container>
        {isEditPageRender?
            <WhiteContainer path={actualPath.pathname}>
                <EditComponent isRender={handleEditPage} editDate={event}></EditComponent>
            </WhiteContainer>
            : null}
        
        {isDeletePageRender?
            <WhiteContainer path={actualPath.pathname}>
                <DeleteComponent isRender={handleDelete} eventID={event.id_evento} eventClone={eventClone}></DeleteComponent>
            </WhiteContainer>
            : null}

        {isSubscribePageRender?
            <WhiteContainer path={actualPath.pathname}>
                <SubscribeComponent isRender={handleSubPage} event={event} eventClone={eventClone}></SubscribeComponent>
            </WhiteContainer>
            : null}
        
        {isUnSubscribePageRender?
            <WhiteContainer path={actualPath.pathname}>
                <UnSubscribeComponent isRender={handleUnSubPage} event={event} eventClone={eventClone}></UnSubscribeComponent>
            </WhiteContainer>
            : null}

            
            <EventInfoContainer>
                <TitleContainer>     
                    <div className="titleText">
                        <div className="titleSquare"></div>
                        {title} - {eventType}
                    </div>
                    {selector.tipo_usuario === "4"?
                    <IconBox>
                        <img src={editIcon} alt="logoEdit" onClick={handleEditPage}/>
                        <img src={trashIcon} alt="logoTrash" onClick={handleDelete}/>
                    </IconBox>:
                     null}

                    {selector.tipo_usuario !== "4"?
                    <IconBox>
                        {numberParticipant[0] !== undefined? 
                            numberParticipant.find(element => element.id_usuario === selector.id_usuario)? 
                                <img src={unCheckIcon} alt="logoCancelSubscribe" onClick={handleUnSubPage}/> : numberParticipant.length === numberMax? null : <img src={checkIcon} alt="logoSubscribe" onClick={handleSubPage}/>
                         : <img src={checkIcon} alt="logoSubscribe" onClick={handleSubPage}/>}
                    </IconBox>:
                     null}

                </TitleContainer>
                <InfoContainer>
                    <label>Mediador:</label>
                    <div>{mediator}</div>
                    <label>Participantes:</label>
                    <div>{numberParticipant.length} / {numberMax}</div>
                </InfoContainer>
                <InfoContainer>
                    <label>Data:</label>
                    <div>{handleDate(date)}</div>
                    <label>Horário:</label>
                    <div>{handleTime(date)}</div>
                    <label>Local:</label>
                    <div>{place}</div>
                </InfoContainer>
                <InfoContainer>
                    <label>Descrição:</label>
                </InfoContainer>
                <DescriptionContainer>
                    <section>      
                        <div>{description}</div>
                    </section>
                </DescriptionContainer>
            </EventInfoContainer>
        </Container>
    )
}

export default memo(EventContainer);
