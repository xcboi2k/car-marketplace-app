import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from '../navigators/TabNavigator/TabNavigator';

import CarPostDetailScreen from '../screens/CarPostDetailScreen/CarPostDetailScreen';
import CarPostEditScreen from '../screens/CarPostEditScreen/CarPostEditScreen';
import ReviewCreateScreen from '../screens/ReviewCreateScreen/ReviewCreateScreen';

const Stack = createNativeStackNavigator();

const MainApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="MenuTab"
                    component={TabNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainApp