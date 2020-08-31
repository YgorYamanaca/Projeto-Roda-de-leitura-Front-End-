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
    img
    {
        width:12%;
        padding: 0.5px;
        margin-right:10px;
    }
    div
    {
        color: #fafafa;
        font-size:${(props) => props.fontsize};
        font-weight:600;
        height:auto;
        width:auto;
    }
`;
