import React, { memo } from 'react'
import { SideBarContainer, IconBox} from '../../components/SideBar/styles'
import IconCalender from '../../assets/Icon/icon_Calendario.png'
import IconForum from '../../assets/Icon/icon_Forum.png'
import IconHelp from '../../assets/Icon/icon_info.png'
import AssessmentOutlinedIcon from '../../assets/Icon/icon_Analytics.png';
import { useHistory, useLocation } from 'react-router-dom'
import { isMobile } from "react-device-detect";
import { useSelector } from 'react-redux';



/** 
* @description Componente de side bar
*/
function SideBar() {
    const history = useHistory();
    const location = useLocation();
    const user = useSelector(state => state.user);
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

            {user.tipo_usuario === 4?
            <IconBox mobile={isMobile} className="Statistic" onClick={() => {history.push('/statistic')}} isSelected={location.pathname === "/statistic"? true:false}>
                <img src={AssessmentOutlinedIcon} alt="LogoStatistic"/>
                {!isMobile? <div>Estátistica</div> : null}
            </IconBox>
            :null}

            <IconBox mobile={isMobile} className="Help" onClick={() => {history.push('/help')}} isSelected={location.pathname === "/help"? true:false}>
                <img src={IconHelp} alt="LogoHelp"/>
                {!isMobile? <div>Ajuda</div> : null}
            </IconBox>
        </SideBarContainer>        
    )

}

export default memo(SideBar, (prevProps, nextProps) => prevProps.SideBarID !== nextProps.SideBarID)
