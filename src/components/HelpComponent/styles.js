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
    width:90%;
    margin:auto;
    background-color: #FFF; 
    box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75); 
    padding:25px;  

    word-wrap: break-word;
`;

export const Title = styled.div`
    font-size:35px;
    font-weight:700;
    color:#024ea2;
`

export const Context = styled.div`
    font-size:20px;
    font-weight:500;
    span{
        font-weight:600; 
        color:#024ea2;
        margin:0 5px;
    }
`