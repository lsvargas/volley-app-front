import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const responsiveFS = { sm: 15, lg: 20, md: 20, xs: 11 };

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
    <Grid container pl="0.5rem" spacing={2}>
      {lists?.map(({ id, name, date, closed }) => (
        <>
          <Grid display="flex" item xs={5}>
            <ListItem sx={{ p: 0 }} button onClick={() => handleClick(id)}>
              <Box marginRight="2px" alignSelf="center">🏐</Box>
              <Typography sx={{ alignSelf: 'center' }} fontSize={{ ...responsiveFS }}>
                {name}
              </Typography>
            </ListItem>
          </Grid>
    
          <Grid item xs={3} >
            <Chip
              sx={{ alignSelf: 'center', fontSize: 12, ...chipStyle(closed) }}
              label={closed ? 'Cerrada' : 'Abierta'}
            />
          </Grid>
    
          <Grid display="flex" item xs={4}>
            <Box fontSize={{ ...responsiveFS }} marginRight="2px" color="#a8a9ad" alignSelf="center">
              {parseDate(date)}
            </Box>
            <DeleteForeverRoundedIcon
              sx={{ cursor: 'pointer', alignSelf: 'center' }}
              onClick={() => handleDelete(id)}
              color="primary"
            />
          </Grid>      
          <Divider light />
        </>
      ))}
    </Grid>

  )
};

export default ListComponent;
