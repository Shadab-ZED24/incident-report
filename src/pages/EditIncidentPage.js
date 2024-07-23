import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IncidentContext } from '../context/IncidentContext';
import IncidentForm from '../components/IncidentForm';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const EditIncidentPage = () => {
  const { id } = useParams();
  const { incidents, updateIncident } = useContext(IncidentContext);
  const [incident, setIncident] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const incidentToEdit = incidents.find((incident) => incident.id === parseInt(id));
    if (incidentToEdit) {
      setIncident(incidentToEdit);
    } else {
      navigate('/');
    }
  }, [id, incidents, navigate]);

  const handleUpdate = (updatedIncident) => {
    updateIncident(updatedIncident);
    navigate('/');
  };

  return (
    <Container>
      <Box
        sx={{
          bgcolor: 'background.default',
          p: 4,
          borderRadius: '12px',
          boxShadow: 3,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          <EditIcon sx={{ mr: 1 }} /> Edit Incident
        </Typography>
        {incident && (
          <IncidentForm
            incident={incident}
            onSubmit={handleUpdate}
          />
        )}
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default EditIncidentPage;
