import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListItem, ListItemText, ListItemSecondaryAction, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const IncidentItem = ({ incident }) => {
  return (
    <ListItem
      sx={{
        mb: 2,
        p: 2,
        borderRadius: '8px',
        boxShadow: 1,
        bgcolor: 'white',
      }}
    >
      <ListItemText
        primary={incident.title}
        secondary={incident.description}
      />
      <ListItemSecondaryAction>
        <Button component={RouterLink} to={`/edit/${incident.id}`} variant="outlined" color="primary">
          <EditIcon />
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default IncidentItem;
