import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllListingsAction, fetchUserListingsAction } from '../redux/actions/listingActions';

const useFetchListings = (userId = null) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if(userId){
            dispatch(fetchUserListingsAction(userId));
        }
        else{
            dispatch(fetchAllListingsAction());
        }
        
    }, [dispatch, userId]);
}

export default useFetchListings