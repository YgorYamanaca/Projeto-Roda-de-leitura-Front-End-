import React, { memo, useState } from 'react';
import { ChatList } from './styles'
import { Drawer } from './styles'
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
	let livro = [{ nome: "Pequeno principe", autor: "Henrique Savoia", criacao: "Jan, 12,2020", ultimo: "18:33 - jan 13,2020" }]
	let comments = [{ id: 1, idUsuario: 1, nome: "Lucas Araujo", data: "18:33 - jan 13,2020", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam ac nunc condimentum, sit amet posuere enim hendrerit. Fusce dapibus semper sapien vel rutrum. Sed quis enim arcu. Aenean libero ligula, efficitur vitae dolor ut, vestibulum rhoncus nulla. Maecenas et pretium massa. Aenean sollicitudin lectus nec nibh dictum laoreet. Cras in mollis augue, id faucibus libero. Phasellus sit amet leo pulvinar, commodo massa sed, facilisis massa. Ut sed neque tempus, tempus quam quis, euismod felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." },
	{ id: 2, idUsuario: 2, nome: "João Marçura", data: "19:10 - jan 13,2020", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam ac nunc condimentum, sit amet posuere enim hendrerit. " }
	]
	return (
		<div style={{ width: "100%", height: "100%", backgroundColor: "yellow", display: "flex", flexDirection: "row" }}>
			<Drawer style={{ width: "20%", height: "100%", backgroundColor: "red" }}>
				<div>
					<IconButton aria-label="enviar">
						<BackIcon />
					</IconButton>
			Fórum
		</div>
				<hr />
				{livro.map(liv => {
					return (
						<div>
							<div>
								<h1>{liv.nome}</h1>
								<h2>por {liv.autor}</h2>
								<hr />
							</div>
							<div>
								<h3>criado em {liv.criacao} </h3>
								<h3>último comentário em {liv.ultimo} </h3>
							</div>
						</div>
					)
				})
				}
			</Drawer>
			<ChatList style={{ backgroundColor: "white", borderRadius: 20 }}>
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
				<form className={classes.root} noValidate autoComplete="off">
					<TextField id="outlined-basic" label="Digite sua mensagem" variant="outlined"
						InputProps={{
							endAdornment: (
								<InputAdornment><IconButton aria-label="enviar">
									<SendIcon />
								</IconButton>
								</InputAdornment>
							)
						}} />
				</form>
			</ChatList>
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
						- {comment.data}
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
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const editarComentario = () => {
		handleClose()
		setEditing((v) => !v)
	}
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
				onClose={handleClose}
			>
				<MenuItem onClick={editarComentario}>Editar</MenuItem>
				<MenuItem onClick={handleClose}>Excluir</MenuItem>
			</Menu>
		</ListItem>
	)
}

export default Chat;