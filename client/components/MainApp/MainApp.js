import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from 'react-redux'

import TabNavigator from '../navigators/TabNavigator/TabNavigator';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import OtherInfoScreen from '../screens/OtherInfoScreen/OtherInfoScreen';

const Stack = createNativeStackNavigator();

const MainApp = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const isSignedIn = useSelector(state => state.user.isSignedIn);
    console.log("Login State",isLoggedIn)
    console.log("Sign In State",isSignedIn)

    return (
        <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    {isLoggedIn === true && isSignedIn === true ? (
                        <>
                            <Stack.Screen
                                name="AppScreens"
                                component={TabNavigator}
                            />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen
                                name="Register"
                                component={SignUpScreen}
                            />
                            {isSignedIn && <Stack.Screen name="OtherInfo" component={OtherInfoScreen}/>}
                        </>
                        )
                    }
                    
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default MainApp