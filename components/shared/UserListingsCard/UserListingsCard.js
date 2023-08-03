import React from 'react'
import { CardContainer, CarImage, CarInfo, CarDetails, CarPrice, CarName, EditButtonContainer } from './styles'

import Icon from '../../../common/Icon'
import { ICON_NAMES } from '../../../constants/constant'

import PicturePlaceholder from '../../../assets/images/sample.jpeg'

const UserListingsCard = ({ imageSource, price, name, onPressEdit }) => {
    return (
        <CardContainer>
            <CarImage source={PicturePlaceholder} />
            <CarDetails>
                <CarInfo>
                <CarPrice>PHP {price}</CarPrice>
                <CarName>{name}</CarName>
                </CarInfo>
                <EditButtonContainer>
                    <Icon name={ICON_NAMES.EDIT} color="#153A56" size={30} />
                </EditButtonContainer>
            </CarDetails>
        </CardContainer>
    )
}

export default UserListingsCard