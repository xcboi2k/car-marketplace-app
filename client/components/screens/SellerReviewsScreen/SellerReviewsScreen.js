import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ButtonContainer, OverallRating, RatingContainer, RatingSubText, ReviewContainer, ReviewInfoContainer, ReviewListContainer, ReviewName, ReviewRating, ReviewRatingContainer, ReviewsContainer, ReviewText, StarContainer } from './styles';

import { ICON_NAMES } from '../../../constants/constant';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../shared/ButtonText/ButtonText';
import { fetchSellerReviewsAction } from '../../../redux/actions/reviewActions';

const reviewsData = [
    { id: '1', name: 'Alice', text: 'Great product! Highly recommended.', rating: 5 },
    { id: '2', name: 'Bob', text: 'Excellent service and fast delivery.', rating: 4 },
    { id: '3', name: 'Charlie', text: 'Very satisfied with the quality.', rating: 4.5 },
    { id: '4', name: 'Alice', text: 'Great product! Highly recommended.', rating: 5 },
    { id: '5', name: 'Bob', text: 'Excellent service and fast delivery.', rating: 4 },
    { id: '6', name: 'Charlie', text: 'Very satisfied with the quality.', rating: 4.5 },
    // Add more reviews as needed
];

const SellerReviewsScreen = ({route, navigation}) => {
    //initializing route parameters needed
    const { sellerReviewsID } = route.params;
    const users = useSelector((state) => state.user.users);
    const [currentSeller, setCurrentSeller] = useState(() => {
        return users.find(item => item._id === sellerReviewsID)
    });

    useEffect(() => {
        const targetSeller = users.find(item => item._id === sellerReviewsID);
        console.log('targetSeller', targetSeller);
        setCurrentSeller(targetSeller);
    }, [sellerReviewsID])

    //fetch reviews
    const sellerReviews = useSelector((state) => state.review.sellerReviews)

    const overallRating = 4.7;

    //navigation
    const handleNavigation = (id) =>
    navigation.navigate("Home", {
    screen: "SellerReviewEdit",
            params: {
                sellerReviewEditID: id
            }
    });

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
            <ButtonContainer>
                <ButtonText text='Edit' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='18'
                onPress={() => {handleNavigation(item._id)}}/>
            </ButtonContainer>
        </ReviewContainer>
    );

    const renderStars = rating => {
        const starIcons = [];
        for (let i = 1; i <= 10; i++) {
            starIcons.push(
                <Ionicons 
                key={i} 
                name={i <= rating ? 'md-star' : 'md-star-outline'} 
                size={35} 
                color="#FFD700" />
            );
            }
            return starIcons;
    };

    return (
        <ReviewsContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK} rightIconName={ICON_NAMES.ADD}
            onLeftPress={() => 
                navigation.goBack()}
            onRightPress={() => 
                navigation.navigate("Home", {
                    screen: "SellerReviewCreate",
                    params: {
                        sellerID: currentSeller._id
                    }
                })}
            />
            <RatingContainer>
                <RatingText>Seller Overall Rating:</RatingText>
                <OverallRating>{overallRating}</OverallRating>
                <StarContainer>{renderStars(overallRating)}</StarContainer>
                <RatingSubText>Based on 6 reviews</RatingSubText>
            </RatingContainer>
            <ReviewListContainer>
                {
                    sellerReviews ? (
                        <FlatList 
                        data={reviewsData}
                        renderItem={renderReviewItem}
                        keyExtractor={item => item.id}
                        />
                    ) : (
                        <RatingSubText>There are no ratings available right now.</RatingSubText>
                    )
                }
            </ReviewListContainer>
        </ReviewsContainer>
    )
}

export default SellerReviewsScreen