import styled from 'styled-components';

export const ChatList = styled.div`
    width: 80%;
	height: 94%;
`;

export const Drawer = styled.div`
   width: 15%;
   height: 100%;
   background-color: #FFFFFF;
   .forum{
       color:#7D7D7D;
       font-size:27pt;
       margin-left:2px;
   }
   .BookName{
        color:#434343;
        font-size:30pt;
   }
   .AuthorName{
       color:#7D7D7D;
       font-size:17pt;
   }
   hr{
        display: block; 
        border: 0; 
        border-top: 1px solid #BCBCBC;
   }
`;
export const BookContainer = styled.div`
   margin-left:5%;
`;
export const ResponseText = styled.form`
    display:flex;
    justify-content:center;
    align-items: center;
`;
export const Abstract = styled.form`
  color:#707070;
  font-size:18pt;
  margin-left:5%;
  font-weight: bold;
`;
export const AbstractContent = styled.form`
    color:#707070;
    font-size:16pt;
    margin-left:5%;
`;
export const Date = styled.form`
    color:#707070;
    font-size:16pt;
    margin-left:5%;
    margin-top:18%;
`;
export const DateCreated = styled.form`
    color:#707070;
    font-size:18pt;
    margin-left:5%;
    font-weight: bold;
`;
export const LastComment = styled.form`
    color:#707070;
    font-size:16pt;
    margin-left:5%;
    margin-top:7%;
`;
export const AboutBook = styled.form`
    color:#707070;
    font-size:18pt;
    margin-left:5%;
    font-weight: bold;
`;