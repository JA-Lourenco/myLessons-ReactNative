import React, { useEffect, useState } from 'react';

import { Button } from '../../components/Button';

import api from '../../services/api';

import { LessonDTO } from '../../dtos/LessonDTO';
import { StatusBar, Alert } from 'react-native';
import Modal from "react-native-modal";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { useTheme } from 'styled-components';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    Details,
    Observation,
    SelectDays,
    ButtonArea,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    ModalQuestion,
    ModalButtonArea
} from './styles';

const DAYS = [
    {
        id: 0,
        name: 'Segunda-feira',
        checked: false
    },
    {
        id: 1,
        name: 'Terça-feira',
        checked: false
    },
    {
        id: 2,
        name: 'Quarta-feira',
        checked: false
    },
    {
        id: 3,
        name: 'Quinta-feira',
        checked: false
    },
    {
        id: 4,
        name: 'Sexta-feira',
        checked: false
    },
    {
        id: 5,
        name: 'Sábado',
        checked: false
    },
    {
        id: 6,
        name: 'Domingo',
        checked: false
    }
]
interface Params {
    id: string
}

interface NavigationProps {
    push: (screen: string) => void
}

export function UpdateLesson(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [lesson, setLesson] = useState<LessonDTO>({} as LessonDTO)

    const theme = useTheme()

    const navigation = useNavigation<NavigationProps>()

    const route = useRoute()
    const { id } = route.params as Params

    console.log(id)

    async function handleGetLesson() {
        try {
            const response = await api.get(`/Lessons/${id}`)
            
            let temp = []
            temp.push({...DAYS[0], checked: response.data.monday === 'S' ? true : false})
            temp.push({...DAYS[1], checked: response.data.tuesday === 'S' ? true : false})
            temp.push({...DAYS[2], checked: response.data.wednesday === 'S' ? true : false})
            temp.push({...DAYS[3], checked: response.data.thursday === 'S' ? true : false})
            temp.push({...DAYS[4], checked: response.data.friday === 'S' ? true : false})
            temp.push({...DAYS[5], checked: response.data.saturday === 'S' ? true : false})
            temp.push({...DAYS[6], checked: response.data.sunday === 'S' ? true : false})

            setLesson({...response.data, days: temp})

        } catch (error) {
            console.log('Screen: UpdateLessons\nFunction: handleGetLesson\nerror:', error)
        } 
    }

    async function handleDeleteLesson() {
        try {
            await api.delete(`/Lessons/${id}`).then(() => setModalIsOpen(false))
            
            Alert.alert('Remoção realizada com sucesso!')
            navigation.push('Lessons')

        } catch (error) {
            console.log('Screen: UpdateLessons\nFunction: handleDeleteLesson\nerror:', error)
        } 
    }

    useEffect(() => {
        handleGetLesson()
    },[])

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <Title>{lesson?.lesson}</Title>
            </Header>

            <Details>           
                <Observation>
                    {lesson.obs}
                </Observation>
                
                <SelectDays>
                    {
                        lesson.days?.map((day) => 
                            <BouncyCheckbox
                                key={day.id}
                                size={24}
                                text={day.name}
                                textStyle={{ 
                                    color: theme.colors.white, 
                                    fontFamily: theme.fonts.regular,
                                    textDecorationLine: 'none'
                                }}
                                style={{ paddingVertical: 10 }}
                                iconStyle={{ borderRadius: 3 }}
                                fillColor={theme.colors.pink}
                                unfillColor={theme.colors.black}
                                disableBuiltInState
                                isChecked={day.checked}
                            />
                        )
                    }
                </SelectDays>
            </Details>

            <ButtonArea>
                <Button 
                    title='Editar' 
                    color={theme.colors.pink} 
                    onPress={() => {}} 
                />

                <Button 
                    title='Remover' 
                    color={theme.colors.purple} 
                    onPress={() => setModalIsOpen(true)} 
                />
            </ButtonArea>

            <Modal
                isVisible={modalIsOpen}
                backdropColor={theme.colors.gray}
                onBackdropPress={() => setModalIsOpen(false)}
                onBackButtonPress={() => setModalIsOpen(false)} 
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={400}
            >   
                <ModalContainer>
                    <ModalHeader>
                        <ModalTitle>
                            Atenção
                        </ModalTitle>

                        <ModalQuestion>
                            Confirma a remoção da matéria?
                        </ModalQuestion>
                    </ModalHeader>
                
                    <ModalButtonArea>                    
                        <Button 
                            title='Cancelar' 
                            color={theme.colors.pink} 
                            onPress={() => setModalIsOpen(false)} 
                        />

                        <Button 
                            title='Confirmar' 
                            color={theme.colors.purple} 
                            onPress={handleDeleteLesson} 
                        />
                    </ModalButtonArea>
                </ModalContainer>
            </Modal>               
        </Container>
    )
}