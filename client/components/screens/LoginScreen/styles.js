import styled from 'styled-components/native';
import { Container } from '../../../common/Styles'

export const LoginContainer = styled(Container)`
    position: relative;
    flex: 1;
    padding-bottom: 20px;
    width: 100%;
`;

export const PageContainer = styled.ScrollView`
    flex: 1;
    background-color: #FFFFFF;
    width: 100%;
`;

export const BackgroundImage = styled.ImageBackground`
    height: ${({ height }) => height};
`;

export const LogoContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
  /* Add your logo styles here */
    width: 125px;
    height: 125px;
`;

export const RoundedTop = styled.View`
    flex: 1;
    bottom: 50px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    background-color: white;
`;

export const FormContainer = styled.View`
    padding: 40px;
`;

export const WelcomeText = styled.Text`
    color: #153A56;
    font-size: 34px;
    font-weight: bold;
`;
export const SubText = styled.Text`
    color: black;
    font-size: 13px;
`;

export const RegisterNowText = styled.Text`
    color: red;
    font-size: 13px;
    font-style: italic;
`;

export const FormViewContainer = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
