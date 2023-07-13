import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CartWidget from '../cart-widget';
import logo from './assets/logo2.png';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" justifyContent= {'spacce-around'} sx={{backgroundColor:'#8ebb90'}}>
      <Toolbar display={'flex'} justifyContent={'start'} flexDirection= {'row'} gap ={7}>
        <Box >
        <Link display={'flex'} justifyContent={'space-around'} flexDirection={'row'} gap={7}> <img src={logo} alt="logo"/></Link>
        </Box>
        <Box display={'flex'} justifyContent={'space-around'} flexDirection={'row'} gap={7}>
          <NavLink to ={`/category/picadores`}className ={({isActive})=>isActive ? 'ActiveOption': 'Option'}>Picadores</NavLink>
          <NavLink to ={`/category/pipas`}className ={({isActive})=>isActive ? 'ActiveOption': 'Option'}>Pipas</NavLink>
          <NavLink to ={`/category/ceniceros`}className ={({isActive})=>isActive ? 'ActiveOption': 'Option'}>Ceniceros</NavLink>
          <NavLink to ={`/category/sedas`}className ={({isActive})=>isActive ? 'ActiveOption': 'Option'}>Sedas</NavLink>
        </Box>
        <Box> 
          <CartWidget />
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar;