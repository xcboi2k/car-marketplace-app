import React from 'react'
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ListingsHeader, ListingsHeaderContainer, ListingsSection, SubText, UserListingContainer } from './styles'

import { ICON_NAMES } from '../../../constants/constant';

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import UserListingsCard from '../../shared/UserListingsCard/UserListingsCard';

const UserListingScreen = ({ navigation }) => {
  const userListings = useSelector((state) => state.listing.userListings)

  const handleNavigation = (id) =>
    navigation.navigate("Profile", {
    screen: "CarPostEdit",
          params: {
              carPostEditID: id
          }
  });

  return (
    <UserListingContainer>
      <ScreenHeader leftIconName={ICON_NAMES.BACK}
        onLeftPress={() => 
          navigation.navigate("Profile", {
              screen: "ProfileMain"
          })}
      />
      <ListingsHeaderContainer>
        <ListingsHeader>My Listings</ListingsHeader>
      </ListingsHeaderContainer>
      <ListingsSection>
        {
          userListings ? (
            <FlatList
              data={userListings}
              renderItem={({ item }) => (
                <UserListingsCard price={item.price} name={item.car_model} image={item.car_photo}
                isEdit={true} onPress={() => {handleNavigation(item._id)}}
                />
              )}
              keyExtractor={(item) => item._id}
            />
          ) : (
              <SubText>There are no listings available right now.</SubText>
          )
        }
      </ListingsSection>
    </UserListingContainer>
  )
}

export default UserListingScreen