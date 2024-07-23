import React, { useContext } from 'react';
import { Container, Grid, Typography, Box, Paper, Divider, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { IncidentContext } from '../context/IncidentContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AdminDashboardPage = () => {
  const { incidents, updateIncidentStatus } = useContext(IncidentContext);

  const totalIncidents = incidents.length;
  const pendingIncidents = incidents.filter((incident) => incident.status === 'pending').length;
  const approvedIncidents = incidents.filter((incident) => incident.status === 'approved').length;
  const rejectedIncidents = incidents.filter((incident) => incident.status === 'rejected').length;

  const data = {
    labels: ['Pending', 'Approved', 'Rejected'],
    datasets: [
      {
        label: 'Incident Status',
        data: [pendingIncidents, approvedIncidents, rejectedIncidents],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => (
        <Box>
          <IconButton color="primary" onClick={() => handleApprove(params.row.id)}>
            <CheckIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleReject(params.row.id)}>
            <CancelIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const rows = incidents.map((incident) => ({
    id: incident.id,
    title: incident.title,
    description: incident.description,
    date: incident.date,
    location: incident.location,
    status: incident.status,
  }));

  const handleApprove = (id) => {
    updateIncidentStatus(id, 'approved');
  };

  const handleReject = (id) => {
    updateIncidentStatus(id, 'rejected');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Header title="Admin Dashboard" />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
                <Typography variant="h6">Total Incidents</Typography>
                <Typography variant="h4">{totalIncidents}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
                <Typography variant="h6">Pending Incidents</Typography>
                <Typography variant="h4">{pendingIncidents}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
                <Typography variant="h6">Approved Incidents</Typography>
                <Typography variant="h4">{approvedIncidents}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Incident Status Overview</Typography>
                <Line data={data} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Incident List</Typography>
                <Divider />
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboardPage;
