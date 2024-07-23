import React, { useContext } from 'react';
import { IncidentContext } from '../context/IncidentContext';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const Dashboard = () => {
  const { incidents } = useContext(IncidentContext); // Make sure IncidentContext is correctly imported

  if (!incidents) {
    return <Typography>No incidents found.</Typography>;
  }

  const totalIncidents = incidents.length;

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Total Incidents
              </Typography>
              <Typography variant="h4" component="div">
                {totalIncidents}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
