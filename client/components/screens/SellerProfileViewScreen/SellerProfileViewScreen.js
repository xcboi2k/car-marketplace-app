import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { AboutContainer, AboutText, AboutTitle, ButtonContainer, HandleName, HolderContainer, InformationItemContainer, InformationLabel, InformationSection, InformationText, InformationValue, ProfilePicture, ProfileSection, SellerProfileViewContainer, UserBio, UserInfoContainer, UserInformation, UserInformationColumn, UserName, UserNameWrapper } from './styles';

import PicturePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import { ICON_NAMES } from '../../../constants/constant'
import Icon from '../../../common/Icon';

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../shared/ButtonText/ButtonText'

import { fetchSellerReviewsAction } from '../../../redux/actions/reviewActions';
import useCalculateProfileInfo from '../../../hooks/useCalculateProfileInfo';
import { fetchSellerListingsAction } from '../../../redux/actions/listingActions';

const SellerProfileViewScreen = ({ route, navigation }) => {
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

    //initializing seller state
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSellerListingsAction(currentSeller._id));
        dispatch(fetchSellerReviewsAction(currentSeller._id))
    }, [dispatch]);

    //for reloading after making changes in reviews
    const key = route.params?.key || 'defaultKey';
    useEffect(() => {
        dispatch(fetchSellerReviewsAction(currentSeller._id))
    }, [dispatch, key]);

    //navigation
    const goToSellerListings = () => 
        navigation.navigate("Home", {
            screen: "SellerListing",
            params: {
                sellerListingsID: currentSeller._id
            }
    });
    const goToSellerReviews = () => 
        navigation.navigate("Home", {
            screen: "SellerReview",
            params: {
                sellerReviewsID: currentSeller._id
            }
    });

    //for fetching number of listings and average rating
    const sellerListings = useSelector((state) => state.listing.sellerListings)
    const sellerReviews = useSelector((state) => state.review.sellerReviews)
    console.log('seller listings', sellerListings)
    console.log('seller reviews', sellerReviews)
    const { averageRating, numListings } = useCalculateProfileInfo(sellerListings, sellerReviews)

    return (
        <SellerProfileViewContainer>
            <ScreenHeader 
            leftIconName={ICON_NAMES.BACK} 
            rightIconName={ICON_NAMES.SHARE}
            onLeftPress={() => 
                navigation.goBack()}
            />
            <HolderContainer>
                <ProfileSection>
                    <ProfilePicture source={currentSeller.profile_photo ? { uri: currentSeller.profile_photo } : PicturePlaceholder}/>
                    <InformationSection>
                        <InformationValue>{numListings}</InformationValue>
                        <InformationLabel>Listings</InformationLabel>
                    </InformationSection>
                    <InformationSection>
                        <InformationValue>{averageRating}/10</InformationValue>
                        <InformationLabel>Rating</InformationLabel>
                    </InformationSection>
                </ProfileSection>

                <UserInfoContainer>
                    <UserNameWrapper>
                        <UserName>{currentSeller.firstName} {currentSeller.lastName}</UserName>
                    </UserNameWrapper>
                    <UserNameWrapper>
                        <HandleName>@{currentSeller.userName}</HandleName>
                    </UserNameWrapper>
                    <UserBio>{currentSeller.bio}</UserBio>
                </UserInfoContainer>

                <UserInformation>
                    <UserInformationColumn>
                        <InformationItemContainer>
                            <Icon name={ICON_NAMES.SHOP} color="#153A56" size={15} />
                            <InformationText>{currentSeller.shop_name}</InformationText>
                        </InformationItemContainer>
                        <InformationItemContainer>
                            <Icon name={ICON_NAMES.LOCATION} color="#153A56" size={13} />
                            <InformationText>{currentSeller.location}</InformationText>
                        </InformationItemContainer>
                        </UserInformationColumn>
                        <UserInformationColumn>
                        <InformationItemContainer>
                        <Icon name={ICON_NAMES.MAIL} color="#153A56" size={15} />
                            <InformationText>{currentSeller.email}</InformationText>
                        </InformationItemContainer>
                        <InformationItemContainer>
                        <Icon name={ICON_NAMES.PHONE} color="#153A56" size={15} />
                            <InformationText>{currentSeller.phone_number}</InformationText>
                        </InformationItemContainer>
                    </UserInformationColumn>
                </UserInformation>

                <AboutContainer>
                    <AboutTitle>About:</AboutTitle>
                    <AboutText>{currentSeller.about}</AboutText>
                </AboutContainer>

                <ButtonContainer>
                    <ButtonText text='Seller Listings' buttonColor='#234791' textColor='#F4F6F8' 
                    width='45%' textSize='16' onPress={goToSellerListings}/>
                    <ButtonText text='Seller Reviews' buttonColor='#234791' textColor='#F4F6F8' 
                    width='45%' textSize='16' onPress={goToSellerReviews}/>
                </ButtonContainer>
            </HolderContainer>
        </SellerProfileViewContainer>
    )
}

export default SellerProfileViewScreen