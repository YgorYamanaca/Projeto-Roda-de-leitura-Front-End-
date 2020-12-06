import React, { useState } from 'react'
import { Container, ExternalBox, Title, Context, DateRequestSty, ResponseDataSty, DateContent} from './styles';
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

    /** 
    * @description Função para realizar a requisição dos dados de estátistica
    */
    function doRequest() {
        let token = getToken();
        api.get(`/estatistica`, {params: {inicio:fisrtDate, fim:endDate}, headers:{'x-access-token':token}})
        .then(response => {
            console.log(response);
        })
    }

    return (
        <Container>
            <ExternalBox>
                <Title>
                    Estátistica
                </Title>

                <Context>
                   <DateRequestSty isMobile={isMobile}>  
                        <DateContent>
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

                        <DateContent disabled={fisrtDate? false : true}>
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
                            className="requestButton" type={"button"} text={"Buscar dados"} customStyle={{width:'150px', height:'35px'}} onClick={doRequest} disabled={fisrtDate && endDate? false : true}
                        />
                    </DateRequestSty>
                <ResponseDataSty>

                </ResponseDataSty>
                </Context>
            </ExternalBox>
        </Container>
    )
}
