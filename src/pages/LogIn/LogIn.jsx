// import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { logInUser } from 'redux/auth/authOperations';
import { selectError, selectIsLoggedIn } from 'redux/selectors';
import { LogInContainer, StyledButton } from './LogIn.styled';
import { Notify } from 'notiflix';

export default function LogIn() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const error = useSelector(selectError);
  console.log(error);
  if (error) Notify.failure(`${error}`);

  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const logInUserData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(logInUser(logInUserData));

    form.reset();
  };

  return (
    <LogInContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#97efe9' }}></Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </LogInContainer>
  );
}
