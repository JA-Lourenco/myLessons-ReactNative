import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    padding: 20px;
    border-bottom-width: 1px; 
    border-bottom-style: solid; 
    border-bottom-color: ${({ theme }) => theme.colors.lightGray};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

export const Details = styled.View`
`

export const LessonName = styled.Text`
    color: ${({ theme }) => theme.colors.pink};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`

export const Days = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-top: 5px;
`

export const Observation = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`

export const ButtonArea = styled.View`
`