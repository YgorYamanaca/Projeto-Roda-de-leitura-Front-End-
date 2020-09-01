import React, { useState } from 'react'
import { SingUpBox, Form, SubmitButton, SingUpScreen } from './styles'
import PucLogo from '../../assets/Logo/logo_PUC_azul.png';
import BackIcon from '../../assets/Icon/icon_Back.png';
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import api from '../../services/api';

export default function SingUp() {
    let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Setembro', 'Dezembro']
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'] 
    const locale = {
    localize: 
    {
        month: n => months[n],
        day: n => days[n]
    },formatLong: {}}
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    function handleSubmit(e)
    {
        e.preventDefault();
        if(name && email && password && passwordConfirm && birthDay)
        {
            if(validateEmail(email))
            {
                if(password === passwordConfirm)
                {
                    const formData ={
                        'nome' : name,
                        'email' : email,
                        'senha' : password,
                        'data_nasc' : birthDay   
                    }
                    
                     api.post("/usuario", formData)
                    .then(res => {
                        //se ok voltar para tela de login 
                        res.status? history.push("/") : alert ("Erro no servidor");
                    })
                    .catch(error => {
                        console.log(error);

                       alert("Houve um problema no cadastro, verifique as informações digitadas.");
                    })
                }
                
                else
                {
                    alert("As duas senhas não não coincidem");
                }
            }
            else{
                alert("E-mail invalido!");
            }
        }
        else
        {
            alert("Falta preeencher os dados!");
        }
    }

    return (
        <SingUpScreen>
            <SingUpBox>
                <span className="topSide">
                    <img className={"backIcon"} src={BackIcon} alt="LogoBIcon" onClick={() => history.push("/")}/>
                </span>

                <img className="pucLogo" src={PucLogo} alt="PucLogo"/>
                <Form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Digite o seu Nome..." value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="Digite o seu e-mail..." value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Digite a sua Senha..." value={password} onChange={e => setPassword(e.target.value)}/>
                    <input type="password" placeholder="Confirme a sua Senha..." value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
                    
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={birthDay}
                        locale={locale}
                        isClearable={birthDay === ""? false:true}
                        placeholderText="Clique para selecionar a data de nascimento"
                        onChange={date => setBirthDay(date)}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                    />

                    <SubmitButton type="submit">
                        Cadastrar
                    </SubmitButton>
                </Form>
                
            </SingUpBox>
        </SingUpScreen>
    )
}
