import React from 'react'
import { Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

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
    HeaderHolder,
} from './styles'

import AppLogo from '../../../assets/images/logo.png'
import SampleImage from '../../../assets/images/sample-background.jpg'
import TextInput from '../../shared/TextInput/TextInput'
import ButtonText from '../../shared/ButtonText/ButtonText'

import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';
import { loginAction } from '../../../redux/actions/userActions';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoading);

    const initialValues = { email: "", password: "" };

    const handleFormikSubmit = (values, { resetForm }) => {
        try{
            dispatch(showLoader());

            if (values.email === "" || values.password === "") {
                Alert.alert("Incomplete Input", "Please fill up the email and password.");
            } else {
                dispatch(loginAction(values));
                resetForm();
            };
        }
        catch(error){
            dispatch(hideLoader());
            Alert.alert("Error", "There was an error when submitting the information you entered.");
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleFormikSubmit,
    });

    return (
        <LoginContainer>
            <PageContainer>
                <BackgroundImage source={SampleImage}>
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
                        {
                            isLoading ? (
                                <HeaderHolder>
                                    <ActivityIndicator size="large" color="#234791" />
                                    <SubText>Authenticating user ...</SubText>
                                </HeaderHolder>
                            ) : (
                                <ButtonContainer>
                                    <ButtonText text='Sign In' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'
                                    onPress={formik.handleSubmit}/>
                                </ButtonContainer>
                            )
                        }
                    </FormContainer>
                </RoundedTop>
            </PageContainer>
        </LoginContainer>
    )
}

export default LoginScreen