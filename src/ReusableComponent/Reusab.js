import React from "react";

import Card from "@mui/material/Card";
import SettingsIcon from "@mui/icons-material/Settings";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "../Global.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, CardActions, CardMedia, Grid, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
export function TypographyText(props) {
  return (
    <Typography
      sx={{
        borderRight: props.borderRight,
        fontSize: props.fontSize,
        width: props.width,
        textAlign: props.textAlign,
        color: props.color,
        padding: props.padding,
        textTransform: props.textTransform,
        fontWeight: props.fontWeight,
        paddingRight: props.paddingRight,
        fontWeight: props.fontWeight,
        transform: props.transform,
        margin: props.margin,
        marginTop: props.marginTop,
        fontStyle: props.fontStyle,
        "&:hover": {
          color: props.hovercolor,
        },
      }}
      variant={props.variant}
      component={props.component}
      className={props.className}
      fontFamily="Lora"
      dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
    >
      {props.Typography}
    </Typography>
  );
}

export function Buttons(props) {
  return (
    <Button
      variant={props.variant}
      sx={{
        bgcolor: props.bgcolor,
        textTransform: props.textTransform,
        color: props.color,
        float: props.float,
        fontSize: props.fontSize,
        width: props.width,
        height: props.height,
        fontWeight: props.fontWeight,
        marginBottom: props.marginBottom,
        transform: props.transform,
        minWidth: "100px",
        zIndex: props.zIndex,
        // fontFamily: 'Lato',
        fontFamily: "Lora",
        ":hover": {
          bgcolor: props.bgcolor1, // theme.palette.primary.main
          color: props.color1,
        },

        textTransform: "capitalize",
      }}
      className={props.className}
    >
      {props.Buttonname}
    </Button>
  );
}

export function AllCards(props) {
  return (
    <Card
      sx={{
        boxShadow: props.boxShadow,
        p: props.txtTypography1 ? "0" : "5%",
        backgroundColor: props.backgroundColor,
        textAlign: props.textAlignco,

        "&:hover": {
          backgroundColor: props.backgroundColor1, // Background color changes to white on hover
          boxShadow: props.boxShadow1,
        },
      }}
    >
      <CardMedia
        component="img"
        width={props.width}
        height={props.height}
        image={props.image}
        sx={{
          objectFit: "contain",
          objectFit: props.txtTypography1 ? "cover" : "contain",
        }}
      />
      <CardContent>
        {props.txtTypography1 ? (
          <TypographyText
            Typography={props.txtTypography1}
            color={props.txt2color}
            textAlign={props.txttextAlign}
            fontWeight={props.txt2fontWeight}
          />
        ) : (
          ""
        )}
        <TypographyText
          Typography={props.Typography1}
          color={props.txt1color}
          textAlign={props.txt1textAlign}
          fontWeight={props.txt1fontWeight}
          fontSize={props.txt1fontSize}
        />
        <br />
        <TypographyText
          fontSize={props.txt2fontSize}
          Typography={props.Typography2}
          color={props.txt2color}
          textAlign={props.txt2textAlign}
          fontWeight={props.txt2fontWeight}
        />
        {props.Buttonname ? (
          <Buttons
            Buttonname={props.Buttonname}
            className={props.className}
            width="100%"
            color={props.color}
            backgroundColor={props.backgroundColor}
            fontWeight={props.fontWeight}
          />
        ) : (
          ""
        )}
      </CardContent>
    </Card>
  );
}

export function CardsSection(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Added property to cover the background
          backgroundPosition: "center", // Added property to center the background
          padding: "6%",
          pt: isSmallScreen ? "100px" : "",
        }}
      >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid
              item
              lg={7}
              xs={12}
              md={7}
              sm={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{}}>
                <TypographyText
                  Typography={props.txt1}
                  color="white"
                  fontWeight="bolder"
                  fontSize={!isSmallScreen ? "40px" : "30px"}
                  textAlign={!isSmallScreen ? "left" : "centre"}
                  // variant={!isSmallScreen ? "h2" : "h3"}
                />
                <TypographyText
                  Typography={props.txt2}
                  color="white"
                  textAlign={!isSmallScreen ? "left" : "centre"}
                />
              </Box>
            </Grid>
            <Grid item lg={5} xs={12} md={5} sm={12} sx={{ margin: "auto" }}>
              <img
                src={props.imges}
                alt=""
                width="90%"
                style={{ margin: "auto" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export function Banner1(props) {
  return (
    <>
      <img
        src={props.image}
        alt=""
        width="100%"
        style={{ maxHeight: "50vh" }}
      />
    </>
  );
}

export function Section2(props) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pl: "10%",
        pr: "10%",
        // pb: "5%",
        // pt: "5%",
        pt: props.pt,
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <Grid item xs={12}>
        <TypographyText
          Typography={
            props.text1
            // <>SEO Services Perfectly Customized to Industry Standards</>
          }
          color="#1E1666"
          fontSize="30px"
          fontWeight="600"
        />
      </Grid>
      <Grid item xs={12}>
        <hr width="100px;" color="red" size="5" style={{ margin: "auto" }}></hr>
      </Grid>
      <Grid item xs={12}>
        <br />
        <TypographyText Typography={props.text2} color="#6A7C92" />
      </Grid>
    </Grid>
  );
}

export function LeftRigt(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          p: "6%",
        }}
      >
        {" "}
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <br /> <br />
          <img src={props.img} alt="" width="80%" />
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <br /> <br />
          <br /> <br />
          <Grid container spacing={3}>
            <br />
            <Grid item xs={12}>
              <TypographyText
                Typography={props.txt1}
                color="#1E1666"
                fontSize="30px"
                fontWeight="600"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>
            <Grid item xs={12}>
              <hr
                width="50px;"
                color="red"
                size="5"
                style={{ margin: !isSmallScreen ? 0 : "auto" }}
              ></hr>
            </Grid>
            <Grid item xs={12}>
              <br />
              <TypographyText
                Typography={props.txt2}
                color="#6A7C92"
                textAlign="left"
              />
              <br />
            </Grid>
            {props.Listcontent4.map((data, index) => (
              <Grid item xs={12} lg={6} md={6} sm={12}>
                <card>
                  <img src={data.listimg} alt="" width="60px" />
                  <div>
                    <TypographyText
                      Typography={data.listtxt}
                      color="#1E1666"
                      fontSize="20px"
                      fontWeight="600"
                      textAlign="left"
                    />
                    <br />
                    <TypographyText
                      Typography={data.listtxt1}
                      color="#6A7C92"
                      textAlign="left"
                    />
                  </div>
                  <br />
                  {data.Buttonname ? (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: !isSmallScreen
                          ? "flex-start"
                          : "center",
                      }}
                    >
                      <Buttons
                        Buttonname={data.Buttonname}
                        fontWeight="600"
                        color="red"
                        // className="button1"
                      />
                    </Box>
                  ) : (
                    ""
                  )}
                </card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export function ImageIcon(props) {
  const { icon: Icon, txt } = props;
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#F5F9FC",
          borderRadius: "20px",
          minWidth: "200px",
          color: "red",
          textTransform: "capitalize",
        }}
      >
        {typeof Icon === "string" ? (
          <img
            src={Icon}
            alt="icon"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
        ) : (
          Icon && <Icon sx={{ color: "red", marginRight: "8px" }} />
        )}
        {/* {Icon && <Icon sx={{color:'red'}} />}  */}
        &nbsp; {txt}
      </Button>
    </>
  );
}



export function Parall(props) {
  // Use React hooks inside a React function component
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
      <div>
          <Parallax
              bgImage={props.imges}
              strength={300}
              style={{
                  backgroundSize: "cover",
                  objectFit: "cover",
                  height: "70vh",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
              }}
          >
              <Grid
                  container
                  spacing={0}
                  className="large-header"
                  sx={{
                      height: "70vh",
                  }}
              >
                  <Box
                      sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          bottom: 0,
                          width: "100%",
                          left: 0,
                          backgroundColor: "rgba(0,0,0,.7)",
                      }}
                  ></Box>

                  <Grid
                      container
                      Spacing={3}
                      sx={{
                          zIndex: 1,
                      }}
                  >
                      <Grid item xs={12} sx={{ margin: "auto", p: "2%" }}>
                          <div data-aos="fade-right">
                              <Typography
                                  variant="h5"
                                  color="textPrimary"
                                  fontWeight="600"
                  textAlign="center"
                  color='white'
                                  fontSize={isSmallScreen ? "1.25rem" : "1.3rem"}
                              >
                                { props.txt}
                              </Typography>
                              <br />
                              <Buttons
                                  className="button1"
                                  Buttonname={
                                      <Link to="/contactus">Contact Us</Link>
                                  }
                                  bgcolor="#BD0F65"
                                  bgcolor1="#BD0F65"
                              />
                          </div>
                      </Grid>
                  </Grid>
              </Grid>
          </Parallax>
      </div>
  );
}