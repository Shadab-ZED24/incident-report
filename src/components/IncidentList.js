import React, { useContext } from 'react';
import { IncidentContext } from '../context/IncidentContext';
import IncidentItem from './IncidentItem';
import { List, Typography, Box } from '@mui/material';

const IncidentList = () => {
  const { incidents } = useContext(IncidentContext);

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Incident List
      </Typography>
      <List>
        {incidents.map((incident) => (
          <IncidentItem key={incident.id} incident={incident} />
        ))}
      </List>
    </Box>
  );
};

export default IncidentList;
