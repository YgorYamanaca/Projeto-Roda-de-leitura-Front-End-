import React, { useState, useLayoutEffect } from 'react'
import { Container, ExternalBox, Title, Context, DateRequestSty, ResponseDataSty, DateContent, StySubData, AnalyticContent, GraphicContent} from './styles';
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
    const [universityData, setUniversityData] = useState( {datasets:[], labels:[]} );
    const [centerData, setCenterData] = useState( {datasets:[], labels:[]} );
    const [userType, setUserType] = useState( {datasets:[], labels:[]} );
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

/** 
 * @description Função para gerar cores aleatória
 */
  function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useLayoutEffect(() => {
        if(eventStaticData)
        {
            let types = eventStaticData?.inscritos_tipo.reduce((acc, type) => {
                switch (type.tipo_usuario) 
                {
                    case '1':
                        acc.tipoUsuario.push('Aluno Externo')
                        acc.freq.push(type.frequency)
                        return acc;
                    case '2':
                        acc.tipoUsuario.push('Aluno Interno')
                        acc.freq.push(type.frequency)
                        return acc;
                    case '3':
                        acc.tipoUsuario.push('Professor')
                        acc.freq.push(type.frequency)
                        return acc;
                    case '4':
                        acc.tipoUsuario.push('Administrador')
                        acc.freq.push(type.frequency)
                        return acc;
                    case '5':
                        acc.tipoUsuario.push('Funcionário Interno')
                        acc.freq.push(type.frequency)
                        return acc;
                    default:
                        return acc;
                        ;
                }
            }, {tipoUsuario:[], freq:[]})

            let universtys = eventStaticData?.inscritos_faculdade.reduce((acc, uni) => {
                if(uni.faculdade)
                {
                    acc.tipoFaculdade.push(uni.faculdade)
                    acc.freq.push(uni.frequency)
                    return acc;
                }
                return acc;
            }, {tipoFaculdade:[], freq:[]})

            let centers = eventStaticData?.inscritos_centro.reduce((acc, center) => {
                if(center.centro)
                {
                    acc.tipoCentro.push(center.centro)
                    acc.freq.push(center.frequency)
                    return acc;
                }
                return acc;
            }, {tipoCentro:[], freq:[]})

            setUserType({
                labels:Object.values(types.tipoUsuario),
                datasets: [
                    {
                        label: '#Usuário',
                        data: Object.values(types.freq),
                        backgroundColor: getRandomColor(),
                        borderColor: getRandomColor(),
                        borderWidth: 1,
                    },
                ],
            })
        
            setUniversityData({
                labels:Object.values(universtys.tipoFaculdade),
                datasets: [
                    {
                        label: '#Faculdade',
                        data: Object.values(universtys.freq),
                        backgroundColor: getRandomColor(),
                        borderColor: getRandomColor(),
                        borderWidth: 1,
                    },
                ],
            })
        
            setCenterData({
                labels:Object.values(centers.tipoCentro),
                datasets: [
                    {
                        label: '#Centro',
                        data: Object.values(centers.freq),
                        backgroundColor: getRandomColor(),
                        borderColor: getRandomColor(),
                        borderWidth: 1,
                    },
                ],
            })
        }
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
                            className="requestButton" type={"button"} text={"Buscar dados"} fontsize={isMobile ? '15px' : '20px'} customStyle={isMobile ? {width:'100px', height:'50%'} : {width:'150px', height:'50%'}} onClick={doRequest} disabled={fisrtDate && endDate? false : true}
                        />
                    </DateRequestSty>
                <ResponseDataSty>
                    {eventStaticData && 
                        <>
                            <StySubData isMobile={isMobile}>
                                <div><span>Número de eventos:</span> {eventStaticData.eventos}</div>
                                <div><span>Número de inscritos:</span> {eventStaticData.inscritos}</div>
                            </StySubData>

                            <AnalyticContent>
                                
                            {userType && userType.labels.length >= 1?
                            <GraphicContent>
                                Faculdade dos inscritos
                                <HorizontalBar data={userType} options={options}/>
                            </GraphicContent> : null}

                            {universityData && universityData.labels.length >= 1?
                            <GraphicContent>
                                Faculdade dos inscritos
                                <HorizontalBar data={universityData} options={options}/>
                            </GraphicContent> : null}

                            {centerData && centerData.labels.length >= 1?
                            <GraphicContent>
                                Centro dos inscritos
                                <HorizontalBar data={centerData} options={options}/>
                            </GraphicContent> : null}
                            </AnalyticContent>
                        </>
                    }
                </ResponseDataSty>
                </Context>
            </ExternalBox>
        </Container>
    )
}
