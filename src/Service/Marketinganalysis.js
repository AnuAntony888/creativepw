import React, { useEffect } from "react";
import {
    AllCards,
  Buttons,
  CardsSection,
  LeftRigt,
  TypographyText,
} from "../ReusableComponent/Reusab";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Marketinganalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("sm"));
  const Data = [
    {
      img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-conduct-how-to-conduct-img.jpg",
      txt1: "How to Streamline a Marketing Strategy for an Enterprise?",
      txt2: "There are many variations of lorem passages of Lorem Ipsum available, but the majority have suffered. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
      listContent: [
        {
          listimg:
            "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-how-to-conduct-icon.jpg",
          listtxt: "1. Planned Revenue Growth",
          listtxt1:
            "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.",
          Buttonname: "Contact Now",
        },
        {
          listimg:
            "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-how-to-conduct-icon2.jpg",
          listtxt: "2. Professional Risk Management",
          listtxt1:
            "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.",
          Buttonname: "Contact Now",
        },
        // Add more items as needed
      ],
    },
  ];

  return (
    <>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Marketing Analysis"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor sit
        amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/marketing-analysis.png"
      />
      {Data &&
        Data.map((data, index) => (
          <LeftRigt
            key={index}
            img={data.img}
            txt1={data.txt1}
            txt2={data.txt2}
            Listcontent4={data.listContent}
          />
        ))}
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box sx={{ position: "relative" }}>
            <Box>
              <img
                src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-how-to-conduct-banner2.jpg)"
                alt=""
                width="100%"
                style={{
                  zIndex: 1, // Ensure the image is behind the boxes
                }}
              />
            </Box>
            {/* Second Box */}
            <Box>
              <img
                src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-analysis-business-analysis-banner.jpg"
                alt=""
                width="100%"
                style={{
                  zIndex: 1,
                  minHeight:isSmallScreen ? "500px" : "600px", // Adjust the height as needed
                }}
              />
            </Box>
            {/* Image */}
            <img
              src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-analysis-dashboard-img.png"
              alt=""
              width="70%"
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)", // Center the image horizontally
                zIndex: 0, // Ensure the image is behind the boxes
              }}
            />

            <Box
              sx={{
                top: isSmallScreen1 ? "50%" : isSmallScreen ? "60%" : "74%",
                left: "8%",
                transform: "translate(-3%, 0%)",
                position: "absolute",
                zIndex: 2, // Ensure the text is above the image
                textAlign: "center",
              }}
            >
              <TypographyText
                Typography={
                  "Assessing New Business Leads for Generating New Customers & Visitor Footfalls"
                }
                color="white"
                fontSize={!isSmallScreen ? "30px" : "20px"}
                fontWeight="600"
              />
              <br />

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Buttons Buttonname="Discover More" className="button1" />
              </Box>
            </Box>
          </Box>
        </Grid>
          </Grid>
          <Grid container spacing={5}
              sx={{ p: '6%' }}>
              <Grid item xs={12} lg={6} md={6} sm={6} >
              <TypographyText
                Typography={
                          <>A Risk Free Business
                  <br/>            Analysis</>
                }
                color="#1E1666"
                fontSize="30px"
                fontWeight="600"
                 textAlign={!isSmallScreen ? "right" : "centre"}
              />
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6} >
              <TypographyText
                   Typography={
                    <>
                      There are many variations of lorem passages of Lorem Ipsum available, but the majority have suffered. Lorem Ipsum available, but the majority have suffered.
                    </>
                  }
                  color="#6A7C92"
                  textAlign="left"
              />
                 </Grid>
          </Grid>  
          




          <Grid
        container
        Spacing={2}
        sx={{
          p: "6%",
        }}
      >
        {Datas.map((data, index) => (
          <Grid item xs={12} lg={3} md={6} sm={6}>
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
              // txt2textAlign="left"
            />
          </Grid>
        ))}
      </Grid>

    </>
  );
};

export default Marketinganalysis;
const Datas = [
    {
      image:
        "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-analysis-new-icon1.png",
      Typography1: "Strategic Thinking",
      Typography2:
        "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
    },
    {
      image:
        "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-analysis-new-icon2.png",
      Typography1: "Target Acquisition",
      Typography2:
        "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
    },
    {
      image:
        "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-analysis-new-icon3.png",
      Typography1: "Multiple Linking",
      Typography2:
        "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
    },
    {
      image:
        "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/marketing-analysis-new-icon4.png",
      Typography1: "Customer Support",
      Typography2:
        "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
    },]