import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchSellerListingsAction } from '../redux/actions/listingActions';

const useFetchSellerListings = (sellerID) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSellerListingsAction(sellerID));
    }, [dispatch]);
}

export default useFetchSellerListings