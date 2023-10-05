import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellerReviews } from '../redux/actions/reviewActions';

const useFetchSellerReviews = (sellerID) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSellerReviews(sellerID));
    }, [dispatch]);
}

export default useFetchSellerReviews