import * as React from "react";
import { FiberManualRecord as CircleIcon } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Box, Divider, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypographyText } from "../ReusableComponent/Reusab";
const Vertsteps = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Grid
        container
        Spacing={2}
        sx={{
          pl: "10%",
          pr: "10%",
          pt: "6%",
          pb: "6%",
          justifyContent: "center", // Center items horizontally
        }}
      >
        {Data.map((data, index) => (
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            key={index}
            sx={{
              position: "relative",
              paddingLeft: "24px",
              marginBottom: "0px",
              marginTop: "0",

              borderLeft: !isSmallScreen
                ? index === 1 || index === 3 || index === 5 || index === 7
                  ? "solid 2px lightgray"
                  : "none"
                : "none",
            }}
          >
            {!isSmallScreen ? (
              index === 1 || index === 3 || index === 5 || index === 7 ? (
                <CircleIcon
                  sx={{
                    position: "absolute",
                    top: "-10",
                    left: "-12px",
                    color: "#E2E5E9",
                  }} // Adjusted left to fit with the border
                />
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {index === 0 || index === 3 || index === 4 || index === 7 ? (
              <Box sx={{ p: "2%" }}>
                <div
                  data-aos={
                    index === 0 || index === 2 || index === 4 || index === 6
                      ? "fade-right"
                      : "fade-left"
                  }
                >
                  <img src={data.imageUrl} alt={data.altText} width="60%" />
                </div>
              </Box>
            ) : (
              <Box sx={{ p: "2%", mt: !isSmallScreen ? "5%" : "" }}>
                <div
                  data-aos={
                    index === 1 || index === 3 || index === 5 || index === 7
                      ? "fade-left"
                      : "fade-right"
                  }
                >
                  <TypographyText
                    Typography={data.text}
                    color="#1E1666"
                    fontSize="22px"
                    fontWeight="600"
                    textAlign={!isSmallScreen ? "left" : "centre"}
                  />
                  <TypographyText
                    Typography={data.text1}
                    color="#6A7C92"
                    textAlign={!isSmallScreen ? "left" : "centre"}
                  />
                </div>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Vertsteps;

const Data = [
  {
    imageUrl:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/about-titmeline-img1.png",
  },
  {
    text: "Competitor Research",
    text1:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    text: "Google Analytics",
    text1:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    imageUrl:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/about-titmeline-img2.png",
  },

  {
    imageUrl:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/about-titmeline-img3.png",
  },
  {
    text: "Unique Content",
    text1:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    text: "Thematic Links",
    text1:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    imageUrl:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/about-titmeline-img4.png",
  },
];
