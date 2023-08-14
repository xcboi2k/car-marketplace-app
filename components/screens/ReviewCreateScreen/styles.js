import styled from 'styled-components/native';
import { Container } from '../../../common/Styles';

export const ReviewsCreateContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    width: 100%;
`;

export const FormContainer = styled.View`
    flex-grow: 0;
    width: 85%;
    margin-top: 10px;
    align-items: center;
    justify-content: center
`;

export const HeaderHolder = styled.View`
    width: 85%;
`;

export const HeaderText = styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const BodyText = styled.Text`
    font-size: 15px;
    color: red;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;