import React, { useState, useLayoutEffect } from 'react'
import { Container, ExternalBox, Title, Context, DateRequestSty, ResponseDataSty, DateContent, StySubData} from './styles';
import { HorizontalBar, Pie } from 'react-chartjs-2';
import DatePicker, { registerLocale } from "react-datepicker";
import ptbr from "date-fns/locale/pt-br";
import { isMobile } from "react-device-detect";
import api from "../../services/api";
import StandartButton from "../StandartButton";
import { getToken } from "../../services/auth";
registerLocale("pt", ptbr);

/** 
* @description Componente de renderização das análises
*/
export default function AnalyticsComponent() {
    const [fisrtDate, setFirstDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [eventStaticData, setStaticData] = useState();
    const options = {
        scales: {
            maintainAspectRatio: false,
            xAxes: [
            {
                ticks: {
                beginAtZero: true,
                stepSize:1,
                },
            },
            ],
            yAxes: [
                {
                    ticks: {
                    beginAtZero: true,
                    stepSize:1,
                    },
                },
                ],
        },
    }
    
    /** 
    * @description Função para realizar a requisição dos dados de estátistica
    */
    function doRequest() {
        let token = getToken();
        api.get(`/estatistica`, {params: {inicio:fisrtDate, fim:endDate}, headers:{'x-access-token':token}})
        .then(response => {
            setStaticData(response.data);
        })
        .catch(err => 
            alert('Não foi possível encontrar os dados.')
        )
    }
    console.log(eventStaticData);
    useLayoutEffect(() => {
        
    }, [eventStaticData])

    return (
        <Container>
            <ExternalBox>
                <Title>
                    Estátistica
                </Title>

                <Context>
                   <DateRequestSty isMobile={isMobile}>  
                        <DateContent isMobile={isMobile}>
                            Data inícial:
                            <DatePicker
                                locale={"pt"}
                                selected={fisrtDate}
                                onChange={date => setFirstDate(date)}
                                dateFormat="dd/MM/yyyy"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                placeholderText="Selecione a data de início..."
                            />
                        </DateContent>

                        <DateContent isMobile={isMobile} disabled={fisrtDate? false : true}>
                            Data final:
                            <DatePicker
                                locale={"pt"}
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                placeholderText="Selecione a data final..."
                                disabled={fisrtDate? false : true}
                        />
                        </DateContent>

                        <StandartButton 
                            className="requestButton" type={"button"} text={"Buscar dados"} fontsize={isMobile ? '15px' : '20px'} customStyle={isMobile ? {width:'100px', height:'25px'} : {width:'150px', height:'35px'}} onClick={doRequest} disabled={fisrtDate && endDate? false : true}
                        />
                    </DateRequestSty>
                <ResponseDataSty>
                    {eventStaticData && 
                    <StySubData isMobile={isMobile}>
                        <div><span>Número de eventos:</span> {eventStaticData.eventos}</div>
                        <div><span>Número de inscritos:</span> {eventStaticData.inscritos}</div>
                    </StySubData>}
                </ResponseDataSty>
                </Context>
            </ExternalBox>
        </Container>
    )
}
