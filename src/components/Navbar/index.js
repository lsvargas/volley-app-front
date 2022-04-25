import { Link } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

const style = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '1rem',
    marginTop: '0.5rem'
  }
}

function Navbar({ theme, colorMode }) {
  

  return (
    <div>
      {/* <div style={style.navbar}>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div> */}
    </div>
  )
}

export default Navbar;
