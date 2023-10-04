import React from 'react'
import { ICON_NAMES } from '../constants/constant'

import AddIcon from '../assets/icons/AddIcon'
import AddPhotoIcon from '../assets/icons/AddPhotoIcon'
import AllIcon from '../assets/icons/AllIcon'
import BackIcon from '../assets/icons/BackIcon'
import CarIcon from '../assets/icons/CarIcon'
import ChatIcon from '../assets/icons/ChatIcon'
import EditIcon from '../assets/icons/EditIcon'
import HomeIcon from '../assets/icons/HomeIcon'
import ListIcon from '../assets/icons/ListIcon'
import LocationIcon from '../assets/icons/LocationIcon'
import MailIcon from '../assets/icons/MailIcon'
import MotorcycleIcon from '../assets/icons/MotorcycleIcon'
import PhoneIcon from '../assets/icons/PhoneIcon'
import SearchIcon from '../assets/icons/SearchIcon'
import SettingsIcon from '../assets/icons/SettingsIcon'
import ShareIcon from '../assets/icons/ShareIcon'
import ShopIcon from '../assets/icons/ShopIcon'
import TimeIcon from '../assets/icons/TimeIcon'
import TruckIcon from '../assets/icons/TruckIcon'
import UserIcon from '../assets/icons/UserIcon'
import VanIcon from '../assets/icons/VanIcon'

const Icon = ({ name, size = 40, color }) => {
    if (name === ICON_NAMES.ADD) return <AddIcon color={color} size={size} />;
    if (name === ICON_NAMES.ADDPHOTO) return <AddPhotoIcon color={color} size={size} />;
    if (name === ICON_NAMES.ALL) return <AllIcon color={color} size={size} />;
    if (name === ICON_NAMES.BACK) return <BackIcon color={color} size={size} />;
    if (name === ICON_NAMES.CAR) return <CarIcon color={color} size={size} />;
    if (name === ICON_NAMES.CHAT) return <ChatIcon color={color} size={size} />;
    if (name === ICON_NAMES.EDIT) return <EditIcon color={color} size={size} />;
    if (name === ICON_NAMES.HOME) return <HomeIcon color={color} size={size} />;
    if (name === ICON_NAMES.LIST) return <ListIcon color={color} size={size} />;
    if (name === ICON_NAMES.LOCATION) return <LocationIcon color={color} size={size} />;
    if (name === ICON_NAMES.MAIL) return <MailIcon color={color} size={size} />;
    if (name === ICON_NAMES.MOTORCYCLE) return <MotorcycleIcon color={color} size={size} />;
    if (name === ICON_NAMES.PHONE) return <PhoneIcon color={color} size={size} />;
    if (name === ICON_NAMES.SEARCH) return <SearchIcon color={color} size={size} />;
    if (name === ICON_NAMES.SETTINGS) return <SettingsIcon color={color} size={size} />;
    if (name === ICON_NAMES.SHARE) return <ShareIcon color={color} size={size} />;
    if (name === ICON_NAMES.SHOP) return <ShopIcon color={color} size={size} />;
    if (name === ICON_NAMES.TIME) return <TimeIcon color={color} size={size} />;
    if (name === ICON_NAMES.TRUCK) return <TruckIcon color={color} size={size} />;
    if (name === ICON_NAMES.USER) return <UserIcon color={color} size={size} />;
    if (name === ICON_NAMES.VAN) return <VanIcon color={color} size={size} />;
}

export default Icon