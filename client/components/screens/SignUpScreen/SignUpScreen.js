import React from 'react'
import { useFormik } from "formik";
import uuid from "react-native-uuid";

import { ButtonContainer, HeaderHolder, HeaderText, HolderContainer, Logo, LogoHolder, SignInText, SignUpContainer, SubText } from './styles'

import AppLogo from '../../../assets/images/logo.png'
import ButtonText from '../../shared/ButtonText/ButtonText'
import TextInput from '../../shared/TextInput/TextInput'

const SignUpScreen = () => {
    const initialValues = {
        userName: "",
        email: "",
        password: "",
    };

    const handleFormikSubmit = async (values, { resetForm }) => {
        console.log(values);
        if (values.firstName === "" || values.lastName === "" || values.email === "" || values.password === "") {
            Alert.alert("Incomplete Input", "Please fill up your first name, last name, email and password");
        } else {
            // let imgFile;
            // if (image) {
            //     imgFile = await uploadImage();
            // }
            // addUser({
            //     firstName: values.firstName,
            //     lastName: values.lastName,
            //     email: values.email,
            //     password: values.password,
            //     profile_img_ref: imgFile ? imgFile.imgRef : "",
            //     profile_img: imgFile ? imgFile.imgUri : "",
            // });
            resetForm();
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleFormikSubmit,
    });

    return (
        <SignUpContainer>
            <LogoHolder>
                <Logo source={AppLogo}/>
            </LogoHolder>
            <HeaderHolder>
                <HeaderText>Get Started</HeaderText>
            </HeaderHolder>
            <HolderContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Username",
                        onChangeText: formik.handleChange("userName"),
                        value: formik.values.userName,
                    }}
                    customLabel="Username:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Email Address",
                        onChangeText: formik.handleChange("email"),
                        value: formik.values.email,
                    }}
                    customLabel="Email Address:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Password",
                        onChangeText: formik.handleChange("password"),
                        value: formik.values.password,
                    }}
                    customLabel="Password:"
                    labelTextSize = '16px'
                />
                <ButtonContainer>
                    <ButtonText text='Sign Up' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'/>
                </ButtonContainer>
                <SubText>
                    Already have an account?
                    <SignInText>{' '}Sign In</SignInText>
                </SubText>
            </HolderContainer>
        </SignUpContainer>
    )
}

export default SignUpScreen