import styled from "styled-components/native";

export const InputContainer = styled.View`
    elevation: 5;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    position: relative;
    flex-direction: row;
    align-items: center;
    height: 100px;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    padding: 10px;
    /* font-family: ${FONTS.REGULAR}; */
    font-size: 18px;
    flex: 1;
    height: 100%;
`;

export const CustomInputContainer = styled.View`
    width: ${({ width }) => width};
`;

export const CustomText = styled.Text`
    /* font-family: ${FONTS.BOLD}; */
    font-weight: bold;
    font-size: ${({ textSize }) => textSize};
    margin-bottom: 5px;
`