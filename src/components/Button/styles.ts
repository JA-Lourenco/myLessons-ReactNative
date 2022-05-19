import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
    color: string
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    width: 120px;
    background-color: ${({ color }) => color};
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
`