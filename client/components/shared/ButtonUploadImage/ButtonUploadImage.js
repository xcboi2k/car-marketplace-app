import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from '../../../common/Icon'
import { ButtonUploadContainer } from './styles'
import { ICON_NAMES } from '../../../constants/constant';

const ButtonUploadImage = ({ onPress, imageUri }) => {
    return (
        <ButtonUploadContainer onPress={onPress} buttonColor="#234791">
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                ) : (
                <Icon name={ICON_NAMES.USER} color="#F4F6F8" size={40}/>
            )}
        </ButtonUploadContainer>  
    )
}

ButtonUploadImage.propTypes = {
    imageUri: PropTypes.object,
    onPress: PropTypes.func,
};

export default ButtonUploadImage