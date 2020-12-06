import React, { useState } from 'react'
import { LoginScreen, LoginBox, Form, SubmitButton, LinkText , OrText} from './styles'
import PucLogo from '../../assets/Logo/logo_PUC_azul.png';
import { Link, useHistory} from "react-router-dom";
import { login, logout } from '../../services/auth';
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import { isMobile } from "react-device-detect";


/** 
* @description Prágina de login 
*/
export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    /** 
    * @description Função para realizar o reqeust de login, após isso envia para o redux o usuário.
    * @param {Event} e event disparado pela ação do botão
    */
    function handleSubmit(e){
        e.preventDefault();
        if(email && password)
        {
            const formData = {
                'email' : email,
                'senha' : password
            }
            api.post("/usuario/login", formData).then(response => {
                    login(response.data.token);
                    dispatch({
                        type:'ADD_USER',
                        email:response.data.email, 
                        id_usuario: response.data.id_usuario, 
                        nome: response.data.nome, 
                        tipo_usuario: response.data.tipo_usuario,
                        isAdmin: response.data.isAdmin
                    })
                    history.push("/calender");
                }).catch(error => {
                    console.log(error);
                    alert("Houve um problema com o login, verifique suas credenciais.");
                })
        }
        else
        {
            alert("Preencha e-mail ou senha para continuar!");
        }
    }

    React.useLayoutEffect(() => {
        console.log('teste')
        logout();
    }, [])

    return (
        <LoginScreen>
            <LoginBox mobile={isMobile}>
                <img src={PucLogo} alt="PucLogo"/>
                <Form onSubmit={handleSubmit} mobile={isMobile}>
                    <input type="email" placeholder="Digite o seu e-mail..." value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Digite a sua senha..." value={password} onChange={e => setPassword(e.target.value)}/>
                    <SubmitButton mobile={isMobile}>
                        Entrar
                    </SubmitButton>
                </Form>

                <OrText mobile={isMobile}>
                    <hr/>
                        OU
                    <hr/>
                </OrText>
                <LinkText mobile={isMobile}>
                    <Link to={"/signup"}> Cadastrar-se </Link>
                </LinkText>
            </LoginBox>
        </LoginScreen>
    )
}
