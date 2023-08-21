import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { 
    CardContainer, 
    SellerContainer, 
    SellerInfo, 
    SellerProfilePicture, 
    SellerName, 
    SellerLocation, 
    ItemImage 
} from './styles'

const FeedCard = ({ sellerProfilePic, sellerName, sellerLocation, itemImage }) => {
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate("Profile", {
            screen: "ProfileMain",}); // Navigate to the profile view screen
    };

    const goToCarDetails = () => {
        navigation.navigate("Home", {
            screen: "CarPostDetail",}); // Navigate to the car details screen
    };

    return (
        <CardContainer>
            <SellerContainer>
                <SellerProfilePicture source={sellerProfilePic} />
                <SellerInfo>
                    <TouchableOpacity onPress={goToProfile}>
                        <SellerName>{sellerName}</SellerName>
                    </TouchableOpacity>
                    <SellerLocation>{sellerLocation}</SellerLocation>
                </SellerInfo>
            </SellerContainer>
            <TouchableOpacity onPress={goToCarDetails}>
                <ItemImage source={itemImage} />
            </TouchableOpacity>
        </CardContainer>
    )
}

export default FeedCard