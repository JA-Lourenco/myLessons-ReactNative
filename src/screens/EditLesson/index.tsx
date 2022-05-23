import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { InputForm } from '../../components/Form/InputForm';

import api from '../../services/api';
import { LessonDTO } from '../../dtos/LessonDTO'
import { SelectedDaysProps } from '../../dtos/LessonDTO';
import { DAYS } from '../../dtos/DAYSDTO';

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
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    Form,
    FormContent,
    Inputs,
    SelectDays,
    ButtonArea        
} from './styles';

interface NavigationProps {
    push: (screen: string) => void
}

interface Params {
    id: LessonDTO
}

const schema = Yup.object().shape({
    lesson: Yup.string().required('Preencha o Nome da Matéria!'),
    obs: Yup.string().required('Preencha a Observação!')
})

export function EditLesson(){
    const [days, setDays] = useState<SelectedDaysProps[]>(DAYS)

    const theme = useTheme()

    const navigation = useNavigation<NavigationProps>()
    const route = useRoute()
    const { id } = route.params as Params

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    async function handleSubmitEditedLesson(form: Partial<LessonDTO>) {
        try {
            await api.put(`/Lessons/${id}`, {
                lesson: form.lesson,
                obs: form.obs,
                monday: days[0].checked ? 'S' : 'N',
                tuesday: days[1].checked ? 'S' : 'N',
                wednesday: days[2].checked ? 'S' : 'N',
                thursday: days[3].checked ? 'S' : 'N',
                friday: days[4].checked ? 'S' : 'N',
                saturday: days[5].checked ? 'S' : 'N',
                sunday: days[6].checked ? 'S' : 'N'
            })
            Alert.alert('Matéria editada com sucesso!')
            navigation.push('Lessons')
            setDays([])

        } catch (error) {
            console.log('Screen: EditLesson\nFunction: handleSubmitEditedLesson\nerror:', error)
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
                    <Title>Editar Matéria</Title>
                </Header>

                <Form>
                    <FormContent
                        showsVerticalScrollIndicator={false}
                    >
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
                    </FormContent>

                    <ButtonArea>
                        <Button 
                            title='Editar' 
                            color={theme.colors.pink} 
                            onPress={handleSubmit(handleSubmitEditedLesson)} 
                        />
                    </ButtonArea>
                </Form>
            </Container>
        </TouchableWithoutFeedback>
    )
}