import React, { memo } from 'react';
import {Header, Title, HeaderTextTitle, HeaderTextDate, HeaderTextLast} from './styles'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/ImportContacts';
import { Book } from '@material-ui/icons';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth:'95%',
      backgroundColor: theme.palette.background.paper,
      marginTop: "1%",
      margin: "auto"
    },
  }));

function Forum() {
    const classes = useStyles();
    let books = [{nome:"Harry", comentarios:2, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Pequeno principe", comentarios:3, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"}
                ]
    return (
      <div>
			  <Title>Fórum</Title>
        <List className={classes.root}>
        <Header>
          <HeaderTextTitle>Título</HeaderTextTitle>
          <HeaderTextDate>Data de criação</HeaderTextDate>
          <HeaderTextLast>Último comentário</HeaderTextLast>
        </Header>
        <hr></hr>

            {books.map(book=>{
              return(
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={book.nome} secondary={book.comentarios + " comentários"}  style={{textAlign: 'left'}}/>
                  <ListItemText primary={book.criacao} style={{textAlign: 'right'}} />
                  <ListItemText primary={book.ultimo} style={{textAlign: 'right'}} />
                </ListItem>
              )
            })}
          </List>
      </div>
    );
  }
  
export default Forum;