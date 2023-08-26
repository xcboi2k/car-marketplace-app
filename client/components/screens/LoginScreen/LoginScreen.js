import React from 'react'
import { Dimensions } from 'react-native'
import { useFormik } from "formik";
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

const LoginScreen = ({ navigation }) => {
    const initialValues = { email: "", password: "" };

    const handleFormikSubmit = (values) => {
        if (values.email === "" || values.password === "") {
            Alert.alert("Incomplete Input", "Please fill up the email and password.");
        } else {
            // verifyUser({
            //     email: values.email,
            //     password: values.password
            // });
        };
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleFormikSubmit,
    });

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
                            <TouchableOpacity onPress={() => navigation.push("Register")}>
                                <RegisterNowText>{' '}Register Now</RegisterNowText>
                            </TouchableOpacity>
                        </SubText>
                        <FormViewContainer>
                            <TextInput 
                            inputProps={{
                                placeholder: "Enter Email",
                                onChangeText: formik.handleChange("email"),
                                value: formik.values.email,
                            }}
                            customLabel="Email:"
                            isBottomBorder={true}
                            />
                            <TextInput 
                            inputProps={{
                                placeholder: "Enter Password",
                                onChangeText: formik.handleChange("password"),
                                value: formik.values.password,
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