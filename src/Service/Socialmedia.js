import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  CardsSection,
  Section2,
  TypographyText,
} from "../ReusableComponent/Reusab";
import { Box, Grid, ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
const Socialmedia = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  return (
    <>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Social Media Marketing"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor sit
        amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/social-media.png"
      />

      <Section2
          pt= "5%"
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/social-media-marketing-network-banner.png"
        text1="Enabling Your Brand’s Success Via Social Media"
        text2={
          <>
            Default model text, and a search for will uncover many web sites
            still in their infancy. Various goals versions have evolved over the
            years, sometimes by accident.
          </>
        }
      />
      <Grid
        container
        spacing={1}
        sx={{
          p: "6%",
          backgroundImage:
            "url(https://ryse.radiantthemes.com/wp-content/uploads/2019/06/social-media-marketing-curve-banner.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/social-media-marketing-network-img1.png"
            alt=""
            width="100%"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <Grid container spacing={2}>
            {Listcontent2.map((data, index) => (
              <Grid item lg={12} md={12} xs={12} sm={12} key={index}>
                {!isSmallScreen ? (
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{ backgroundColor: "#fff", padding: "5%" }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#fff")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#fff")
                      }
                    >
                      <ListItemIcon>
                        <img src={data.listimg} alt="" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <TypographyText
                            Typography={data.listtxt}
                            color="#1E1666"
                            fontSize="20px"
                            fontWeight="600"
                          />
                        }
                        secondary={
                          <TypographyText
                            Typography={data.listtxt1}
                            color="#6A7C92"
                          />
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <card>
                    <img src={data.listimg} alt="" width="60px" />
                    <br />
                    <TypographyText
                      Typography={data.listtxt}
                      color="#1E1666"
                      fontSize="20px"
                      fontWeight="600"
                    />

                    <TypographyText
                      Typography={data.listtxt1}
                      color="#6A7C92"
                    />
                  </card>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ margin: "auto" }}>
          <Section2
              pt= "5%"
            text1="Enabling Your Brand’s Success Via Social Media"
            text2={
              <>
                Default model text, and a search for will uncover many web sites
                still in their infancy. Various goals versions have evolved over
                the years, sometimes by accident.
              </>
            }
          />
        </Grid>
        {Listcontent3.map((data, index) => (
          <Grid item lg={6} md={6} xs={12} sm={12} key={index}>
            {!isSmallScreen ? (
              <ListItem disablePadding>
                <ListItemButton
                  style={{ backgroundColor: "transparent", padding: "5%" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <ListItemIcon>
                    <img src={data.listimg} alt="" width="80%" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <TypographyText
                        Typography={data.listtxt}
                        color="#1E1666"
                        fontSize="20px"
                        fontWeight="600"
                      />
                    }
                    secondary={
                      <TypographyText
                        Typography={data.listtxt1}
                        color="#6A7C92"
                      />
                    }
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <card>
                <img src={data.listimg} alt="" width="150px" />
                <br />
                <TypographyText
                  Typography={data.listtxt}
                  color="#1E1666"
                  fontSize="20px"
                  fontWeight="600"
                />

                <TypographyText Typography={data.listtxt1} color="#6A7C92" />
              </card>
            )}
          </Grid>
        ))}
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <br /> <br />
          <br /> <br />
          <Grid container spacing={2}>
            <br />
            <Grid item xs={12}>
              <TypographyText
                Typography={
                  <>
                    Social Media Plays a Crucial Role in Reaching Out to Masses
                  </>
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
            {Listcontent4.map((data, index) => (
              <Grid item xs={12} lg={6} md={6} sm={12}>
                <card>
                  <img src={data.listimg} alt="" width="50px" />
                  <div>
                    <TypographyText
                      Typography={data.listtxt}
                      color="#1E1666"
                      fontSize="20px"
                      fontWeight="600"
                    />

                    <TypographyText
                      Typography={data.listtxt1}
                      color="#6A7C92"
                    />
                  </div>
                </card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
          <br /> <br />
          <img
            src="https://ryse.radiantthemes.com/wp-content/uploads/2019/06/social-media-marketing-traffic-img.png"
            alt=""
            width="80%"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Socialmedia;

const Listcontent2 = [
  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-circle-icon1.jpg",
    listtxt: "Reaching Out to an Extensive Audience",
    listtxt1:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.",
  },

  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-circle-icon2.jpg",
    listtxt: "Engaging with Newer Business Prospects",
    listtxt1:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-circle-icon3.jpg",
    listtxt: "Interacting Live with Possible Clients",
    listtxt1:
      "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.",
  },
];

const Listcontent3 = [
  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/social-media-marketing-growth-rate-icon1.png",
    listtxt: "Brand Positioning",
    listtxt1:
      "It is a long established fact that a reader will betracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumosed.",
  },

  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/social-media-marketing-growth-rate-icon2.png",
    listtxt: "Leads Generation",
    listtxt1:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/social-media-marketing-growth-rate-icon3.png",
    listtxt: "Business Linking",
    listtxt1:
      "It is a long established fact that a reader will betracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumosed.",
  },
  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/social-media-marketing-growth-rate-icon4.png",
    listtxt: "Guest Blogging",
    listtxt1:
      "t is a long established fact that a reader will betracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumosed.",
  },
];
const Listcontent4 = [
  {
    listimg:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/smo-new-icon.png",
    listtxt: "Brand Positioning",
    listtxt1:
      "It is a long established fact that a reader will betracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumosed.",
  },
  {
    listimg: "https://ryse.radiantthemes.com/wp-content/uploads/2019/07/jj.png",
    listtxt: "Increased Traffic and SEO Ranking",
    listtxt1:
      "It is a long established fact that a reader will betracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumosed.",
  },
];
