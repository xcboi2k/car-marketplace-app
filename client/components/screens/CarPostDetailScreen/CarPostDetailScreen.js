import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

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


const CarPostDetailScreen = ({ route, navigation }) => {
    const { carPostDetailID } = route.params;
    
    const currentUserID = useSelector((state) => state.user.userId);
    const listings = useSelector((state) => state.listing.listings);
    const [currentCarPost, setCurrentCarPost] = useState(() => {
        return listings.find(item => item._id === carPostDetailID);
    });

    const users = useSelector((state) => state.user.users);
    const [currentSeller, setCurrentSeller] = useState('');

    const tabs = [
        { id: 1, title: 'Description', content: currentCarPost.description },
        { id: 2, title: 'Features', content: currentCarPost.features },
        { id: 3, title: 'Vehicle Info', content: currentCarPost.vehicle_information },
    ];

    useEffect(() => {
        const targetListing = listings.find(item => item._id === carPostDetailID);
        console.log('targetListing', targetListing);
        setCurrentCarPost(targetListing);
    }, [carPostDetailID])

    useEffect(() => {
        const targetSeller = users.find(item => item._id === currentCarPost.userId);
        console.log('targetSeller', targetSeller);
        setCurrentSeller(targetSeller);
    }, [currentCarPost.userId])

    const goToSellerProfile = () => 
        navigation.navigate("Home", {
            screen: "SellerProfile",
            params: {
                sellerID: currentSeller._id
            }
    }); // Navigate to seller profile

    const dateArray = currentCarPost.created_at.split(" ");
    const newDate = dateArray[1] + ' ' + dateArray[2] + ' ' + dateArray[3];

    return (
        <CarPostDetailContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK} rightIconName={ICON_NAMES.SHARE}
            onLeftPress={() => 
                navigation.goBack()}
            />
            <CarImageContainer>
                <CarImage source={{uri: currentCarPost.car_photo}} />
            </CarImageContainer>
            <HolderContainer>
            <CarDateLocationContainer>
                <CarInfoColumn>
                    <Icon name={ICON_NAMES.TIME} size={15} color='#C2C7CB'/>
                    <CarInfoText>{newDate}</CarInfoText>
                </CarInfoColumn>
                <CarInfoColumn>
                    <Icon name={ICON_NAMES.LOCATION} size={13} color='#C2C7CB'/>
                    <CarInfoText>{currentCarPost.location}</CarInfoText>
                </CarInfoColumn>
            </CarDateLocationContainer>

            <Price>Php {currentCarPost.price}</Price>
            <Model>{currentCarPost.car_model}</Model>

            <YearTransmissionKmContainer>
                <YearContainer>
                    <SetTitleText>{currentCarPost.production_year}</SetTitleText>
                    <TitleText>Year</TitleText>
                </YearContainer>
                <TransmissionContainer>
                    <SetTitleText>{currentCarPost.transmission_type}</SetTitleText>
                    <TitleText>Transmission</TitleText>
                </TransmissionContainer>
                <KMContainer>
                    <SetTitleText>{currentCarPost.total_kms}</SetTitleText>
                    <TitleText>Km</TitleText>
                </KMContainer>
            </YearTransmissionKmContainer>
            </HolderContainer>
            <Tabs tabs={tabs} active={tabs[0].id}/>
            {
                currentCarPost.userId !== currentUserID ? (
                    <ContactContainer>
                        <ButtonIconContainer>
                            <ButtonIcon iconName={ICON_NAMES.CHAT} iconSize={26} buttonColor='#FFFFFF' iconColor='#234791' borderColor='#F4F6F8'/>
                        </ButtonIconContainer>
                        <ButtonText text='Check Seller Profile' buttonColor='#234791' textColor='#F4F6F8' width ='70%' textSize='18'
                        onPress={goToSellerProfile}/>
                    </ContactContainer>
                ) : null
            }
        </CarPostDetailContainer>
    )
}

export default CarPostDetailScreen