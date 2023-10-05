import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { AboutContainer, AboutText, AboutTitle, ButtonContainer, HandleName, HolderContainer, InformationItemContainer, InformationLabel, InformationSection, InformationText, InformationValue, ProfilePicture, ProfileSection, SellerProfileViewContainer, UserBio, UserInfoContainer, UserInformation, UserInformationColumn, UserName, UserNameWrapper } from './styles';

import PicturePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import { ICON_NAMES } from '../../../constants/constant'
import Icon from '../../../common/Icon';

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../shared/ButtonText/ButtonText'

import useFetchSellerListings from '../../../hooks/useFetchSellerListings';

const SellerProfileViewScreen = ({ route, navigation }) => {
    const { sellerID } = route.params;
    console.log(sellerID)
    useFetchSellerListings(sellerID)
    const users = useSelector((state) => state.user.users);
    const [currentSeller, setCurrentSeller] = useState(() => {
        return users.find(item => item._id === sellerID)
    });

    useEffect(() => {
        const targetSeller = users.find(item => item._id === sellerID);
        console.log('targetSeller', targetSeller);
        setCurrentSeller(targetSeller);
    }, [sellerID])

    const goToSellerListings = () => 
        navigation.navigate("Home", {
            screen: "SellerListing",
            params: {
                sellerListingsID: currentSeller._id
            }
    });

    const goToReviews = () => {
        navigation.navigate("Home", {
            screen: "SellerReview",}); // Navigate to the car details screen
    };

    const user = {
        currentListings: 10,
        soldListings: 120,
        rating: 4.5,
    };

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
                        <InformationValue>{user.currentListings}</InformationValue>
                        <InformationLabel>For Sale</InformationLabel>
                    </InformationSection>
                    <InformationSection>
                        <InformationValue>{user.soldListings}</InformationValue>
                        <InformationLabel>Sold</InformationLabel>
                    </InformationSection>
                    <InformationSection>
                        <InformationValue>{user.rating}</InformationValue>
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
                    width='45%' textSize='16' onPress={goToReviews}/>
                </ButtonContainer>
            </HolderContainer>
        </SellerProfileViewContainer>
    )
}

export default SellerProfileViewScreen