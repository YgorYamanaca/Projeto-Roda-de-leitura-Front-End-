import styled from 'styled-components';

export const EventAnalyticsBox = styled.span`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    position:absolute;
    align-items:center;
    width: ${props => props.mobile? '98%':'90%'};
    margin-top:1.5%;
    background-color:#ffff;
    box-shadow:0 0 20px rgb(0, 0, 0 , 0.2);
    padding:10px;
    border:1px solid #DDD;
    height: 95%;
`;


export const TopText = styled.div`
    width:85%;
    font-size:${props => props.mobile? '18px':'3vw'};
    font-weight:500;
    text-align:center; 
    color:#024ea2;
    padding:10px;
`;

export const AnalyticContent = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    padding:2.5px;
    overflow: auto;
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
    margin:5px 0;

    height: auto;
    width: 500px;
`;
