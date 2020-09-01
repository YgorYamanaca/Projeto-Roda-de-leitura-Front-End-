import React, { useEffect, useState } from 'react';
import { Container, WhiteContainer, CalenderContainer, AddEventContainer, CalenderBox,  EventsContainer} from './styles';
import StandartButton from '../StandartButton';
import Plus from '../../assets/Icon/icon_plus.png';
import { getToken } from "../../services/auth";
import api from '../../services/api';
import CreateComponent from '../CreateComponent/';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/pt-br'
import FilteredEvent from '../FilteredEvent'
import { useSelector } from 'react-redux';

function Calender() 
{
  const messages = { 
    allDay: 'Todos os dias',
    previous: 'Anterior',
    next: 'Próximo',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Agenda',
    date: 'Data',
    time: 'Hora',
    event: 'Evento',
  };
  const localizer = momentLocalizer(moment);
  const [filter, setFilter] = useState([]);
  const [isAddEventsRender, setEventsRender] = useState(false);
  const [isEventsListRender, setEventsListRender] = useState(false);
  const [eventsDate, setEvents] = useState([{}]);  
  const selector = useSelector(state => state.user);

  useEffect(() => {
        let token = getToken();
        api.get("/evento",{
          headers:{'x-access-token':token} //Validar se é adm para ver se pode retornar todos os dados
        })
        .then(response => {
          setEvents(response.data)
        })
        .catch(error => {
            console.log(error);
            alert("Não foi possível receber os eventos!");
        })
  },[])

  function handleAddEvent(){
    setEventsRender(!isAddEventsRender);
  }

  function teste(value)
  {
    let aux1 = new Date(value.data_evento);
    let aux2 = new Date(filter);
    if(aux1.getFullYear() === aux2.getFullYear())
    {
      if(aux1.getMonth() === aux2.getMonth())
      {
        if(aux1.getDate() === aux2.getDate())
        {
          return value
        }
        
      }
    }
  }

  function handleEventsList(data){
    setFilter(data.start);
    setEventsListRender(!isEventsListRender);
  }
  return (
    <Container>
      {isAddEventsRender?
      <WhiteContainer>
        <AddEventContainer>
          {isAddEventsRender? <CreateComponent isRender={handleAddEvent}/> : null}
        </AddEventContainer>
      </WhiteContainer>
      : null}
      {isEventsListRender && eventsDate.filter(teste).length > 0? 
        <WhiteContainer>
          <EventsContainer >
            {isEventsListRender && eventsDate.filter(teste).length > 0? <FilteredEvent isRender={handleEventsList} filterDate={filter} eventList={eventsDate.filter(teste)} data={[eventsDate, setEvents]} /> : null}
          </EventsContainer>
        </WhiteContainer>
          : null}

        <CalenderContainer>
          {selector.tipo_usuario === '4'? <StandartButton className="addButton" type={"button"} icon={Plus} text={"Adicionar Evento"} customStyle={{width:'225px', height:'55px'}} onClick={handleAddEvent}/> : null}
          <CalenderBox>
            <Calendar
              selectable={'ignoreEvents'} 
              localizer={localizer}
              events={eventsDate.length > 0? eventsDate : [{}]}
              views={{
                month: true,
              }}
              messages={messages}
              titleAccessor="titulo"
              startAccessor="data_evento"
              endAccessor="data_evento"
              onSelectSlot={handleEventsList}
            />
          </CalenderBox>
          
        </CalenderContainer> 
    </Container>
  );
}

export default Calender;