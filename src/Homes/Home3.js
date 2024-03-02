import { Box, Grid } from '@mui/material'
import React from 'react'
import { Buttons, TypographyText } from '../ReusableComponent/Reusab'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from 'react-slick';
import pro from '../Assets/pr1.png'
import pro1 from '../Assets/pr2.png'
import pro2 from '../Assets/pr3.png'
import pro3 from '../Assets/pro4.png'
import pro4 from '../Assets/pro6.png'
import pro5 from '../Assets/pro7.png'
const Home3 = () => {
    const project = [{ img: pro },
        { img: pro1 }, { img: pro2 }, { img: pro3 },
        {img:pro4},{img:pro5}]
    const settings = {
        autoplay: true,
    
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
    <Grid
        container
        spacing={2}
        sx={{
          pr: "6%",
          pt: "4%",
          pb: "40px",
          pl: "6%",
          justifyContent: "center",
       
            
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>Our Projects</>}
            color="#1E1666"
            fontSize={sizes}
            fontWeight="600"
          />
        </Grid>
        <Grid item xs={12}>
          <hr
            width="50px;"
            color="red"
            size="5"
            style={{ margin: "auto" }}
          ></hr>
              </Grid>
              <Grid item xs={12}>
     
                  

            







                  </Grid>
          </Grid>
          {/* <Grid
        container
        spacing={2}>
          <Box className="slider-container" >
        <Slider {...settings}>
                          {project.map((data, index) => (
                              <div>
                                  <img src={data.img} alt='' width='100%' />
                                  </div>
                            ))}
              </Slider>
              </Box>
              </Grid> */}
    </div>
  )
}

export default Home3
