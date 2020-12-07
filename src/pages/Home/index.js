import React from 'react'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import {Content, Container} from './styles'
import { isMobile } from "react-device-detect";

/** 
* @description Template das páginas após o login   
* @param {JSX.Element} props todos os componentes do children
*/

export default function Home(props) {
    return (
           <Container className="MainScreen">
                <TopBar/>
                <SideBar/>
                <Content mobile={isMobile}>
                    { props.children }
                </Content>
           </Container>
    );
}
