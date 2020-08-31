import styled from 'styled-components';

export const LoginBox = styled.div`
    background-color:#ffff;
    max-width:400px;
    height:100%;
    margin:5% auto;
    padding:15px;
    box-shadow:0 0 20px rgb(0, 0, 0 , 0.2);

    img
    {
        display:flex;
        flex-direction:row;
        margin:10px auto;
        width:100%;
        padding:25px;
    }
`;

export const Form = styled.form`
    margin-top:10%;
    display:flex;
    flex-direction:column;
    align-items:center;
    input
    {
        width:100%;
        font-size:25px;
        border:1px solid #DDD;
        background-color:#fafafa;
        margin: 2% 0;
        box-sizing: border-box;
        padding: 0.5px 10px;
        ::placeholder
        {
            opacity:0.5;
        }
    }
`;

export const SubmitButton = styled.button.attrs({
    type:"submit"
})`
    margin-top:15%;
    width:100%;
    height:40px;
    font-size:25px;
    color:#ffff;
    background-color:#024ea2;
    border:0;
    border-radius:4px;
`

export const LinkText = styled.div`
    font-size:24px;
    color:#024ea2;
    margin:2px 32% 5px;
    font-weight: 700;
`

export const OrText = styled.div`
    font-size:25px;
    margin:10% 0 5% 0;
    display:flex;
    color:#DDD;
    flex-direction:row;
    justify-content:space-between;
    hr
    {
        margin-top:3.5%;
        width:40%;
        height: 18%;
        border:2px solid #DDD;
;
    }
   
`
