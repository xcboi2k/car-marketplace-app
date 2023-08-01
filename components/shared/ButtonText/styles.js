import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    width: ${({ width }) => width};
    padding: 10px;
    background-color: ${({ buttonColor }) => buttonColor};
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ButtonLabel = styled.Text`
    font-size: ${({ textSize }) => textSize}px;
    text-align: center;
    font-family: ${FONTS.BOLD};
    text-transform: uppercase;
    color: ${({ textColor }) => textColor};
`;