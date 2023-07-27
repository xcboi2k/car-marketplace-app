import React from 'react'

import { CardContainer, SellerInfo, SellerProfilePicture, SellerName, SellerLocation, ItemImage } from './styles'

const FeedCard = ({ sellerProfilePic, sellerName, sellerLocation, itemImage }) => {
    return (
        <CardContainer>
            <SellerInfo>
                <SellerProfilePicture source={sellerProfilePic} />
                <SellerName>{sellerName}</SellerName>
                <SellerLocation>{sellerLocation}</SellerLocation>
            </SellerInfo>
            <ItemImage source={itemImage} />
        </CardContainer>
    )
}

export default FeedCard