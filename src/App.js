import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubmitIncidentPage from './pages/SubmitIncidentPage';
import EditIncidentPage from './pages/EditIncidentPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmitIncidentPage />} />
        <Route path="/edit/:id" element={<EditIncidentPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </Container>
  );
};

export default App;
