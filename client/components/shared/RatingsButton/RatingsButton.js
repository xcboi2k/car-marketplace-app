import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { StarButtonContainer, StarRatingContainer, TitleText } from './styles';

const RatingsButton = ({ selectedRating, onSelectRating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity
                key={i}
                onPress={() => onSelectRating(i)}
                >
                    <Ionicons 
                    key={i} 
                    name={i <= selectedRating ? 'md-star' : 'md-star-outline'}
                    size={35} 
                    color={i <= selectedRating ? '#FFD700' : 'gray'} 
                    />
                </TouchableOpacity>
            );
            }
            return stars;
        };
    
    return (
        <StarRatingContainer>
            <TitleText>Select your rating:</TitleText>
            <StarButtonContainer>
                {renderStars()}
            </StarButtonContainer>
        </StarRatingContainer>
    )
}

export default RatingsButton