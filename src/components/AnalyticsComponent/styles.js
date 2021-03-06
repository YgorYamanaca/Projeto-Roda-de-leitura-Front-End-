import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction: column;
height: 100%;
width: 100%;
overflow-y: auto;
justify-content:center;
background-color: #F1F1F1;
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

export const ExternalBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:95%;
    width:98%;
    margin:auto;
    background-color: #FFF; 
    box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75); 
    padding:15px;  
    overflow-y:auto;
    word-wrap: break-word;
`;

export const Title = styled.div`
    font-size:35px;
    font-weight:700;
    color:#024ea2;
`

export const Context = styled.div`
    display:flex;
    flex-direction:column;
    padding:1.5%;
    width:100%;
    height:100%;

`

export const DateRequestSty = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    align-items:flex-end;
    padding:5px;
    flex-wrap: wrap;
    input
    {
        font-family: 'Catamaran', sans-serif;
        height: auto;
        font-size:${props => props.isMobile? '14px':'clamp(13px, 1.5vw, 2.0vw)'};
        border:1px solid #DDD;
        background-color:#fafafa;
        box-sizing: border-box;
        padding: 0.5px 10px;
        text-overflow: ellipsis;
        ::placeholder
        {
            opacity:0.5;
        }
    }

    div.react-datepicker-wrapper
    {
        display:block; 
    }

    button
    {
        margin-top: ${props => props.isMobile? '10px':'0px'};
        margin-bottom: ${props => props.isMobile? '0px':'0px'};
    }
`

export const DateContent = styled.div`
    display:flex;
    flex-direction:column;
    font-size:${props => props.isMobile? '14px':'clamp(13px, 1.5vw, 2.0vw)'};
    margin: 0 15px;
    color: #024ea2;
    margin-top: ${props => props.isMobile? '5px':'null'};
    & > div
    {  
        opacity: ${props => props.disabled? '0.75':'1'};
    }
`

export const ResponseDataSty = styled.div`
    height:100%;
    width:100%;
    padding:10px;
    margin-top:15px;
`   
export const StySubData = styled.div`
    display:flex;
    width:100%;
    margin-bottom:10px;
    justify-content:space-around;
    font-size:${props => props.isMobile? '14px':'clamp(13px, 2vw, 2.5vw)'};
    & > div > span
    {
        color: #024ea2;
        font-size:${props => props.isMobile? '14px':'clamp(13px, 2vw, 2.5vw)'};
    }
`  

export const AnalyticContent = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
    padding:5.5px;
    overflow: auto;
    flex-wrap: wrap;
    &::-webkit-scrollbar-track
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar
    {
        width: 10px;
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #024ea2;
    }
`;

export const GraphicContent = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    font-size:14px;
    font-weight:500;
    text-align:center; 
    color:#024ea2;
    box-shadow:0 0 10px rgb(0, 0, 0 , 0.2);
    background-color:#ffff;
    padding: 5px;
    margin:5px;

    height: auto;
    width: 500px;
`;