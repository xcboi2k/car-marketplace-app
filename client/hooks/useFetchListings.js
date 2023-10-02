import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllListingsAction } from '../redux/actions/listingActions';

const useFetchListings = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllListingsAction());
    }, [dispatch]);
}

export default useFetchListings