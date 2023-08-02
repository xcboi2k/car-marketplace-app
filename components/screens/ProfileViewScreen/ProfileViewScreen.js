import React from 'react'
import { FlatList } from 'react-native';
import { ProfileViewContainer, ProfilePicture, UserName, UserBio, UserInformation, InformationItem, ListingItem } from './styles'
import { ICON_NAMES } from '../../../constants/constant'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'

import PicturePlacholder from '../../../assets/images/profile-pic-placeholder.png'

const ProfileViewScreen = () => {
    const user = {
        name: 'John Doe',
        profilePicture: 'https://example.com/profile.jpg',
        bio: 'Software Engineer | Avid Traveler',
        age: 30,
        location: 'New York, USA',
        email: 'johndoe@example.com',
        phone: '+1 234-567-8900',
        listings: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
            'Item 5',
            // Add more listings here...
        ],
    };
    
    return (
        <ProfileViewContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK} rightIconName={ICON_NAMES.SHARE}/>
            <ProfilePicture source={PicturePlacholder} />
            <UserName>{user.name}</UserName>
            <UserBio>{user.bio}</UserBio>

            <UserInformation>
                <InformationItem>Age: {user.age}</InformationItem>
                <InformationItem>Location: {user.location}</InformationItem>
                <InformationItem>Email: {user.email}</InformationItem>
                <InformationItem>Phone: {user.phone}</InformationItem>
            </UserInformation>
            
            <UserName>Car Listings</UserName>
            <FlatList
                data={user.listings}
                renderItem={({ item }) => <ListingItem>{item}</ListingItem>}
                keyExtractor={(item, index) => index.toString()}
            />
        </ProfileViewContainer>
    )
}

export default ProfileViewScreen