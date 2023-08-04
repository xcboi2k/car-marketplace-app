import React from 'react'
import PropTypes from "prop-types";

import {CustomInputContainer, InputContainer, Input, CustomText} from './styles'

const TextInput = ({
    customLabel,
    iconName,
    inputProps,
    width = "100%",
    isBottomBorder = false
}) => {
    return (
        <CustomInputContainer width={width}>
            {customLabel && <CustomText>{customLabel}</CustomText>}
            <InputContainer iconName={iconName} isBottomBorder={isBottomBorder}>
                <Input {...inputProps} />
                {iconName && (
                    <Icon
                        name={iconName}
                        color={colors.primary.colorFive}
                        size={24}
                    />
                )}
            </InputContainer>
        </CustomInputContainer>
    )
}

TextInput.propTypes = {
    customLabel: PropTypes.string,
    width: PropTypes.string,
    inputProps: PropTypes.object,
};

export default TextInput