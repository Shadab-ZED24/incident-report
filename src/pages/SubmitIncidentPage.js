import React from 'react';
import IncidentForm from '../components/IncidentForm';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const SubmitIncidentPage = () => {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: 'background.default',
          p: 4,
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Submit Incident
        </Typography>
        <IncidentForm />
        <Button component={RouterLink} to="/" variant="contained" color="secondary" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default SubmitIncidentPage;
