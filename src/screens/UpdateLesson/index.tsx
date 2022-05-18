import React from 'react';

import { StatusBar } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    Title,
    Details,
    Observation,
    SelectDays,
    ButtonArea
} from './styles';

export function UpdateLesson(){
    const theme = useTheme()

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <Title>Português</Title>
            </Header>

            <Details>            
                
                <Observation>
                    Observação:{'\n'}
                    Realizar estudo diário
                </Observation>
                

                <SelectDays>
                    <BouncyCheckbox
                        size={24}
                        text='Segunda-feira'
                        textStyle={{ 
                            color: theme.colors.white, 
                            fontFamily: theme.fonts.regular,
                            textDecorationLine: 'none'
                        }}
                        style={{ paddingVertical: 10, width: 200 }}
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
                        style={{ paddingVertical: 10, width: 200 }}
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
                        style={{ paddingVertical: 10, width: 200 }}
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
                        style={{ paddingVertical: 10, width: 200 }}
                        fillColor={theme.colors.pink}
                        unfillColor={theme.colors.black}
                    />
                    <BouncyCheckbox
                        size={24}
                        text='Sexta-feira'
                        textStyle={{ 
                            color: theme.colors.white, 
                            fontFamily: theme.fonts.regular,
                            textDecorationLine: 'none'
                        }}
                        style={{ paddingVertical: 10, width: 200 }}
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
                        style={{ paddingVertical: 10, width: 200 }}
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
                        style={{ paddingVertical: 10, width: 200 }}
                        fillColor={theme.colors.pink}
                        unfillColor={theme.colors.black}
                    />
                </SelectDays>
            </Details>

            <ButtonArea>

            </ButtonArea>

        </Container>
    )
}