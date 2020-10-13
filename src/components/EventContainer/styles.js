import styled from 'styled-components';

export const Container = styled.div`
    max-height:400px;
    width: 98%;
    background-color: #fafafa;
    box-shadow: ${props => props.mobile? '0px 5px 10px 0px rgba(0,0,0,0.3)':'0px 15px 30px 0px rgba(0,0,0,0.3)'};
    margin:3.0% auto;
    padding:${props => props.mobile? '4px 5px 4px 5px':'10px 35px 15px 35px'};
    border:1px solid #DDD;
    font-family: 'Catamaran', sans-serif;
`;

export const WhiteContainer = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    right:0;
    bottom:0;
    z-index:11;
    width:${ props => props.path === '/calender'? '100%' : props.mobile? 'calc(100% - 50px)':'calc(100% - 70px)'};
    height: ${ props => props.path === '/calender'? '100%' : props.mobile? 'calc(100% - 65px)': 'calc(100% - 80px)'};
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
    max-height: 40%;
    width:100%;
    .titleText
    {
        display:flex;
        font-size:${props => props.mobile? '18px':'40px'};
        color:#024ea2;
        font-weight:700;
        align-items:center;
        height: 100%;
        width: auto;
        word-wrap: break-word;
    }
    .titleSquare
    {
        display: flex;
        background-color: orange;
        height: ${props => props.mobile? '10px':'20px'};
        width: ${props => props.mobile? '10px':'20px'};
        margin: ${props => props.mobile? '0px 5px 2px 5px;':'0px 10px 2.5px 10px'};
    }
`;

export const IconBox = styled.div`
    display:flex;
    align-items:center;
    margin-left:auto;
    img
    {
        height: ${props => props.mobile? '20px':'40px'};
        widows: ${props => props.mobile? '20px':'40px'};
        margin: ${props => props.mobile? '2.5px 4px':'5px 10px'};
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
    flex-wrap:wrap;
    label
    {   
        font-size:${props => props.mobile? '16px':'30px'};
        color:#024ea2;
        font-weight:600;
        margin-right:${props => props.mobile? '2.5px':'10px'};
    }
    div
    {
        max-width:100%;
        max-height:100%;
        font-size:${props => props.mobile? '16px':'30px'};
        color:#000;
        font-weight:500;
        margin-right:${props => props.mobile? '6.5px':'15px'};
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
        font-size:${props => props.mobile? '16px':'30px'};
        color:#000;
        font-weight:500;
    }
`;
