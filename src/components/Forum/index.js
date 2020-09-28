import React, { memo } from 'react';
import {Title} from './styles'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/ImportContacts';
import { Book } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '95%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

function Forum() {
    const classes = useStyles();
    let books = [{nome:"Harry", comentarios:2, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"},
                 {nome:"Pequeno principe", comentarios:3, criacao:"Jan, 12,2020", ultimo:"18:33 - jan 13,2020"}
                ]
    return (
      <List className={classes.root}>
        <Title>Forum</Title>
        {books.map(book=>{
          return(
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={book.nome} secondary={book.comentarios + " Comentarios"} />
              <ListItemText primary={book.criacao}  />
              <ListItemText primary={book.ultimo}  />
            </ListItem>
          )
         })}
      </List>
    );
  }
  
export default Forum;