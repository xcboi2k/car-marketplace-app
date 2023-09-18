import styled from "styled-components/native";

export const ButtonUploadContainer = styled.TouchableOpacity`
    width: ${({ buttonWidth }) => buttonWidth};
    height: ${({ buttonHeight }) => buttonHeight};
    background-color: ${({ buttonColor }) => buttonColor};
    border-radius: ${({ buttonBorderRadius }) => buttonBorderRadius};
    justify-content: center;
    align-items: center;
`;