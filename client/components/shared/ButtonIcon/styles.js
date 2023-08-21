import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    width: ${({ width }) => width};
    padding: 14px;
    background-color: ${({ buttonColor }) => buttonColor};
    border-radius: 100px;
    border: 2px solid ${({ borderColor }) => borderColor};
    flex-direction: row;
    align-items: center;
`;