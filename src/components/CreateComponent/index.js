import React, { useState, useRef, useEffect } from 'react';
import BackIcon from '../../assets/Icon/icon_Back.png';
import "react-datepicker/dist/react-datepicker.css";
import StandartButton from '../StandartButton';
import { AddEventBox, BackImg, TopContainer, TopText, AddContainer  } from './styles';
import DatePicker, { registerLocale } from "react-datepicker";
import ptbr from "date-fns/locale/pt-br";
import {addEventRequest} from '../../store/modules/eventsData/actions'
import { useDispatch } from 'react-redux';
registerLocale("pt", ptbr);


  /** 
  * @description Componente de criação de evento
  */

function CreateComponent({isRender}) {
    const [title, setTitle] = useState('');
    const [mediator, setMediator] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [numberP, setNumber] = useState('');
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function useOutsideAlerter(ref) {
      useEffect(() => {
          function handleClickOutside(event) {
              if (ref.current && !ref.current.contains(event.target)) {
                isRender()
              }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
  }

/** 
  * @description Função para validar os dados de edição e realizar a requisição
  */
    function handleSubmit(e){
        if(title && mediator && date && description && place && numberP)
        {
            const formData = {
                'titulo' : title,
                'descricao' : description,
                'local' : place,
                'nome_mediador' : mediator,
                'data_evento' : date,
                'max_participantes' : numberP,
                'tipo' : 'Roda de leitura'
            }
            isRender();
            dispatch(addEventRequest(formData));
            e.preventDefault();
        }
        else
        {
            alert("Falta preeencher os dados!");
            e.preventDefault();
        }
    }

    return (
    <AddEventBox  ref={wrapperRef}>
    <TopContainer>
        <BackImg src={BackIcon} alt="LogoBIcon" onClick={isRender}/>
        <TopText>Adicionar um novo evento</TopText>
    </TopContainer>

    <AddContainer onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o título do evento..." value={title} onChange={e => setTitle(e.target.value)}/>
        <input type="text" placeholder="Digite o mediador..." value={mediator} onChange={e => setMediator(e.target.value)}/>
        <input type="number" placeholder="Digite o número máximo de participantes..." value={numberP} onChange={e => setNumber(e.target.value)} min={5} max={200}/>
        <input type="text" placeholder="Digite o local do evento..." value={place} onChange={e => setPlace(e.target.value)}/>

        <DatePicker
            locale={"pt"}
            selected={date}
            onChange={date => setDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="dd/MM/yyyy - h:mm aa"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="Selecione uma data para o evento..."
        />

        <textarea className='description' maxLength={100} type="text" placeholder="Digite a descrição..." value={description} onChange={e => setDescription(e.target.value)}/>
        
        <StandartButton type={"submit"} text={"Cadastrar"} fontsize={"30px"} customStyle={{width:'80%', height:'55px'}}/>
    </AddContainer>
    </AddEventBox>);
}

export default CreateComponent;