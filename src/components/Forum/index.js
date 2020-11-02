import React, { } from 'react';
import {Header, Title, HeaderTextTitle, ForumContainer, ListContainer} from './styles'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/ImportContactsTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth:'98%',
      backgroundColor: "#fafafa",
      zIndex:'1',
      margin:'15px 0'
    },
  }));

function Forum() {
    const classes = useStyles();
    let books = [{nome:"Harry", comentarios:2, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Pequeno principe", comentarios:3, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Harry", comentarios:2, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Pequeno principe", comentarios:3, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Harry", comentarios:2, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Pequeno principe", comentarios:3, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Harry", comentarios:2, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Pequeno principe", comentarios:3, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Harry", comentarios:2, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Pequeno principe", comentarios:3, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Harry", comentarios:2, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Pequeno principe", comentarios:3, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"}
                ]
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

                {books.map(book=>{
                  return(
                    <ListItem button>
                      <ListItemAvatar>
                        <ImageIcon style={{ color: "#7D7D7D", fontSize: 40}}/>
                      </ListItemAvatar>
                      <ListItemText primary={book.nome} secondary={book.comentarios + " comentários"} style={{flex:1}} />
                      <ListItemText primary={book.criacao} style={{flex:1}}/>
                      <ListItemText primary={book.ultimo} style={{flex:1}}/>
                    </ListItem>
                  )
                })}
            </List>
          </ListContainer>
      </ForumContainer>
    );
  }
  
export default Forum;