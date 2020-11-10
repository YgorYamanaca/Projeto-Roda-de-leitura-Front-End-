import React, {useState} from 'react'
import { Container, ExternalBox, Title, Context} from './styles';
import BarChartData from './Graphs/BarChartData'

export default function AnalyticsComponent() {

    return (
        <Container>
            <ExternalBox>
                <Title>
                    Estátistica
                </Title>

                <Context>
                    <BarChartData/>
                </Context>
            </ExternalBox>
        </Container>
    )
}
