import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content:center;
    background-color: #F1F1F1;
`;

export const ImgContainer = styled.img`
    height: ${props => props.mobile? '100px':'100px'};
    width: ${props => props.mobile? '100px':'100px'};
    background-color:#024ea2;
    border-radius: 50%;
    margin:auto;
`;

export const UserInfContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin:25px;
    label
    {
        font-weight: 700;
        color: #024ea2;
        font-size:${props => props.mobile? '26px':'34px'};
    }
    
    div
    {
        font-weight: 500;
        font-size:${props => props.mobile? '24px':'34px'};
    }
`;

export const TextContainer = styled.div`
    
`;

export const ExternalBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    height:95%;
    width:98%;
    margin:auto;
    background-color: #FFF; 
    box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75); 
    padding:25px;  
    overflow-y:auto;

    ::-webkit-scrollbar
    {
        width: ${props => props.mobile? '5px':'10px'};
        background-color: #FFFFFF;
    }

    ::-webkit-scrollbar-track
    {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #FFFFFF;
    }

    ::-webkit-scrollbar-thumb
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #024ea2;
    }
`;