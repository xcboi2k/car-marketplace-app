import React from 'react'

import { ButtonContainer, HeaderHolder, HeaderText, HolderContainer, Logo, LogoHolder, OtherInfoContainer } from './styles'

import AppLogo from '../../../assets/images/logo.png'
import CommentInput from '../../shared/CommentInput/CommentInput'
import TextInput from '../../shared/TextInput/TextInput'
import ButtonText from '../../shared/ButtonText/ButtonText'

const OtherInfoScreen = () => {
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
                <ButtonContainer>
                    <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'/>
                </ButtonContainer>
            </HolderContainer>
        </OtherInfoContainer>
    )
}

export default OtherInfoScreen