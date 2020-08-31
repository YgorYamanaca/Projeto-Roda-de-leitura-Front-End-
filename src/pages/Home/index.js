import React from 'react'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import {Content, Container} from './styles'

export default function Home(props) {
    return (
           <Container className="MainScreen">
                <TopBar/>
                <SideBar/>
                <Content>
                    { props.children }
                </Content>
           </Container>
    );
}
