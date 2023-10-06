import React from 'react'
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { ReviewsContainer, RatingContainer, OverallRating, ReviewListContainer, ReviewContainer, ReviewText, ReviewRating, ReviewInfoContainer, ReviewName, ReviewRatingContainer, RatingText, StarContainer, RatingSubText} from './styles'

import { ICON_NAMES } from '../../../constants/constant';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'

import useCalculateReviews from '../../../hooks/useCalculateReviews';

const ReviewsScreen = ({navigation}) => {
    //fetch reviews
    const userReviews = useSelector((state) => state.review.userReviews)
    const { averageRating, numObjects } = useCalculateReviews(userReviews)

    //rendering objects
    const renderReviewItem = ({ item }) => (
        <ReviewContainer>
            <ReviewInfoContainer>
                <ReviewName>{item.user_name}</ReviewName>
                <ReviewRatingContainer>
                    <Ionicons name="md-star" size={13} color="#153A56" />
                    <ReviewRating>{item.rating}/10</ReviewRating>
                </ReviewRatingContainer>
            </ReviewInfoContainer>
            <ReviewText>{item.review_description}</ReviewText>
        </ReviewContainer>
    );

    const renderStars = rating => {
        const starIcons = [];
        for (let i = 1; i <= 10; i++) {
            starIcons.push(
                <Ionicons 
                key={i} 
                name={i <= rating ? 'md-star' : 'md-star-outline'} 
                size={30} 
                color="#FFD700" />
            );
            }
            return starIcons;
        };
    
    return (
        <ReviewsContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}
            onLeftPress={() => 
                navigation.goBack()}
            />
            <RatingContainer>
                <RatingText>My Overall Rating:</RatingText>
                <OverallRating>{averageRating}</OverallRating>
                <StarContainer>{renderStars(averageRating)}</StarContainer>
                <RatingSubText>Based on {numObjects} {numObjects > 1 ? reviews : review}</RatingSubText>
            </RatingContainer>
            <ReviewListContainer>
                {
                    userReviews ? (
                        <FlatList 
                        data={userReviews}
                        renderItem={renderReviewItem}
                        keyExtractor={item => item.id}
                        />
                    ) : (
                        <RatingSubText>There are no reviews available right now.</RatingSubText>
                    )
                }
            </ReviewListContainer>
        </ReviewsContainer>
    )
}

export default ReviewsScreen