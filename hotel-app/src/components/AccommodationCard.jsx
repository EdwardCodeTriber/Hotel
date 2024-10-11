import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccommodationCard = ({ accommodation }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/accommodation/${accommodation.id}`);
  };

  return (
    <Card>
      <CardMedia component="img" height="140" image={accommodation.image} alt={accommodation.name} />
      <CardContent>
        <Typography variant="h6">{accommodation.name}</Typography>
        <Typography variant="body2" color="textSecondary">{accommodation.address}</Typography>
        <Typography variant="subtitle1" color="primary">R {accommodation.price}/night</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleViewDetails}>View Details</Button>
        <Button size="small" color="secondary">Add to Favorites</Button>
      </CardActions>
    </Card>
  );
};

export default AccommodationCard;
