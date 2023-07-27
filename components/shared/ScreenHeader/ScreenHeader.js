import React from 'react'

import { HeaderContainer, LeftButton, RightButton, Logo } from './styles'

const ScreenHeader = ({ logoSource, onLeftPress, onRightPress }) => {
    return (
        <HeaderContainer>
            <LeftButton onPress={onLeftPress}>
                <Icon name="menu" size={24} color="#000" />
            </LeftButton>
            <Logo source={logoSource} />
            <RightButton onPress={onRightPress}>
                <Icon name="search" size={24} color="#000" />
            </RightButton>
        </HeaderContainer>
    )
}

export default ScreenHeader