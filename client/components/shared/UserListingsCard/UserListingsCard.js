import React from 'react'
import { CardContainer, CarImage, CarInfo, CarDetails, CarPrice, CarName, EditButtonContainer } from './styles'

import Icon from '../../../common/Icon'
import { ICON_NAMES } from '../../../constants/constant'

import PicturePlaceholder from '../../../assets/images/sample.jpeg'

const UserListingsCard = ({ image, price, name, onPress, isEdit=true }) => {
    return (
        <CardContainer>
            <CarImage source={{uri: image}} />
            <CarDetails>
                <CarInfo>
                <CarPrice>PHP {price}</CarPrice>
                <CarName>{name}</CarName>
                </CarInfo>
                <EditButtonContainer onPress={onPress}>
                    { isEdit ? (
                        <Icon name={ICON_NAMES.EDIT} color="#153A56" size={30} />
                    ) :
                        <Icon name={ICON_NAMES.SEARCH} color="#153A56" size={30} />
                    }
                </EditButtonContainer>
            </CarDetails>
        </CardContainer>
    )
}

export default UserListingsCard