import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
        <Link to="/home/dashboard" >
        <ListItemText primary="Resumen diario" >
        </ListItemText>
        </Link>
    </ListItemButton>

    {/* <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
        <ListItemText primary="Test" />
    </ListItemButton> */}

    <ListItemButton>
      <ListItemIcon>
        <RestaurantIcon />
      </ListItemIcon>
      <Link to="/home/restaurant">
        <ListItemText primary="My Restaurant" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <Link to="/home/menu">
        <ListItemText primary="My Menu" />
      </Link>
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Mesas" />
    </ListItemButton> */}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);