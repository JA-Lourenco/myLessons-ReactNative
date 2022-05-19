import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.nightBlack};
`;

export const Header = styled.View`
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-top: ${getStatusBarHeight() + 15}px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.pink};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(26)}px;
`

export const Form = styled.View`
    flex: 1;
`

export const Inputs = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 30px;
`

export const LessonNameInput = styled.TextInput`
    width: 100%;
    border: 0.5px solid ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.pink};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    padding: 5px 8px;
    margin-bottom: 15px;
`

export const LessonObsInput = styled.TextInput`
    width: 100%;
    border: 0.5px solid ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.pink};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    padding: 5px;
`

export const SelectDays = styled.View`
    margin-top: 35px;
    padding: 0 30px 30px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const Week = styled.View`

`

export const Weekend = styled.View`

`

export const ButtonArea = styled.View`
    justify-content: flex-end;
    align-items: center;
    margin: 30px;
`