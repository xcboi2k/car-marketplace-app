import styled from 'styled-components/native';
import { Container } from '../../../common/Styles';

export const ProfileEditContainer = styled(Container)`
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
    flex-direction: row;
    align-items: center;
    justify-content: ${({ mode }) =>
        mode === "edit" ? "space-between" : "flex-end"};
    margin-bottom: 20px;
`;

export const SubText = styled.Text`
    color: black;
    font-size: 13px;
    text-align: center;
`;