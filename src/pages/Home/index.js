import React from 'react'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import {Content, Container} from './styles'
import { isMobile } from "react-device-detect";

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
