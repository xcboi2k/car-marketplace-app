import React, { useState } from 'react'

import { ICON_NAMES } from '../../../constants/constant'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import RatingsButton from '../../shared/RatingsButton/RatingsButton';
import CommentInput from '../../shared/CommentInput/CommentInput';
import ButtonText from '../../shared/ButtonText/ButtonText';
import { FormContainer, HeaderHolder, HeaderText, ReviewsEditContainer } from './styles';

const ReviewEditScreen = ({ navigation }) => {
    const [selectedRating, setSelectedRating] = useState(0);

    const handleSelectRating = rating => {
        setSelectedRating(rating);
    };

    return (
        <ReviewsEditContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}
                onLeftPress={() => 
                    navigation.goBack()}
            />
            <HeaderHolder>
                <HeaderText>Edit Rating</HeaderText>
            </HeaderHolder>
            <FormContainer>
                <RatingsButton selectedRating={selectedRating} onSelectRating={handleSelectRating}/>
                {selectedRating > 1 ?  <BodyText>The rating you selected is {selectedRating} stars.</BodyText>
                : <BodyText>The rating you selected is {selectedRating} star.</BodyText>}
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
        </ReviewsEditContainer>
        
    )
}

export default ReviewEditScreen