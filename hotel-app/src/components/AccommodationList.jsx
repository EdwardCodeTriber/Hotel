import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccommodations } from '../redux/slices/accommodationSlice';
import AccommodationCard from '../components/AccommodationCard';
import { Grid, CircularProgress, Typography, Box } from '@mui/material';

const AccommodationList = () => {
  const dispatch = useDispatch();
  const { list: accommodations, loading, error } = useSelector((state) => state.accommodations);

  useEffect(() => {
    dispatch(fetchAccommodations());
  }, [dispatch]);

  if (loading) {
    return <Box display="flex" justifyContent="center" alignItems="center"><CircularProgress /></Box>;
  }

  if (error) {
    return <Typography color="error" align="center">Error: {error}</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {accommodations.map((accommodation) => (
        <Grid item xs={12} sm={6} md={4} key={accommodation.id}>
          <AccommodationCard accommodation={accommodation} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AccommodationList;
