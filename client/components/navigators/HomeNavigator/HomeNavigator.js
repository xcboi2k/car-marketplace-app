import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import ProfileViewScreen from '../../screens/ProfileViewScreen/ProfileViewScreen';
import CarPostDetailScreen from '../../screens/CarPostDetailScreen/CarPostDetailScreen';
import SellerListingScreen from '../../screens/SellerListingScreen/SellerListingScreen';
import SellerProfileViewScreen from '../../screens/SellerProfileViewScreen/SellerProfileViewScreen';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="HomeMain"
        >
            <HomeStack.Screen
                name="Feed"
                component={FeedScreen}
                initialParams={{ key: Math.random().toString() }}
            />
            <HomeStack.Screen
                name="CarPostDetail"
                component={CarPostDetailScreen}
            />
            <HomeStack.Screen
                name="SellerProfile"
                component={SellerProfileViewScreen}
            />
            <HomeStack.Screen
                name="SellerListing"
                component={SellerListingScreen}
            />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator