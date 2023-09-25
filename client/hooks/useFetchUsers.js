import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersAction } from '../redux/actions/userActions';

const useFetchUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsersAction());
    }, [dispatch]);
}

export default useFetchUsers