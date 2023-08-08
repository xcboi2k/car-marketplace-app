import React from 'react'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import { ReviewsContainer } from './styles'

const ReviewsScreen = () => {
    return (
        <ReviewsContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}/>
        </ReviewsContainer>
    )
}

export default ReviewsScreen