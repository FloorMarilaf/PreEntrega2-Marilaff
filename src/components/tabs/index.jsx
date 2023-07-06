import { Box,Tab,Tabs } from "@mui/material";
import React from 'react';
import SectionPicadores from "../pages/home/Picadores";
const TabsCategory = () => {
    const [currentCategory, setCurrentCategory]= React.useState('cat1')
    const handleChange = (_, value) => {
        setCurrentCategory (value); 
    }
    return(
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentCategory}  aria-label="basic tabs example" onChange={handleChange}>
          <Tab label="Picadores" value={'Picadores'} />
          <Tab label="Pipas" value={'Pipas'} />
          <Tab label="Ceniceros" value={'Ceniceros'} />
          <Tab label="Sedas" value={'Sedas'} />

        </Tabs>
      </Box>
      {
        currentCategory ==='Picadores' ?
        <SectionPicadores />
        :
        null
      }
      {
        currentCategory ==='Pipas' ?
        <Box>Pipas</Box>
        :
        null
      }
      {
        currentCategory ==='Ceniceros' ?
        <Box>Ceniceros</Box>
        :
        null
      }
      {
        currentCategory ==='cat4' ?
        <Box>Sedas</Box>
        :
        null
      }



    </Box>

    )
}

export default TabsCategory; 