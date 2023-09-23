import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchListingsAction } from '../redux/actions/listingActions';

const useFetchListings = (userId = null) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListingsAction(userId));
    }, [dispatch, userId]);
}

export default useFetchListings