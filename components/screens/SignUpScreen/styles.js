import styled from 'styled-components/native';
import { Container } from '../../../common/Styles';

export const SignUpContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    width: 100%;
`;

export const HeaderHolder = styled.View`
    width: 85%;
`;

export const HeaderText = styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const HolderContainer = styled.ScrollView`
    flex-grow: 0;
    width: 85%;
    margin-top: 10px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const SubText = styled.Text`
    color: black;
    font-size: 13px;
`;

export const SignInText = styled.Text`
    color: red;
    font-size: 13px;
    font-style: italic;
`;