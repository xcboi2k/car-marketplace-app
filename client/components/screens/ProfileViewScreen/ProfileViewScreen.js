import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
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

const ProfileViewScreen = () => {
    const navigation = useNavigation();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenChangePhotoModal = () => {
        setIsModalVisible(true);
    };

    const goToUserListings = () => {
        navigation.navigate("Profile", {
            screen: "UserListing",}); // Navigate to the profile view screen
    };

    const goToSellerListings = () => {
        navigation.navigate("Profile", {
            screen: "SellerListing",}); // Navigate to the profile view screen
    };

    const goToReviews = () => {
        navigation.navigate("Reviews", {
            screen: "ReviewsMain",}); // Navigate to the car details screen
    };

    const userInfo = useSelector(state => state.user);
    console.log(userInfo);

    const user = {
        currentListings: 10,
        soldListings: 120,
        rating: 4.5,
    };
    
    return (
        <ProfileViewContainer>
            <ScreenHeader 
            leftIconName={ICON_NAMES.BACK} 
            rightIconName={ICON_NAMES.SHARE}
            onLeftPress={() => 
                navigation.navigate("Home", {
                    screen: "Feed"
                })}
            />
            <HolderContainer>
                <ProfileSection>
                    <TouchableOpacity onPress={handleOpenChangePhotoModal}>
                        <ProfilePicture source={userInfo.profile_photo ? { uri: userInfo.profile_photo } : PicturePlaceholder} />
                    </TouchableOpacity>
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
                    <ButtonText text='Listings' buttonColor='#234791' textColor='#F4F6F8' 
                    width='45%' textSize='16' onPress={isCurrentUser === true ? goToUserListings : goToSellerListings}/>
                    <ButtonText text='Reviews' buttonColor='#234791' textColor='#F4F6F8' 
                    width='45%' textSize='16'onPress={isCurrentUser && goToReviews}/>
                </ButtonContainer>
                <ButtonContainer>
                    
                </ButtonContainer>
            </HolderContainer>
            <ChangePhotoModal targetImage={userInfo.profile_photo ? { uri: userInfo.profile_photo } : null} 
            targetImageRef={userInfo.profile_photo_ref} userID={userInfo.userId} isVisible={isModalVisible} 
            onClose={() => setIsModalVisible(false)}/>
        </ProfileViewContainer>
    )
}

export default ProfileViewScreen