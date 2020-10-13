import React, { memo } from 'react'
import { SideBarContainer, IconBox} from '../../components/SideBar/styles'
import IconCalender from '../../assets/Icon/icon_Calendario.png'
import IconForum from '../../assets/Icon/icon_Forum.png'
import IconHelp from '../../assets/Icon/icon_info.png'
import { useHistory, useLocation } from 'react-router-dom'
import { isMobile } from "react-device-detect";

function SideBar({SideBarID}) {
    const history = useHistory();
    const location = useLocation();

    return (
        <SideBarContainer mobile={isMobile}>  
            <IconBox mobile={isMobile}  className="Calender" onClick={() => {history.push('/calender')}} isSelected={location.pathname === "/calender"? true:false}>
                <img src={IconCalender} alt="LogoCalender"/>
                {!isMobile? <div>Calendário</div> : null}
            </IconBox>

            <IconBox mobile={isMobile} className="Forum"  onClick={() => {history.push('/forum')}} isSelected={location.pathname === "/forum"? true:false}>
                <img src={IconForum} alt="LogoForum"/>
                {!isMobile? <div>Fórum</div> : null}
            </IconBox>

            <IconBox mobile={isMobile} className="Help" onClick={() => {history.push('/help')}} isSelected={location.pathname === "/help"? true:false}>
                <img src={IconHelp} alt="LogoHelp"/>
                {!isMobile? <div>Ajuda</div> : null}
            </IconBox>
        </SideBarContainer>        
    )

}

export default memo(SideBar, (prevProps, nextProps) => prevProps.SideBarID !== nextProps.SideBarID)
