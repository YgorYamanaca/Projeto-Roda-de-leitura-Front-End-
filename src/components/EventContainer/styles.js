import styled from 'styled-components';

export const Container = styled.div`
    height: 55%;
    width: 90%;
    background-color: #fafafa;
    box-shadow: 0px 15px 30px 0px rgba(0,0,0,0.3);
    margin:3.0% auto;
    padding:10px 35px 15px 35px;
    border:1px solid #DDD;
`;

export const WhiteContainer = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    right:0;
    bottom:0;
    z-index:11;
    width:${ props => props.path === '/calender'? '100%' : 'calc(100% - 70px)'};
    height: ${ props => props.path === '/calender'? '100%' : 'calc(100% - 80px)'};
    background-color: rgba(0,0,0,0.3);
`;


export const EventdialogContainer = styled.div`
    justify-content:center;
    display: flex;
    position:absolute;
    z-index:10;
    width: 100%;
    height: 100%;
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

export const EventInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
`;

export const TitleContainer = styled.div`
    display: flex;
    max-height: 20%;
    width:100%;
    .titleText
    {
        display:flex;
        font-size:40px;
        color:#024ea2;
        font-weight:700;
        align-items:center;
        height: 100%;
        width: auto;
    }
    .titleSquare
    {
        display: flex;
        background-color: orange;
        height: 20px;
        width: 20px;
        margin: 0px 10px 2.5px 10px;
    }
`;

export const IconBox = styled.div`
    display:flex;
    align-items:center;
    margin-left:auto;
    img
    {
        height: 40px;
        widows: 40px;
        margin: 5px 10px;
        &:active
        {
            transform: scale(0.90);
        }
        &:hover
        {
            cursor:pointer;
        }
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    max-height: auto;
    display: flex;
    align-items:center;

    label
    {   
        font-size:30px;
        color:#024ea2;
        font-weight:600;
        margin-right:10px;
    }
    div
    {
        max-width:100%;
        max-height:100%;
        font-size:30px;
        color:#000;
        font-weight:500;
        margin-right:15px;
    }
`;

export const DescriptionContainer = styled.section`
    width: 100%;
    height: 55%;
    display:flex;
    word-break: break-all;
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
    div
    {
        font-size:30px;
        color:#000;
        font-weight:500;
    }
`;
