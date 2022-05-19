import React, { useState } from 'react';

import { Button } from '../../components/Button';

import { StatusBar } from 'react-native';
import Modal from "react-native-modal";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    Title,
    Details,
    Observation,
    SelectDays,
    Week,
    Weekend,
    ButtonArea,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    ModalQuestion,
    ModalButtonArea
} from './styles';

export function UpdateLesson(){
    const [modalIsOpen, setModalIsOpen] = useState(false)

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
                    <Week>
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
                            fillColor={theme.colors.pink}
                            unfillColor={theme.colors.black}
                        />
                    </Weekend>
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
                style={{ 
                    backgroundColor: 'rgba(0,0,0,0.1)'
                 }}
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
                            onPress={() => {}} 
                        />
                    </ModalButtonArea>
                </ModalContainer>
            </Modal>               
        </Container>
    )
}