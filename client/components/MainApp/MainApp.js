import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from 'react-redux'
import stores from '../../redux/stores';

import TabNavigator from '../navigators/TabNavigator/TabNavigator';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator();

const MainApp = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    console.log(isLoggedIn)
    return (
        <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    {isLoggedIn ? (
                        <>
                            <Stack.Screen
                                name="Home"
                                component={TabNavigator}
                            />
                        </>
                    ) :
                        <>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen
                                name="Register"
                                component={SignUpScreen}
                            />
                        </>
                    }
                    
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default MainApp