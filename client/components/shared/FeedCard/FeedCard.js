import React from 'react'
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

const FeedCard = ({ onPress, sellerProfilePic, sellerName, sellerLocation, itemImage }) => {
    const navigation = useNavigation();

    return (
        <CardContainer onPress={onPress}>
            <SellerContainer>
                <SellerProfilePicture source={{uri: sellerProfilePic}} />
                <SellerInfo>
                    <SellerName>{sellerName}</SellerName>
                    <SellerLocation>{sellerLocation}</SellerLocation>
                </SellerInfo>
            </SellerContainer>
            <ItemImage source={{uri: itemImage}} />
        </CardContainer>
    )
}

export default FeedCard