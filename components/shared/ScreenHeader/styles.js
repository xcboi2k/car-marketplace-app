import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 16px;
`;

export const Logo = styled.Image`
  /* Add your logo styles here */
    width: 50px;
    height: 50px;
`;

export const LeftButton = styled.TouchableOpacity`
    padding: 5px;
`;

export const RightButton = styled.TouchableOpacity`
    padding: 5px;
`;