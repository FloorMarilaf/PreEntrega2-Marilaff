import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../cart-widget';
import logo from './assets/logo2.png';


const NavBar = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundColor:'#8ebb90'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo"/>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         
        </Typography>
        <CartWidget />
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar;