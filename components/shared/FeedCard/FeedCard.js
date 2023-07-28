import React from 'react'

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
    return (
        <CardContainer>
            <SellerContainer>
                <SellerProfilePicture source={sellerProfilePic} />
                <SellerInfo>
                    <SellerName>{sellerName}</SellerName>
                    <SellerLocation>{sellerLocation}</SellerLocation>
                </SellerInfo>
            </SellerContainer>
            <ItemImage source={itemImage} />
        </CardContainer>
    )
}

export default FeedCard