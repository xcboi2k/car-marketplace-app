import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";

import { ProfileEditContainer, HeaderHolder, HeaderText, HolderContainer, ButtonContainer, SubText } from './styles'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import { ICON_NAMES } from '../../../constants/constant'
import ButtonText from '../../shared/ButtonText/ButtonText'
import CommentInput from '../../shared/CommentInput/CommentInput'
import TextInput from '../../shared/TextInput/TextInput'

import { updateInfoAction } from '../../../redux/actions/userActions';
import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';

const ProfileEditScreen = ({ navigation }) => {
    const [mode, setMode] = useState("details");

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoading);
    const userInfo = useSelector(state => state.user);
    console.log(userInfo);

    const initialValues = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        userName: userInfo.userName,
        email: userInfo.email,
        // password: ,
        shopName: userInfo.shop_name,
        location: userInfo.location,
        phoneNumber: userInfo.phone_number,
        bio: userInfo.bio,
        about: userInfo.about,
    };

    const handleFormikSubmit = async(values, { resetForm }) => {
        try{
            dispatch(showLoader());
            console.log('Checking values: ', values);

            const enteredValues = {
                firstName: values.firstName, 
                lastName: values.lastName,
                userName: values.userName,
                email: values.email,
                shopName: values.shopName ? values.shopName : "No physical store", 
                location: values.location,
                phoneNumber: values.phoneNumber,
                bio: values.bio ? values.bio : "",
                about: values.about ? values.about : "No information about the user/seller.",
                id: userInfo.userId
            };
            console.log(enteredValues);
            dispatch(updateInfoAction(enteredValues));
            resetForm();
            navigation.navigate("Profile", {
                screen: "ProfileMain"
            })
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

    const EditButtonGroup = () => (
        <>
            <ButtonText
                text='Save' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
            />
        </>
    );

    return (
        <ProfileEditContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}
            onLeftPress={() => 
                navigation.navigate("Profile", {
                    screen: "ProfileMain"
                })}
            />
            <HeaderHolder>
                <HeaderText>Edit Profile</HeaderText>
            </HeaderHolder>
            <HolderContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "Enter First Name",
                        onChangeText: formik.handleChange("firstName"),
                        value: formik.values.firstName,
                        editable: mode === "edit"
                    }}
                    customLabel="First Name:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Last Name",
                        onChangeText: formik.handleChange("lastName"),
                        value: formik.values.lastName,
                        editable: mode === "edit"
                    }}
                    customLabel="Last Name:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Username",
                        onChangeText: formik.handleChange("userName"),
                        value: formik.values.userName,
                        editable: mode === "edit"
                    }}
                    customLabel="Username:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Email Address",
                        onChangeText: formik.handleChange("email"),
                        value: formik.values.email,
                        editable: mode === "edit"
                    }}
                    customLabel="Email Address:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter your shop name",
                        onChangeText: formik.handleChange("shopName"),
                        value: formik.values.shopName,
                        editable: mode === "edit"
                    }}
                    customLabel="Shop Name:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter your location (City/Town, State/Municipality)",
                        onChangeText: formik.handleChange("location"),
                        value: formik.values.location,
                        editable: mode === "edit"
                    }}
                    customLabel="Location:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter phone number",
                        onChangeText: formik.handleChange("phoneNumber"),
                        value: formik.values.phoneNumber,
                        editable: mode === "edit"
                    }}
                    customLabel="Phone:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Are you a car enthusiast or a seller?",
                        onChangeText: formik.handleChange("bio"),
                        value: formik.values.bio,
                        editable: mode === "edit"
                    }}
                    customLabel="Bio:"
                    labelTextSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Make a short description about yourself",
                        onChangeText: formik.handleChange("about"),
                        value: formik.values.about,
                        editable: mode === "edit"
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
                        <ButtonContainer mode={mode}>
                            {mode === "edit" ? (
                                <EditButtonGroup />
                            ) : (
                                <ButtonText
                                    text='Edit' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                                    onPress={() => setMode("edit")}
                                />
                            )}
                        </ButtonContainer>
                    )
                }
            </HolderContainer>
        </ProfileEditContainer>
    )
}

export default ProfileEditScreen