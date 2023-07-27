import React, { useState } from 'react'
import { FeedContainer } from './styles'

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader.js'
import FeedCard from '../../shared/FeedCard/FeedCard';

import ProfilePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import ItemPlaceholder from '../../../assets/images/item-pic-placeholder.png'

const FeedScreen = () => {
    const filters = ['car', 'truck', 'motorcycle'];
    const [activeFilter, setActiveFilter] = useState(filters[0]);

    const handleFilterPress = (filter) => {
        setActiveFilter(filter);
    };

    const posts = [
        { id: '1', title: 'Post 1', description: 'This is the first post', category: 'car' },
        { id: '2', title: 'Post 2', description: 'This is the second post', category: 'truck' },
        { id: '3', title: 'Post 3', description: 'This is the third post', category: 'motorcycle' },
    ];

    const renderItem = ({ item }) => (
        <FeedCard sellerProfilePic={ProfilePlaceholder} sellerName={item.title} sellerLocation={item.description} itemImage={ItemPlaceholder}/>
    );

    return (
        <FeedContainer>
            <ScreenHeader />
            <Header>
                <SearchBar placeholder="Search" />
                <FilterContainer>
                {filters.map((filter) => (
                    <FilterButton key={filter} onPress={() => handleFilterPress(filter)}>
                        <FilterButtonText active={activeFilter === filter}>{filter}</FilterButtonText>
                    </FilterButton>
                ))}
                </FilterContainer>
            </Header>
            <PostList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                // Add additional FlatList props as needed
            />
        </FeedContainer>
    )
}

export default FeedScreen