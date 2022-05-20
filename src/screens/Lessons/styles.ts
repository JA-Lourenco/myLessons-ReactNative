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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    margin-top: ${getStatusBarHeight() + 15}px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.pink};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(26)}px;
`

export const TotalLessons = styled.Text`
    color: ${({ theme }) => theme.colors.lightGray};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`

export const LessonsList = styled.FlatList`
`