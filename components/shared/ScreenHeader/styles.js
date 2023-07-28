import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    height: 75px;
    padding: 0 16px;
`;

export const Logo = styled.Image`
  /* Add your logo styles here */
    width: 65px;
    height: 65px;
`;

export const LeftButton = styled.TouchableOpacity`
    padding: 5px;
`;

export const RightButton = styled.TouchableOpacity`
    padding: 5px;
`;