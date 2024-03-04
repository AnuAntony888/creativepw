


import React, { useEffect } from "react";
import { Banner1, TypographyText } from "../ReusableComponent/Reusab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import int from "../Assets/saf.jpg";

const Saftey = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const sizes = isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px";
  return (
    <div>
      <Banner1 image="https://intlreg.org/wp-content/uploads/2019/08/shutterstock_559573252-by-Anatoly-Menzhiliy-1280x640.jpg" />
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
            Typography={<>Safety Management</>}
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
       

        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <img src={int} alt="" width="100%" style={{ maxHeight: "50vh" }} />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <TypographyText
            fontSize="15px"
            Typography={
              <>
          In Creative Power Electro Mechanical L.L.C we believe that SAFETY is a conceptual revolution. A fundamental transformation of the way people learn, do business, relate to each other and seek fulfillment in life and work. The accidents represent a social loss of great magnitude in the form of pain, loss of earning capacity and cost due to disturbance on economic efficiency.  Safety is our basic tool to gain freedom from accidents and preserving lives and keeping families together.
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
             Creative Power Electro Mechanical L.L.C pays every importance to health and safety from the humanitarian, economic, and legal viewpoint. It is the policy of our company to provide and maintain safe and healthy working conditions and to follow operating practices that safeguard all employees, which will result in efficient operations. In line with this policy, management of the organization is committed to the protection of its human resources, properties and the environment. To attain our objective of ZERO ACCIDENTS, and Vigorous efforts are extended to accident prevention in all possible ways and implications. We consider the same as an important element in our construction process under the direct responsibility of the project execution team.
              </>
            }
            color="#6a7c92"
            textAlign="left"
          />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.0p2TXALL5ffDiTTGWJy5hQHaFj&pid=Api&P=0&h=180"
            alt=""
            width="100%"
            style={{ maxHeight: "50vh" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Saftey;

