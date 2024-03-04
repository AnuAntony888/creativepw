// import React from 'react'

// const Plumbing = () => {
//   return (
//     <div>
//       sss
//     </div>
//   )
// }

// export default Plumbing
// import React from 'react'

// const Electrical = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Electrical

import React, { useEffect } from "react";
import { Banner1, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import int from "../Assets/int1.png";
import int2 from "../Assets/int2.jpg";
const Plumbing = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
      <Banner1 image="https://www.brmep.com/images/bg-2.jpg" />
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
            Typography={<>Introduction</>}
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
                Creative Power Electromechanical Engineering Division provides
                outstanding output in conceptual design and design development.
                The division consists of a fully-fledged design team capable of
                designing MEP Services for Any size of project whether it be
                residential, industrial or commercial.
                <br /> <br />
                Creative Power Electromechanical Maintenance Division is
                responsible for the complete maintenance of our projects during
                their defect liability period with all necessary tools,
                instruments and equipment Creative Power offers complete MEP
                contracting solutions from design, supply, installation, testing
                and commissioning of the MEP systems that include Electrical,
                Fire.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>

        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <img src={int} alt="" width="100%" style={{ maxHeight: "50vh" }} />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <TypographyText
            fontSize="15px"
            Typography={
              <>
                Mechanical : The Mechanical division at Creative Power
                specializes in a diverse range of services critical to various
                industries. They excel in designing and implementing heating,
                ventilation, and air conditioning (HVAC) systems, ensuring
                optimal climate control for different environments. Moreover,
                their expertise extends to automation and control systems,
                facilitating seamless operation and efficiency across industrial
                processes. They are adept at designing solutions for industrial
                and process cooling, guaranteeing optimal temperature regulation
                for manufacturing and production facilities. Additionally, their
                proficiency in refrigeration and air treatment ensures the
                preservation and quality of perishable goods while maintaining
                air quality standards in various settings.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>

        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <TypographyText
            fontSize="15px"
            Typography={
              <>
                Electrical: Specialized in power distribution systems, indoor
                and outdoor lighting, fire detection and alarms, small power and
                control systems, data and structured cabling installations,
                communication systems and other low current systems. Street
                lighting system, tuned lighting system.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <img src={int2} alt="" width="100%" style={{ maxHeight: "50vh" }} />
        </Grid>
        <Grid item xs={12}>
          <TypographyText
            fontSize="15px"
            Typography={
              <>
                Plumbing: Specialized in hot & cold water services, drainage,
                firefighting, plumbing and sanitation, rainwater, sewage
                treatment and water treatment with associated equipment.
                <br />
                <br />
                Creative Power Electro Mechanical Project Execution team carries
                out the entire project execution, project management,
                installation, testing & commissioning and handing over; the team
                will then receive feedback from the other divisions of our Head
                Office in order to satisfy our quality control procedures. The
                team will vary in size and structure according the project
                requirements.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Plumbing;


