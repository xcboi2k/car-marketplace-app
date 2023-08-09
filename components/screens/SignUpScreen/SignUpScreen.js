import React from 'react'
import ButtonText from '../../shared/ButtonText/ButtonText'
import TextInput from '../../shared/TextInput/TextInput'
import { ButtonContainer, HeaderHolder, HeaderText, HolderContainer, SignInText, SignUpContainer, SubText } from './styles'

const SignUpScreen = () => {
    return (
        <SignUpContainer>
            <HeaderHolder>
                <HeaderText>Get Started</HeaderText>
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