import React from 'react';

import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import {
    Container
} from './styles';
import { Input } from '../Input';

interface InputFormProps extends TextInputProps {
    control: Control
    name: string
}

export function InputForm({ control, name, ...rest }: InputFormProps){
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => 
                    <Input 
                        value={value}
                        onChangeText={onChange}
                        {...rest} 
                    />
                }
                name={name}
            />            
        </Container>
    )
}