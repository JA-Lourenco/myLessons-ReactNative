import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'styled-components';

import {
    Container
} from './styles';

interface EditButtonProps {
    onPress: () => void
}

export function EditButton({ onPress }: EditButtonProps){
    const theme = useTheme()

    return (
        <Container onPress={onPress}>
            <FontAwesome 
                name='edit'
                size={24}
                color={theme.colors.pink}
            />
        </Container>
    )
}