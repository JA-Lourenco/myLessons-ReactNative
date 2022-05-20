import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

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

export const Details = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const Observation = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    padding: 30px 30px 0;
    line-height: 30px;
`

export const SelectDays = styled.View`
    margin-top: 20px;
    padding: 0 30px 30px;
    justify-content: space-between;
`

export const ButtonArea = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
`

export const ModalContainer = styled.View`
    width: 100%;
    height: 250px;
    background-color: ${({ theme }) => theme.colors.nightBlack};
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
`

export const ModalHeader = styled.View`
    padding: 0 30px;
`

export const ModalTitle = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`

export const ModalQuestion = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    margin-top: 20px;
`

export const ModalButtonArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
`