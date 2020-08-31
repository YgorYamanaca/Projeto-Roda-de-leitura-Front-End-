import React, { useEffect, useState } from 'react';
import { FiltredEventListContainer, BackImg, TopContainer, TopText, FiltredEventListBox} from './styles.js';
import BackIcon from '../../assets/Icon/icon_Back.png';
import EventContainer from '../EventContainer/'
function FilteredEvent({isRender, filterDate, eventList, data}) {
    const [dateLabel, setDateLabel] = useState();
    
    const listEvents  = eventList.map((event, index) => {
        return(<EventContainer key={index} event={event} eventClone={data}/>)
    });

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