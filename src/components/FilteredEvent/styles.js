import styled from 'styled-components';

export const FiltredEventListContainer = styled.div`
    display: flex;
    flex-direction: column;
    position:absolute;
    width: 90%;
    height: 92%;
    margin-top:25px;
    background-color:#ffff;
    box-shadow:0 0 20px rgb(0, 0, 0 , 0.2);
    border:1px solid #DDD;
`;

export const TopContainer = styled.div`
    display:flex;
    width:100%;
    height:auto;
    padding:2px;
`;

export const TopText = styled.div`
    width:100%;
    margin-right:10%;
    font-size:40px;
    font-weight:700;
    text-align:center; 
    color:#024ea2;
    padding-top:15px;
`;

export const BackImg = styled.img`
    width:75px;
    height:75px;
    :hover{
        cursor:pointer;
    }
`;

export const FiltredEventListBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height: 100%;
    margin:1% 0;
    overflow-y: auto;

    &::-webkit-scrollbar-track
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar
    {
        width: 1.5%;
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb
    {
        
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #024ea2;
    }
`;