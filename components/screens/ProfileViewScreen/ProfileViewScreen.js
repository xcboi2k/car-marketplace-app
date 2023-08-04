import React from 'react'
import { FlatList } from 'react-native';
import { 
    ProfileViewContainer, 
    HolderContainer,
    ProfileSection,
    ProfilePicture, 
    UserName, 
    UserBio, 
    UserInformation, 
    UserInformationColumn,
    InformationItemContainer,
    InformationText, 
    ListingsSection, 
    ListingsHeader, 
} from './styles'
import { ICON_NAMES } from '../../../constants/constant'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'

import PicturePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import UserListingsCard from '../../shared/UserListingsCard/UserListingsCard';
import Icon from '../../../common/Icon';

const carListings = [
    {
        id: '1',
        price: 1250000,
        name: '2021 Toyota Camry',
    },
    {
        id: '2',
        price: 1500000,
        name: '2022 Ford Mustang GT',
    },
]

const ProfileViewScreen = () => {
    const user = {
        name: 'John Doe',
        bio: 'Car Enthusiast | Automotive Lover',
        business: 'Sakura Motors',
        location: 'New York, USA',
        email: 'johndoe@example.com',
        phone: '+1 234-567-8900',
    };
    
    return (
        <ProfileViewContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK} rightIconName={ICON_NAMES.SHARE}/>
            <HolderContainer>
                <ProfileSection>
                    <ProfilePicture source={PicturePlaceholder} />
                    <UserName>{user.name}</UserName>
                    <UserBio>{user.bio}</UserBio>
                </ProfileSection>
                
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
            </HolderContainer>
            {/* <ListingsSection>
                    <ListingsHeader>Listings:</ListingsHeader>
                    <FlatList
                    data={carListings}
                    renderItem={({ item }) => (
                        <UserListingsCard price={item.price} name={item.name}/>
                    )}
                    keyExtractor={(item) => item.id}
                    />
                </ListingsSection> */}
        </ProfileViewContainer>
    )
}

export default ProfileViewScreen