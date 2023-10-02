import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';

import { 
    FeedContainer, 
    Header, 
    SearchBarContainer, 
    SearchBarInput,
    FilterContainer, 
    FilterButton, 
    FilterButtonText, 
    PostList, 
    PostListContainer,
    SubText} from './styles'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader.js'
import FeedCard from '../../shared/FeedCard/FeedCard';

import ProfilePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import ItemPlaceholder from '../../../assets/images/item-pic-placeholder.png'
import Icon from '../../../common/Icon';
import { ICON_NAMES } from '../../../constants/constant';

import useFetchListings from '../../../hooks/useFetchListings';
import useFetchUsers from '../../../hooks/useFetchUsers';

const FeedScreen = () => {
    useFetchListings();
    useFetchUsers();
    const listings = useSelector((state) => state.listing.listings);
    const users = useSelector((state) => state.user.users);

    const navigation = useNavigation();
    const handleNavigation = (id) =>
        navigation.navigate("Home", {
            screen: "CarPostDetail",
            params: {
                carPostDetailID: id
            }
    });

    const filters = ['all','car', 'van', 'truck', 'motorcycle'];
    const [activeFilter, setActiveFilter] = useState(filters[0]);
    const handleFilterPress = (filter) => {
        setActiveFilter(filter);
    };
    const getFilterIconName = (filter) => {
        switch (filter) {
            case 'all':
                return ICON_NAMES.ALL; // Example icon name for the 'car' filter
            case 'car':
                return ICON_NAMES.CAR; // Example icon name for the 'car' filter
            case 'van':
                return ICON_NAMES.VAN; // Example icon name for the 'car' filter
            case 'truck':
                return ICON_NAMES.TRUCK; // Example icon name for the 'truck' filter
            case 'motorcycle':
                return ICON_NAMES.MOTORCYCLE; // Example icon name for the 'motorcycle' filter
            default:
                return ICON_NAMES.CAR; // Default icon name if no match is found
        }
    };

    const renderCardItem = ({ item }) => (
        <FeedCard 
        onPress={() => {handleNavigation(item._id)}}
        sellerProfilePic={item.user_photo} sellerName={item.user_name} 
        sellerLocation={item.location} itemImage={item.car_photo}/>
    );

    return (
        <FeedContainer>
            <ScreenHeader />
            <Header>
                <SearchBarContainer>
                    <Icon name={ICON_NAMES.SEARCH} size={20} color='#C2C7CB' />
                    <SearchBarInput placeholder="Search..." />
                </SearchBarContainer>
            </Header>
            <Header>
                <FilterContainer>
                {filters.map((filter) => (
                    <FilterButton key={filter} onPress={() => handleFilterPress(filter)} active={activeFilter === filter}>
                        <Icon name={getFilterIconName(filter)} size={28} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                    </FilterButton>
                ))}
                </FilterContainer>
            </Header>
            <PostListContainer>
                {
                    listings ? (
                        <FlatList
                            data={listings}
                            keyExtractor={(item, index) => item._id.toString()}
                            renderItem={renderCardItem}
                            // Add additional FlatList props as needed
                        />
                    ) : (
                        <SubText>There are no listings available right now.</SubText>
                    )
                }
            </PostListContainer>
        </FeedContainer>
    )
}

export default FeedScreen