import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserListingsAction } from '../redux/actions/listingActions';

const useFetchUserListings = () => {
    const dispatch = useDispatch();
    const userID = useSelector(state => state.user.userId)

    useEffect(() => {
        dispatch(fetchUserListingsAction(userID));
    }, [dispatch]);
}

export default useFetchUserListings