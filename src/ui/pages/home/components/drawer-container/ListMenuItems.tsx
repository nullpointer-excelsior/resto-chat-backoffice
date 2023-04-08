import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link, useNavigate } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function ListMenuItems() {

  const navigate = useNavigate();

  return (
    <React.Fragment>
  
      <ListItemButton onClick={() => navigate('/home/dashboard')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
          <ListItemText primary="Resumen diario" >
          </ListItemText>
      </ListItemButton>
  
      <ListItemButton onClick={() => navigate('/home/restaurant')}>
        <ListItemIcon>
          <RestaurantIcon />
        </ListItemIcon>
          <ListItemText primary="My Restaurant" />
      </ListItemButton>
  
      <ListItemButton onClick={() => navigate('/home/menu')}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
          <ListItemText primary="My Menu" />
      </ListItemButton>
  
    </React.Fragment>
  )
};
