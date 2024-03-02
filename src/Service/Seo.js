import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AllCards,
  Buttons,
  CardsSection,
  Section2,
  TypographyText,
} from "../ReusableComponent/Reusab";
import "../Global.css";
const Seo = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  return (
    <>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Search Engine Optimization"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor
        sit amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/search-engine.png"
      />
      {/****************************************section 1****************************************************** */}

      <Section2
          pt= "5%"
        text1="SEO Services Perfectly Customized to Industry Standards"
        text2={
          <>
            {" "}
            Lorem Ipsum, you need to be sure there isn’t anything embarrassing
            hidden in the middle of text.
            <br />
            All the Lorem Ipsum generators on the Internet tend.
          </>
        }
      />
      {/****************************************section 2****************************************************** */}

      <Grid
        container
        spacing={2}
        sx={{
          p: "5%",
          backgroundImage:
            "url(https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-curve-line.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {Datar.map((data, index) => (
          <Grid item lg={3} md={3} sm={6} xs={12} key={index}>
            <div style={{ position: "relative" }}>
              <img
                src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-polygon-banner.png"
                alt="diagonal_image"
                style={{ top: 0, left: 0, zIndex: -1 }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "35%",
                  transform: "translate(-20%, -50%)",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: 'flex-start',
                }}
              >
                <img
                  src={data.img}
                  alt="data_image"
                  width={"60px"}
                  style={{ margin: "auto" }}
                />

                <TypographyText
                  Typography={data.text}
                  fontSize="1.20rem"
                  color="#1E1666"
                  fontWeight="bolder"
                />
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
      {/****************************************section 3****************************************************** */}

      <Grid container spacing={2}>
        <Grid
          item
          lg={5}
          md={5}
          xs={12}
          sm={12}
          sx={{
            backgroundImage:
              "url(https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-curve-banner.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-growth-img.png"
            alt="diagonal_image"
            width={"100%"}
            style={{ zIndex: 1 }}
          />
        </Grid>

        <Grid item lg={7} md={7} xs={12} sm={12}>
          <Grid
            container
            spacing={2}
            sx={{
              pl: "5%",
              pr: "5%",
              pb: "5%",
              pt: "5%",
            }}
          >
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>
                    Engaging in Fruitful Partnerships for a Successful Outcome
                  </>
                }
                fontWeight="bolder"
                color="#1E1666"
                fontSize="30px"
                // variant={!isSmallScreen ? "h5" : "h5"}
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>
            <Grid item xs={12}>
              <hr
                width="50px;"
                color="red"
                size="5"
                style={{ margin: !isSmallScreen ? "0" : "auto" }}
              ></hr>
            </Grid>
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical.
                  </>
                }
                fontSize="1.15rem"
                color="#6A7C92"
                fontStyle="italic"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
              <br />
            </Grid>
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially.
                  </>
                }
                color="#6A7C92"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />{" "}
              <br />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: !isSmallScreen ? "flex-start" : "center",
                }}
              >
                <Buttons Buttonname="Discover More" className="button1" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Section2
          pt= "5%"
        text1="Core Business Areas"
        text2={
          <>
            It has survived not only five centuries, but also the leap into
            electronic typesetting,remaining essentially.
            <br />
            All the Lorem Ipsum generators.
          </>
        }
      />

      {/************************************************************************************************* */}
      <Grid
        container
        Spacing={2}
        sx={{
          p: "6%",
        }}
      >
        {Data.map((data, index) => (
          <Grid item xs={12} lg={4} md={4} sm={6}>
            <AllCards
              boxShadow="none"
              image={data.image}
              height="50px"
              width="50px"
              backgroundColor="transparent"
              boxShadow1="9px 17px 30px 0px rgba(0,0,0,.1)"
              backgroundColor1="#FFFFFF"
              txt1color="#1E1666"
              txt2color="#6a7c92"
              txt1fontSize="22px"
              txt2fontSize="15px"
              Typography1={data.Typography1}
              Typography2={data.Typography2}
              txt1fontWeight="bolder"
              txt2textAlign="left"
            />
          </Grid>
        ))}
      </Grid>

      {/*************************************/}
      <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: `url(
            https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-traffic-banner.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Added property to cover the background
          backgroundPosition: "center", // Added property to center the background
          pt: "2%",
          pl: "10%",
          pr: "10%",
          pb: "6%",
        }}
      >
        <Grid item xs={12}>
          <Box sx={{ margin: "auto" }}>
            <Grid container spacing={2} sx={{ margin: "auto" }}>
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
                  margin: "auto",
                }}
              >
                <Box sx={{}}>
                  <TypographyText
                    Typography={<>Want Free SEO Quotes?​</>}
                    color="white"
                    fontWeight="bolder"
                    fontSize={!isSmallScreen ? "40px" : "30px"}
                  />
                  <br />
                  <TypographyText
                    Typography={
                      <>All the Lorem Ipsum generators lorem ipsum.</>
                    }
                    color="white"
                  />
                </Box>
                <img
                  src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-traffic-img.png"
                  alt=""
                  width={"100%"}
                  style={{ margin: "auto" }}
                />
              </Grid>
              <Grid item lg={5} xs={12} md={5} sm={12} sx={{ margin: "auto" }}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    padding: "2%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "10px",
                  }}
                >
                  {contactform.map((data, index) => (
                    <Grid
                      item
                      xs={12}
                      lg={12}
                      md={12}
                      sx={{ pr: "16px", pb: "16px" }}
                    >
                      <input
                        fullWidth
                        type="text"
                        name="name"
                        placeholder={data.placeholder}
                        required
                        style={{
                          height: "40px",
                          width: "100%",
                          border: "none",

                          backgroundColor: "#FDFEFF",
                        }}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12} sx={{ pr: "16px", pb: "16px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: !isSmallScreen
                          ? "flex-start"
                          : "center",
                      }}
                    >
                      <Buttons
                        Buttonname="Discover More"
                        className="button1"
                        width="100%"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/************************************************ */}
      <Section2
          pt= "5%"
        text1="Our Pricing Plans"
        text2={
          <>
            {" "}
            Lorem Ipsum, you need to be sure there isn’t anything embarrassing
            hidden in the middle of text. <br />
            All the Lorem Ipsum generators on the Internet tend.
          </>
        }
      />
      <Grid
        container
        spacing={5}
        sx={{
          p: "6%",
        }}
      >
        {plan.map((data, index) => (
          <Grid item xs={12} lg={4} md={4} sm={12}>
            <AllCards
           
              image={data.image}
              height="50px"
              width="50px"
              backgroundColor="#FFFFFF"
              boxShadow=" 9px 17px 30px 0px rgba(0,0,0,.1)"
              backgroundColor1="#FFFFFF"
              txt1color="#1E1666"
              txt2color="#6a7c92"
              txt1fontSize="22px"
              txt2fontSize="15px"
              Typography1={data.Typography1}
              Typography2={data.Typography2}
              txt1fontWeight="bolder"
              Buttonname={data.Buttonname}
              className='button1'
            />
          </Grid>
        ))}
      </Grid>
      {/************************************************************* */}
      <Grid
        container
        spacing={5}
   
      >
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Grid container sx={{ p: "6%" }}>
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>Advanced Web Marketing Strategies for New Firms</>
                }
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
                Typography={
                  <>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially. All the
                    Lorem Ipsum generators.
                  </>
                }
                color="#6A7C92"
                textAlign="left"
              />
              <br />
            </Grid>

            <Grid item xs={12}>
              {Listcontent.map((data, index) => (
                <ListItem disablePadding>
                  <ListItemButton
                    style={{ backgroundColor: "transparent" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <ListItemIcon>
                      <img src={data.listimg} alt="" />
                    </ListItemIcon>
                    <ListItemText
                      primary={data.listtxt}
                      sx={{ color: "#6A7C92", fontSize: ".9rem" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: `url(
              https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-curve-banner2.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Added property to cover the background
            backgroundPosition: "center", // Added property to center the background
          }}
        >
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-better-experience-img1.png"
            alt=""
            width={!isSmallScreen ? "100%" : "80%"}
            style={{ margin: "auto" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Seo;
const Datar = [
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-icon-new1-1.png",
    text: "Cloud Storage",
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-icon-new1-2.png",
    text: "Traffic Growth",
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-icon-new1-3.png",
    text: "Keyword Ranking",
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-icon-new1-4.png",
    text: "Performance Metrics",
  },
];

const Data = [
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-service-new-icon1.png",
    Typography1: "Informative Content",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-service-new-icon2.png",
    Typography1: "Visitor Growth",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-service-new-icon3.png",
    Typography1: "Google Analytics",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-service-new-icon4.png",
    Typography1: "Innovative Strategies",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-service-new-icon5.png",
    Typography1: "Link Building",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-service-new-icon6.png",
    Typography1: "Reputation Management",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
];
const contactform = [
  { placeholder: "Email Address" },
  { placeholder: "Your Website URL" },
  { placeholder: "Your Full Name" },
  { placeholder: "Phone Number" },
];

const plan = [
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/world.png",
    Typography1: "Basic Plan",
    Typography2: (
      <>
        There are many variations of lorem duos lora spassages of lorem.
        <br /> <br />
        10 Key Words Optimized
        <hr className="line_color" />
        3 Top 10 Ranking Guarantee
        <hr className="line_color" />
        Web site Analysis
        <br /> <br />
      </>
    ),
    Buttonname: "Select Plan",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/diamond.png",
    Typography1: "Basic Plan",
    Typography2: (
      <>
        There are many variations of lorem duos lora spassages of lorem.
        <br /> <br />
        10 Key Words Optimized
        <hr className="line_color" />
        3 Top 10 Ranking Guarantee
        <hr className="line_color" />
        Web site Analysis
        <br /> <br />
      </>
    ),
    Buttonname: "Select Plan",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/trophy.png",
    Typography1: "Basic Plan",
    Typography2: (
      <>
        There are many variations of lorem duos lora spassages of lorem.
        <br /> <br />
        10 Key Words Optimized
        <hr className="line_color" />
        3 Top 10 Ranking Guarantee
        <hr className="line_color" />
        Web site Analysis
        <br /> <br />
      </>
    ),
    Buttonname: "Select Plan",
  },
];
const Listcontent = [
  {
    listimg:
      "http://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-user-experience-icon1-new.png",
    listtxt: "0.33% CTR Sed consectetur volutpat sem vitae.",
  },
  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-user-experience-icon2-new.png.png",
    listtxt: "10% less CPA Fusce id nibh at neque eleifend tristique.",
  },
  {
    listimg:
      " https://ryse.radiantthemes.com/wp-content/uploads/2019/06/seo-user-experience-icon3-new.png.png",
    listtxt: "136% ROI Aenean feugiat dictum lacus, ut hendrerit.",
  },
];
