import React, { useEffect, useState } from 'react';
import { Container, ImgContainer, TextContainer, UserInfContainer, ExternalBox } from './styles';
import Avatar from '../../assets/Icon/icon_avatar.png';
import { getToken } from "../../services/auth";
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { isMobile } from "react-device-detect";

/** 
 * @description Componente do usuário
 */
export default function UserComponent() {
  const [userData, setUser] = useState({});
  const user = useSelector(state => state.user);

    const admUser = (userData) => {
      let newDate = new Date(userData.data_nasc);
      return(
        <TextContainer>
          <label>Nome:</label>
          <div>{userData.nome}</div>
          <label>E-Mail:</label>
          <div>{userData.email}</div>
          <label>Data de Nascimento:</label>
          <div>{`${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()}`}</div>
          {userData.rf && <label>RF:</label>}
          {userData.rf && <div>{userData.rf}</div>}
          {userData.rp && <label>RP:</label>}
          {userData.rp && <div>{userData.rp}</div>}
        </TextContainer>);
    }
    const extUser = (userData) => {
      let newDate = new Date(userData.data_nasc);
      return(
        <TextContainer>
          <label>Nome:</label>
          <div>{userData.nome}</div>
          <label>E-Mail:</label>
          <div>{userData.email}</div>
          <label>Data de Nascimento:</label>
          <div>{`${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()}`}</div>
        </TextContainer>);
    }
    const studentUser = (userData) => {
      let newDate = new Date(userData.data_nasc);
      return(
        <TextContainer>
          <label>Nome:</label>
          <div>{userData.nome}</div>
          <label>E-Mail:</label>
          <div>{userData.email}</div>
          <label>Data de Nascimento:</label>
          <div>{`${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()}`}</div>
          <label>RA:</label>
          <div>{userData.ra}</div>
          <label>Faculdade:</label>
          <div>{userData.faculdade}</div>
          <label>Centro:</label>
          <div>{userData.centro}</div>
          {userData.periodo && 
          <>
            <label>Periódo:</label>
            <div>{userData.periodo}</div>
          </>}
        </TextContainer>);
    }
    const teacherUser = (userData) => {
      let newDate = new Date(userData.data_nasc);
      return(
        <TextContainer>
          <label>Nome:</label>
          <div>{userData.nome}</div>
          <label>E-Mail:</label>
          <div>{userData.email}</div>
          <label>Data de Nascimento:</label>
          <div>{`${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()}`}</div>
          <label>RP:</label>
          <div>{userData.rp}</div>
          {userData.faculdade && <>
            <label>Faculdade:</label>
            <div>{userData.faculdade}</div>
            </>}
          <label>Centro:</label>
          <div>{userData.centro}</div>
        </TextContainer>);
    }

    const employUser = (userData) => {
      let newDate = new Date(userData.data_nasc);
      return(
        <TextContainer>
          <label>Nome:</label>
          <div>{userData.nome}</div>
          <label>E-Mail:</label>
          <div>{userData.email}</div>
          <label>Data de Nascimento:</label>
          <div>{`${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()}`}</div>
          <label>RF:</label>
          <div>{userData.rf}</div>
        </TextContainer>);
    }

  /** 
   * @description Adiciona os dados de usuário no status
   */
    function hadleUserData()
    {
        switch(userData.tipo_usuario)
        {
          case "1":
            return extUser(userData);
          case "2":
          return studentUser(userData);
          case "3":
          return teacherUser(userData);
          case "4":
            return admUser(userData);
          case "5":
            return employUser(userData);
          case undefined:
            return null;
          default:
            return null;
        }
    }

  useEffect(() => {
    let token = getToken();
    api.get(`/usuario/${user.id_usuario}`,{
      headers:{
          'x-access-token':token
          }
      })
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
        console.log(error);

        alert("Problema com o servidor, não foi possível receber o seus dados!");
    })
  }, [user.id_usuario])

  return (
      <Container>

        <ExternalBox mobile={isMobile}>
          <ImgContainer mobile={isMobile} src={Avatar} alt="UserImg"/>
          <UserInfContainer mobile={isMobile}>
            {hadleUserData()}
          </UserInfContainer>
        </ExternalBox>

      </Container>
  );
}
