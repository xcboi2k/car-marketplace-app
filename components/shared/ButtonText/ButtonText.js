import React from 'react'

const ButtonText = ({text, onPress, width = "100%", textSize = 20, buttonColor, textColor}) => {
    return (
        <ButtonContainer
            onPress={onPress}
            width={width}
            buttonColor={buttonColor}
        >
            <ButtonLabel
                textSize={textSize}
                textColor={textColor}
            >
                {text}
            </ButtonLabel>
        </ButtonContainer>
    )
}

export default ButtonText