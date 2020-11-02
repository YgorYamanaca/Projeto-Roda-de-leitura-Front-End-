import styled from 'styled-components';

export const ForumContainer = styled.div`
	display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background-color: #F1F1F1;
`;

export const ListContainer = styled.div`
	display:flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    align-items:center;
`;

export const Title = styled.div`
	font-weight: bold;
    padding: 15px;
    box-shadow: 0px 2px 5px #707070;
    z-index: 2;
    p{
        color:#444444;
        font-size: 28px;
        margin-left: 35px;

    }
`;

export const HeaderTextTitle = styled.div`
    font-size: 22px;
    color:#a6a6a6;
    flex:1;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    padding:8px 27px;
    border-bottom:1px solid #BCBCBC;
`;
