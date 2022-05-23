import React, { useEffect, useState } from 'react';

import { Button } from '../../components/Button';

import api from '../../services/api';
import { LessonDTO } from '../../dtos/LessonDTO';
import { DAYS } from '../../dtos/DAYSDTO';

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
import { Load } from '../../components/Load';
interface Params {
    id: string
}

interface NavigationProps {
    push: (screen: string) => void
    navigate: (screen: string, id: object) => void
}

export function UpdateLesson(){
    const [lesson, setLesson] = useState<LessonDTO>({} as LessonDTO)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const theme = useTheme()

    const navigation = useNavigation<NavigationProps>()

    const route = useRoute()
    const { id } = route.params as Params

    console.log(id)

    async function handleGetLesson() {
        setLoading(true)

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
        } finally {
            setLoading(false)
        }
    }

    async function handleDeleteLesson() {
        setLoading(true)

        try {
            await api.delete(`/Lessons/${id}`).then(() => setModalIsOpen(false))
            
            Alert.alert('Remoção realizada com sucesso!')
            navigation.push('Lessons')

        } catch (error) {
            Alert.alert('Não foi possível realizar remoção do registro!')
            console.log('Screen: UpdateLessons\nFunction: handleDeleteLesson\nerror:', error)
        } finally {
            setLoading(false)
        }
    }

    function handleEditLesson() {
        navigation.navigate('Edit', lesson)
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

            {
                loading ? <Load /> :

                <Details
                    showsVerticalScrollIndicator={false}
                >           
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
            }


            <ButtonArea>
                <Button 
                    title='Editar' 
                    color={theme.colors.pink} 
                    onPress={handleEditLesson} 
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
                            disabled={loading}
                            loading={loading} 
                        />
                    </ModalButtonArea>
                </ModalContainer>
            </Modal>               
        </Container>
    )
}