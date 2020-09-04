import styled from 'styled-components';

export const Container = styled.button.attrs(props => ({
    type: props.type,
}))`
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: #024ea2;
    height: ${(props) => props.heightStyle};
    width: ${(props) => props.widthStyle};
    padding:10px 2.5px;
    border-radius:10px;
    border: 0px solid;
    overflow:hidden;
    padding:5px;
    margin:5px;
    img
    {
        width:12%;
        padding: 0.5px;
        margin-right:10px;
    }
    div
    {
        font-family: 'Catamaran', sans-serif;
        color: #fafafa;
        font-size:${(props) => props.fontsize};
        font-weight:600;
        height:auto;
        width:auto;
    }
    :hover
    {
        cursor:pointer;
    }
    :active
    {
        transform: scale(0.97);
        box-shadow: -2px 3px 15px -5px rgba(0,0,0,0.3);
    }
`;
