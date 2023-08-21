import React from 'react'
import Icon from '../../../common/Icon'

import { HeaderContainer, LeftButton, RightButton, Logo, IconContainer, LogoContainer } from './styles'
import AppLogo from '../../../assets/images/logo.png'

const ScreenHeader = ({ leftIconName, onLeftPress, rightIconName, onRightPress }) => {
    return (
        <HeaderContainer>
            {
                leftIconName && <IconContainer setPosition="left">
                    <LeftButton onPress={onLeftPress}>
                        <Icon name={leftIconName} color="#153A56" size={24}/>
                    </LeftButton>
                </IconContainer>
            }
            <LogoContainer>
                <Logo source={AppLogo} />
            </LogoContainer>
            { rightIconName && <IconContainer setPosition="right">
                    <RightButton onPress={onRightPress}>
                        <Icon name={rightIconName} color="#153A56" size={24}/>
                    </RightButton>
                </IconContainer>
            }
        </HeaderContainer>
    )
}

export default ScreenHeader