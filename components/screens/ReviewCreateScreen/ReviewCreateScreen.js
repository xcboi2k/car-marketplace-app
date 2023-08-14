import React, { useState } from 'react'

import { BodyText, ButtonContainer, FormContainer, HeaderHolder, HeaderText, ReviewsCreateContainer } from './styles'

import { ICON_NAMES } from '../../../constants/constant'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import RatingsButton from '../../shared/RatingsButton/RatingsButton';
import CommentInput from '../../shared/CommentInput/CommentInput';
import ButtonText from '../../shared/ButtonText/ButtonText';

const ReviewCreateScreen = () => {
    const [selectedRating, setSelectedRating] = useState(0);

    const handleSelectRating = rating => {
        setSelectedRating(rating);
    };

    return (
        <ReviewsCreateContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}/>
            <HeaderHolder>
                <HeaderText>Add Rating</HeaderText>
            </HeaderHolder>
            <FormContainer>
                <RatingsButton selectedRating={selectedRating} onSelectRating={handleSelectRating}/>
                {selectedRating > 1 ?  <BodyText>The rating you selected is {selectedRating} stars.</BodyText>
                : <BodyText>The rating you selected is {selectedRating} star.</BodyText>
                }
                <CommentInput 
                    inputProps={{
                        placeholder: "Enter a comment",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Comments:"
                    textSize = '16px'
                />
                <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'/>
            </FormContainer>
            
        </ReviewsCreateContainer>
    )
}

export default ReviewCreateScreen