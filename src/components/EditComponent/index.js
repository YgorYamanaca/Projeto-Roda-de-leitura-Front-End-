import React, { useState, useRef, useEffect } from 'react';
import { EditBox, TopContainer, TopText, EditContainer, BackImg} from './styles';
import BackIcon from '../../assets/Icon/icon_Back.png';
import StandartButton from '../StandartButton';
import { useDispatch } from 'react-redux';
import { editEventRequest } from '../../store/modules/eventsData/actions';
import DatePicker, { registerLocale } from "react-datepicker";
import ptbr from "date-fns/locale/pt-br"; // the locale you want
registerLocale("pt", ptbr); // register it with the name you want

function EditComponent({isRender, editDate}) {
    const [title, setTitle] = useState(editDate.titulo);
    const [mediator, setMediator] = useState(editDate.nome_mediador);
    const [place, setPlace] = useState(editDate.local);
    const [description, setDescription] = useState(editDate.descricao);
    const [date, setDate] = useState(editDate.data_evento);
    const [numberP, setNumber] = useState(editDate.max_participantes);
    const dispatch = useDispatch()
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function useOutsideAlerter(ref) {
      useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
              if (ref.current && !ref.current.contains(event.target)) {
                isRender()
              }
          }
  
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              // Unbind the event listener on clean up
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
  }
    function handleSubmit(e){
            if(title && mediator && date && description && place && numberP)
            {     
                const formData = {
                'id_evento': editDate.id_evento,
                'titulo' : title,
                'local' : place,
                'descricao' : description,
                'data_evento' : date,
                'max_participantes' : numberP,
                }
                isRender();
                dispatch(editEventRequest(formData))
                e.preventDefault();
            }
            else
            {
                alert("Falta preencher os dados!");
                e.preventDefault();
            }
        }
    
    function handleDate(timezone)
    {
        let newDate=new Date(timezone);
        newDate = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
        return newDate;
    }

    function handleTime(timezone)
    {
        let newDate=new Date(timezone);
        newDate = `${newDate.getHours() > 9? newDate.getUTCHours():'0' + newDate.getUTCHours()}:${newDate.getUTCMinutes() > 9? newDate.getUTCMinutes(): '0' + newDate.getUTCMinutes()}`;
        return newDate;
    }

  return (
    <EditBox ref={wrapperRef}>
        <TopContainer>
            <BackImg src={BackIcon} alt="LogoBIcon" onClick={isRender}/>
            <TopText>Editar um evento</TopText>
        </TopContainer>

        <EditContainer onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite um novo título para o evento..." value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder="Digite o mediador..." value={mediator} onChange={e => setMediator(e.target.value)}/>
            <input type="number" placeholder="Digite o número máximo de participantes..." value={numberP} onChange={e => setNumber(e.target.value)} min="5" max="50"/>
            <input type="text" placeholder="Digite o local do evento..." value={place} onChange={e => setPlace(e.target.value)}/>
            <DatePicker
            locale={"pt"}
            selected={new Date (date)}
            onChange={date => setDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="dd/MM/yyyy - h:mm aa"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText={`${handleDate(editDate.data_evento)} - ${handleTime(editDate.data_evento)}`}/>

            <textarea className='description' type="text" placeholder="Digite a descrição..." value={description} onChange={e => setDescription(e.target.value)}/>
            
            <StandartButton type={"submit"} text={"Salvar"} fontsize={"30px"} customStyle={{width:'80%', height:'55px'}}/>
        </EditContainer>
    </EditBox>
  );
}

export default EditComponent;