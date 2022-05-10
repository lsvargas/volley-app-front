import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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

const chipStyle = closed => closed 
  ? { backgroundColor: "#f38585", color: "black" } 
  : { backgroundColor: "#66bb6a", color: "black" };

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
      {lists?.map(({ id, name, date, closed }) => (
        <div key={id}>
          <ListItem>
            <ListItem sx={{ padding: 0 }} button onClick={() => handleClick(id)}>
              <Box style={{ marginRight: '10px' }}>🏐</Box>
              <ListItemText primary={name} />
            </ListItem>

            <Box mr={5}>
              <Chip
                sx={{ alignSelf: 'center', ...chipStyle(closed) }}
                label={closed ? 'Cerrada' : 'Abierta'}
              />
            </Box>

            <Box display="flex">
              <Box mr="10px" color="#a8a9ad" alignSelf="center">
                {parseDate(date)}
              </Box>
              <DeleteForeverRoundedIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => handleDelete(id)}
                color="primary"
              />
            </Box>

          </ListItem>
          <Divider light />
        </div>
      ))}
    </List>
  )
};

export default ListComponent;
