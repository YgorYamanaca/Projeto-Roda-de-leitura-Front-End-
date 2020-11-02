import React, { memo, useState } from 'react';
import { ChatList, ResponseText, Drawer, BookContainer,Abstract,AbstractContent,DateCreated, Date, LastComment, AboutBook} from './styles'
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
	let livro = [{ nome: "Pequeno principe", autor: "Henrique Savoia", resumo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, tellus ut malesuada sagittis, dolor magna efficitur justo, ac rhoncus sem felis vitae arcu.", criacao: "Jan, 12,2020", ultimo: "18:33 - jan 13,2020" }]
	let comments = [{ id: 1, idUsuario: 1, nome: "Lucas Araujo", data: "18:33 - jan 13,2020", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam ac nunc condimentum, sit amet posuere enim hendrerit. Fusce dapibus semper sapien vel rutrum. Sed quis enim arcu. Aenean libero ligula, efficitur vitae dolor ut, vestibulum rhoncus nulla. Maecenas et pretium massa. Aenean sollicitudin lectus nec nibh dictum laoreet. Cras in mollis augue, id faucibus libero. Phasellus sit amet leo pulvinar, commodo massa sed, facilisis massa. Ut sed neque tempus, tempus quam quis, euismod felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." },
	{ id: 2, idUsuario: 2, nome: "João Marçura", data: "19:10 - jan 13,2020", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam ac nunc condimentum, sit amet posuere enim hendrerit. " }
	]
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
					{livro.map(liv => {
						return (
							<div>
								<BookContainer>
									<div className="BookName">{liv.nome}</div>
									<div className="AuthorName">por {liv.autor}</div>
								</BookContainer>
								<hr/>
								<div>
									<Abstract>Resumo:</Abstract>
									<AbstractContent>{liv.resumo}</AbstractContent>
									<Date>Tópico criado em:</Date>
									<DateCreated>{liv.criacao}</DateCreated> 
									<LastComment>Último comentário em</LastComment>
									<AboutBook>{liv.ultimo}</AboutBook>
								</div>
							</div>
						)
					})
					}
			</div>
			</Drawer>
			<div style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", display:"flex"}}>
				<ChatList style={{ overflowY:"scroll", backgroundColor: "#FFFFFF", borderRadius: 20}}>
					<List className={classes.root}>
						{comments.map(comment => {
							if (comment.idUsuario == 1) {
								return ComentarioProprio(comment)
							}
							else {
								return ComentarioComum(comment)
							}
						})}

					</List>
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
				</ChatList>
			</div>
		</div>
	);
}

function ComentarioComum(comment) {
	const classes = useStyles();
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar>
					<ImageIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={<React.Fragment>
					{comment.nome}
					<Typography
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary"
					>
						 {comment.data}
					</Typography>
				</React.Fragment>}
				secondary=
				{comment.comentario}

			/>
		</ListItem>
	)
}

function ComentarioProprio(comment) {
	const classes = useStyles();
	//const [anchorEl, setAnchorEl] = React.useState(null);
	//const handleClick = (event) => {
	//	setAnchorEl(event.currentTarget);
	//};
	//const handleClose = () => {
	//	setAnchorEl(null);
	//};
	//const editarComentario = () => {
	//	handleClose()
	//	setEditing((v) => !v)
	//}
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState(comment.comentario);

	const handleSave = (value) => {
		console.log(value);
		setValue(value);
	};
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar>
					<ImageIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={<React.Fragment>
					{comment.nome}
					<Typography
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary"
					>
						- {comment.data}
					</Typography>
				</React.Fragment>}
				secondary={
					<EdiText
						value={value}
						type="text"
						onSave={handleSave}
						editing={editing}
						inputProps={{
							rows: 5
						  }}
					/>
				}
			/>
		 </ListItem>//<IconButton
			//	aria-label="more"
			//	aria-controls="long-menu"
			//	aria-haspopup="true"
			//	onClick={handleClick}
			//>
			//	<MoreHorizIcon />
			//</IconButton>
			//</ListItem><Menu
			//	id="simple-menu"
			//	anchorEl={anchorEl}
			//	keepMounted
			//	open={Boolean(anchorEl)}
			//	onClose={handleClose}
			//>
			//	<MenuItem onClick={editarComentario}>Editar</MenuItem>
			//	<MenuItem onClick={handleClose}>Excluir</MenuItem>
			//</Menu>
		//</ListItem>
	)
}

export default Chat;