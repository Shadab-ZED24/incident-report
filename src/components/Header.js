import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {/* Add more header elements here if needed */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
