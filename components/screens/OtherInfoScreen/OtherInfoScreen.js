import React from 'react'
import CommentInput from '../../shared/CommentInput/CommentInput'
import TextInput from '../../shared/TextInput/TextInput'
import { HeaderHolder, HeaderText, HolderContainer, OtherInfoContainer } from './styles'

const OtherInfoScreen = () => {
    return (
        <OtherInfoContainer>
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
            </HolderContainer>
        </OtherInfoContainer>
    )
}

export default OtherInfoScreen