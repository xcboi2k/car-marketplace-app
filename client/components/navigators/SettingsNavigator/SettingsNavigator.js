import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileEditScreen from '../../screens/ProfileEditScreen/ProfileEditScreen';
import SettingsMenuScreen from '../../screens/SettingsMenuScreen/SettingsMenuScreen';

const SettingsStack = createNativeStackNavigator();

const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Settings"
        >
            <SettingsStack.Screen
                name="SettingsMain"
                component={SettingsMenuScreen}
            />
            <SettingsStack.Screen
                name="EditProfile"
                component={ProfileEditScreen}
            />
        </SettingsStack.Navigator>
    )
}

export default SettingsNavigator