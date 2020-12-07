import styled from 'styled-components';

export const UnSubscribeBox = styled.span`
    display: flex;
    flex-direction: column;
    position:absolute;
    align-items:center;
    width: ${props => props.mobile? '98%':'50%'};
    height: auto;
    margin-top:10%;
    background-color:#ffff;
    box-shadow:0 0 20px rgb(0, 0, 0 , 0.2);
    padding:10px;
    border:1px solid #DDD;
`;

export const TopText = styled.div`
    width:85%;
    font-size:${props => props.mobile? '18px':'3vw'};
    font-weight:500;
    text-align:center; 
    color:#024ea2;
    padding:10px;
`;

export const ButtonBox = styled.div`
    display: flex;
    width: 95%;
    justify-content:space-around;
`;