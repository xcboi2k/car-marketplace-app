import React, { useState, useEffect } from 'react'
import { Alert, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";

import { BodyText, ButtonContainer, FormContainer, HeaderHolder, HeaderText, ReviewsCreateContainer, SubText } from './styles'

import { ICON_NAMES } from '../../../constants/constant'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import RatingsButton from '../../shared/RatingsButton/RatingsButton';
import CommentInput from '../../shared/CommentInput/CommentInput';
import ButtonText from '../../shared/ButtonText/ButtonText';

import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';
import { addReviewAction } from '../../../redux/actions/reviewActions';

const ReviewCreateScreen = ({ route, navigation }) => {
    //initializing route parameters needed
    const { sellerID } = route.params;
    const users = useSelector((state) => state.user.users);
    const [currentSeller, setCurrentSeller] = useState(() => {
        return users.find(item => item._id === sellerID)
    });

    useEffect(() => {
        const targetSeller = users.find(item => item._id === sellerID);
        console.log('targetSeller', targetSeller);
        setCurrentSeller(targetSeller);
    }, [sellerID])

    //handling rating
    const [selectedRating, setSelectedRating] = useState(0);
    const handleSelectRating = rating => {
        setSelectedRating(rating);
    };

    //redux
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoading);
    const userInfo = useSelector(state => state.user);

    //formik
    const initialValues = {
        review: "",
    };

    const handleFormikSubmit = async(values, { resetForm }) => {
        try{
            dispatch(showLoader());
            console.log('Checking values: ', values);

            if (!selectedRating || values.review === "") {
                Alert.alert("Incomplete Input", "Please fill up rating and review");
            } else {
                const enteredValues = {
                    rating: selectedRating,
                    reviewDescription: values.review,
                    ratedSellerID: currentSeller._id,
                    createdAt: Date(),
                    userID: userInfo.userId,
                    userName: userInfo.firstName + " " + userInfo.lastName,
                };
                console.log(enteredValues);
                dispatch(addReviewAction(enteredValues));
                resetForm();

                const newKey = Math.random().toString();
                navigation.navigate("Home", {
                    screen: "Feed",
                    key: newKey
                })
            }
        }
        catch(error){
            dispatch(hideLoader());
            Alert.alert("Error", "There was an error when submitting the information you entered.");
        }
        
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleFormikSubmit,
    });

    return (
        <ReviewsCreateContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}
            onLeftPress={() => 
                navigation.goBack()}
            />
            <HeaderHolder>
                <HeaderText>Create Review</HeaderText>
            </HeaderHolder>
            <FormContainer>
                <RatingsButton selectedRating={selectedRating} onSelectRating={handleSelectRating}/>
                {selectedRating > 1 ?  <BodyText>The rating you selected is {selectedRating} stars.</BodyText>
                : <BodyText>The rating you selected is {selectedRating} star.</BodyText>
                }
                <CommentInput 
                    inputProps={{
                        placeholder: "Enter your review",
                        onChangeText: formik.handleChange("review"),
                        value: formik.values.review,
                    }}
                    customLabel="Review:"
                    textSize = '16px'
                />
                {
                    isLoading ? (
                        <HeaderHolder>
                            <ActivityIndicator size="large" color="#234791" />
                            <SubText>Adding information ...</SubText>
                        </HeaderHolder>
                    ) : (
                        <ButtonContainer>
                            <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='18'
                            onPress={formik.handleSubmit}/>
                        </ButtonContainer>
                    )
                }
            </FormContainer>
        </ReviewsCreateContainer>
    )
}

export default ReviewCreateScreen