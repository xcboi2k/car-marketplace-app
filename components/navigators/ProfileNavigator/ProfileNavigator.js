import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileViewScreen from '../../screens/ProfileViewScreen/ProfileViewScreen';
import ProfileEditScreen from '../../screens/ProfileEditScreen/ProfileEditScreen';
import ReviewsScreen from '../../screens/ReviewsScreen/ReviewsScreen';
import ReviewCreateScreen from '../../screens/ReviewCreateScreen/ReviewCreateScreen';
import UserListingScreen from '../../screens/UserListingScreen/UserListingScreen';
import SellerListingScreen from '../../screens/SellerListingScreen/SellerListingScreen';


const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Profile"
        >
            <ProfileStack.Screen
                name="ProfileMain"
                component={ProfileViewScreen}
            />
            <ProfileStack.Screen
                name="ProfileEdit"
                component={ProfileEditScreen}
            />
            <ProfileStack.Screen
                name="UserListing"
                component={UserListingScreen}
            />
            <ProfileStack.Screen
                name="SellerListing"
                component={SellerListingScreen}
            />
            <ProfileStack.Screen
                name="Reviews"
                component={ReviewsScreen}
            />
            <ProfileStack.Screen
                name="ReviewsCreate"
                component={ReviewCreateScreen}
            />
        </ProfileStack.Navigator>
    )
}

export default ProfileNavigator