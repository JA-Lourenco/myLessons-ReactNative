import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    border: 0.5px solid ${({ theme }) => theme.colors.pink};
    border-radius: 3px;
    margin: 10px 0;
    padding: 5px;
`;