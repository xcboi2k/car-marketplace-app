import React from 'react'
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
} from './styles'
import { ICON_NAMES } from '../../../constants/constant'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../shared/ButtonText/ButtonText'

import PicturePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import Icon from '../../../common/Icon';


const ProfileViewScreen = ({isEdit = true}) => {
    const user = {
        name: 'John Doe',
        bio: 'Car Enthusiast | Automotive Lover',
        business: 'Sakura Motors',
        location: 'New York, USA',
        email: 'johndoe@example.com',
        phone: '+1 234-567-8900',
        currentListings: 10,
        soldListings: 120,
        rating: 4.5,
        about: "Hi, I'm John Doe, a passionate car enthusiast with a love for all things automotive. I have been in the car dealership business for over a decade and take pride in providing top-notch service to my customers. Feel free to reach out to me for any car-related inquiries!",
    };
    
    return (
        <ProfileViewContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK} rightIconName={ICON_NAMES.SHARE}/>
            
            <HolderContainer>
                <ProfileSection>
                    <ProfilePicture source={PicturePlaceholder} />
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
                        <UserName>{user.name}</UserName>
                        { isEdit &&
                            <EditIconWrapper>
                                <Icon name={ICON_NAMES.EDIT} color="#153A56" size={25}/>
                            </EditIconWrapper>
                        }
                    </UserNameWrapper>
                    
                    <UserBio>{user.bio}</UserBio>
                </UserInfoContainer>
                
                <UserInformation>
                <UserInformationColumn>
                    <InformationItemContainer>
                        <Icon name={ICON_NAMES.SHOP} color="#153A56" size={15} />
                        <InformationText>{user.business}</InformationText>
                    </InformationItemContainer>
                    <InformationItemContainer>
                    <Icon name={ICON_NAMES.LOCATION} color="#153A56" size={13} />
                        <InformationText>{user.location}</InformationText>
                    </InformationItemContainer>
                    </UserInformationColumn>
                    <UserInformationColumn>
                    <InformationItemContainer>
                    <Icon name={ICON_NAMES.MAIL} color="#153A56" size={15} />
                        <InformationText>{user.email}</InformationText>
                    </InformationItemContainer>
                    <InformationItemContainer>
                    <Icon name={ICON_NAMES.PHONE} color="#153A56" size={15} />
                        <InformationText>{user.phone}</InformationText>
                    </InformationItemContainer>
                    </UserInformationColumn>
                </UserInformation>

                <AboutContainer>
                    <AboutTitle>About:</AboutTitle>
                    <AboutText>{user.about}</AboutText>
                </AboutContainer>

                <ButtonContainer>
                    <ButtonText text='View Listings' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'/>
                </ButtonContainer>
                <ButtonContainer>
                    <ButtonText text='View Ratings' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'/>
                </ButtonContainer>
            </HolderContainer>
            
        </ProfileViewContainer>
    )
}

export default ProfileViewScreen