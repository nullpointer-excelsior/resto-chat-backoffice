import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function ListMenuItems() {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate('/home/dashboard')}>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
          <ListItemText primary="Resumen diario" >
          </ListItemText>
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/home/restaurant')}>
        <ListItemIcon>
          <RestaurantIcon color="secondary" />
        </ListItemIcon>
          <ListItemText primary="My Restaurant" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/home/qr')}>
        <ListItemIcon>
          <RestaurantIcon color="secondary" />
        </ListItemIcon>
          <ListItemText primary="Códigos QR" />
      </ListItemButton>
    </React.Fragment>
  )
};
