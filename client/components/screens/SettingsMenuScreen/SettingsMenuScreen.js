import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ICON_NAMES } from '../../../constants/constant'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../shared/ButtonText/ButtonText'
import { HolderContainer, SettingsMenuContainer, ButtonContainer } from './styles'

const SettingsMenuScreen = () => {
    const navigation = useNavigation();
    return (
        <SettingsMenuContainer>
            <ScreenHeader 
                leftIconName={ICON_NAMES.BACK} 
                onLeftPress={() => 
                    navigation.navigate("Home", {
                        screen: "Feed"
                    })}
            />
            <HolderContainer>
                <ButtonContainer>
                    <ButtonText text='Edit Profile' buttonColor='#F4F6F8' textColor='#234791' 
                        width='100%' textSize='18' 
                        onPress={() => 
                            navigation.navigate("Settings", {
                                screen: "EditProfile"
                        })}/>
                </ButtonContainer>
                <ButtonContainer>
                    <ButtonText text='Logout' buttonColor='#F4F6F8' textColor='#234791' 
                        width='100%' textSize='18'/>
                </ButtonContainer>
                
            </HolderContainer>
        </SettingsMenuContainer>
    )
}

export default SettingsMenuScreen