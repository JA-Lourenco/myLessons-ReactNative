import React from 'react';

import { EditButton } from '../EditButton';

import { LessonDTO } from '../../dtos/LessonDTO';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Details,
    LessonName,
    Days,
    Observation,
    ButtonArea
} from './styles';

// interface NavigationProps {
//     navigate: (screen: string) => void
// }

export function LessonCard({  
    id,
    lesson,
    obs,
    days
}: LessonDTO) {
    const navigation = useNavigation()

    const weekDays = days.filter((item) => item.checked)

    function handleLessonEdit() {
        navigation.navigate('Update' as never, {id} as never)
    }

    return (
        <Container>
            <Details>
                <LessonName>{lesson}</LessonName>

                <Days>
                    {
                        weekDays.map(day => day.name).join(', ')
                    }
                </Days>

                <Observation>
                    {obs}
                </Observation>
            </Details>

            <ButtonArea>
                <EditButton onPress={handleLessonEdit}/>
            </ButtonArea>
        </Container>
    )
}