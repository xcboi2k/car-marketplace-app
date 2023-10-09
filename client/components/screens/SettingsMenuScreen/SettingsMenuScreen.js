import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { HolderContainer, SettingsMenuContainer, ButtonContainer } from './styles'

import { ICON_NAMES } from '../../../constants/constant'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../shared/ButtonText/ButtonText'
import { logoutAction } from '../../../redux/actions/userActions';

const SettingsMenuScreen = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logoutAction())
    };

    return (
        <SettingsMenuContainer>
            <ScreenHeader 
                leftIconName={ICON_NAMES.BACK} 
                onLeftPress={() => 
                    navigation.goBack()}
            />
            <HolderContainer>
                <ButtonContainer>
                    <ButtonText text='Logout' buttonColor='#F4F6F8' textColor='#234791' width='100%' textSize='18'
                    onPress={handleLogOut}/>
                </ButtonContainer>
                
            </HolderContainer>
        </SettingsMenuContainer>
    )
}

export default SettingsMenuScreen