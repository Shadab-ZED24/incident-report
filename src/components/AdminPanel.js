// src/components/AdminPanel.js
import React, { useContext } from 'react';
import { IncidentContext } from '../context/IncidentContext';
import { Button, Box } from '@mui/material';

const AdminPanel = () => {
  const { incidents, updateIncidentStatus } = useContext(IncidentContext);

  const handleApprove = (id) => {
    updateIncidentStatus(id, 'approved');
  };

  const handleReject = (id) => {
    updateIncidentStatus(id, 'rejected');
  };

  return (
    <Box>
      {incidents.map((incident) => (
        <Box key={incident.id} sx={{ mb: 2, p: 2, borderRadius: '8px', boxShadow: 1, bgcolor: 'white' }}>
          <h4>{incident.title}</h4>
          <p>{incident.description}</p>
          <p>Status: {incident.status}</p>
          <Button onClick={() => handleApprove(incident.id)} variant="contained" color="success" sx={{ mr: 1 }}>
            Approve
          </Button>
          <Button onClick={() => handleReject(incident.id)} variant="contained" color="error">
            Reject
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default AdminPanel;
