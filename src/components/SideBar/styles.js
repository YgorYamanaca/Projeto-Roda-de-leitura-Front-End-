import styled from 'styled-components';

export const SideBarContainer = styled.div`
    display:flex;
    position:fixed;
    background-color: #16336b;
    left: 0;
    width: 70px;
    height:100%;
    padding: 1.5% 0% 2% 0%;
    flex-direction: column;
    div.More
    {
        height:55px;
    }
    div.Help
    {
        margin-top: auto;
        margin-bottom: 125%;
    }
`;

export const IconBox = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    align-items:center;
    width: 100%;
    height:75px;
    font-size:12px;
    /*Precisa de media query na fonte */
    overflow-wrap: break-word;
    font-weight:500;
    text-align: center;
    color: #fafafa;
    margin-bottom:40px;
    div
    {
        width:100%;
        height: 30%;
    }
    &{
        background-color:${(props) => {return(props.isSelected? "#2351aa": "")}};
        opacity:${(props) => {return(props.isSelected? "0.7": "")}};
    }
    img
    {
        margin: 2px;
        max-width:75%;
        max-height:75%;
    }
    :hover{
        cursor: pointer;
    }
`;
