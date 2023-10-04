import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from '../../../assets/icons/HomeIcon';
import UserIcon from '../../../assets/icons/UserIcon';
import AddIcon from '../../../assets/icons/AddIcon';

import CarPostCreateScreen from '../../screens/CarPostCreateScreen/CarPostCreateScreen';

import HomeNavigator from '../HomeNavigator/HomeNavigator';
import ProfileNavigator from '../ProfileNavigator/ProfileNavigator';
import SettingsNavigator from '../SettingsNavigator/SettingsNavigator';

const Tab = createBottomTabNavigator();

const TabBarProps = (route) => ({
    tabBarIcon: ({ focused, color, size }) => {
        const iconColor = color,
            iconSize = 30;

        if (route.name === "Home") {
            return <HomeIcon color={iconColor} size={iconSize} />;
        } else if (route.name === "Add") {
            return <AddIcon color="#E92B29" size={iconSize} />;
        }else if (route.name === "Profile") {
            return <UserIcon color={iconColor} size={iconSize} />;
        }else if (route.name === "Settings") {
            return <Ionicons name="md-settings-outline" size={iconSize} color={iconColor} />;
        }
    },
    tabBarInactiveTintColor: '#C2C7CB',
    tabBarActiveTintColor: '#153A56',
    tabBarStyle: {
        backgroundColor: '#FFFFFF',
        position: "relative",
        height: 80,
        alignContent: "center",
        justifyContent: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    tabBarShowLabel: false,
    tabBarItemStyle: {
        paddingVertical: 20,
    },
    headerShown: false,
});

const TabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            ...TabBarProps(route),
        })}
    >
        <Tab.Screen name="Home" component={HomeNavigator}/>
        <Tab.Screen name="Add" component={CarPostCreateScreen} />
        <Tab.Screen name="Profile" component={ProfileNavigator}/>
        <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
    )
}

export default TabNavigator