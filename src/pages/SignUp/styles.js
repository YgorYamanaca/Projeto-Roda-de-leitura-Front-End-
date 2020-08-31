import styled from 'styled-components';

export const SingUpBox = styled.div`
    background-color:#ffff;
    max-width:400px;
    height:100%;
    margin:5% auto;
    padding:0px 5px;
    box-shadow:0 0 20px rgb(0, 0, 0 , 0.2);

    img.backIcon{
        display:flex;
        flex-direction:row;
        width:11.5%;
        height:9%;
    }

    img.pucLogo{
        display:flex;
        flex-direction:row;
        margin:5px auto;
        width:90%;
        padding:15px;
    }
`;

export const Form = styled.form`
    margin-top:5%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0px 30px;
    input
    {
        width:350px;
        font-size:20px;
        border:1px solid #DDD;
        background-color:#fafafa;
        margin: 2% 0;
        box-sizing: border-box;
        padding: 0.5px 10px;
        ::placeholder{
            opacity:0.5;
        }
    }
`;

export const SubmitButton = styled.button.attrs({
    type:"submit"
})`
    margin: 5% 0;
    width:350px;
    height:40px;
    font-size:25px;
    color:#ffff;
    background-color:#024ea2;
    border:0;
    border-radius:4px;
    margin-top:50px;
`