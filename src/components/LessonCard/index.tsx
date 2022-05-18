import React from 'react';

import {
    Container,
    LessonName,
    Days,
    Observation
} from './styles';

export function LessonCard(){
    return (
        <Container>
            <LessonName>
                Português
            </LessonName>

            <Days>
                Quarta, Quinta
            </Days>

            <Observation>
                Realizar estudo diário.
            </Observation>
        </Container>
    )
}