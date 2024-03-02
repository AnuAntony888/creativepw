import React, { useEffect } from "react";
import {
  AllCards,
  CardsSection,
  Section2,
  TypographyText,
} from "../ReusableComponent/Reusab";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
const Webdevlopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Web Development"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor sit
        amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/web-development.png"
      />
      <Section2
          pt= "5%"
        text1="Custom PHP Development is Our Forte"
        text2={
          <>
            he standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested alteration in some form.
          </>
        }
      />
      {/****************************************8 */}
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

      {/****************************************8 */}
      <Grid container spacing={5} sx={{ p: "6%" }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <TypographyText
                Typography={<>Web Streamlining Strategy</>}
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
                    The Extremes of Good and Evil by Cicero, written in 45 BC,
                    this book is a treatise on the theory of ethics discovered
                    the undoubtable source
                  </>
                }
                color="#6A7C92"
                textAlign="left"
              />
              <br />
            </Grid>
            {Listcontent.map((data, index) => (
              <Grid item lg={6} md={12} xs={12} sm={12} key={index}>
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
                    <TypographyText
                      Typography={data.listtxt}
                      color="#1E1666"
                      fontSize="20px"
                      fontWeight="600"
                    />
                  </ListItemButton>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-development-process-img.png"
            alt=""
            width="100%"
          />
        </Grid>
      </Grid>
      {/*****************************************/}
      <Grid container spacing={5} sx={{ p: "6%" }}>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-development-technology.png"
            alt=""
            width="100%"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TypographyText
                Typography={<>Engaging Business Decisions for Revenue Growth</>}
                color="#1E1666"
                fontSize="30px"
                fontWeight="600"
                textAlign={!isSmallScreen ? "left" : "centre"}
              />
            </Grid>
            <Grid item xs={12}>
              <br />
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
                    Extremes of Good and Evil by Cicero, written in 45 BC, this
                    book is a treatise on the theory of ethics discovered the
                    undoubtable source.
                  </>
                }
                color="#6A7C92"
                textAlign="left"
              />
              <br />
            </Grid>
            {Listcontent2.map((data, index) => (
              <Grid item lg={6} md={12} xs={12} sm={12} key={index}
             >
                <ListItem disablePadding  >
                  <ListItemButton
                    style={{ backgroundImage:`url(
                      ${data.bgimg}`,padding:'5%' }}
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
                    <TypographyText
                      Typography={data.listtxt}
                      color="#1E1666"
                      fontSize="20px"
                      fontWeight="600"
                    />
                 
                  </ListItemButton>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Webdevlopment;
const Data = [
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-development-service-new-icon1.png",
    Typography1: "Graphic Interface",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-development-service-new-icon2.png",
    Typography1: "Bootstrapping",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-development-service-new-icon3.png",
    Typography1: "Screen Optimized",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-development-service-new-icon4.png",
    Typography1: "Content Update",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-development-service-new-icon5.png",
    Typography1: "Application Security",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/web-development-service-new-icon6.png",
    Typography1: "Error / Bug Fixing",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
];

const Listcontent2 = [
  {bgimg:'https://ryse.radiantthemes.com/wp-content/uploads/2019/07/web-development-frontend.png',
    listimg: "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/1.png",
    listtxt: 
      <>Frontend
        <br/>Development</>,
  },
  {bgimg:'https://ryse.radiantthemes.com/wp-content/uploads/2019/07/web-development-backend.png',
  listimg: "http://ryse.radiantthemes.com/wp-content/uploads/2019/07/2.png",
  listtxt: 
    <>Project 
      <br/>Management</>,
},
{bgimg:'https://ryse.radiantthemes.com/wp-content/uploads/2019/07/application-integration.png',
listimg: "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/3.png",
listtxt: 
  <>Application 
    <br/>Integration</>,
  },  
  {bgimg:'http://ryse.radiantthemes.com/wp-content/uploads/2019/07/custom-business.png',
  listimg: "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/4.png",
  listtxt: 
    <>Custom 
      <br/>Application</>,
  },  
];

const Listcontent = [
  {
    listimg: "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/10.png",
    listtxt: "Fully Responsive",
  },
  {
    listimg: "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/20.png",
    listtxt: "Device Testing",
  },
  {
    listimg:
      " https://ryse.radiantthemes.com/wp-content/uploads/2019/07/30.png",
    listtxt: "Clean & Modern",
  },
  {
    listimg:
      " https://ryse.radiantthemes.com/wp-content/uploads/2019/07/40.png",
    listtxt: "Great Experience",
  },
];
