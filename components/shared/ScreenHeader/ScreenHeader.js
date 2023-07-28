import React from 'react'
import Icon from '../../../common/Icon'

import { HeaderContainer, LeftButton, RightButton, Logo } from './styles'
import AppLogo from '../../../assets/images/logo.png'

const ScreenHeader = ({ leftIconName, onLeftPress, rightIconName, onRightPress }) => {
    return (
        <HeaderContainer>
            <LeftButton onPress={onLeftPress}>
                <Icon name={leftIconName} color="#000" />
            </LeftButton>
            <Logo source={AppLogo} />
            <RightButton onPress={onRightPress}>
                <Icon name={rightIconName} color="#000" />
            </RightButton>
        </HeaderContainer>
    )
}

export default ScreenHeader