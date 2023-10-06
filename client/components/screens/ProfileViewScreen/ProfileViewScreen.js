import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { 
    ProfileViewContainer, 
    HolderContainer,
    ProfileSection,
    ProfilePicture, 
    InformationSection,
    InformationValue,
    InformationLabel,
    UserInfoContainer,
    UserName, 
    UserBio, 
    UserInformation, 
    UserInformationColumn,
    InformationItemContainer,
    InformationText, 
    AboutContainer, 
    AboutTitle, 
    AboutText,
    ButtonContainer,
    UserNameWrapper,
    EditIconWrapper,
    HandleName,
} from './styles'
import { ICON_NAMES } from '../../../constants/constant'
import Icon from '../../../common/Icon';

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../shared/ButtonText/ButtonText'
import ChangePhotoModal from '../../shared/ChangePhotoModal/ChangePhotoModal';

import PicturePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import { fetchUserListingsAction } from '../../../redux/actions/listingActions';
import { fetchUserReviewsAction } from '../../../redux/actions/reviewActions';
import useCalculateProfileInfo from '../../../hooks/useCalculateProfileInfo';

const ProfileViewScreen = ({ route }) => {
    //navigation
    const navigation = useNavigation();
    const goToUserListings = () => {
        navigation.navigate("Profile", {
            screen: "UserListing",}); // Navigate to the profile view screen
    };
    const goToReviews = () => {
        navigation.navigate("Reviews", {
            screen: "ReviewsMain",}); // Navigate to the car details screen
    };

    //handling changephoto modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleOpenChangePhotoModal = () => {
        setIsModalVisible(true);
    };

    //initializing user state
    const userInfo = useSelector(state => state.user);
    const dispatch = useDispatch();

    //initializing user listing state
    useEffect(() => {
        dispatch(fetchUserListingsAction(userInfo.userId));
        dispatch(fetchUserReviewsAction(userInfo.userId))
    }, [dispatch]);

    //for reloading after making changes (edit and delete listing)
    const key = route.params?.key || 'defaultKey';
    useEffect(() => {
        dispatch(fetchUserListingsAction(userInfo.userId));
    }, [dispatch, key]);

    //for fetching number of listings and average rating
    const userListings = useSelector((state) => state.listing.userListings)
    const userReviews = useSelector((state) => state.review.userReviews)
    const { averageRating, numListings } = useCalculateProfileInfo(userListings, userReviews)
    
    return (
        <ProfileViewContainer>
            <ScreenHeader />
            <HolderContainer>
                <ProfileSection>
                    <TouchableOpacity onPress={handleOpenChangePhotoModal}>
                        <ProfilePicture source={userInfo.profile_photo ? { uri: userInfo.profile_photo } : PicturePlaceholder} />
                    </TouchableOpacity>
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
                        <UserName>{userInfo.firstName} {userInfo.lastName}</UserName>
                        <EditIconWrapper 
                            onPress={() => 
                                navigation.navigate("Profile", {
                                    screen: "ProfileEdit"
                            })}
                        >
                            <Icon name={ICON_NAMES.EDIT} color="#153A56" size={25}/>
                        </EditIconWrapper>
                    </UserNameWrapper>
                    <UserNameWrapper>
                        <HandleName>@{userInfo.userName}</HandleName>
                    </UserNameWrapper>
                    <UserBio>{userInfo.bio}</UserBio>
                </UserInfoContainer>
                
                <UserInformation>
                <UserInformationColumn>
                    <InformationItemContainer>
                        <Icon name={ICON_NAMES.SHOP} color="#153A56" size={15} />
                        <InformationText>{userInfo.shop_name}</InformationText>
                    </InformationItemContainer>
                    <InformationItemContainer>
                    <Icon name={ICON_NAMES.LOCATION} color="#153A56" size={13} />
                        <InformationText>{userInfo.location}</InformationText>
                    </InformationItemContainer>
                    </UserInformationColumn>
                    <UserInformationColumn>
                    <InformationItemContainer>
                    <Icon name={ICON_NAMES.MAIL} color="#153A56" size={15} />
                        <InformationText>{userInfo.email}</InformationText>
                    </InformationItemContainer>
                    <InformationItemContainer>
                    <Icon name={ICON_NAMES.PHONE} color="#153A56" size={15} />
                        <InformationText>{userInfo.phone_number}</InformationText>
                    </InformationItemContainer>
                    </UserInformationColumn>
                </UserInformation>

                <AboutContainer>
                    <AboutTitle>About:</AboutTitle>
                    <AboutText>{userInfo.about}</AboutText>
                </AboutContainer>

                <ButtonContainer>
                    <ButtonText text='My Listings' buttonColor='#234791' textColor='#F4F6F8' 
                    width='45%' textSize='16' onPress={goToUserListings}/>
                    <ButtonText text='My Reviews' buttonColor='#234791' textColor='#F4F6F8' 
                    width='45%' textSize='16' onPress={goToReviews}/>
                </ButtonContainer>
            </HolderContainer>
            <ChangePhotoModal targetImage={userInfo.profile_photo ? { uri: userInfo.profile_photo } : null} 
            targetImageRef={userInfo.profile_photo_ref} userID={userInfo.userId} isVisible={isModalVisible} 
            onClose={() => setIsModalVisible(false)}/>
        </ProfileViewContainer>
    )
}

export default ProfileViewScreen