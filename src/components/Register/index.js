import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const style = {
  width: '100%',
  maxWidth: 400,
  bgcolor: 'background.paper',
};

function RegisterForm({
  credentials,
  handleInputChange,
  handleClickShowPassword,
  showPassword,
  handleMouseDownPassword,
  handleSubmit
}) {
  
  const { name, password, email } = credentials;
  return (
    <div style={style}>
      <TextField
        id="template-list-name"
        label="Nombre"
        variant="outlined"
        sx={{ width: '100%', marginBottom: '1rem' }}
        value={name}
        onChange={(event) => handleInputChange(event, 'name')}
      />
      <TextField
        id="template-list-lname"
        label="Email"
        variant="outlined"
        sx={{ width: '100%', marginBottom: '1rem' }}
        value={email}
        onChange={(event) => handleInputChange(event, 'email')}
      />
      <FormControl sx={{ width: '100%' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Contraseña  </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={event => handleInputChange(event, 'password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Contraseña"
        />
        <Button
          sx={{  width: '100%', marginTop: '2rem', minHeight: '50px' }}
          variant="contained"
          onClick={handleSubmit}
        >
          Registrarse
        </Button>
      </FormControl>
    </div>
  );
}

export default RegisterForm;
