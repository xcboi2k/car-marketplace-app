import React from 'react'
import { ICON_NAMES } from '../constants/constant'

import AddIcon from '../assets/icons/AddIcon'
import BackIcon from '../assets/icons/BackIcon'
import CarIcon from '../assets/icons/CarIcon'
import HomeIcon from '../assets/icons/HomeIcon'
import ListIcon from '../assets/icons/ListIcon'
import LocationIcon from '../assets/icons/LocationIcon'
import MotorcycleIcon from '../assets/icons/MotorcycleIcon'
import SearchIcon from '../assets/icons/SearchIcon'
import ShareIcon from '../assets/icons/ShareIcon'
import TimeIcon from '../assets/icons/TimeIcon'
import TruckIcon from '../assets/icons/TruckIcon'
import UserIcon from '../assets/icons/UserIcon'
import VanIcon from '../assets/icons/VanIcon'

const Icon = ({ name, size = 40, color }) => {
    if (name === ICON_NAMES.ADD) return <AddIcon color={color} size={size} />;
    if (name === ICON_NAMES.BACK) return <BackIcon color={color} size={size} />;
    if (name === ICON_NAMES.CAR) return <CarIcon color={color} size={size} />;
    if (name === ICON_NAMES.HOME) return <HomeIcon color={color} size={size} />;
    if (name === ICON_NAMES.LIST) return <ListIcon color={color} size={size} />;
    if (name === ICON_NAMES.LOCATION) return <LocationIcon color={color} size={size} />;
    if (name === ICON_NAMES.MOTORCYCLE) return <MotorcycleIcon color={color} size={size} />;
    if (name === ICON_NAMES.SEARCH) return <SearchIcon color={color} size={size} />;
    if (name === ICON_NAMES.SHARE) return <ShareIcon color={color} size={size} />;
    if (name === ICON_NAMES.TIME) return <TimeIcon color={color} size={size} />;
    if (name === ICON_NAMES.TRUCK) return <TruckIcon color={color} size={size} />;
    if (name === ICON_NAMES.USER) return <UserIcon color={color} size={size} />;
    if (name === ICON_NAMES.VAN) return <VanIcon color={color} size={size} />;

}

export default Icon