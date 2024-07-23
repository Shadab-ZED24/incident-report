import React, { useState, useContext } from 'react';
import { IncidentContext } from '../context/IncidentContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

const IncidentForm = ({ incident }) => {
  const { addIncident, updateIncident } = useContext(IncidentContext);
  const [formData, setFormData] = useState({
    title: incident ? incident.title : '',
    description: incident ? incident.description : '',
    date: incident ? incident.date : '',
    location: incident ? incident.location : '',
  });

  const navigate = useNavigate();

  // Assume a logged-in user ID is available; replace with actual logic for your app
  const userId = 1; // Replace with actual user ID

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (incident) {
      updateIncident({ ...formData, id: incident.id, userId });
    } else {
      addIncident(formData, userId);
    }
    navigate('/');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        mx: 'auto',
      }}
    >
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <TextField
        label="Date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        fullWidth
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default IncidentForm;
