import React from 'react'

import { ButtonContainer } from './styles'
import Icon from '../../../common/Icon'

const ButtonIcon = ({iconName, onPress, width = "100%", iconSize, buttonColor, borderColor, iconColor}) => {
    return (
        <ButtonContainer
            onPress={onPress}
            width={width}
            buttonColor={buttonColor}
            borderColor={borderColor}
        >
            <Icon name={iconName} color={iconColor} size={iconSize}/>
        </ButtonContainer>
    )
}

export default ButtonIcon