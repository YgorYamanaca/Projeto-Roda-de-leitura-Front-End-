import React, { useState, useRef, useEffect } from 'react';
import { EditBox, TopContainer, TopText, EditContainer, BackImg} from './styles';
import BackIcon from '../../assets/Icon/icon_Back.png';
import StandartButton from '../StandartButton';
import { useDispatch } from 'react-redux';
import { editEventRequest } from '../../store/modules/eventsData/actions';
import DatePicker, { registerLocale } from "react-datepicker";
import { isMobile } from "react-device-detect";
import ptbr from "date-fns/locale/pt-br";
registerLocale("pt", ptbr);

/** 
 * @description Componente de edição de evento
 */

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
     * @description Função para validar os dados e enviar requisição para edição
     */
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
                'nome_mediador':mediator
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
    
    /** 
     * @description Função para editar o formato de data
     * @param {data} tiomezone Objeto data do Js.
     * @return data formatada
     */
    function handleDate(timezone)
    {
        let newDate=new Date(timezone);
        newDate = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
        return newDate;
    }

    /** 
     * @description Função para editar o formato de tempo
     * @param {data} tiomezone Objeto data do Js.
     * @return tempo formatado
     */
    function handleTime(timezone)
    {
        let newDate=new Date(timezone);
        newDate = `${newDate.getHours() > 9? newDate.getUTCHours():'0' + newDate.getUTCHours()}:${newDate.getUTCMinutes() > 9? newDate.getUTCMinutes(): '0' + newDate.getUTCMinutes()}`;
        return newDate;
    }

  return (
    <EditBox ref={wrapperRef} mobile={isMobile}>
        <TopContainer>
            <BackImg mobile={isMobile} src={BackIcon} alt="LogoBIcon" onClick={isRender}/>
            <TopText mobile={isMobile}>Editar um evento</TopText>
        </TopContainer>

        <EditContainer onSubmit={handleSubmit} mobile={isMobile}>
            <input type="text" maxLength={50} placeholder="Digite um novo título para o evento..." value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" maxLength={20} placeholder="Digite o mediador..." value={mediator} onChange={e => setMediator(e.target.value)}/>
            <input type="number" placeholder="Digite o número máximo de participantes..." value={numberP} onChange={e => setNumber(e.target.value)} min={editDate.inscritos.length > 0? editDate.inscritos.length : "5"} max="50"/>
            <input type="text" maxLength={35} placeholder="Digite o local do evento..." value={place} onChange={e => setPlace(e.target.value)}/>
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

            <textarea className='description' maxLength={100} type="text" placeholder="Digite a descrição..." value={description} onChange={e => setDescription(e.target.value)}/>
            
            <StandartButton type={"submit"} text={"Salvar"} fontsize={isMobile? "20px" : "30px"} customStyle={isMobile? {width:'90%', height:'35px'} : {width:'80%', height:'55px'}}/>
        </EditContainer>
    </EditBox>
  );
}

export default EditComponent;