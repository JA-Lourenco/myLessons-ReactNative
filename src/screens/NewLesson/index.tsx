import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { InputForm } from '../../components/Form/InputForm';

import api from '../../services/api';
import { LessonDTO } from '../../dtos/LessonDTO'

import { StatusBar, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    Form,
    Inputs,
    SelectDays,
    ButtonArea        
} from './styles';

export interface SelectedDaysProps {
    id: number
    name: string
    checked: boolean
}

interface NavigationProps {
    navigate: (screen: string) => void
}

const schema = Yup.object().shape({
    lesson: Yup.string().required('Preencha o Nome da Matéria!'),
    obs: Yup.string().required('Preencha a Observação!')
})

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

export function NewLesson(){
    const [days, setDays] = useState<SelectedDaysProps[]>(DAYS)

    const theme = useTheme()

    const navigation = useNavigation<NavigationProps>()

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    async function handleSubmitLesson(form: Partial<LessonDTO>) {
        try {
            const data = {
                id: uuid.v4(),
                lesson: form.lesson,
                obs: form.obs,
                monday: days[0].checked ? 'S' : 'N',
                tuesday: days[1].checked ? 'S' : 'N',
                wednesday: days[2].checked ? 'S' : 'N',
                thursday: days[3].checked ? 'S' : 'N',
                friday: days[4].checked ? 'S' : 'N',
                saturday: days[5].checked ? 'S' : 'N',
                sunday: days[6].checked ? 'S' : 'N'
            }
            console.log(data)

            await api.post('/Lessons', data)
            Alert.alert('Matéria adicionada com sucesso!')
            navigation.navigate('Matérias')

        } catch (error) {
            console.log('Screen: NewLesson\nFunction: handleSubmitLesson\nerror:', error)
        } 
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <StatusBar 
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />

                <Header>
                    <Title>Adicionar Matéria</Title>
                </Header>

                <Form>
                    <Inputs>
                        <InputForm
                            name='lesson'
                            control={control}
                            placeholder='Nome da Matéria' 
                            placeholderTextColor={theme.colors.gray} 
                            maxLength={100}
                            error={errors.lesson && errors.lesson.message}
                        />

                        <InputForm 
                            name='obs'
                            control={control}
                            placeholder='Observação' 
                            placeholderTextColor={theme.colors.gray} 
                            multiline={true}
                            numberOfLines={3}
                            maxLength={400}
                            error={errors.obs && errors.obs.message}
                        />
                    </Inputs>

                    <SelectDays>
                            {
                                days.map((day, index) => 
                                    <BouncyCheckbox
                                        key={day.id}
                                        size={24}
                                        text={day.name}
                                        textStyle={{ 
                                            color: theme.colors.white, 
                                            fontFamily: theme.fonts.regular,
                                            textDecorationLine: 'none'
                                        }}
                                        style={{ width: 200, paddingVertical: 10 }}
                                        iconStyle={{ borderRadius: 3 }}
                                        fillColor={theme.colors.pink}
                                        unfillColor={theme.colors.black}
                                        disableBuiltInState
                                        onPress={() => {
                                            let temp = [...days]
                                            temp[index].checked = !temp[index].checked
                                            setDays(temp)
                                        }}
                                        isChecked={day.checked}
                                    />
                                )
                            }
                    </SelectDays>

                    <ButtonArea>
                        <Button 
                            title='Adicionar' 
                            color={theme.colors.pink} 
                            onPress={handleSubmit(handleSubmitLesson)} 
                        />
                    </ButtonArea>
                </Form>
            </Container>
        </TouchableWithoutFeedback>
    )
}