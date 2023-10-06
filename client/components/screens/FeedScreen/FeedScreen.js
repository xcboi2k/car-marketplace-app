import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';

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

import Icon from '../../../common/Icon';
import { ICON_NAMES } from '../../../constants/constant';

import { fetchAllListingsAction } from '../../../redux/actions/listingActions';
import { fetchUsersAction } from '../../../redux/actions/userActions';

const FeedScreen = ({ route }) => {
    //initial calls
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllListingsAction());
        dispatch(fetchUsersAction());
    }, [dispatch]);
    
    //for reloading after making changes (add listing)
    const key = route.params?.key || 'defaultKey';
    useEffect(() => {
        dispatch(fetchAllListingsAction());
        dispatch(fetchUsersAction());
    }, [dispatch, key]);
    
    //handling navigation when feedcard is pressed
    const navigation = useNavigation();
    const handleNavigation = (id) =>
        navigation.navigate("Home", {
            screen: "CarPostDetail",
            params: {
                carPostDetailID: id
            }
    });

    //initialize listings that will be used in flatlist
    const listings = useSelector((state) => state.listing.listings);

    //initializing filters
    const filters = ['All','Car', 'Van', 'Truck/Bus', 'Motorcycle'];
    const [activeFilter, setActiveFilter] = useState(filters[0]);
    const handleFilterPress = (filter) => {
        setActiveFilter(filter);
    };
    const getFilterIconName = (filter) => {
        switch (filter) {
            case 'All':
                return 'All';
            case 'Car':
                return ICON_NAMES.CAR;
            case 'Van':
                return ICON_NAMES.VAN;
            case 'Truck/Bus':
                return ICON_NAMES.TRUCK;
            case 'Motorcycle':
                return ICON_NAMES.MOTORCYCLE;
            default:
                return 'All';
        }
    };
    const filteredListings = listings.filter(listing => listing.classification_type === activeFilter);

    //render feedcard
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
                        {
                            getFilterIconName(filter) !== 'All' ? (
                                <Icon name={getFilterIconName(filter)} size={28} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                            ) : (
                                <Feather name="menu" size={28} color={activeFilter === filter ? '#FFFFFF' : '#C2C7CB'} />
                            )
                        }
                        
                    </FilterButton>
                ))}
                </FilterContainer>
            </Header>
            <PostListContainer>
                {
                    listings ? (
                        <FlatList
                            data={activeFilter === 'All' ? listings : filteredListings}
                            keyExtractor={(item, index) => item._id.toString()}
                            renderItem={renderCardItem}
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