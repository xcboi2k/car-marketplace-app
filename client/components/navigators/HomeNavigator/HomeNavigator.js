import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import ProfileViewScreen from '../../screens/ProfileViewScreen/ProfileViewScreen';
import CarPostDetailScreen from '../../screens/CarPostDetailScreen/CarPostDetailScreen';
import CarPostEditScreen from '../../screens/CarPostEditScreen/CarPostEditScreen';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home"
        >
            <HomeStack.Screen
                name="Feed"
                component={FeedScreen}
            />
            <HomeStack.Screen
                name="ProfileView"
                component={ProfileViewScreen}
            />
            <HomeStack.Screen
                name="CarPostDetail"
                component={CarPostDetailScreen}
            />
            <HomeStack.Screen
                name="CarPostEdit"
                component={CarPostEditScreen}
            />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator