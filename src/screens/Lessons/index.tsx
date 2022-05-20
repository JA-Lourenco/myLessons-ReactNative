import React, { useEffect, useState } from 'react';

import { ListRenderItem, StatusBar } from 'react-native';
import { LessonCard } from '../../components/LessonCard';

import api from '../../services/api'
import { LessonDTO } from '../../dtos/LessonDTO';

import {
    Container,
    Header,
    Title,
    LessonsList
} from './styles';

const DAYS = [
    {
        id: 0,
        name: 'Segunda',
        checked: false
    },
    {
        id: 1,
        name: 'Terça',
        checked: false
    },
    {
        id: 2,
        name: 'Quarta',
        checked: false
    },
    {
        id: 3,
        name: 'Quinta',
        checked: false
    },
    {
        id: 4,
        name: 'Sexta',
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

export function Lessons(){
    const [lesson, setLesson] = useState<LessonDTO[]>([])

    async function handleGetLessons() {
        try {
            const response = await api.get('/Lessons')
            let tempArray = response.data.map((item: any) => {
                let temp = []
                temp.push({...DAYS[0], checked: item.monday === 'S' ? true : false})
                temp.push({...DAYS[1], checked: item.tuesday === 'S' ? true : false})
                temp.push({...DAYS[2], checked: item.wednesday === 'S' ? true : false})
                temp.push({...DAYS[3], checked: item.thursday === 'S' ? true : false})
                temp.push({...DAYS[4], checked: item.friday === 'S' ? true : false})
                temp.push({...DAYS[5], checked: item.saturday === 'S' ? true : false})
                temp.push({...DAYS[6], checked: item.sunday === 'S' ? true : false})

                return {...item, days: temp}
            })

            setLesson(tempArray)

        } catch (error) {
            console.log('Screen: Lessons\nFunction: handleGetLessons\nerror:', error)
        } 

    }

    const renderItem: ListRenderItem<LessonDTO> = ({ item }) => {
        return (
            <LessonCard { ...item} />
        )
    }

    useEffect(() => {
        handleGetLessons()
    },[])

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

            <LessonsList
                data={lesson}
                keyExtractor={(item: any) => item.id}
                renderItem={renderItem}
            />
        </Container>
    )
}