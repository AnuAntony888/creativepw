import React, { useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Grid } from "@mui/material";
import { Banner1, TypographyText } from "../ReusableComponent/Reusab";

const Freequate = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
 
  return (
    <div>
     <Banner1 image="https://ik.imagekit.io/jlco9jzsq/creativepower/career-success-path-stair.jpg?updatedAt=1710091807740" /> 
   
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
            Typography={<>Careers</>}
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
        <Grid item xs={12}  >
          <TypographyText
            textAlign='left'
                      fontSize="15px"
            Typography={<>
            Welcome to Creative Power Electromechanical Works L.L.C, where opportunities for talented individuals abound. If you possess experience or qualifications pertinent to our industry and believe you can contribute to our internal operations or external projects, we invite you to reach out to us today. Our workforce comprises a diverse array of engineers, designers, and service professionals, all working towards a common goal of efficiency and excellence.
<br/><br/>
</>}
                      color="#6a7c92"
                    />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} >
        <img
              src={'https://ik.imagekit.io/jlco9jzsq/creativepower/colorful-we-re-hiring-join-our-team-message-vector.jpg?updatedAt=1710091807996'}
              alt=""
              width="100%"
              style={{
                maxHeight: "50vh",
                minHeight: "50vh",
                borderRadius: "10px",
              }}
            />
          </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} >
        <TypographyText
            textAlign='left'
                      fontSize="15px"
            Typography={<>
              At Creative Power, we prioritize building a cohesive team dedicated to overcoming challenges with a positive, "can-do" attitude. We provide comprehensive training and support to facilitate the growth and development of our employees, fostering a conducive work environment where everyone can thrive.
              <br/><br/>    Join us on our journey towards continued success and be part of a welcoming and supportive community. At Creative Power, we value individuals who share our vision and contribute to our collective achievements.
<br/><br/>
              To apply for a position with Creative Power Electromechanical Works L.L.C, kindly submit your cover letter along with your updated resume to: <a href="mailto:INFO@CREATIVEPW.COM" className="blodcontent1">INFO@CREATIVEPW.COM</a>

            </>}
                      color="#6a7c92"
                    />
          </Grid>
        </Grid>
    </div>
  );
};

export default Freequate;
