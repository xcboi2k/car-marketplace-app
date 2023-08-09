import React from 'react'
import { CustomInputContainer, CustomText, Input, InputContainer } from './styles'

const CommentInput = ({ customLabel, inputProps, width = "100%", textSize='20px' }) => {
    return (
        <CustomInputContainer width={width}>
            { customLabel && <CustomText textSize={textSize}>{customLabel}</CustomText>}
            <InputContainer>
                <Input {...inputProps} multiline={true} textAlignVertical="top" />
            </InputContainer>
        </CustomInputContainer>
    )
}

export default CommentInput