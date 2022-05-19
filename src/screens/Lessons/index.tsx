import React from 'react';

import { StatusBar } from 'react-native';
import { LessonCard } from '../../components/LessonCard';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    List,
    LessonsList
} from './styles';

interface NavigationProps {
    navigate: (screen: string) => void
}

export function Lessons(){
    const navigation = useNavigation<NavigationProps>()

    function handleLessonEdit() {
        navigation.navigate('Update')
    }

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <Title>Matérias</Title>
            </Header>

            <List>
                <LessonsList>
                    <LessonCard onPress={handleLessonEdit} />
                </LessonsList>
            </List>

        </Container>
    )
}