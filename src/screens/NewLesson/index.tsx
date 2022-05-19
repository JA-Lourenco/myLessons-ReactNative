import React from 'react';

import { Button } from '../../components/Button';

import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {
    Container,
    Header,
    Title,
    Form,
    Inputs,
    LessonNameInput,
    LessonObsInput,
    SelectDays,
    Week,
    Weekend,
    ButtonArea
            
} from './styles';

export function NewLesson(){
    const theme = useTheme()

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
                    <LessonNameInput>

                    </LessonNameInput>

                    <LessonObsInput multiline={true} numberOfLines={4} maxLength={300}>

                    </LessonObsInput>
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
                        onPress={() => {}} 
                    />
                </ButtonArea>
            </Form>


        </Container>
    )
}