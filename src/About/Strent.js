import React, { useEffect } from "react";
import {
  Banner1,
  MetaComponent,
  TypographyText,
} from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import int from "../Assets/str1.png";

const Strent = () => {
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
        dynamicTitle="Our Strength | Creative Power EMC - MEP Contractor Dubai"
        dynamicKeywords="Creative Power EMC strength, MEP contractor Dubai, Electromechanical solutions UAE, Experienced MEP contractor, Innovative MEP solutions, Superior project management, Skilled engineers, Cutting-edge technology, Quality craftsmanship, MEP excellence, Dubai electromechanical contractor."
        dynamicDescription="Discover the strengths of Creative Power EMC, the premier MEP contractor in Dubai. Our expertise, experience, and commitment to excellence set us apart in delivering top-quality electromechanical solutions for diverse projects."
      />
      <Banner1 image="https://media.istockphoto.com/id/625736338/photo/stack-of-hands-showing-unity.jpg?s=612x612&w=0&k=20&c=20mAQjGRQ5XVKqHe2qFguqGZ4dwto6lxxinciCfnVI0=" />
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
            Typography={<>Our Strength</>}
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
                At Creative Power Electromechanical Works L.L.C, our strength
                lies in the fusion of innovation, expertise, and unwavering
                dedication. With a team of highly skilled professionals, we
                embark on each project with a relentless commitment to
                excellence. From conceptualization to execution, we leverage our
                technical prowess and management proficiency to ensure that
                every endeavor surpasses expectations. Our relentless pursuit of
                quality and client satisfaction defines us, making Creative
                Power Electromechanical Works L.L.C a trusted partner in
                delivering exceptional solutions.
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
                We are Enrolled IN DEWA & Related Authorities, Our employees are
                our strength. A team of highly experienced, competent &
                motivated professionals runs this operation to execute each
                project to the client’s satisfaction. The team includes from
                technical expertise to the management team of professionals, who
                is committed to ensure that each project is completed within the
                time frame and budget while meeting the quality.
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
                Our strength just not stops in the aforesaid but our operational
                practices are focused on identifying, understanding and meeting
                the needs and expectations of our customers. A well-organized &
                efficient services crew with a highly flexible style of
                management, where we are able to provide fast and accurate
                responses to our client enquiries consistently. A
                well-established & time tested mobile services setup with
                financial strength & stability.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <img
            src="https://greenbuildingscareermap.org/assets/images/MEP-Contractor_resized.jpg"
            alt=""
            width="100%"
            style={{ maxHeight: "50vh" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Strent;
