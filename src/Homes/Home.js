import React, { useEffect } from 'react'
import Homecontent from './Homecontent'
import Home2 from './Home2'
import { Box } from '@mui/material'
import Home3 from './Home3'
import Home4 from './Home4'
import { MetaComponent } from '../ReusableComponent/Reusab'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  return (
    <Box >
      <MetaComponent/>
        <Homecontent/>
      <Home2 />
      <Home3 />
      <Home4/>
    </Box>
  )
}

export default Home