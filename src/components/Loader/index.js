import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 5 }}>
      <CircularProgress size={25} color="primary" sx={{ fontSize: '10px' }}/>
    </Box>
  );
}

export default Loader;
