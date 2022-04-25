import { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import List from '../../components/List';

import {
  FETCH_LIST,
  UPDATE_USER_LIST
} from './graphql';

import Loader from "../../components/Loader";

const parseDate = date => {
  let parsedDate = new Date(date);
  const month = parsedDate.toLocaleString('default', { month: 'long' });
  const day = parsedDate.toLocaleString('default', { weekday: 'long' });

  return `${day} ${parsedDate.getDate()} ${month}, ${parsedDate.getFullYear()}`;
};

function TemplateList() {
  const { id } = useParams();

  const { loading, data } = useQuery(FETCH_LIST, {
    variables: { listId: id }
  });

  const [updateUserList] = useMutation(UPDATE_USER_LIST);

  const handleUserClick = (status, userListId) => {
    updateUserList({ variables: { userListId, status }});
  };

  if (loading) return <Loader />;

  console.log(data)

  return (
    <>
      <Typography sx={{ marginBottom: '0.5rem', marginLeft: '0.5rem' }} variant="h4">
        {data?.list.name}
      </Typography>
      <Typography sx={{ marginBottom: '1.5rem', marginLeft: '0.5rem', color: '#a8a9ad' }}>
        {parseDate(data?.list.date)}
      </Typography>
      <List users={data?.list?.users} handleUserClick={handleUserClick} />
    </>
  );
};

export default TemplateList;
