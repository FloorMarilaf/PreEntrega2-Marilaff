import { Box,Tab,Tabs } from "@mui/material";
import React from 'react'
const Main = () => {
    const [currentCategory, setCurrentCategory]= React.useState('cat1')
    const handleChange = (_, value) => {
        setCurrentCategory (value); 
    }
    return(
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={1}  aria-label="basic tabs example">
          <Tab label="Destacados" value={'cat1'} />
          <Tab label="Pipas" value={'cat2'} />
          <Tab label="Ceniceros" value={'cat3'} />
          <Tab label="Sedas" value={'cat4'} />
          
        </Tabs>
      </Box>
     
    </Box>

    )
}

export default Main; 