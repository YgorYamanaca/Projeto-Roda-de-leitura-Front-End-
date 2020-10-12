import React, { memo } from 'react'
import { SideBarContainer, IconBox} from '../../components/SideBar/styles'
import IconCalender from '../../assets/Icon/icon_Calendario.png'
import IconForum from '../../assets/Icon/icon_Forum.png'
import IconHelp from '../../assets/Icon/icon_info.png'
import IconMore from '../../assets/Icon/icon_more.png'
import { useHistory, useLocation } from 'react-router-dom'

function SideBar({SideBarID}) {
    const history = useHistory();
    const location = useLocation();

    return (
        <SideBarContainer>  
            <IconBox className="Calender" onClick={() => {history.push('/calender')}} isSelected={location.pathname === "/calender"? true:false}>
                <img src={IconCalender} alt="LogoCalender"/>
                <div>Calendário</div>
            </IconBox>

            <IconBox className="Forum"  onClick={() => {history.push('/forum')}} isSelected={location.pathname === "/forum"? true:false}>
                <img src={IconForum} alt="LogoForum"/>
                <div>Fórum</div>
            </IconBox>

            <IconBox className="Help" onClick={() => {history.push('/help')}} isSelected={location.pathname === "/help"? true:false}>
                <img src={IconHelp} alt="LogoHelp"/>
                <div>Ajuda</div>
            </IconBox>
        </SideBarContainer>        
    )

}

export default memo(SideBar, (prevProps, nextProps) => prevProps.SideBarID !== nextProps.SideBarID)
