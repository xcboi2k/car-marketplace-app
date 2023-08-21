import styled from "styled-components/native";

export const CustomInputContainer = styled.View`
    width: ${({ width }) => width};
`;

export const CustomText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
`;

export const ImgButton = styled.TouchableOpacity`
    height: 100%;
    width: 30%;
    align-items: center;
    justify-content: center;
    background-color: '#234791';
`;

export const CustomImage = styled.Image`
    width:100%;
    height:100%
`;