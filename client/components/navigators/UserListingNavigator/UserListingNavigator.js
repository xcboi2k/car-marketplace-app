import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserListingScreen from '../../screens/UserListingScreen/UserListingScreen';
import CarPostDetailScreen from '../../screens/CarPostDetailScreen/CarPostDetailScreen';
import CarPostEditScreen from '../../screens/CarPostEditScreen/CarPostEditScreen';

const UserListingStack = createNativeStackNavigator();

const UserListingNavigator = () => {
    return (
        <UserListingStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="UserListing"
        >
            <UserListingStack.Screen
                name="UserListingMain"
                component={UserListingScreen}
            />
            <UserListingStack.Screen
                name="CarPostDetails"
                component={CarPostDetailScreen}
            />
            <UserListingStack.Screen
                name="CarPostEdit"
                component={CarPostEditScreen}
            />
        </UserListingStack.Navigator>
    )
}

export default UserListingNavigator