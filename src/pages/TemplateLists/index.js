
import { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Typography from '@mui/material/Typography';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { 
  FETCH_TEMPLATE_LISTS,
  ADD_TEMPLATE_LIST,
  DELETE_TEMPLATE_LIST,
  REORDER_TEMPLATE_LIST,
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

  const [reOrderTemplateList] = useMutation(REORDER_TEMPLATE_LIST, {
    // update: (cache, props) => updateAddTemplateList(cache, props),
    // refetchQueries: ['TemplateLists']
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
  
  const onDragEnd = (result) => {
    console.log(result.source.index)
    console.log(result.destination.index)
    // reOrderTemplateList({ variables: { "reOrderTemplateListId": "2", "newPriority": 3 }})
    // console.log("asdasds")
  };

  if (loading) return <Loader />;

  return (
    <>
      <Typography sx={{ marginLeft: '0.5rem' }} variant="h4">
        Plantillas
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <ListComponent
              lists={data}
              handleAddTemplateList={handleAddTemplateList}
              value={value}
              handleInputChange={handleInputChange}
              handleDelete={handleDelete}
              provided={provided}
              snapshot={snapshot}
            />
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default TemplateList;
