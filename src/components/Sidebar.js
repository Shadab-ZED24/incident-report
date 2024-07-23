import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Report';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button component={RouterLink} to="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={RouterLink} to="/submit">
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Submit Incident" />
          </ListItem>
          <ListItem button component={RouterLink} to="/admin">
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Admin Panel" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
