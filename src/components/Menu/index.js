
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function MenuComponent() {
  const navigate = useNavigate();

  const handleNavigation = route => {
    navigate(route)
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginTop: '1rem', marginBottom: '0.5rem' }}>
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
      </div>
    </Box>
  );
}

export default MenuComponent;
