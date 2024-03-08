import React, { useEffect } from "react";
import { Banner1, MetaComponent, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import int from "../Assets/qu1.jpg";
import int1 from "../Assets/qu2.jpg";
const Quality = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
         <MetaComponent
        dynamicTitle="Quality Assurance | Creative Power EMC - MEP Contractor Dubai"
        dynamicKeywords="Creative Power EMC quality assurance, MEP contractor Dubai, Electromechanical solutions UAE, Quality control measures, MEP project quality, Superior craftsmanship, Quality assurance protocols, Dubai electromechanical contractor, MEP excellence, Quality assurance standards."
        dynamicDescription="At Creative Power EMC, we prioritize quality assurance to ensure excellence in every project. Learn about our stringent quality control measures and commitment to delivering superior MEP solutions in Dubai and beyond."
      />
      <Banner1 image="https://pairee.com/wp-content/uploads/2020/05/shutterstock_1155561991-scaled.jpg" />
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
            Typography={<>Quality Assurance</>}
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
                Quality jobs at competitive rates and service is our motto.
                Creative Power Electro Mechanical L.L.C Services has set high
                standards in delivering quality work to the best of our valuable
                client’s and customer’s satisfaction, where we equipped with all
                modern tools & machineries for smooth and quality services of
                course with qualified technicians. Our technical experts design,
                install and fine-tune of HVAC systems for downtown high-rises,
                hospitals, universities, hotels, etc.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>

        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <img src={int1} alt="" width="100%" style={{ maxHeight: "50vh" }} />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <TypographyText
            fontSize="15px"
            Typography={
              <>
                Quality jobs at competitive rates and service is our motto.
                Creative Power Electro Mechanical L.L.C Services has set high
                standards in delivering quality work to the best of our valuable
                client’s and customer’s satisfaction, where we equipped with all
                modern tools & machineries for smooth and quality services of
                course with qualified technicians. Our technical experts design,
                install and fine-tune of HVAC systems for downtown high-rises,
                hospitals, universities, hotels, etc.
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
                Our quality assurance programs ensure with the clients specs,
                international standards and codes. We have built in culture of
                focus and performance towards the customer’s and client’s needs.
                We vouch for quality work and services by a team of
                professionals in their experienced leadership.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <img
            src={int}
            alt=""
            width="100%"
            style={{ maxHeight: "50vh", minHeight: "30vh" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Quality;
