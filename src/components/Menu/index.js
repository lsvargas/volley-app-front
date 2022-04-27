
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';


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

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginTop: '1rem', marginBottom: '0.5rem' }}>
      {context?.user && (
        <div>
          <Button
            onClick={() => handleNavigation('/')}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            Inicio
          </Button>
          <Button
            onClick={() => handleNavigation('/users')}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            Usuarios
          </Button>
          <Button
            onClick={() => handleNavigation('/template_lists')}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            Plantillas
          </Button>
          <Button
            onClick={() => handleNavigation('/lists')}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            Listas
          </Button>

          <Button
            onClick={handleLogout}
            variant="text"
            sx={{ textTransform: 'capitalize' }}
          >
            Logout
          </Button>
        </div>
      )}
    </Box>
  );
}

export default MenuComponent;
