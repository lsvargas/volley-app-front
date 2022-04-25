import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const style = {
  width: '100%',
  maxWidth: 400,
  bgcolor: 'background.paper',
};

const parseDate = date => {
  const arr = date.split('T')[0].split('-');

  return `${arr[2]}/${arr[1]}/${arr[0]}`
}


function ListComponent({
  lists,
  handleDelete
}) {
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/lists/${id}`)
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {lists?.map(({ id, name, date }) => (
        <div key={id}>
          <ListItem>
            <ListItem sx={{ padding: 0 }} button onClick={() => handleClick(id)}>
              <div style={{ marginRight: '10px' }}>🏐</div>
              <ListItemText primary={name} />
            </ListItem>
            <div style={{ marginRight: '1rem', color: '#a8a9ad' }}>
              {parseDate(date)}
            </div>
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
