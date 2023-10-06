import React, { useState, useEffect } from 'react'
import { Alert, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";

import { BodyText, FormContainer, HeaderHolder, HeaderText, ReviewsEditContainer, SubText } from './styles';

import { ICON_NAMES } from '../../../constants/constant'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import RatingsButton from '../../shared/RatingsButton/RatingsButton';
import CommentInput from '../../shared/CommentInput/CommentInput';
import ButtonText from '../../shared/ButtonText/ButtonText';

import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';
import { deleteReviewAction, updateReviewAction } from '../../../redux/actions/reviewActions';

const ReviewEditScreen = ({ route, navigation }) => {
    //intializing review to be edited
    const { sellerReviewEditID } = route.params;
    const sellerReviews = useSelector((state) => state.review.sellerReviews);
    const [currentReview, setCurrentReview] = useState(() => {
        return sellerReviews.find(item => item._id === sellerReviewEditID);
    });
    useEffect(() => {
        const targetReview = sellerReviews.find(item => item._id === sellerReviewEditID);
        console.log('targetReview', targetReview);
        setCurrentReview(targetReview);
    }, [sellerReviewEditID])

    //initializing redux
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoading);

    //initializing states
    const [mode, setMode] = useState("details");
    const [selectedRating, setSelectedRating] = useState(currentReview.rating);
    const handleSelectRating = rating => {
        setSelectedRating(rating);
    };

    //formik
    const initialValues = {
        review: currentReview.review_description,
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
                    reviewID: sellerReviewEditID,
                };
                console.log(enteredValues);
                dispatch(updateReviewAction(enteredValues));
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

    //handling delete
    const handleDelete = () => {
        dispatch(deleteReviewAction(sellerReviewEditID));
        Alert.alert("Success", "Item Deleted.");

        const newKey = Math.random().toString();
            navigation.navigate("Home", {
                screen: "Feed",
                key: newKey
            });
    };

    const showDeletePrompt = () => {
        Alert.alert("Deleting file", "Are you sure ?", [{
            text: "Yes",
            onPress: handleDelete,
            style: "destructive"
        }, {
            text: "No",
            onPress: () => { },
            style: "cancel"
        }]);
    };

    //conditional rendering in buttons
    const EditButtonGroup = () => (
        <>
            <ButtonText
                text='Save' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                onPress={formik.handleSubmit}
            />
        </>
    );

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
                        placeholder: "Enter your review",
                        onChangeText: formik.handleChange("review"),
                        value: formik.values.review,
                        editable: mode === "edit"
                    }}
                    customLabel="Review:"
                    textSize = '16px'
                />
                {
                    isLoading ? (
                        <HeaderHolder>
                            <ActivityIndicator size="large" color="#234791" />
                            <SubText>Updating information ...</SubText>
                        </HeaderHolder>
                    ) : (
                        <ButtonContainer mode={mode}>
                            {mode === "edit" ? (
                                <EditButtonGroup />
                            ) : (
                                <>
                                    <ButtonText
                                        text='Edit' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                                        onPress={() => setMode("edit")}
                                    />
                                    <ButtonText
                                        text='Delete' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                                        onPress={showDeletePrompt}
                                    />
                                </>
                            )}
                        </ButtonContainer>
                    )
                }
            </FormContainer>
        </ReviewsEditContainer>
        
    )
}

export default ReviewEditScreen