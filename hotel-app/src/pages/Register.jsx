import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/authSlice';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleRegister = () => {
    dispatch(registerUser({ email, password, displayName }));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField label="Name" variant="outlined" value={displayName} onChange={(e) => setDisplayName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
      <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" />
      {loading ? <CircularProgress /> : <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>}
      {error && <Typography color="error" mt={2}>{error}</Typography>}
    </Box>
  );
};

export default Register;
