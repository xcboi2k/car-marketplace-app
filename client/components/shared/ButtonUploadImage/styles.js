import styled from "styled-components/native";

export const ButtonUploadContainer = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    background-color: ${({ buttonColor }) => buttonColor};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;