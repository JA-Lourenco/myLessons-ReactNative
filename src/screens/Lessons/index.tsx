import React from 'react';

import { StatusBar } from 'react-native';
import { LessonCard } from '../../components/LessonCard';

import {
    Container,
    Header,
    Title,
    List,
    LessonsList
} from './styles';

export function Lessons(){
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
                    <LessonCard />
                    <LessonCard />
                    <LessonCard />
                    <LessonCard />
                </LessonsList>
            </List>

        </Container>
    )
}