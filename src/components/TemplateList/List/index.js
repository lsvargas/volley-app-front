import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import AutocompleteComponent from '../../Autocomplete';


const style = {
  width: '100%',
  maxWidth: 400,
  bgcolor: 'background.paper',
};

const style2 = {
  justifyContent: 'start',
  display: 'flex',
  marginLeft: '0.5rem',
  marginTop: '1.5rem'
};

function ListComponent({
  users,
  handleDeletePlayer,
  handleAddPlayer,
  allUsers,
  value,
  setValue,
  usersLoading
}) {
  return (
    <>
      <div style={style2}>
        <AutocompleteComponent
          allUsers={allUsers}
          users={users}
          value={value}
          setValue={setValue}
          usersLoading={usersLoading}
          title="Agregar voleibolista"
        />
        <div>
          <AddCircleIcon
            onClick={handleAddPlayer}
            color="primary"
            sx={{ cursor: 'pointer', marginTop: '0.4rem', marginLeft: '0.8rem', fontSize: '40px' }}
          />
        </div>
      </div>
  
      <List sx={style} component="nav" aria-label="mailbox folders">
        {users?.map(({ userId, name, lastname }, idx) => (
          <div key={userId}>
            <ListItem>
              <ListItemText primary={`${idx + 1}. ${name} ${lastname}`} />
              <DeleteForeverRoundedIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => handleDeletePlayer({ userId })}
                color="primary"
              />
            </ListItem>
            <Divider light />
          </div>
        ))}
      </List>
    </>
  )
};

export default ListComponent;