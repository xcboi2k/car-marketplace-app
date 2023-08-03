import React, { useState } from 'react'

import { 
    CarPostDetailContainer, 
    HolderContainer,
    CarImageContainer,
    CarImage, 
    CarDateLocationContainer,
    CarInfoColumn, 
    CarInfoText,
    Price,
    Model,
    YearTransmissionKmContainer,
    YearContainer,
    TransmissionContainer,
    KMContainer,
    TitleText,
    SetTitleText,
    ContactContainer,
    ButtonIconContainer,
} from './styles'

import Icon from '../../../common/Icon'
import { ICON_NAMES } from '../../../constants/constant'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import Tabs from '../../shared/Tabs'
import Sample from '../../../assets/images/sample.jpeg'
import ButtonText from '../../shared/ButtonText/ButtonText'
import ButtonIcon from '../../shared/ButtonIcon/ButtonIcon'


const CarPostDetailScreen = () => {
    const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const tabs = [
        { id: 1, title: 'Description', content: sampleText },
        { id: 2, title: 'Features', content: sampleText },
        { id: 3, title: 'Vehicle Info', content: sampleText },
        { id: 4, title: 'About Seller', content: sampleText },
    ];

    return (
        <CarPostDetailContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK} rightIconName={ICON_NAMES.SHARE}/>
            <CarImageContainer>
                <CarImage source={Sample} />
            </CarImageContainer>
            <HolderContainer>
            <CarDateLocationContainer>
                <CarInfoColumn>
                    <Icon name={ICON_NAMES.TIME} size={15} color='#C2C7CB'/>
                    <CarInfoText>July 31, 2023</CarInfoText>
                </CarInfoColumn>
                <CarInfoColumn>
                    <Icon name={ICON_NAMES.LOCATION} size={13} color='#C2C7CB'/>
                    <CarInfoText>Philippines</CarInfoText>
                </CarInfoColumn>
            </CarDateLocationContainer>

            <Price>Php 2,000,000</Price>
            <Model>Nissan Skyline R33 GTR</Model>

            <YearTransmissionKmContainer>
                <YearContainer>
                    <SetTitleText>1996</SetTitleText>
                    <TitleText>Year</TitleText>
                </YearContainer>
                <TransmissionContainer>
                    <SetTitleText>Manual</SetTitleText>
                    <TitleText>Transmission</TitleText>
                </TransmissionContainer>
                <KMContainer>
                    <SetTitleText>100,000</SetTitleText>
                    <TitleText>Km</TitleText>
                </KMContainer>
            </YearTransmissionKmContainer>
            </HolderContainer>
            <Tabs tabs={tabs} active={tabs[0].id}/>
            <ContactContainer>
                <ButtonIconContainer>
                    <ButtonIcon iconName={ICON_NAMES.CHAT} iconSize={26} buttonColor='#FFFFFF' iconColor='#234791' borderColor='#F4F6F8'/>
                </ButtonIconContainer>
                <ButtonText text='Contact the Seller' buttonColor='#234791' textColor='#F4F6F8' width ='70%' textSize='18'/>
            </ContactContainer>
        </CarPostDetailContainer>
    )
}

export default CarPostDetailScreen