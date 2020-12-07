import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    overflow-y:auto;
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

export const StyEmpetyEvent = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    justify-content:center;
    align-items:center;
    color: #024ea2;
    font-weight:600;
    font-size: 24px;
    padding:10px;
`;
