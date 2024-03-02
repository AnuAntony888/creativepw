import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AllCards,
  Buttons,
  CardsSection,
  Section2,
  TypographyText,
} from "../ReusableComponent/Reusab";
import {
  Box,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Vertsteps from "./Vertsteps";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Aboutus = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);

  return (
    <>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="About Company"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor
        sit amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/about.png"
      />
      <Grid container spacing={5} sx={{ pt: "6%", pl: "6%", pr: "6%" }}>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/about-dynamic-team-im.jpg"
            alt=""
            width="100%"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TypographyText
                Typography={<>A Bunch of Enthusiastic & Creative Minds.</>}
                fontWeight="bolder"
                color="#1E1666"
                fontSize="30px"
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
                    Finalizing new corporate ideas, game-plans and strategies
                    for a firm.
                  </>
                }
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
      {/*********************section 3*********************/}
      <Grid
        container
        spacing={3}
        sx={{
          p: "6%",
        }}
      >
        {Listcontent.map((data, index) => (
          <Grid item xs={12} lg={4} md={4} sm={12} key={index}>
            <TypographyText
              Typography={<>A Bunch of Enthusiastic & Creative Minds.</>}
              fontWeight="bolder"
              color="#1E1666"
              fontSize="30px"
              textAlign={!isSmallScreen ? "left" : "centre"}
            />
            <br />
            <hr
              width="50px;"
              color="red"
              size="5"
              style={{ margin: !isSmallScreen ? "0" : "auto" }}
            ></hr>
            <br />
            {Content.map((data, index) => (
              <div key={index}>
                <TypographyText
                  Typography={data.txt1}
                  fontWeight="bolder"
                  color="#1E1666"
                  fontSize="22px"
                  textAlign={!isSmallScreen ? "left" : "centre"}
                />
                <TypographyText
                  Typography={data.txt2}
                  color="#6a7c92"
                  textAlign={!isSmallScreen ? "left" : "centre"}
                />
              </div>
            ))}
          </Grid>
        ))}

        {Data.map((data, index) => (
          <Grid item xs={12} lg={4} md={4} sm={12}>
            <AllCards
              image={data.image}
              height="200px"
              width="200px"
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
            />
          </Grid>
        ))}
      </Grid>
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
      <Vertsteps />

      <Grid container spacing={5} sx={{ pt: "6%", pl: "6%", pr: "6%" ,pb:'6%'}}>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/about-faq-img.jpg"
            alt=""
            width="100%"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TypographyText
                Typography={<>Commonly Asked Questions.</>}
                fontWeight="bolder"
                color="#1E1666"
                fontSize="30px"
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
                    Our methodical approach is focused on revealing the essence
                    of each design challenge to allow us.
                  </>
                }
                color="#6A7C92"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>

            <Grid item xs={12}>
              {Accordn.map((data, index) => (
                <>
                  <Accordion defaultExpanded={index === 0 ? true : false} sx={{backgroundColor:'#F6FAFC',marginBottom:'10px'}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <TypographyText
                        Typography={data.text1}
                        fontWeight="bolder"
                        color="#1E1666"
                        fontSize="18px"
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <TypographyText
                        Typography={data.text2}
                        color="#6A7C92"
                        textAlign={!isSmallScreen ? "left" : "centre"}
                      />
                    </AccordionDetails>
                  </Accordion>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Aboutus;
const Accordn = [
  {
    text1: "How to Plan an SEO Strategy",
    text2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined. There are many variations of lorem spassages.",
  },
  {
    text1: "What is New Company Branding",
    text2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined. There are many variations of lorem spassages.",
  },
  {
    text1: "How to Create New Backlinks",
    text2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined. There are many variations of lorem spassages.",
  },
];
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
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/about-experience-img1.jpg",
    Typography1: "Business Growth",
    Typography2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/about-experience-img2.jpg",
    Typography1: "Email Marketing",
    Typography2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.",
  },
];

const Listcontent = [
  {
    listimg: "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/10.png",
    listtxt: "Fully Responsive",
  },
];
const Content = [
  {
    txt1: "Flawless Incorporation",
    txt2: "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.",
  },
  {
    txt1: "Seamless Management",
    txt2: "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.",
  },
];
