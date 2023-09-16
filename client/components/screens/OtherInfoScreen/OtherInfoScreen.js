import React from 'react'
import { Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";

import { ButtonContainer, HeaderHolder, HeaderText, HolderContainer, Logo, LogoHolder, OtherInfoContainer, SubText } from './styles'

import AppLogo from '../../../assets/images/logo.png'
import CommentInput from '../../shared/CommentInput/CommentInput'
import TextInput from '../../shared/TextInput/TextInput'
import ButtonText from '../../shared/ButtonText/ButtonText'

import { otherInfoAction } from '../../../redux/actions/userActions';
import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';

const OtherInfoScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user);
    const isLoading = useSelector((state) => state.loader.isLoading);

    const initialValues = {
        shopName: "",
        location: "",
        phoneNumber: "",
        bio: "",
        about: "",
    };

    const handleFormikSubmit = async(values, { resetForm }) => {
        try{
            dispatch(showLoader());
            console.log('Checking values: ', values);

            if (values.location === "" || values.phoneNumber === "") {
                Alert.alert("Incomplete Input", "Please fill up your location and phone number.");
            } else {
                const enteredValues = {
                    shopName: values.shopName ? values.shopName : "No physical store", 
                    location: values.location,
                    phoneNumber: values.phoneNumber,
                    bio: values.bio ? values.bio : "",
                    about: values.about ? values.about : "No information about the user/seller.",
                    id: userInfo.userId
                };
                console.log(enteredValues);
                dispatch(otherInfoAction(enteredValues));
                resetForm();
            }
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
        <OtherInfoContainer>
            <LogoHolder>
                <Logo source={AppLogo}/>
            </LogoHolder>
            <HeaderHolder>
                <HeaderText>We want to know more about you</HeaderText>
            </HeaderHolder>
            <HolderContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "Enter your shop name",
                        onChangeText: formik.handleChange("shopName"),
                        value: formik.values.shopName,
                    }}
                    customLabel="Shop Name:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter your location (City/Town, State/Municipality)",
                        onChangeText: formik.handleChange("location"),
                        value: formik.values.location,
                    }}
                    customLabel="Location:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter phone number",
                        onChangeText: formik.handleChange("phoneNumber"),
                        value: formik.values.phoneNumber,
                    }}
                    customLabel="Phone:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Are you a car enthusiast or a seller?",
                        onChangeText: formik.handleChange("bio"),
                        value: formik.values.bio,
                    }}
                    customLabel="Bio:"
                    labelTextSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Make a short description about yourself",
                        onChangeText: formik.handleChange("about"),
                        value: formik.values.about,
                    }}
                    customLabel="About:"
                    textSize = '16px'
                />
                {
                    isLoading ? (
                        <HeaderHolder>
                            <ActivityIndicator size="large" color="#234791" />
                            <SubText>Adding information ...</SubText>
                        </HeaderHolder>
                    ) : (
                        <ButtonContainer>
                            <ButtonText text='Sign Up' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'
                            onPress={formik.handleSubmit}/>
                        </ButtonContainer>
                    )
                }
            </HolderContainer>
        </OtherInfoContainer>
    )
}

export default OtherInfoScreen