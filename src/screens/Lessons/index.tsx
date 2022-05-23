import React, { useEffect, useState } from 'react';

import { Alert, ListRenderItem, StatusBar } from 'react-native';
import { LessonCard } from '../../components/LessonCard';

import api from '../../services/api'
import { LessonDTO } from '../../dtos/LessonDTO';
import { DAYS } from '../../dtos/DAYSDTO';

import {
    Container,
    Header,
    Title,
    TotalLessons,
    LessonsList
} from './styles';
import { Load } from '../../components/Load';

export function Lessons(){
    const [lesson, setLesson] = useState<LessonDTO[]>([])
    const [loading, setLoading] = useState(true)

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
            Alert.alert('Não foi possível carregar os registros!')
            console.log('Screen: Lessons\nFunction: handleGetLessons\nerror:', error)
        } finally {
            setLoading(false)
        }

    }
    
    useEffect(() => {
        handleGetLessons()
    },[])
    
    // ALTERNATIVA PARA A PROP RENDERITEM DA FLATLIST
    // const renderItem: ListRenderItem<LessonDTO> = ({ item }) => {
    //     return (
    //         <LessonCard { ...item} />
    //     )
    // }

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <Title>Matérias</Title>

                <TotalLessons>Total de {lesson.length} matérias</TotalLessons>
            </Header>

            {
                loading ? <Load /> :
                <LessonsList
                    data={lesson}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({item}: any) => <LessonCard { ...item} />}
                    showsVerticalScrollIndicator={false}
                />
            }
        </Container>
    )
}