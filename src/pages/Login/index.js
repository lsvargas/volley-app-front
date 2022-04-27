import { useState, useContext } from 'react';
import { useMutation } from "@apollo/client";
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/Login';
import { AuthContext } from '../../context/authContext';
import { LOGIN_USER } from './graphql';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handleComplete = ({ loginUser }) => {
    context.login(loginUser)
    navigate('/')
  };

  const [loginUser] = useMutation(LOGIN_USER, {
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
    const { email, password } = credentials;
    loginUser({ variables: { email, password }});
  };
  
  return (
    <>
      <Typography sx={{ marginLeft: '0.5rem', marginBottom: '2rem' }} variant="h4">
        Login
      </Typography>

      <LoginForm
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

export default Login;
