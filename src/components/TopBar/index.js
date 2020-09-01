import React, { useState, useEffect, memo, useRef } from 'react'
import { TopBarStyle, PUCLogo, UserContainer, Option } from '../../components/TopBar/styles'
import PucLogo from '../../assets/Logo/logo_PUC.png';
import Avatar from '../../assets/Icon/icon_avatar.png';
import { useHistory, useLocation } from 'react-router-dom'
import {logout} from '../../services/auth';
import { useDispatch, useSelector } from 'react-redux';

function TopBar({TopBarID}) {
    const history = useHistory();
    const location = useLocation();
    const [isExpand, setExpand] = useState(false);
    const dispatch = useDispatch();
    const selector = useSelector(state => state.user);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    
    useEffect(() => {
        setExpand(false);
    }, [location.pathname])
    
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setExpand(false);
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

    return (    
        <>
            <TopBarStyle>
                <PUCLogo src={PucLogo} alt="PucLogo"  onClick={() => {history.push('/calender')}}/>
                <UserContainer>
                    <img src={Avatar} alt="LogoAvatar" onClick={() => setExpand(!isExpand)}/>
                </UserContainer>
            </TopBarStyle> 
            {isExpand?
                <Option ref={wrapperRef}>
                    <div> 
                        <img src={Avatar} alt="LogoAvatar"/>
                        <span>{selector.nome}</span>
                    </div>
                    <li onClick={() => {history.push('/user')}}>Meu Perfil</li>
                    <li onClick={() => {history.push('/events')}}>{selector.tipo_usuario === "4"? "Eventos Cadastrados" :  "Meus Eventos"}</li>
                    <li onClick={() => {logout(); dispatch({ type:'CLEAR_USER' }); history.push('/')}}>Sair</li>
                </Option> : null}
            </>
    );
    }

export default memo(TopBar, (prevProps, nextProps) => prevProps.TopBarID !== nextProps.TopBarID)