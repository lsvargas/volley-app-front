import { useContext, useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import List from '../../components/List';
import { AuthContext } from '../../context/authContext';
import {
  FETCH_LIST,
  UPDATE_USER_LIST,
  FETCH_ALL_USERS,
  ADD_PLAYER_TO_LIST,
  updateAddPlayerToList
} from './graphql';
import Loader from '../../components/Loader';
import { parseDate } from '../../utils/date';
import UserInput from '../../components/Lists/UserInput';

function TemplateList() {
  const { id } = useParams();
  const context = useContext(AuthContext);
  const [value, setValue] = useState(null);

  const { loading, data } = useQuery(FETCH_LIST, {
    variables: { listId: id }
  });

  const { loading: usersLoading, data: allUsers } = useQuery(FETCH_ALL_USERS, {
    fetchPolicy: 'network-only'
  });

  const [updateUserList] = useMutation(UPDATE_USER_LIST);

  const [addPlayerToList] = useMutation(ADD_PLAYER_TO_LIST, {
    update: (cache, props) => updateAddPlayerToList(cache, props, id)
  });

  const handleUserClick = (status, userListId) => {
    updateUserList({ variables: { userListId, status }});
  };

  const handleAddPlayer = () => {
    const { id: uId } = value;
    addPlayerToList({ variables: { userId: uId, listId: id, waitingList: true } });
    setValue(null);
  };

  if (loading) return <Loader />;

  return (
    <>
      <Typography sx={{ marginBottom: '0.5rem', marginLeft: '0.5rem' }} variant="h4">
        {data?.list.name}
      </Typography>
      <Typography sx={{ marginBottom: '1.5rem', marginLeft: '0.5rem', color: '#a8a9ad' }}>
        {parseDate(data?.list.date)}
      </Typography>
      {context?.user && (
        <UserInput
          handleAddPlayer={handleAddPlayer}
          usersLoading={usersLoading}
          allUsers={allUsers}
          setValue={setValue}
          value={value}
          data={data}
        />
      )}
      <List users={data?.list?.users} handleUserClick={handleUserClick} />
    </>
  );
};

export default TemplateList;
