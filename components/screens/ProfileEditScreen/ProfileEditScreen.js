import React, { useState } from 'react'

import { ProfileEditContainer, HeaderHolder, HeaderText, HolderContainer, ButtonContainer } from './styles'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import { ICON_NAMES } from '../../../constants/constant'
import ButtonText from '../../shared/ButtonText/ButtonText'
import CommentInput from '../../shared/CommentInput/CommentInput'
import TextInput from '../../shared/TextInput/TextInput'


const ProfileEditScreen = ({ navigation }) => {
    const [mode, setMode] = useState("details");

    const EditButtonGroup = () => (
        <>
            <ButtonText
                text='Save' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
            />
            <ButtonText
                text='Delete' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
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
                        placeholder: "Enter Username",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Username:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Email Address",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Email Address:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Password",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Password:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter your shop name",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Shop Name:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter your location",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Location:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Enter phone number",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Phone:"
                    labelTextSize = '16px'
                />
                <TextInput 
                    inputProps={{
                        placeholder: "Make a short bio about yourself",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Bio:"
                    labelTextSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Make a short description about yourself",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="About:"
                    textSize = '16px'
                />
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
            </HolderContainer>
        </ProfileEditContainer>
    )
}

export default ProfileEditScreen