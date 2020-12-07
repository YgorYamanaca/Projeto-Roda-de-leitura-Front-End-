import styled from 'styled-components';

export const SingUpScreen =styled.div`
    font-family: 'Catamaran', sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    width:100%;
`;

export const SingUpBox = styled.div`
    background-color:#ffff;
    width:${props => props.mobile? '300px' : '400px'};
    margin:5% auto;
    padding:0px 5px;
    box-shadow:0 0 20px rgb(0, 0, 0 , 0.2);

    img.backIcon{
        display:flex;
        flex-direction:row;
        width:11.5%;
        height:9%;
        &:active
        {
            transform: scale(0.90);
        }
        &:hover
        {
            cursor:pointer;
        }
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
    margin-top:1%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:${props => props.mobile? '0px 15px' : '0px 30px'};
    input
    {
        font-family: 'Catamaran', sans-serif;
        width:${props => props.mobile? '250px' : '350px'};
        font-size:${props => props.mobile? '14px' : '18px'};
        border:1px solid #DDD;
        background-color:#fafafa;
        margin: 2% 0;
        box-sizing: border-box;
        padding: 0.5px 10px;
        text-overflow: ellipsis;
        ::placeholder{
            opacity:0.5;
        }
    }
`;

export const SubmitButton = styled.button.attrs({
    type:"submit"
})`
    margin: 5% 0;
    width:${props => props.mobile? '250px' : '350px'};
    height:${props => props.mobile? '35px' : '40px'};
    font-size:${props => props.mobile? '18px' : '25px'};
    color:#ffff;
    background-color:#024ea2;
    border:0;
    border-radius:4px;
    margin-top:50px;
    :hover
    {
        cursor:pointer;
    }
    :active
    {
        transform: scale(0.97);
        box-shadow: -2px 3px 15px -5px rgba(0,0,0,0.3);
    }
`