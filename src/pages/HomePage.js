import React, { useContext } from 'react';
import { Container, Typography, Button, Box, Grid, List, ListItem, ListItemText, ListItemSecondaryAction, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ReportIcon from '@mui/icons-material/Report';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EditIcon from '@mui/icons-material/Edit';
import { IncidentContext } from '../context/IncidentContext';

const HomePage = () => {
  const { incidents } = useContext(IncidentContext);

  // Assume a logged-in user ID is available; replace with actual logic for your app
  const userId = 1; // Replace with actual user ID

  const userIncidents = incidents.filter(incident => incident.userId === userId);

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
          <HomeIcon sx={{ mr: 1 }} /> Home Page
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button
              component={RouterLink}
              to="/submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 2 }}
            >
              <ReportIcon sx={{ mr: 1 }} /> Submit New Incident
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              component={RouterLink}
              to="/admin"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ py: 2 }}
            >
              <AdminPanelSettingsIcon sx={{ mr: 1 }} /> Admin Dashboard
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom>
          My Incidents
        </Typography>
        <List>
          {userIncidents.length > 0 ? (
            userIncidents.map((incident) => (
              <ListItem
                key={incident.id}
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: '12px',
                  boxShadow: 1,
                  bgcolor: 'white',
                }}
              >
                <ListItemText
                  primary={incident.title}
                  secondary={incident.description}
                />
                <ListItemSecondaryAction>
                  <Chip label={incident.status} color="primary" />
                  <Button
                    component={RouterLink}
                    to={`/edit/${incident.id}`}
                    variant="outlined"
                    color="primary"
                    sx={{ ml: 2 }}
                  >
                    <EditIcon />
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          ) : (
            <Typography>No incidents found.</Typography>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default HomePage;
