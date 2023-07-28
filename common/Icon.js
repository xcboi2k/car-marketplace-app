import React from 'react'
import { ICON_NAMES } from '../constants/constant'

import AddIcon from '../assets/icons/AddIcon'
import BackIcon from '../assets/icons/BackIcon'
import CarIcon from '../assets/icons/CarIcon'
import HomeIcon from '../assets/icons/HomeIcon'

const Icon = ({ name, size = 40, color }) => {
    if (name === ICON_NAMES.ADD) return <AddIcon color={color} size={size} />;
    if (name === ICON_NAMES.BACK) return <BackIcon color={color} size={size} />;
    if (name === ICON_NAMES.CAR) return <CarIcon color={color} size={size} />;
    if (name === ICON_NAMES.HOME) return <HomeIcon color={color} size={size} />;
}

export default Icon