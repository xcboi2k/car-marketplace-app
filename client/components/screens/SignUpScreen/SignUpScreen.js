import React, { useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';

import { ButtonContainer, FormContainer, HeaderHolder, HeaderText, HolderContainer, Logo, LogoHolder, SignInText, SignUpContainer, SubText } from './styles'

import AppLogo from '../../../assets/images/logo.png'
import ButtonText from '../../shared/ButtonText/ButtonText'
import TextInput from '../../shared/TextInput/TextInput'
import ButtonUploadImage from '../../shared/ButtonUploadImage/ButtonUploadImage';

import { signupAction } from '../../../redux/actions/userActions';

import useUploadImage from '../../../hooks/useUploadImage';

const SignUpScreen = ({ navigation }) => {
    let photoId = uuid.v4();
    const dispatch = useDispatch();
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [profilePhoto, setProfilePhoto] = useState('');
    const [image, chooseImage, uploadImage, filename] = useUploadImage(photoId, "users/");
    
    const initialValues = {
        // name: firstName + " " + lastName,
        userName: "",
        email: "",
        password: "",
    };

    const handleFormikSubmit = async(values, { resetForm }) => {
        console.log('Checking values: ', values);
        let imgFile;

        if (image) {
            imgFile = await uploadImage();
        }

        if (values.userName === "" || values.email === "" || values.password === "") {
            Alert.alert("Incomplete Input", "Please fill up your first name, last name, email and password");
        } else {
            console.log('Checking image: ', imgFile);
            // dispatch(signupAction({
            //     userName: values.userName,
            //     email: values.email,
            //     password: values.password,
            //     profilePhoto: imgFile ? imgFile.imgUri : ""
            // }));
            resetForm();
            // setProfilePhoto('')
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
            <FormContainer>
            <ButtonUploadImage onPress={chooseImage} imageUri={image}/>
            <SubText>Upload Image</SubText>
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
                {/* <TextInput 
                    inputProps={{
                        placeholder: "Enter First Name",
                        onChangeText: formik.handleChange(setFirstName()),
                        value: firstName,
                    }}
                    customLabel="First Name:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Last Name",
                        onChangeText: formik.handleChange(setLastName()),
                        value: lastName,
                    }}
                    customLabel="Last Name:"
                    labelTextSize = '16px'
                /> */}
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
                    <ButtonText text='Sign Up' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'
                    onPress={formik.handleSubmit}/>
                </ButtonContainer>
                <SubText>
                    Already have an account?
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SignInText>{' '}Sign In</SignInText>
                    </TouchableOpacity>
                </SubText>
            </HolderContainer>
            </FormContainer>
        </SignUpContainer>
    )
}

export default SignUpScreen