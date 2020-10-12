import styled from 'styled-components';
export const LoginScreen =styled.div`
    font-family: 'Catamaran', sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    width:100%;
`;
export const LoginBox = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#ffff;
    width:${props => props.mobile? '300px' : '400px'};
    margin:5% auto;
    padding:15px;
    box-shadow:0 0 20px rgb(0, 0, 0 , 0.2);
    img
    {
        display:flex;
        flex-direction:row;
        margin:5px auto;
        width:90%;
        padding:15px;
    }
`;

export const Form = styled.form`
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    input
    {
        font-family: 'Catamaran', sans-serif;
        width:95%;
        font-size:${props => props.mobile? '14px' : '18px'};
        border:1px solid #DDD;
        background-color:#fafafa;
        margin: 10px 0;
        box-sizing: border-box;
        padding: 1.5px 10px;
        text-overflow: ellipsis;
        ::placeholder
        {
            opacity:0.5;
        }
    }
`;

export const SubmitButton = styled.button.attrs({
    type:"submit"
})`
    margin-top:30px;
    width:95%;
    height:${props => props.mobile? '35px' : '40px'};
    font-size:${props => props.mobile? '18px' : '25px'};
    color:#ffff;
    background-color:#024ea2;
    border:0;
    border-radius:4px;
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

export const LinkText = styled.div`
    display:flex;
    justify-content:center;
    a
    {
        font-size:${props => props.mobile? '18px' : '24px'};
        color:#024ea2;
        margin:2px 32% 5px;
        font-weight: 500;
        :hover
        {
            color:#3471b4;
        }
    }
`

export const OrText = styled.div`
    font-size:${props => props.mobile? '19px' : '25px'};
    margin:20px 0 5px 0px;
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
