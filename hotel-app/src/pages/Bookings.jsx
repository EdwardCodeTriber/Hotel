import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBooking } from '../redux/slices/bookingSlice';
import { TextField, Button, Box, Typography } from '@mui/material';

const Booking = ({ accommodationId }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const dispatch = useDispatch();

  const handleBooking = () => {
    dispatch(createBooking({ accommodationId, checkIn, checkOut, guests }));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" gutterBottom>Book Your Stay</Typography>
      <TextField label="Check-In Date" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
      <TextField label="Check-Out Date" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
      <TextField label="Guests" type="number" value={guests} onChange={(e) => setGuests(e.target.value)} fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={handleBooking}>Confirm Booking</Button>
    </Box>
  );
};

export default Booking;
