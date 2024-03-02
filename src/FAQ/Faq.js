import React, { useEffect } from "react";
import {
  AllCards,
  Buttons,
  CardsSection,
  Section2,
  TypographyText,
} from "../ReusableComponent/Reusab";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
const Faq = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  return (
    <div>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Commonly Asked Questions"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor
        sit amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/faq.png"
      />

      <Grid
        container
        spacing={5}
        sx={{
          p: "6%",
        }}
      >
        <Grid item lg={7} md={7} xs={12} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TypographyText
                Typography={<>Most Frequent Questions</>}
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
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined. Lorem Ipsum available, but the majority.
                  </>
                }
                color="#6A7C92"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>

            <Grid item xs={12}>
              {Accordn.map((data, index) => (
                <>
                  <Accordion
                    defaultExpanded={index === 0 ? true : false}
                    sx={{ boxShadow: "none" }}
                  >
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
        <Grid item lg={5} md={5} xs={12} sm={12}>
          <Grid
            container
            spacing={2}
            sx={{
              padding: "3%",
              backgroundColor: "whitesmoke",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <TypographyText
                Typography={<>Avail FREE Quotes</>}
                fontWeight="bolder"
                color="#1E1666"
                fontSize="25px"
              />
            </Grid>

            <Grid item xs={12} lg={12} md={12} sm={12}>
              <TypographyText
                Typography={
                  <>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined.
                  </>
                }
                color="#6A7C92"
              />
            </Grid>
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
                  justifyContent: !isSmallScreen ? "flex-start" : "center",
                }}
              >
                <Buttons
                  Buttonname="Get a Free Quote Today"
                  className="button1"
                  width="100%"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*********************************8 */}
      <Grid
        container
        Spacing={2}
        sx={{
          pl: "6%",
          pr: "6%",
          pb: "6%",
          backgroundImage:
            "url(https://ryse.radiantthemes.com/wp-content/uploads/2019/06/faq-tilt-banner.jpg)",
          backgroundRepeat: "none",
        }}
      >
        <Grid item xs={12}>
          <Section2
              pt= "5%"
            text1="More Help Needed?"
            text2={
              <>
                There are many variations of lorem passages of Lorem Ipsum
                available, but the majority have suffered. All the Lorem Ipsum
                generators.
              </>
            }
          />
        </Grid>

        {Data.map((data, index) => (
          <Grid item xs={12} lg={4} md={4} sm={6}>
            <AllCards
              boxShadow="none"
              image={data.image}
              height="120px"
              width="120px"
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
    </div>
  );
};

export default Faq;
const Data = [
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/faq-new-icon1.png",
    Typography1: "Engaging Interface",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/faq-new-icon2.png",
    Typography1: "Strategy Shortlisting",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/faq-new-icon3.png",
    Typography1: "Vertical Growth",
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
const Accordn = [
  {
    text1: "Is SEO a Risky and Time Consuming Proposition?",
    text2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined. There are many variations of lorem spassages.",
  },
  {
    text1: "How to Choose a Perfect Digital Marketing Plan?",
    text2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined. There are many variations of lorem spassages.",
  },
  {
    text1: "Is It Feasible to go for a Complete Website Audit?",
    text2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined. There are many variations of lorem spassages.",
  },
  {
    text1: "How to Go About with a Bespoke SMO Strategy?",
    text2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined. There are many variations of lorem spassages.",
  },
  {
    text1: "Is Internet Marketing Expensive?",
    text2:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined. There are many variations of lorem spassages.",
  },
];
