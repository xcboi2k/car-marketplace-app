import React from 'react'
import { Dimensions } from 'react-native'
import { 
    
    LoginContainer,
    PageContainer,
    BackgroundImage, 
    Logo, 
    LogoContainer, 
    RoundedTop,
    FormContainer,
    WelcomeText,
    SubText,
    RegisterNowText,
    FormViewContainer,
    ButtonContainer,
} from './styles'

import AppLogo from '../../../assets/images/logo.png'
import SampleImage from '../../../assets/images/sample-background.jpg'
import TextInput from '../../shared/TextInput/TextInput'
import ButtonText from '../../shared/ButtonText/ButtonText'

const LoginScreen = () => {
    return (
        <LoginContainer>
            <PageContainer>
                <BackgroundImage height={Dimensions.get('window').height / 2.5} source={SampleImage}>
                    <LogoContainer>
                        <Logo source={AppLogo}/>
                    </LogoContainer>
                </BackgroundImage>
                <RoundedTop>
                    <FormContainer>
                        <WelcomeText>Welcome!</WelcomeText>
                        <SubText>
                            Don't have an account?
                            <RegisterNowText>{' '}Register Now</RegisterNowText>
                        </SubText>
                        <FormViewContainer>
                            <TextInput 
                            inputProps={{
                                placeholder: "Enter Email",
                                // onChangeText: formik.handleChange("wishlistName"),
                                // value: formik.values.wishlistName,
                            }}
                            customLabel="Email:"
                            isBottomBorder={true}
                            />
                            <TextInput 
                            inputProps={{
                                placeholder: "Enter Password",
                                // onChangeText: formik.handleChange("wishlistName"),
                                // value: formik.values.wishlistName,
                            }}
                            customLabel="Password:"
                            isBottomBorder={true}
                            />
                            <RegisterNowText>{' '}Forgot Password?</RegisterNowText>
                        </FormViewContainer>
                        <ButtonContainer>
                            <ButtonText text='Sign In' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'/>
                        </ButtonContainer>
                    </FormContainer>
                </RoundedTop>
            </PageContainer>
        </LoginContainer>
    )
}

export default LoginScreen