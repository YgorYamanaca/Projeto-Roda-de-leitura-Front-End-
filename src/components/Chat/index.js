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

/** 
* @description Componente de chat.
*
* @return o componente de chat renderizado
*/
function Chat() {
	const history = useHistory();
	const classes = useStyles();
    const [topicInfo, setTopicInfo] = useState([]);
    let token = getToken();
	let { id } = useParams();
	const [COMENTARIO, setCOMENTARIO] = useState([]);

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
	const [open, setOpen] = React.useState(false);
	const [openExcluir, setOpenExcluir] = React.useState(false);
	/** 
	* @description Função para renderizar o menu de editar/excluir comentário após o usuario clicar nos 3 botões, e atribuir ao [COMENTARIO] o valor do comentário que foi clicado.
	*
	* @param event o evento de clique
	* @param comment o comentário que foi clicado
	*/
	const handleClick = (event, comment) => {
		setCOMENTARIO(comment)  
		setAnchorEl(event.currentTarget);
	};
	/** 
	* @description Função para desrenderizar o menu de editar/excluir comentário.
	*/
	const handleClose = () => {
		setAnchorEl(null);
	};
	/** 
	* @description Função para chamar a renderização do modal de editar comentário após o clique e desrenderizar o menu.
	*/
	const editarComentario = () => {
		handleClose()
		handleDialogOpen()
	}
	/** 
	* @description Função para chamar a renderização do modal de excluir comentário após o clique e desrenderizar o menu.
	*/
	const excluirComentario = () => {
		handleClose()
		handleExcluirOpen()
	}
	/** 
	* @description Função para renderizar o modal de editar comentário.
	*/
	const handleDialogOpen = () => {
		setOpen(true);
	};
	/** 
	* @description Função para desrenderizar o modal de editar comentário.
	*/
	const handleDialogClose = () => {
		setOpen(false);
	};
	/** 
	* @description Função para chamar a API para editar o comentário e fechar o modal.
	*
	* @param event o evento de clique
	* @param comment o comentário editado
	*/
	const dialogEditarComentario = (event, comment) => {
		console.log(comment)
		alterarComentario(comment)
		setOpen(false);
	};
	/** 
	* @description Função para desrenderizar o modal de excluir comentário.
	*/
	const handleExcluirOpen = () => {
		setOpenExcluir(true);
	};
	/** 
	* @description Função para chamar a API para excluir o comentário e fechar o modal.
	*/
	function dialogExcluirComentario(){
		deletarComentario()
		setOpen(false);
	};
	/** 
	* @description Função para desrenderizar o modal de excluir comentário.
	*/
	const handleExcluirClose = () => {
		setOpenExcluir(false);
	};
	/** 
	* @description Função para deletar o comentário e atualizar a página.
	*/
	function deletarComentario(){
		api.delete(`/comentario`, {
			data:{
				'id_comentario':parseInt(COMENTARIO.id_comentario)
			},
			headers:{
				'x-access-token':token
				}
			}).then(window.location.reload(false))
	}
	/** 
	* @description Função para inserir o comentário e atualizar a página.
	*
	* @param comment comentário que foi digitado
	*/
	function inserirComentario(comment){
		api.post(`/comentario`, {conteudo: comment, id_usuario:user.id_usuario, id_topico:parseInt(topicInfo.id_topico)}, {
			headers:{
				'x-access-token':token
				}
			}).then(window.location.reload(false))
	}
	/** 
	* @description Função para alterar o comentário e atualizar a página.
	*
	* @param comment comentário que foi alterado
	*/
	function alterarComentario(comment){
		api.patch(`/comentario`, {id_comentario:COMENTARIO.id_comentario, conteudo: comment}, {
			headers:{'x-access-token':token}
		}).then(window.location.reload(false))
	}
	/** 
	* @description Função para receber uma data do banco de dados e transformar em uma string para mostrar na tela.
	*
	* @param data a data a ser mapeada
	*
	* @return a data mapeada para string
	*/
	function convertDate(data){
		let finalDate = new window.Date(data)
		return `${finalDate.getDate()}/${finalDate.getMonth()+1}/${finalDate.getFullYear()} `
	}
	/** 
	* @description Função para renderizar um comentário comum.
	*
	* @param comment informações do comentário que será renderizado
	* @param index o index que torna o comentário um componente único
	*
	* @return o componente de comentário renderizado
	*/
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
						> - {convertDate(comment.created_at)}
						</Typography>
					</React.Fragment>}
					secondary=
					{comment.conteudo}
	
				/>
			</ListItem>
		)
	}
	/** 
	* @description Função para renderizar um comentário próprio com o menu de editar/excluir comentário.
	*
	* @param comment informações do comentário que será renderizado
	* @param index o index que torna o comentário um componente único
	*
	* @return o componente de comentário renderizado
	*/
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
				  > - {convertDate(comment.created_at)}
				  </Typography>
				  </React.Fragment>}
			  secondary=
				{comment.conteudo}
			  
			/>
			 <IconButton
					aria-label="more"
					aria-controls="long-menu"
					aria-haspopup="true"
					onClick = {(e) =>handleClick(e, comment)}
				>
					<MoreHorizIcon />
				</IconButton>
				
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
								<BackIcon onClick={() => {history.push('/forum')}}/>
							</IconButton>
							Fórum
						</p>	
					</div>
					<hr/>		
							<div>
								<BookContainer>
									<div className="BookName">{topicInfo.titulo}</div>
								</BookContainer>
								<hr/>
								<div>
									<Abstract>Resumo:</Abstract>
									<AbstractContent>{topicInfo.sinopse}</AbstractContent>
									<Abstract>Mediador:</Abstract>
									<AbstractContent>{topicInfo.autor}</AbstractContent>
									<Date>Tópico criado em:</Date>
									<DateCreated>{topicInfo.created_at&& convertDate(topicInfo.created_at)}</DateCreated> 
									<LastComment>Último comentário em</LastComment>
									<AboutBook>{topicInfo.updated_at && convertDate(topicInfo.updated_at)}</AboutBook>
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
								return ComentarioProprio(comment, index)
							}
							else {
								return ComentarioComum(comment, index)
							}
						}): null}

					</List>
					</div>
					<div>
					<ResponseText className={classes.root} noValidate autoComplete="off">	
							<TextField id="outlined-basic" label="Digite sua mensagem" variant="outlined" size="small" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
							style={{minWidth:"90%"} }
								InputProps={{
									endAdornment: (
										<InputAdornment ><IconButton aria-label="enviar" onClick={() =>inserirComentario(document.getElementById("outlined-basic").value) }>
											<SendIcon />
										</IconButton>
										</InputAdornment>
									)
								}} />
					</ResponseText>
					</div>
				</ChatList>
			</div>
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
				defaultValue={COMENTARIO?COMENTARIO.conteudo:'erro'}	
				autoFocus
				margin="dense"
				id="editarComentarioText"
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
			  <Button onClick={(e) =>dialogEditarComentario(e, document.getElementById("editarComentarioText").value)} color="primary">
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
			  <Button onClick={dialogExcluirComentario } color="primary" autoFocus>
				Excluir
			  </Button>
			</DialogActions>
		  </Dialog>
		</div>
	);
}
	
export default Chat;