import styled from 'styled-components';


export const Container = styled.div`
    position:relative;
    height: 100%;
    width: 100%;
`;

export const WhiteContainer = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    z-index:5;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
`;

export const AddEventContainer = styled.div`
    justify-content:center;
    display: flex;
    position:absolute;
    z-index:6;
    width: 100%;
    height: 100%;
    &::-webkit-scrollbar-track
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar
    {
        width: 0.6%;
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #024ea2;
    }
`;

export const EventsContainer = styled.div`
    justify-content:center;
    display: flex;
    position:absolute;
    z-index:6;
    width: 100%;
    height: 100%;
    &::-webkit-scrollbar-track
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar
    {
        width: 0.6%;
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #024ea2;
    }  
`;

export const CalenderContainer = styled.div`
    display:flex;
    flex-direction:column;
    overflow: auto;
    height: 100%;
    width: 100%;
    background-color: #fafafa;
    &::-webkit-scrollbar-track
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar
    {
        width: 0.6%;
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #024ea2;
    }
`;

export const CalenderBox = styled.div`
   
    height: 90%;
    width: 98%;
    border: 10px solid #024ea2;
    border-radius:5px;
    overflow:hidden;
    margin:2.5px;
    align-self: center;
    div.rbc-header
    {
        text-transform:capitalize;
        background-color: #024ea2;
        color: #FFFFFF;
        font-weight: 500;
        
    }
    button
    {
        background-color: #024ea2;
        color: #FFFFFF;
        font-weight: 500;
        margin:2.5px;
        :hover
        {
            cursor:pointer;
            background-color: #0366d4;
            color: #FFFFFF;
            :active
            {
                background-color: #0366d4;
                color: #FFFFFF;
            }
        }
        :active
        {
            background-color: #024ea2;
            color: #FFFFFF;
            transform: scale(0.97);
            box-shadow: -2px 3px 15px -5px rgba(0,0,0,0.3);
        }
        :focus
        {
            background-color: #024ea2;
            color: #FFFFFF;
        }
    }
    div.rbc-calendar
    {
        background-color: #024ea2;
    }
    button.rbc-active
    {
        color: #024ea2;
        font-weight: 500;
    }
    div.rbc-day-bg.rbc-off-range-bg{
        background-color:#CFCFD2;
    }
    div.rbc-day-bg.rbc-today
    {
        background-color:#8be2af;
    }
    span.rbc-toolbar-label
    {
        text-transform:capitalize;
        margin-right: 15%;
        text-align:center;
        font-size:25px;
        color: #FFFFFF;
        font-weight: 500;
        background-color: #024ea2;
    }
    div.rbc-day-bg
    {
        background-color:#FFFFFF;
        cursor:pointer;
    }
    div.rbc-date-cell  
    {
        cursor:pointer;
        a{
            font-size:30px; 
            font-weight: 700;
            color: #024ea2;
            pointer-events:none;
            cursor:default;
        }
    }
    div.rbc-date-cell.rbc-off-range
    {
        a
        {
            opacity: 0.5;
            pointer-events:none;
        }
    }
    div.rbc-row-segment
    {
        display:flex;
        justify-content:center;
        cursor:pointer;
    }
    div.rbc-event
    {
        background-color:orange;
        width:80%;
        pointer-events:none;
    }
    div.rbc-month-row.rbc-month-row 
    {
        border-top: 1px solid #024ea2;
    }

    div.rbc-day-bg.rbc-day-bg 
    {
        border-left: 1px solid #024ea2;
    }
    div.rbc-time-content
    {
        &::-webkit-scrollbar-track
        {
            
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #FFFFFF;
        }

        &::-webkit-scrollbar
        {
            width: 0.6%;
            background-color: #FFFFFF;
        }

        &::-webkit-scrollbar-thumb
        {
            
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #024ea2;
        }
    }

    div.rbc-time-headerrbc-overflowing
    {
        background-color:red;
        margin-right:0.6%;
    }

`;

export const CalenderHeader = styled.div`
    button.addButton
    {  
        position:relative;
        margin: 5px 10px 5px auto;
    }
`;
