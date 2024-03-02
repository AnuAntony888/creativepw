import React from 'react'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from '@mui/material';
const Home2 = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
        <Grid
        container
        spacing={2}
        sx={{
       p:'6%',
          backgroundColor:'wheat'
          
        }}
      >
                <Grid item lg={7} md={8} xs={12} sm={12} sx={{ margin: "auto" }}>
                    dddddd
                </Grid>
      </Grid>
    </div>
  )
}

export default Home2