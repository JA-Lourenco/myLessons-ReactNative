import React from 'react';
import { EditButton } from '../EditButton';

import {
    Container,
    Details,
    LessonName,
    Days,
    Observation,
    ButtonArea
} from './styles';

export function LessonCard(){
    return (
        <Container>
            <Details>
                <LessonName>
                    Português
                </LessonName>

                <Days>
                    Quarta, Quinta
                </Days>

                <Observation>
                    Realizar estudo diário.
                </Observation>
            </Details>

            <ButtonArea>
                <EditButton />
            </ButtonArea>
        </Container>
    )
}