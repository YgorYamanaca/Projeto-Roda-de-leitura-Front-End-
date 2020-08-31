import styled from 'styled-components';


export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const WhiteContainer = styled.div`
    position:absolute;
    z-index:5;
    width: calc(100% - 70px);
    height: calc(100% - 80px);
    background-color: white;
    opacity:0.8;
`;

export const AddEventContainer = styled.div`
    justify-content:center;
    display: flex;
    position:absolute;
    z-index:6;
    width: calc(100% - 70px);
    height: calc(100% - 80px);
    overflow-y: auto; 
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
    width: calc(100% - 70px);
    height: calc(100% - 80px);
    overflow-y: auto; 
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
    justify-content:center;
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

    button.addButton
    {    
        position:absolute;
        z-index:1;
        margin: 0.2% 0.5%;
        right: 0;
    }
`;

export const CalenderBox = styled.div`
   
    height: 90%;
    width: 98%;
    border: 5px solid #024ea2;
    margin:70px 5px 0 5px;
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
    }
    div.rbc-calendar
    {
        background-color: #024ea2;
        height: 100%;
    }
    button.rbc-active
    {
        color: #024ea2;
        font-weight: 500;
    }
    div.rbc-day-bg.rbc-off-range-bg{
        background-color:#CFCFD2;
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
        :hover{
            cursor:pointer;
        }
        
    }
    div.rbc-event-content
    {
        pointer-events: none;
    }

    div.rbc-date-cell
    {
        a{
            font-size:30px; 
            font-weight: 700;
            color: #024ea2;
            pointer-events: none;
            
        }
        :hover
        {
            cursor:pointer;
       }
    }

    div.rbc-date-cell.rbc-off-range
    {
        a
        {
            opacity: 0.5;
        }
    }
    div.rbc-row
    {
        :hover{
            cursor:pointer;
        }    
    }
    div.rbc-row-segment
    {
        display:flex;
        justify-content:center;
        :hover{
            cursor:pointer;
        }
        pointer-events: none;
        
    }
    div.rbc-event.rbc-selected
    {
        pointer-events: none;
    }
    div.rbc-event
    {
        background-color:orange;
        width:80%;
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