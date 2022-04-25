import { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import {
  FETCH_TEMPLATE_LIST,
  DELETE_PLAYER_FROM_LIST,
  updateDeletePlayerFromList,
  updateAddPlayerToList,
  FETCH_ALL_USERS,
  ADD_PLAYER_TO_LIST
} from './graphql';
import ListComponent from "../../components/TemplateList/List";
import Loader from "../../components/Loader";

function TemplateList() {
  const { id } = useParams();
  const [value, setValue] = useState(null);

  const [deletePlayerFromList] = useMutation(DELETE_PLAYER_FROM_LIST, {
    update: (cache, props) => updateDeletePlayerFromList(cache, props, id)
  });

  const [addPlayerToList] = useMutation(ADD_PLAYER_TO_LIST, {
    update: (cache, props) => updateAddPlayerToList(cache, props, id)
  });

  const { loading, data } = useQuery(FETCH_TEMPLATE_LIST, {
    variables: { templateListId: id },
  });

  const { loading: usersLoading, data: allUsers } = useQuery(FETCH_ALL_USERS);

  const handleDeletePlayer = ({ userId }) => {
    deletePlayerFromList({ variables: { userId, templateListId: id } });
  };

  const handleAddPlayer = () => {
    const { id: uId } = value;
    addPlayerToList({ variables: { userId: uId, templateListId: id } });
    setValue(null);
  };

  if (loading) return <Loader />;

  return (
    <>
      <Typography sx={{ marginBottom: '0.5rem', marginLeft: '0.5rem' }} variant="h4">
        {data?.templateList.name}
      </Typography>
      <ListComponent
        users={data?.templateList.users}
        handleDeletePlayer={handleDeletePlayer}
        handleAddPlayer={handleAddPlayer}
        allUsers={allUsers?.users}
        value={value}
        setValue={setValue}
        usersLoading={usersLoading}
      />
    </>
  );
};

export default TemplateList;
