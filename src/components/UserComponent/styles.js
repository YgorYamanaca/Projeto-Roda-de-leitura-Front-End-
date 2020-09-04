import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
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

export const ImgContainer = styled.img`
    height: 200px;
    width: 200px;
    @media only screen and (max-width: 764px)
    {
    /* For everything bigger than 768px */
        height: 180px;
        width: 180px;
    }
    margin:10px;
    padding:5px;
`;

export const UserInfContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TextContainer = styled.div`
    label
    {
        font-weight: 700;
        color: #024ea2;
        font-size:35px;
    }
    
    div
    {
        font-weight: 500;
        font-size:2vw;
        font-size:34px;
    }
    
`;