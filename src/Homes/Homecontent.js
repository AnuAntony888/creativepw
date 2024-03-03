import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import Slider from "react-slick";
import { TypographyText } from "../ReusableComponent/Reusab";

function Homecontent() {
  const settings = {
    autoplay: true,

    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const isscreenbw = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <>
      <Box className="slider-container" sx={{ pb: "2%" }}>
        <Slider {...settings}>
          {Data.map((data, index) => (
            <div key={index}>
              {isSmallScreen1 ? (
                <>
                  <img
                    src={data.img}
                    alt=""
                    style={{ width: "100%", height: "100%", zIndex: -1 }}
                  />

                  <Box sx={{ p: "2%", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <TypographyText
                      Typography={data.Txt}
                      color="white"
                      variant={"h6"}
                      fontWeight="600"
                    />
                  </Box>
                </>
              ) : (
                <div style={{ position: "relative" }}>
                  <img
                    src={data.img}
                    alt=""
                    style={{ width: "100%", height: "100%", zIndex: -1 }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0%",
                      left: "0%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      className="text-overlay"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100%",

                        color: "white",
                        padding: "20px",
                        textAlign: "center",
                        zIndex: 1,
                      }}
                    >
                      <div data-aos="zoom-in">
                        <TypographyText
                          Typography={data.Txt}
                          color="white"
                          variant={isSmallScreen ? "h4" : "h3"}
                          fontWeight="600"
                        />

                        <TypographyText
                          Typography={data.Txt1}
                          color="wheat"
                            variant={"h6"}
                            fontWeight='600'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </Box>

      {/********************section 2*************************/}
      <Grid
        container
        spacing={2}
        sx={{
          paddingRight: "6%",
          pl: "6%",
          pt: "1%",pb:'2%'
        }}
      >
        <Grid item lg={7} md={8} xs={12} sm={12} sx={{ margin: "auto" }}>
          <Grid container sx={{}}>
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>
                    Welcome To Creative Power <br />
                    Electromechanical Works L.L.C
                  </>
                }
                // color="#1E1666"
                fontSize={
                  isSmallScreen ? (isSmallScreen1 ? "20px" : "24px") : "30px"
                }
                fontWeight="600"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>
            <Grid item xs={12}>
              <hr
                width="50px;"
                color="#DA117B"
                size="5"
                style={{ margin: !isSmallScreen ? 0 : "auto" }}
              ></hr>
            </Grid>
            <Grid item xs={12}>
              <br />
              <TypographyText
                Typography={
                  <>
                    With Humble beginning in Dubai on 2014 Creative power
                    Electromechanical Contracting has grown into strong team of
                    over 40 providing quality MEP solutions in the UAE.
                    Combining modern management skills with sophisticated,
                    state‐of‐the‐ art technology, Creative power EMC has
                    continued to expand its activities and has acquired
                    invaluable experience and Expertise in the field of M.E.P.
                    contracting under the able leadership of our chairman Mr.
                    Sibin Babu. <br />
                    <br />
                    Creative power EMC has carried out MEP works for various
                    prestigious projects including the royal palaces, government
                    contracts, five star hotels, commercial & residential
                    complexes and Recreational developments. The team of
                    experienced craftsmen and skilled engineers are given the
                    latest in industry equipment and training to ensure
                    consistent quality and reliability. Through the high
                    standards of transparency in their operations and an
                    innovative and adaptive approach Creative power EMC continue
                    to provide a superior level of service and expertise on
                    every project.
                  </>
                }
                color="#6a7c92"
                textAlign="left"
                fontSize={isscreenbw ? ".8rem" : "1rem"}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={5} md={4} xs={12} sm={12} sx={{ margin: "auto" }}>
          <img
            src="https://damiaglobalservices.com/wp-content/uploads/2022/03/hgvgv-1-600x600.jpg"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Homecontent;
const Data = [
  {
    img: "https://www.dubaiwebsitecompany.com/demo/mep/wp-content/uploads/2022/01/S1.jpg",

    Txt: (
      <>
        Creative Power <br />
        Electromechanical Works L.L.C
      </>
    ),
    Txt1: "Leading MEP Company In UAE",
  },
  {
    img: "https://www.dubaiwebsitecompany.com/demo/mep/wp-content/uploads/2022/01/s2.jpg",
    Txt: (
      <>
        Creative Power Electro Mechanical L.L.C:
        <br /> Engineering UAE's Future.
      </>
    ),
  },
  {
    img: "https://www.dubaiwebsitecompany.com/demo/mep/wp-content/uploads/2022/01/s3.jpg",
    Txt: (
      <>
        Promoting Sustainable Building Solutions.
        <br />
        With Effective Technology.
      </>
    ),
  },
  {
    img: "https://www.dubaiwebsitecompany.com/demo/mep/wp-content/uploads/2022/01/s4.jpg",
    Txt: (
      <>
        Where Engineering Excellence Meets.
        <br /> Unrivaled Craftsmanship.
      </>
    ),
  },
];
