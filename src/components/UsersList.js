import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/thunks/fetchUsers';

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // }, []); // eslint says the 'dispatch' is required in the dependancy array, but in fact it is not, and you can have it like this also

  return <div>users list</div>;
}

export default UsersList;
