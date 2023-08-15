import React from 'react'
import { Text } from "react-native";
import PropTypes from "prop-types";
import Icon from '../../../common/Icon'
import { CustomInputContainer, ImgButton, CustomText } from './styles'
import { ICON_NAMES } from '../../../constants/constant';

const ButtonUploadImage = ({ customLabel, width = "100%", imageUri, onPress, filename }) => {
    return (
        <CustomInputContainer width={width}>
            {customLabel && <CustomText>{customLabel}</CustomText>}
            <ImgButton onPress={onPress}>
            {!imageUri?.uri ? <Icon name={ICON_NAMES.ADD} color='#FFFFFF' size={45} /> : <CustomImage source={{ uri: imageUri.uri }} />}
            </ImgButton>
            {!filename ? <Text>No File Chosen</Text> : <Text>{filename}</Text>}
        </CustomInputContainer>
    )
}

ButtonUploadImage.propTypes = {
    customLabel: PropTypes.string,
    width: PropTypes.string,
    imageUri: PropTypes.object,
    onPress: PropTypes.func,
    filename: PropTypes.string
};

export default ButtonUploadImage