import React, { useState } from 'react'
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
    const filters = ['car', 'van', 'truck', 'motorcycle'];
    const [activeFilter, setActiveFilter] = useState(filters[0]);

    useFetchListings();
    useFetchUsers();
    const listings = useSelector((state) => state.listings);

    const handleFilterPress = (filter) => {
        setActiveFilter(filter);
    };

    // const posts = [
    //     { id: '1', title: 'Sakura Motors', description: 'Osaka, Japan', category: 'car' },
    //     { id: '2', title: 'Gunma Racing', description: 'Gunma Prefecture, Japan', category: 'truck' },
    //     { id: '3', title: 'TopRank', description: 'Tokyo, Japan', category: 'motorcycle' },
    // ];

    const renderItem = ({ item }) => (
        <FeedCard itemID={item._id} sellerProfilePic={item.user_photo} sellerName={item.user_name} 
        sellerLocation={item.location} itemImage={item.car_photo}/>
    );

    const getFilterIconName = (filter) => {
        switch (filter) {
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
                        <Icon name={getFilterIconName(filter)} size={32} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                    </FilterButton>
                ))}
                </FilterContainer>
            </Header>
            <PostListContainer>
                {
                    listings ? (
                        <PostList
                            data={listings}
                            keyExtractor={(item) => item._id}
                            renderItem={renderItem}
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