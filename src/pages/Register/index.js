import { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { REGISTER_USER } from './graphql';
import RegisterForm from '../../components/Register';
import { AuthContext } from '../../context/authContext';

function Register() {
  const [credentials, setCredentials] = useState({ email: '', password: '', name: '' });
  const [showPassword, setShowPassword] = useState(false);
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handleComplete = ({ registerUser }) => {
    context.login(registerUser)
    navigate('/')
  };

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: handleComplete,
    onError: err => { console.log(err) }
  });

  const handleInputChange = ({ target }, key) => {
    setCredentials(prevValue => ({ ...prevValue, [key]: target.value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(prevValue => !prevValue);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    const { email, password, name } = credentials;
    registerUser({ variables: { email, password, name } });  
  };
  
  return (
    <>
      <Typography sx={{ marginLeft: '0.5rem', marginBottom: '2rem' }} variant="h4">
        Registrate
      </Typography>

      <RegisterForm
        credentials={credentials}
        handleInputChange={handleInputChange}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        showPassword={showPassword}
        handleSubmit={handleSubmit}
      />
    </>

  )
}

export default Register;
