import React from 'react'
import Homecontent from './Homecontent'
import Home2 from './Home2'
import { Box } from '@mui/material'
import Home3 from './Home3'
import Home4 from './Home4'

const Home = () => {
  return (
    <Box >
        <Homecontent/>
      <Home2 />
      <Home3 />
      <Home4/>
    </Box>
  )
}

export default Home