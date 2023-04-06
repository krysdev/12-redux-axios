import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/thunks/fetchUsers';
import Skeleton from './Skeleton';

function UsersList() {
  const dispatch = useDispatch();

  // 'state' here is the BIG STATE ({users: {data, isLoading, error}})
  const { data, isLoading, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // }, []); // eslint says the 'dispatch' is required in the dependancy array, but in fact it is not, and you can have it like this also

  if (isLoading) {
    return <Skeleton howMany={6}/>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  return <div>{data.length}</div>;
}

export default UsersList;
