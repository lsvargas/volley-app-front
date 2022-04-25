import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const style = {
  width: '100%',
  maxWidth: 400,
  bgcolor: 'background.paper',
};

const style2 = {
  justifyContent: 'start',
  display: 'flex',
  marginLeft: '0.5rem',
  marginTop: '1rem',
  marginBottom: '0.5rem'
};

function ListComponent({
  lists,
  handleAddTemplateList,
  value,
  handleInputChange,
  handleDelete
}) {
  const { templateLists } = lists;
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/template_lists/${id}`)
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <div style={style2}>
        <TextField
          id="template-list"
          label="Agregar Plantilla"
          variant="outlined"
          sx={{ width: '100%' }}
          value={value}
          onChange={handleInputChange}
        />
        <div>
          <AddCircleIcon
            onClick={handleAddTemplateList}
            color="primary"
            sx={{ cursor: 'pointer', marginTop: '0.4rem', marginLeft: '0.8rem', fontSize: '40px' }}
          />
        </div>
      </div>
      {templateLists?.map(({ id, name }) => (
        <div key={id}>
          <ListItem>
            <ListItem sx={{ padding: 0 }} button onClick={() => handleClick(id)}>
              <div style={{ marginRight: '10px' }}>🏐</div>
              <ListItemText primary={name} />
            </ListItem>
            <DeleteForeverRoundedIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => handleDelete(id)}
              color="primary"
            />
          </ListItem>
          <Divider light />
        </div>
      ))}
    </List>
  )
};

export default ListComponent;
