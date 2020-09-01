import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html{
    height:100%;
}

body, html, #root{
    font-family: 'Catamaran', sans-serif;
    background-color: #fafafa;
    font-size: 15px;
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    height:100%;
}

button{
    cursor: pointer;
}
`;
