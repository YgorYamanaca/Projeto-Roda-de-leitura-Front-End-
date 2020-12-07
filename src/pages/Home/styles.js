import styled from 'styled-components';

export const Container = styled.div`
    height:100%;
    width:100%;
`;

export const Content = styled.div`
    margin-left:${props => props.mobile? '50px' : '70px'};
    width:${props => props.mobile? 'calc(100% - 50px)' : 'calc(100% - 70px)'} ;
    height:${props => props.mobile? 'calc(100% - 65px)' : 'calc(100% - 80px)'} ;
    background-color: #fafafa;
`;
