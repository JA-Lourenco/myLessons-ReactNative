import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { Load } from '../Load';

import {
    Container,
    Title
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string
    color: string
    onPress: () => void
    disabled?: boolean
    loading?: boolean
}

export function Button({ 
    title,
    color,
    onPress,
    disabled,
    loading,
    ...rest 
}: ButtonProps){

    return (
        <Container
            color={color}
            onPress={onPress}
            disabled={disabled}
            style={{ opacity: (disabled === true || loading === true) ? .5 : 1 }}
            {...rest}
        >
            {
                loading === true 
                ? <Load />
                : <Title>{title}</Title>
            }
        </Container>
    )
}