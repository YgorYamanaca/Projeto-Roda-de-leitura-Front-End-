import React from 'react'
import { Container, ExternalBox, Title, Context} from './styles';

/** 
 * @description Componente da página de ajuda
 */
export default function HelpComponent() {
    return (
        <Container>
            <ExternalBox>
                <Title>
                    Fale Conosco
                </Title>

                <Context>
                    Para qualquer dúvida entre em contato com a biblioteca: 
                    <span>
                        (19)29191-0909
                    </span>
                    .
                </Context>
            </ExternalBox>
        </Container>
    )
}
