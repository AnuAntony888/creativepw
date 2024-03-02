import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  AllCards,
  Buttons,
  CardsSection,
  Section2,
  TypographyText,
} from "../ReusableComponent/Reusab";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const Webdesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  let numCols = 4; // Default number of columns

  if (isSmallScreen) {
    numCols = 2;
  } else if (isMediumScreen) {
    numCols = 3;
  } else if (isLargeScreen) {
    numCols = 6;
  }

  return (
    <>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Web Design"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor sit
        amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/website-design.png"
      />

      <Grid container spacing={5} sx={{ pt: "6%", pl: "6%", pr: "6%" }}>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-design-ipad-demo.jpg"
            alt=""
            width="100%"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>
                    Innovative & Creative Design Elements Incorporated for Every
                    Web Page.
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
                  <>We provide the best user-interface experience to clients.</>
                }
                fontSize="1.35rem"
                color="#6A7C92"
                fontStyle="italic"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </>
                }
                fontSize="1.12rem"
                color="#6A7C92"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
              <br />
            </Grid>
            {Listcontent2.map((data, index) => (
              <Grid item lg={12} md={12} xs={12} sm={12} key={index}>
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
                      <ArrowRightAltIcon sx={{ color: "red" }} />
                    </ListItemIcon>
                    <TypographyText Typography={data.listtxt} color="#827C92" />
                    {/* <ListItemText
                      primary={data.listtxt}
                      sx={{ fontWeight:'600',  color:"#1E1666",fontSize:'2rem'}}
                    /> */}
                  </ListItemButton>
                </ListItem>
              </Grid>
            ))}
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
        text1="Web Designs that Bring a Smile on Faces"
        text2={
          <>
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions.
          </>
        }
      />

      <Grid
        container
        spacing={3}
        sx={{
          p: "6%",
          backgroundImage:
            "url(https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-design-service-banner.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        {Data.map((data, index) => (
          <Grid item xs={12} lg={4} md={4} sm={12}>
            <AllCards
              image={data.image}
              height="70px"
              width="70px"
              backgroundColor="#FFFFFF"
              boxShadow="9px 17px 30px 0px rgba(0,0,0,.1)"
              backgroundColor1="#FFFFFF"
              txt1color="#1E1666"
              txt2color="#6a7c92"
              txt1fontSize="22px"
              txt2fontSize="15px"
              Typography1={data.Typography1}
              Typography2={data.Typography2}
              txt1fontWeight="bolder"
              Buttonname={data.Buttonname}
              fontWeight="600"
              color="red"
              //   txt2textAlign="left"
            />
          </Grid>
        ))}

        <Grid item lg={7} md={7} sm={12} xs={12} sx={{ margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>Bespoke Web Design Solutions for New Company Websites</>
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
                    In in libero velit. Etiam vel tellus tempus, cursus justo
                    non, posuere sem. Curabitur blandit tempus porttitor.
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Fusce dapibus, tellus ac cursus.
                  </>
                }
                color="#6A7C92"
                textAlign="left"
              />
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
        <Grid item lg={5} md={5} sm={12} xs={12} sx={{ margin: "auto" }}>
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-design-digital-peoduct-img.png"
            alt=""
            width="100%"
          />
        </Grid>
      </Grid>

      <Section2
          pt= "5%"
        text1="Our Stunning Portfolios"
        text2={
          <>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </>
        }
      />

      <Grid
        container
        spacing={3}
        sx={{
          p: "6%",width:'100%',marginLeft:0
        }}
      >
        <ImageList
          sx={{ width: "100%" }}
          variant="quilted"
          cols={numCols}
          rowHeight={250}
          gap={20}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
              </ImageListItem>
                 
              
          ))}
        </ImageList>
      </Grid>
    </>
  );
};

export default Webdesign;
const Listcontent2 = [
  {
    listtxt: "Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    listtxt: "All the Lorem Ipsum generators on the Internet tend to repeat.",
  },
  {
    listtxt: "This book is a treatise on the theory of ethics.",
  },
];

const Data = [
  {
    Buttonname: "Contact Me",
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-design-service-icon3.jpg",
    Typography1: "WordPress Design",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    Buttonname: "Contact Me",
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-design-service-icon1.jpg",
    Typography1: "Responsive Design",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    Buttonname: "Contact Me",
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-design-service-icon2.jpg",
    Typography1: "UI/UX Rich Design",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
];
const itemData = [
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/home-version-one-portfolio-img1-1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/home-version-one-portfolio-img2-2.jpg",
    title: "Burger",
    cols: 2,
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/home-version-one-portfolio-img3-1.jpg",
    title: "Camera",
    cols: 2,
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/home-version-one-portfolio-img4-1.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/home-version-one-portfolio-img7-1.jpg",
    title: "Hats",
    cols: 2,
    rows: 2,
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/home-version-one-portfolio-img6-1.jpg",
    title: "Burger",
    cols: 2,
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/home-version-one-portfolio-img5-1.jpg",
    title: "Camera",
    cols: 2,
  },
];
