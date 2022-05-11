
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { Typography } from '@mui/material';


function MenuComponent() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const handleNavigation = route => {
    navigate(route)
  };

  const handleLogout = () => {
    context.logout();
    navigate('/login')
  };

  const responsiveFS = { sm: 15, lg: 18, md: 20, xs: 12 };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginTop: '1rem', marginBottom: '0.5rem' }}>
      {context?.user && (
        <Box>
          <Button
            onClick={() => handleNavigation('/')}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            <Typography fontSize={{ ...responsiveFS }}>
              Inicio
            </Typography>
          </Button>
          <Button
            onClick={() => handleNavigation('/users')}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            <Typography fontSize={{ ...responsiveFS }}>
              Usuarios
            </Typography>
          </Button>
          <Button
            onClick={() => handleNavigation('/template_lists')}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            <Typography fontSize={{ ...responsiveFS }}>
              Plantillas
            </Typography>
          </Button>
          <Button
            onClick={() => handleNavigation('/lists')}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            <Typography fontSize={{ ...responsiveFS }}>
              Listas
            </Typography>
          </Button>

          <Button
            onClick={handleLogout}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            <Typography fontSize={{ ...responsiveFS }}>
              Logout
            </Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default MenuComponent;
