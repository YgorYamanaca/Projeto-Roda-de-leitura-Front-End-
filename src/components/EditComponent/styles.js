import styled from 'styled-components';

export const EditBox = styled.span`
    display: flex;
    flex-direction: column;
    position:absolute;
    width: 55%;
    height: auto;
    background-color:#ffff;
    box-shadow:0 0 20px rgb(0, 0, 0 , 0.2);
    border:1px solid #DDD;
    margin-top:25px;
`;

export const TopContainer = styled.div`
    display:flex;
    width:100%;
    height:auto;
    padding:2px;
`;

export const TopText = styled.div`
    width:100%;
    margin-right:10%;
    font-size:3vw;
    font-weight:500;
    text-align:center; 
    color:#024ea2;
    padding-top:15px;
`;

export const BackImg = styled.img`
    width:8.5%;
    height: 85%;
    :hover{
        cursor:pointer;
    }
`;

export const EditContainer = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height: 90%;
    padding:2%;
    input
    {
        font-family: 'Catamaran', sans-serif;
        width:90%;
        height: auto;
        font-size:20px;
        border:1px solid #DDD;
        background-color:#fafafa;
        margin: 10px 0;
        box-sizing: border-box;
        padding: 0.5px 10px;
        ::placeholder{
            opacity:0.5;
        }
    }

    div.react-datepicker-wrapper
    {
        display:block;
        width:90%;
        height: auto;
        font-family: 'Catamaran', sans-serif;
    }


    textarea.description
    {
        font-family: 'Catamaran', sans-serif;
        display:flex;
        width:90%;
        height:200px;
        font-size:20px;
        border:1px solid #DDD;
        margin: 2% 0;
        box-sizing: border-box;
        padding: 0.5px 10px;
        background-color:#fafafa;
        ::placeholder{
            opacity:0.5;
        }  
    }
`;
