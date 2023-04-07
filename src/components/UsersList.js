import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, removeUser } from '../store'; // import it from the STORE/INDEX.JS, not from the '../store/thunks/_ _ _.js'
import Skeleton from './Skeleton';
import Button from './Button';

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

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoading) {
    return <Skeleton howMany={6} additionalClassNames="h-10 w-full" />;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex flex-row justify-between items-center m-3 cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
