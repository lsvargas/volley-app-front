import { useContext, useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import List from '../../components/List';
import { AuthContext } from '../../context/authContext';
import {
  FETCH_LIST,
  UPDATE_USER_LIST,
  FETCH_ALL_USERS,
  ADD_PLAYER_TO_LIST,
  updateAddPlayerToList,
  UPDATE_LIST
} from './graphql';
import Loader from '../../components/Loader';
import { parseDate } from '../../utils/date';
import UserInput from '../../components/Lists/UserInput';

const responsiveFS = { sm: 20, lg: 30, md: 25, xs: 20 };

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

  const [updateList] = useMutation(UPDATE_LIST);

  const [addPlayerToList] = useMutation(ADD_PLAYER_TO_LIST, {
    update: (cache, props) => updateAddPlayerToList(cache, props, id)
  });

  const handleUserClick = (status, userListId) => {
    updateUserList({ variables: { userListId, status }});
  };

  const handleListStatus = () => {
    updateList({ variables: {
      updateListId: id,
      closed: !closed
    }})
  };

  const handleAddPlayer = () => {
    const { id: uId } = value;
    addPlayerToList({ variables: { userId: uId, listId: id, waitingList: true } });
    setValue(null);
  };

  if (loading) return <Loader />;

  const closed = data?.list?.closed;

  return (
    <>
      {context?.user && (
        <Button
          sx={{  ml: '0.5rem', mb: '1rem' }}
          variant="contained"
          onClick={() => handleListStatus()}
        >
          {closed ? 'Open' : 'Close'}
        </Button>
      )}
      <Box display="flex">
        <Typography fontSize={{ ...responsiveFS }} mb="0.5rem" ml="0.5rem" mr="1rem" variant="h4">
          {data?.list.name}
        </Typography>
        <Chip
          sx={{ alignSelf: 'center' }}
          label={closed ? 'CERRADA' : 'ABIERTA'}
          color={closed ? 'error' : 'success'}
        />
      </Box>
      <Typography sx={{ marginBottom: '1.5rem', marginLeft: '0.5rem', color: '#a8a9ad' }}>
        {parseDate(data?.list.date)}
      </Typography>
      {context?.user && !closed && (
        <UserInput
          handleAddPlayer={handleAddPlayer}
          usersLoading={usersLoading}
          allUsers={allUsers}
          setValue={setValue}
          value={value}
          data={data}
        />
      )}
      <List
        users={data?.list?.users}
        handleUserClick={handleUserClick}
        closed={closed}
      />
    </>
  );
};

export default TemplateList;
