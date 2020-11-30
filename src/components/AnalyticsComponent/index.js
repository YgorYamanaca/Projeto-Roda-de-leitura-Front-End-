import React, { useState } from 'react'
import { Container, ExternalBox, Title, Context, DateRequestSty, ResponseDataSty, DateContent} from './styles';
import DatePicker, { registerLocale } from "react-datepicker";
import ptbr from "date-fns/locale/pt-br";
import { isMobile } from "react-device-detect";
registerLocale("pt", ptbr);


export default function AnalyticsComponent() {
    const [fisrtDate, setFirstDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
                </DateRequestSty>
                <ResponseDataSty>

                </ResponseDataSty>
                </Context>
            </ExternalBox>
        </Container>
    )
}
