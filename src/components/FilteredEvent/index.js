import React, { useEffect, useState } from 'react';
import { FiltredEventListContainer, BackImg, TopContainer, TopText, FiltredEventListBox} from './styles.js';
import BackIcon from '../../assets/Icon/icon_Back.png';
import EventContainer from '../EventContainer/'

/** 
 * @description Componente eventos filtrado por data
 */
function FilteredEvent({isRender, filterDate, eventList}) {
    const [dateLabel, setDateLabel] = useState();
    const listEvents  = eventList.map((event, index) => {
        return(<EventContainer key={index} event={event}/>)
    });
    console.log(eventList);
    useEffect(() => {
        setDateLabel(`${filterDate.getDate()} / ${filterDate.getMonth() + 1} / ${filterDate.getFullYear()}`)
    }, [filterDate])
    
    return (
    <FiltredEventListContainer>
        <TopContainer>
            <BackImg src={BackIcon} alt="LogoBIcon" onClick={isRender}/>
            <TopText>
                {dateLabel}
            </TopText>
        </TopContainer>

        <FiltredEventListBox>
            {listEvents}
        </FiltredEventListBox>
    </FiltredEventListContainer>
    )
}

export default FilteredEvent;