import styled from 'styled-components/native';
import { Container } from '../../../common/Styles'

export const MessageCardContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    border-width: 0.7px;
    border-color: #D0D0D0;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    padding: 10px;
`;

export const UserImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    resize-mode: cover;
`;

export const MessageContainer = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const NameText = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const LastMessageText = styled.Text`
    margin-top: 3px; 
    color: gray;
`;

export const TimeStampText = styled.Text`
    font-size: 11px; 
    color: #585858;
    font-style: italic;
`;