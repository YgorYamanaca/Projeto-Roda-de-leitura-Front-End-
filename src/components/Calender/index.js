import React, { useEffect, useState } from 'react';
import { Container, WhiteContainer, CalenderContainer, CalenderHeader, AddEventContainer, CalenderBox,  EventsContainer} from './styles';
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
import { useSelector, useDispatch } from 'react-redux';
import { addEventsData } from '../../store/modules/eventsData/actions'

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
  const user = useSelector(state => state.user);
  const localizer = momentLocalizer(moment);
  const [filter, setFilter] = useState([]);
  const [isAddEventsRender, setEventsRender] = useState(false);
  const [isEventsListRender, setEventsListRender] = useState(false);
  const events = useSelector(state => state.eventsData);
  const dispatch = useDispatch();
  useEffect(() => {
        let token = getToken();
        api.get("/evento",{
          headers:{'x-access-token':token} //Validar se é adm para ver se pode retornar todos os dados
        })
        .then(response => {
          dispatch(addEventsData(response.data))
        })
        .catch(error => {
            alert("Não foi possível receber os eventos!");
        })
  },[dispatch])

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
      {isEventsListRender && events.filter(teste).length > 0? 
        <WhiteContainer>
          <EventsContainer >
            {isEventsListRender && events.filter(teste).length > 0? <FilteredEvent isRender={handleEventsList} filterDate={filter} eventList={events.filter(teste)} data={events} /> : null}
          </EventsContainer>
        </WhiteContainer>
          : null}

        <CalenderContainer>
          <CalenderHeader>
            {user.tipo_usuario === 4? <StandartButton className="addButton" type={"button"} icon={Plus} text={"Adicionar Evento"} customStyle={{width:'200px', height:'45px'}} onClick={handleAddEvent}/> : null}
          </CalenderHeader> 
          <CalenderBox>
            <Calendar
              selectable={'ignoreEvents'} 
              localizer={localizer}
              events={events && events.length > 0? events : [{}]}
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