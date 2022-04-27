import { useQuery, useMutation } from "@apollo/client";
import Typography from '@mui/material/Typography';

import { 
  FETCH_LISTS,
  DELETE_LIST,
  updateDeleteList
} from './graphql';
import ListComponent from "../../components/Lists/List";
import Loader from "../../components/Loader";


function Lists() {
  const { loading, data } = useQuery(FETCH_LISTS);

  const [deleteUserFromList] = useMutation(DELETE_LIST, {
    update: (cache, props) => updateDeleteList(cache, props)
  });

  const handleDelete = id => {
    deleteUserFromList({ variables: { deleteListId: id }});
  };

  if (loading) return <Loader />;

  return (
    <>
      <Typography sx={{ marginLeft: '0.5rem' }} variant="h4">
        Listas
      </Typography>
      <ListComponent
        lists={data?.lists}
        handleDelete={handleDelete}
      />
    </>
  )
} 

export default Lists;
