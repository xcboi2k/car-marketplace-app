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
} from './styles'

import Icon from '../../../common/Icon'
import { ICON_NAMES } from '../../../constants/constant'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import Tabs from '../../shared/Tabs'
import ItemPlaceholder from '../../../assets/images/item-pic-placeholder.png'
import Sample from '../../../assets/images/sample.jpeg'


const CarPostDetailScreen = () => {
    const sampleText = "Lorem ipsum"
    const tabs = [
        { id: 1, title: 'Description', content: sampleText },
        { id: 2, title: 'Features', content: sampleText },
        { id: 3, title: 'Vehicle Info', content: sampleText },
        { id: 4, title: 'About Seller', content: sampleText },
    ];

    return (
        <CarPostDetailContainer>
            <ScreenHeader leftIconName={ICON_NAMES.SEARCH} rightIconName={ICON_NAMES.LOCATION}/>
            <CarImageContainer>
                <CarImage source={Sample} />
            </CarImageContainer>
            <HolderContainer>
            <CarDateLocationContainer>
                <CarInfoColumn>
                    <Icon name={ICON_NAMES.SEARCH} size={15} color='#C2C7CB'/>
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
        </CarPostDetailContainer>
    )
}

export default CarPostDetailScreen