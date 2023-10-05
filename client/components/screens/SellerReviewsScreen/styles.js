import styled from 'styled-components/native';
import { Container } from '../../../common/Styles';

export const ReviewsContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    width: 100%;
`;

export const RatingContainer = styled.View`
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const RatingText = styled.Text`
    font-size: 20px;
`;

export const OverallRating = styled.Text`
    font-size: 75px;
    font-weight: bold;
    color: #153A56;
`;

export const StarContainer = styled.View`
    flex-direction: row;
`;

export const RatingSubText = styled.Text`
    margin-top: 10px;
    font-size: 18px;
`;

export const ReviewListContainer = styled.View`
    flex: 1;
`;

export const ReviewContainer = styled.View`
    width: 300px;
    border-radius: 8px;
    background-color: #F4F6F8;
    margin-bottom: 15px;
    padding: 16px;
`;

export const ReviewInfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ReviewName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #153A56;
`;

export const ReviewRatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ReviewRating = styled.Text`
    font-size: 13px;
    color: gray;
    margin-left: 5px;
`;

export const ReviewText = styled.Text`
    font-size: 13px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;