import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { MaterialIcons } from '@expo/vector-icons';

import Icon from '../../../common/Icon'
import { ButtonUploadContainer } from './styles'
import { ICON_NAMES } from '../../../constants/constant';

const ButtonUploadImage = ({ onPress, imageUri, width, height, borderRadius, iconName }) => {
    const imgWidth = parseInt(width, 10);
    const imgHeight = parseInt(height, 10);
    const imgBorderRadius = parseInt(borderRadius, 10);

    return (
        <ButtonUploadContainer onPress={onPress} buttonWidth={width} buttonHeight={height} 
        buttonColor="#234791" buttonBorderRadius={borderRadius}>
            {imageUri ? (
                <Image source={{ uri: imageUri.uri }} style={{ width: imgWidth, height: imgHeight, borderRadius: imgBorderRadius }} />
                ) : (
                    iconName !== 'create' ? (
                        <Icon name={iconName} color="#F4F6F8" size={40}/>
                    ) : (
                        <MaterialIcons name="add-photo-alternate" size={40} color="#F4F6F8" />
                    )
                )}
        </ButtonUploadContainer>  
    )
}

ButtonUploadImage.propTypes = {
    imageUri: PropTypes.object,
    onPress: PropTypes.func,
};

export default ButtonUploadImage