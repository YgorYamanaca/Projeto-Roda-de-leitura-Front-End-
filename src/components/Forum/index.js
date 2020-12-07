import React, {useEffect, useState } from 'react';
import {Header, Title, HeaderTextTitle, ForumContainer, ListContainer} from './styles'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/ImportContactsTwoTone';
import api from '../../services/api';
import { getToken } from "../../services/auth";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      minWidth:'98%',
      backgroundColor: "#fafafa",
      zIndex:'1',
      margin:'15px 0',
      boxShadow:'0px 0px 20px -10px rgba(0,0,0,0.75)'
    },
  }));

function Forum() {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const history = useHistory();
  let token = getToken();

    useEffect(() => {
      api.get('/topico',{
        headers:{'x-access-token':token}
      })
      .then(res => {
         const topics = res.data;
         setBooks(topics)
      })
      .catch(error => {
      })
    },[token]);
    console.log(typeof (books))

    function convertDate(date){
      let finalDate = new Date(date)
      return `${finalDate.getDate()}/${finalDate.getMonth()+1}/${finalDate.getFullYear()} `
    }
    
    return (
      <ForumContainer>
			  <Title><p>Fórum</p></Title>

        <ListContainer>
          <List className={classes.root}>
            <Header>
              <HeaderTextTitle>Título</HeaderTextTitle>
              <HeaderTextTitle>Data de criação</HeaderTextTitle>
              <HeaderTextTitle>Último comentário</HeaderTextTitle>
            </Header>

                {books?
                books.map(book=>{
                  return(
                    <ListItem button onClick={() => history.push(`/chat/${book.id_topico}`, history.push('/go-here'))}>
                      <ListItemAvatar>
                        <ImageIcon style={{ color: "#7D7D7D", fontSize: 40}}/>
                      </ListItemAvatar>
                      <ListItemText primary={book.titulo} style={{flex:1}} secondary={book.comentarios?book.comentarios.length<2?book.comentarios.length + " Comentário":' Comentários':'Erro'} />
                      <ListItemText primary={convertDate(book.created_at)} style={{flex:1}}/>
                      <ListItemText primary={book.comentarios[book.comentarios.length-1]?convertDate(book.comentarios[book.comentarios.length-1].created_at):'Nenhum comentário adicionado'} style={{flex:1}}/>
                    </ListItem>
                  )
                }) : null}
            </List>
          </ListContainer>
      </ForumContainer>
    );
  }
  
export default Forum;