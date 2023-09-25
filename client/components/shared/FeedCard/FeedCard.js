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

const FeedCard = ({ itemID, sellerProfilePic, sellerName, sellerLocation, itemImage }) => {
    const navigation = useNavigation();

    const goToCarDetails = (itemID) => 
         // Navigate to the car details screen
        navigation.navigate("Home", {
            screen: "CarPostDetail",
            params: {
                carPostDetailID: itemID
            }
    });

    return (
        <CardContainer>
            <SellerContainer>
                <SellerProfilePicture source={sellerProfilePic} />
                <SellerInfo>
                    <SellerName>{sellerName}</SellerName>
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