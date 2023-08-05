import React from 'react'
import { FlatList } from 'react-native';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import UserListingsCard from '../../shared/UserListingsCard/UserListingsCard';
import { ListingsHeader, ListingsSection, SellerListingContainer } from './styles'

const carListings = [
    {
        id: '1',
        price: 1250000,
        name: '2021 Toyota Camry',
    },
    {
        id: '2',
        price: 1500000,
        name: '2022 Ford Mustang GT',
    },
    {
        id: '3',
        price: 1000000,
        name: '1998 Nissan Silvia S15',
    },
    {
        id: '4',
        price: 750000,
        name: '1995 Toyota Chaser',
    },
    {
        id: '5',
        price: 2000000,
        name: '1989 Nissan Skyline R32 GTR',
    },
]

const SellerListingScreen = () => {
    return (
        <SellerListingContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}/>
            <ListingsSection>
                <ListingsHeader>Seller Listings: </ListingsHeader>
                <FlatList
                    data={carListings}
                    renderItem={({ item }) => (
                        <UserListingsCard price={item.price} name={item.name} isEdit={false}/>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ListingsSection>
        </SellerListingContainer>
    )
}

export default SellerListingScreen