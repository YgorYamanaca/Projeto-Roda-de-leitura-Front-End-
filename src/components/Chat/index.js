import React, { memo, useState, useEffect } from 'react';
import { ChatList, ResponseText, Drawer, BookContainer,Abstract,AbstractContent,DateCreated, Date, LastComment, AboutBook, ChatContainer} from './styles'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import BackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EdiText from 'react-editext'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./app.css";
import api from '../../services/api';
import { getToken } from "../../services/auth";
import { useHistory, useParams } from 'react-router-dom';
import { SignalCellularNull } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { index } from 'd3-array';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: '100%'
	},
	inline: {
		display: 'inline',
	},
}));


function Chat() {
	const classes = useStyles();
    const [topicInfo, setTopicInfo] = useState([]);
    let token = getToken();
	let { id } = useParams();

    useEffect(() => {
      api.get(`/topico/${id}`,{
		headers:{'x-access-token':token}
      })
      .then(res => {
         const topics = res.data;
         setTopicInfo(topics)
      })
      .catch(error => {
      })
	},[token]);
	const user = useSelector(state => state.user);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const editarComentario = () => {
		handleClose()
		handleDialogOpen()
	}
	const excluirComentario = () => {
		handleClose()
		handleExcluirOpen()
	}
	const [open, setOpen] = React.useState(false);

	const handleDialogOpen = () => {
		setOpen(true);
	};

	const handleDialogClose = () => {
		setOpen(false);
	};
	const dialogEditarComentario = () => {
		setOpen(false);
		window.location.reload(false);
	};
	const [openExcluir, setOpenExcluir] = React.useState(false);

	const handleExcluirOpen = () => {
		setOpenExcluir(true);
	};
	const dialogExcluirComentario = () => {
		setOpen(false);
		window.location.reload(false);
	};
	const handleExcluirClose = () => {
		setOpenExcluir(false);
	};

	function convertDate(opa){
		let finalDate = new Date(opa)
		return `${finalDate.getDate()}/${finalDate.getMonth()}/${finalDate.getFullYear()} `
	  }
	
	  function ComentarioComum(comment, index) {
	
		return (
	
			<ListItem alignItems="flex-start" key={"comentarioComum" + index}>
				<ListItemAvatar>
					<Avatar>
						<ImageIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={<React.Fragment>
						{comment.usuario.nome}
						<Typography
							component="span"
							variant="body2"
							className = {classes.inline}
							color="textPrimary"
						> - {comment.created_at}
						</Typography>
					</React.Fragment>}
					secondary=
					{comment.conteudo}
	
				/>
			</ListItem>
		)
	}
	
	function ComentarioProprio(comment, index) {
		
		return (
			<ListItem alignItems="flex-start" key={"ComentarioProprio" + index}>
				<ListItemAvatar>
					<Avatar>
						<ImageIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
				primary= {<React.Fragment>
				{comment.usuario.nome}
				<Typography
					component="span"
					variant="body2"
					className={classes.inline}
					color="textPrimary"
				  > - {comment.created_at}
				  </Typography>
				  </React.Fragment>}
			  secondary=
				{comment.conteudo}
			  
			/>
			 <IconButton
					aria-label="more"
					aria-controls="long-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<MoreHorizIcon />
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}>
					<MenuItem onClick={editarComentario}>Editar</MenuItem>
					<MenuItem onClick={excluirComentario}>Excluir</MenuItem>
				</Menu>
				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Editar comentário</DialogTitle>
			<DialogContent>
			  <TextField
				defaultValue={comment.conteudo}
				autoFocus
				margin="dense"
				id="name"
				fullWidth
				variant="outlined"
				multiline
				rowsMax={10}
				style = {{width:"400px"}}
			  />
			</DialogContent>
			<DialogActions>
			  <Button onClick={handleDialogClose} color="primary">
				Cancelar
			  </Button>
			  <Button onClick={dialogEditarComentario} color="primary">
				Editar
			  </Button>
			</DialogActions>
		  </Dialog>
		  <Dialog
			open={openExcluir}
			onClose={handleExcluirClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		  >
			<DialogTitle id="alert-dialog-title">{"Excluir comentário"}</DialogTitle>
			<DialogContent>
			  <DialogContentText id="alert-dialog-description">
				Deseja mesmo excluir o comentário?
			  </DialogContentText>
			</DialogContent>
			<DialogActions>
			  <Button onClick={handleExcluirClose} color="primary">
				Cancelar
			  </Button>
			  <Button onClick={dialogExcluirComentario} color="primary" autoFocus>
				Excluir
			  </Button>
			</DialogActions>
		  </Dialog>
			</ListItem>
		)
	}	

	return (
		<div style={{ width: "100%", height: "100%", backgroundColor: "#F3F3F3", display: "flex", flexDirection: "row" }}>
			<Drawer>
				<div>
					<div>
						<p className="forum">
							<IconButton aria-label="enviar">
								<BackIcon />
							</IconButton>
							Fórum
						</p>	
					</div>
					<hr/>		
							<div>
								<BookContainer>
									<div className="BookName">{topicInfo.titulo}</div>
									<div className="AuthorName">por {topicInfo.autor}</div>
								</BookContainer>
								<hr/>
								<div>
									<Abstract>Resumo:</Abstract>
									<AbstractContent>{topicInfo.sinopse}</AbstractContent>
									<Date>Tópico criado em:</Date>
									<DateCreated>{topicInfo.created_at}</DateCreated> 
									<LastComment>Último comentário em</LastComment>
									<AboutBook>{topicInfo.updated_at}</AboutBook>
								</div>
							</div>
						
					
			</div>
			</Drawer>
			<div style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", display:"flex"}}>
				<ChatList style={{ backgroundColor: "#FFFFFF", borderRadius: 20}} >
					<div style={{ overflowY:"scroll", width: "100%", height: "95%" }} className="scrollbar mt-5 mx-auto" >
					<List className={classes.root}>
						{topicInfo.comentarios?
						 topicInfo.comentarios.map((comment, index) => {
							if (comment.id_usuario == user.id_usuario) {
								console.log("Passou1")
								return ComentarioProprio(comment, index)
							}
							else {
								console.log("Passou2")
								return ComentarioComum(comment, index)
							}
						}): null}

					</List>
					</div>
					<div>
					<ResponseText className={classes.root} noValidate autoComplete="off">
							<TextField id="outlined-basic" label="Digite sua mensagem" variant="outlined" size="small" 
							style={{minWidth:"90%"}}
								InputProps={{
									endAdornment: (
										<InputAdornment><IconButton aria-label="enviar">
											<SendIcon />
										</IconButton>
										</InputAdornment>
									)
								}} />
					</ResponseText>
					</div>
				</ChatList>
			</div>
		</div>
	);
}



export default Chat;