import React from 'react'
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ListingsHeader, ListingsHeaderContainer, ListingsSection, SellerListingContainer, SubText } from './styles'

import { ICON_NAMES } from '../../../constants/constant';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import UserListingsCard from '../../shared/UserListingsCard/UserListingsCard';



const SellerListingScreen = ({ navigation }) => {
    const sellerListings = useSelector((state) => state.listing.sellerListings)

    const handleNavigation = (id) =>
        navigation.navigate("Home", {
            screen: "CarPostDetail",
            params: {
                carPostDetailID: id
            }
    });

    return (
        <SellerListingContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}
            onLeftPress={() => 
                navigation.navigate("Profile", {
                    screen: "SellerListing"
                })}
            />
            <ListingsHeaderContainer>
                <ListingsHeader>Seller Listings</ListingsHeader>
            </ListingsHeaderContainer>
            <ListingsSection>
            {
                sellerListings ? (
                    <FlatList
                        data={sellerListings}
                        renderItem={({ item }) => (
                            <UserListingsCard price={item.price} name={item.car_model} image={item.car_photo}
                            isEdit={false} onPress={() => {handleNavigation(item._id)}}
                            />
                        )}
                        keyExtractor={(item) => item._id}
                    />
                ) : (
                    <SubText>There are no listings available right now.</SubText>
                )
            }
            </ListingsSection>
        </SellerListingContainer>
    )
}

export default SellerListingScreen