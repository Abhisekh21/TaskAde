import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,marginLeft:'30px' }}>
            Taskade
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet/>
    </>
  );
}
