import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'styled-components';

import {
    Container
} from './styles';

export function EditButton(){
    const theme = useTheme()

    return (
        <Container>
            <FontAwesome 
                name='edit'
                size={24}
                color={theme.colors.pink}
            />
        </Container>
    )
}