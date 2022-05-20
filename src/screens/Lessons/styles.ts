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

export const LessonsList = styled.FlatList`
`