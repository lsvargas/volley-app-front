import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
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
  users,
  handleAddUser,
  name,
  lastname,
  handleNameInput,
  handleLastnameInput,
  handleDelete
}) {

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <div style={style2}>
        <TextField
          id="template-list-name"
          label="Nombre"
          variant="outlined"
          sx={{ width: '100%', marginRight: '10px' }}
          value={name}
          onChange={handleNameInput}
        />
        <TextField
          id="template-list-lname"
          label="Apellido"
          variant="outlined"
          sx={{ width: '100%' }}
          value={lastname}
          onChange={handleLastnameInput}
        />
        <div>
          <AddCircleIcon
            onClick={handleAddUser}
            color="primary"
            sx={{ cursor: 'pointer', marginTop: '0.4rem', marginLeft: '0.8rem', fontSize: '40px' }}
          />
        </div>
      </div>
      {users?.map(({ id, name, lastname }) => (
        <div key={id}>
          <ListItem>
            <ListItemText primary={`${name} ${lastname}`} />
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
