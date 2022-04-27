import { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USERS,
  DELETE_USER,
  ADD_USER,
  updateDeleteUser,
  updateAddUser
} from './graphql';
import Typography from '@mui/material/Typography';

import UserList from '../../components/Users/List';
import Loader from "../../components/Loader";


function Users() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const { loading, data } = useQuery(FETCH_USERS);

  const [deleteUser] = useMutation(DELETE_USER, {
    update: (cache, props) => updateDeleteUser(cache, props)
  });

  const [addUser] = useMutation(ADD_USER, {
    update: (cache, props) => updateAddUser(cache, props)
  });

  const handleAddUser = async () => {
    addUser({ variables: { name, lastname }});
    setName('');
    setLastname('');
  };

  const handleDelete = id => {
    deleteUser({ variables: { deleteUserId: id }});
  };

  const handleNameInput = ({ target }) => {
    setName(target.value)
  };

  const handleLastnameInput = ({ target }) => {
    setLastname(target.value)
  };

  if (loading) return <Loader />;

  return (
    <>
      <Typography sx={{ marginLeft: '0.5rem' }} variant="h4">
        Usuarios
      </Typography>
      <UserList 
        users={data?.users}
        handleAddUser={handleAddUser}
        name={name}
        lastname={lastname}
        handleNameInput={handleNameInput}
        handleLastnameInput={handleLastnameInput}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Users;
