import styled from 'styled-components';

export const SideBarContainer = styled.div`
    display:flex;
    position:fixed;
    background-color: #16336b;
    left: 0;
    width: ${props => props.mobile? '50px' : '70px'};
    height:100%;
    padding: 2px;
    flex-direction: column;
    div.More
    {
        height:55px;
    }
    div.Help
    {
        margin-top: auto;
        margin-bottom: 150%;
    }
`;

export const IconBox = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    align-items:center;
    width: 100%;
    height:${props => props.mobile? '50px' : '75px'};
    font-size:14px;
    /*Precisa de media query na fonte */
    overflow-wrap: break-word;
    font-weight:500;
    text-align: center;
    color: #fafafa;
    margin-bottom:${props => props.mobile? '10px' : '30px'};
    div
    {
        width:100%;
        height:30%;
    }
    &{
        background-color:${(props) => {return(props.isSelected? "#2351aa": "")}};
        opacity:${(props) => {return(props.isSelected? "0.7": "")}};
    }
    img
    {
        margin: 2px;
        width:${props => props.mobile? '45px' : '50px'};
        height:${props => props.mobile? '45px' : '50px'};
        :hover{
        cursor: pointer;
        }
        :active
        {
            transform: scale(0.90);
        }
    }
`;
