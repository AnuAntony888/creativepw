// import React from 'react'

// const Mission = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Mission

import React, { useEffect } from "react";
import { Banner1, MetaComponent, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import int from "../Assets/vis.png";
import int2 from "../Assets/int2.jpg";
const Mission = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
      }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
          <MetaComponent dynamicTitle='Our Mission and Vision | Creative Power EMC - MEP Contractor Dubai'
        dynamicKeywords='Our Mission and Vision, Creative Power EMC mission, Vision of Creative Power EMC, MEP solutions Dubai, Leading MEP contractor vision, Electromechanical contractor mission, Innovative MEP solutions, Superior service Dubai, MEP contractor goals, Client satisfaction vision, MEP excellence vision.'
        dynamicDescription='At Creative Power EMC, our mission is to deliver exceptional MEP solutions in Dubai and beyond. Our vision drives us to be the leading electromechanical contractor, exceeding client expectations with innovative solutions and superior service'/>
      <Banner1 image="https://base.ac.in/wp-content/uploads/2018/10/vision-mission-banner-e1539427773777.png" />
      <Grid
        container
        spacing={2}
        sx={{
          pr: "6%",

          pb: "40px",
          pl: "6%",
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>Mission & Vission</>}
            fontSize={sizes}
            fontWeight="600"
          />
        </Grid>
        <Grid item xs={12}>
          <hr
            width="50px;"
            color="#DA117B"
            size="5"
            style={{ margin: "auto" }}
          ></hr>
        </Grid>
        <Grid item xs={12}>
          <TypographyText
            fontSize="15px"
            Typography={
              <>
                At Creative Power Electromechanical Works L.L.C, we are
                committed to excellence in everything we do. Our dedication to
                integrity, innovation, and customer satisfaction drives us
                forward each day. We believe in creating enduring value for our
                clients, employees, and stakeholders by delivering high-quality,
                sustainable solutions that exceed expectations and contribute
                positively to the world around us.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
     
     
                    <Grid item xs={12}>
          <TypographyText
            Typography={<>Mission </>}
            fontSize={sizes}
                      fontWeight="600"
                      textAlign='left'
          />
        </Grid>
        <Grid item xs={12}>
          <hr
            width="50px;"
            color="#DA117B"
            size="5"
            style={{ margin: "0" }}
          ></hr>
        </Grid>
              <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
                  <Banner1 image='https://solidbranding.com/wp-content/uploads/2015/08/MISSION_Banner_3A-1140x570.jpg'/>
              </Grid>
            <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
              <TypographyText
                fontSize="15px"
                Typography={'At Creative Power Electromechanical Works L.L.C, our mission is to be the driving force behind exceptional electromechanical solutions that empower our clients and communities. We are dedicated to delivering innovative and sustainable engineering services that exceed expectations, enhance comfort, and ensure the safety and efficiency of the spaces we serve. With a commitment to integrity, professionalism, and client satisfaction, we strive to build lasting partnerships and make a positive impact on the industries we operate in.'}
                color="#6a7c92"
                textAlign="left"
              />
            </Grid>
            <Grid item xs={12}>
          <TypographyText
            Typography={<>Vision </>}
            fontSize={sizes}
                      fontWeight="600"
                      textAlign='left'
          />
        </Grid>
        <Grid item xs={12}>
          <hr
            width="50px;"
            color="#DA117B"
            size="5"
            style={{ margin: "0" }}
          ></hr>
        </Grid>
              
            <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
              <TypographyText
                fontSize="15px"
                Typography={'At Creative Power Electromechanical Works L.L.C, our mission is to be the driving force behind exceptional electromechanical solutions that empower our clients and communities. We are dedicated to delivering innovative and sustainable engineering services that exceed expectations, enhance comfort, and ensure the safety and efficiency of the spaces we serve. With a commitment to integrity, professionalism, and client satisfaction, we strive to build lasting partnerships and make a positive impact on the industries we operate in.'}
                color="#6a7c92"
                textAlign="left"
              />
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
                  <Banner1 image='https://tse3.mm.bing.net/th?id=OIP.TTPv3wjs5E0ia7fdPj_EIgHaDe&pid=Api&P=0&h=180'/>
              </Grid>
      </Grid>
    </div>
  );
};

export default Mission;


