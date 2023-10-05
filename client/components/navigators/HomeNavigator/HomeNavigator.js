import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import CarPostDetailScreen from '../../screens/CarPostDetailScreen/CarPostDetailScreen';
import SellerListingScreen from '../../screens/SellerListingScreen/SellerListingScreen';
import SellerProfileViewScreen from '../../screens/SellerProfileViewScreen/SellerProfileViewScreen';
import SellerReviewsScreen from '../../screens/SellerReviewsScreen/SellerReviewsScreen';
import ReviewCreateScreen from '../../screens/ReviewCreateScreen/ReviewCreateScreen';
import ReviewEditScreen from '../../screens/ReviewEditScreen/ReviewEditScreen';

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
                initialParams={{ key: Math.random().toString() }}
            />
            <HomeStack.Screen
                name="SellerListing"
                component={SellerListingScreen}
            />
            <HomeStack.Screen
                name="SellerReview"
                component={SellerReviewsScreen}
            />
            <HomeStack.Screen
                name="SellerReviewCreate"
                component={ReviewCreateScreen}
            />
            <HomeStack.Screen
                name="SellerReviewEdit"
                component={ReviewEditScreen}
            />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator