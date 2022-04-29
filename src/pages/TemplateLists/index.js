
import { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Typography from '@mui/material/Typography';

import { 
  FETCH_TEMPLATE_LISTS,
  ADD_TEMPLATE_LIST,
  DELETE_TEMPLATE_LIST,
  updateAddTemplateList,
  updateDeleteTemplateList
} from './graphql';
import ListComponent from "../../components/TemplateLists/List";
import Loader from "../../components/Loader";


function TemplateList() {
  const [value, setValue] = useState('')
  const { loading, data } = useQuery(FETCH_TEMPLATE_LISTS);

  const [deletePlayerFromList] = useMutation(DELETE_TEMPLATE_LIST, {
    update: (cache, props) => updateDeleteTemplateList(cache, props)
  });

  const [addTemplateList] = useMutation(ADD_TEMPLATE_LIST, {
    update: (cache, props) => updateAddTemplateList(cache, props),
    refetchQueries: ['TemplateLists']
  });

  const handleInputChange = ({ target }) => {
    setValue(target.value);
  };

  const handleAddTemplateList = () => {
    addTemplateList({ variables: { name: value }});
    setValue('');
  };

  const handleDelete = id => {
    deletePlayerFromList({ variables: { deleteTemplateListId: id }});
  };

  if (loading) return <Loader />;

  return (
    <>
      <Typography sx={{ marginLeft: '0.5rem' }} variant="h4">
        Plantillas
      </Typography>
      <ListComponent
        lists={data}
        handleAddTemplateList={handleAddTemplateList}
        value={value}
        handleInputChange={handleInputChange}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default TemplateList;
