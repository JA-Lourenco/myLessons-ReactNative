import React from 'react';

import { Button } from '../../components/Button';
import { InputForm } from '../../components/Form/InputForm';

import { LessonDTO } from '../../dtos/LessonDTO'

import { useForm } from 'react-hook-form';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {
    Container,
    Header,
    Title,
    Form,
    Inputs,
    SelectDays,
    Week,
    Weekend,
    ButtonArea
            
} from './styles';

export function NewLesson(){
    const theme = useTheme()

    const {
        control,
        handleSubmit
    } = useForm()

    function handleSubmitLesson(form: Partial<LessonDTO>) {
        const data = {
            id: Math.random() * 100,
            lesson: form.lesson,
            obs: form.obs,
            // monday: form.monday,
            // tuesday: form.tuesday,
            // wednesday: form.wednesday,
            // thursday: form.thursday,
            // friday: form.friday,
            // saturday: form.saturday,
            // sunday: form.sunday
        }

        console.log(data)
    }

    return (
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
                    />

                    <InputForm 
                        name='obs'
                        control={control}
                        placeholder='Observação' 
                        placeholderTextColor={theme.colors.gray} 
                        multiline={true}
                        numberOfLines={3}
                        maxLength={400}
                    />
                </Inputs>

                <SelectDays>
                    <Week>
                        <BouncyCheckbox
                            size={24}
                            text='Segunda-feira'
                            textStyle={{ 
                                color: theme.colors.white, 
                                fontFamily: theme.fonts.regular,
                                textDecorationLine: 'none'
                            }}
                            style={{ paddingVertical: 10 }}
                            iconStyle={{ borderRadius: 3 }}
                            fillColor={theme.colors.pink}
                            unfillColor={theme.colors.black}
                        />
                        
                        <BouncyCheckbox
                            size={24}
                            text='Terça-feira'
                            textStyle={{ 
                                color: theme.colors.white, 
                                fontFamily: theme.fonts.regular,
                                textDecorationLine: 'none'
                            }}
                            style={{ paddingVertical: 10 }}
                            iconStyle={{ borderRadius: 3 }}
                            fillColor={theme.colors.pink}
                            unfillColor={theme.colors.black}
                        />

                        <BouncyCheckbox
                            size={24}
                            text='Quarta-feira'
                            textStyle={{ 
                                color: theme.colors.white, 
                                fontFamily: theme.fonts.regular,
                                textDecorationLine: 'none'
                            }}
                            style={{ paddingVertical: 10 }}
                            iconStyle={{ borderRadius: 3 }}
                            fillColor={theme.colors.pink}
                            unfillColor={theme.colors.black}
                        />

                        <BouncyCheckbox
                            size={24}
                            text='Quinta-feira'
                            textStyle={{ 
                                color: theme.colors.white, 
                                fontFamily: theme.fonts.regular,
                                textDecorationLine: 'none'
                            }}
                            style={{ paddingVertical: 10 }}
                            iconStyle={{ borderRadius: 3 }}
                            fillColor={theme.colors.pink}
                            unfillColor={theme.colors.black}
                        />
                    </Week>

                    <Weekend>
                        <BouncyCheckbox
                            size={24}
                            text='Sexta-feira'
                            textStyle={{ 
                                color: theme.colors.white, 
                                fontFamily: theme.fonts.regular,
                                textDecorationLine: 'none'
                            }}
                            style={{ paddingVertical: 10 }}
                            iconStyle={{ borderRadius: 3 }}
                            fillColor={theme.colors.pink}
                            unfillColor={theme.colors.black}
                        />

                        <BouncyCheckbox
                            size={24}
                            text='Sábado'
                            textStyle={{ 
                                color: theme.colors.white, 
                                fontFamily: theme.fonts.regular,
                                textDecorationLine: 'none'
                            }}
                            style={{ paddingVertical: 10 }}
                            iconStyle={{ borderRadius: 3 }}
                            fillColor={theme.colors.pink}
                            unfillColor={theme.colors.black}
                        />

                        <BouncyCheckbox
                            size={24}
                            text='Domingo'
                            textStyle={{ 
                                color: theme.colors.white, 
                                fontFamily: theme.fonts.regular,
                                textDecorationLine: 'none'
                            }}
                            style={{ paddingVertical: 10 }}
                            iconStyle={{ borderRadius: 3 }}
                            fillColor={theme.colors.pink}
                            unfillColor={theme.colors.black}
                        />
                    </Weekend>
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
    )
}