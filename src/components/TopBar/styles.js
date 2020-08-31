import styled from 'styled-components';

export const TopBarStyle = styled.div`
    display:flex;
    justify-content: space-between;
    background-color: #024ea2;
    padding:5px;
    width:100%;
    height:80px;
    box-shadow: 0 0 1em black;
`;

export const PUCLogo = styled.img`
    /*Precisa ser midia query*/ 
    width: 190px;
    height: 95%;
    margin-left:5%;
    :hover
    {
            cursor: pointer;
    }
`;

export const UserContainer = styled.div`
    display:flex;
    justify-content:center;
    margin:0% 1.5em 0% 0%;
    padding: 2px;
    img
    {
        /*Precisa ser midia query*/ 
        width:60px;
        height:95%;
        :hover
        {
            cursor: pointer;
        }
    }
`;

export const Option = styled.ul`
    width:200px;
    height:215px;
    background-color:#fafafa;
    padding:10px;
    box-shadow: 0px 15px 30px 0px rgba(0,0,0,0.3);
    right:0;
    list-style:none;
    z-index:99;
    position: absolute;
    div
    {
        display:flex;
        justify-content:center;
        align-items: center;
    }
    img
    {
        width:65px;
        height:35%;
        margin:5px;
    }
    span
    {
        font-size:15px;
        margin:5px;
        font-weight:700;
        overflow-wrap: break-word;
    }
    li{
        font-weight:500;
        margin: 3% 15%;
        cursor: pointer;
        
        :hover
        {
            border:1px solid rgba(0,0,0,0.0);
        }
        :before 
        {
            content: "•";
            font-weight:700;
            font-size:20px;
            color: #024ea2;
            display: inline-block; 
            width: 0.5em;
            margin-left: -1em;
            cursor: pointer;
        }
    }
`;
