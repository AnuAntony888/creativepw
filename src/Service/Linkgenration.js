import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AllCards,
  Buttons,
  CardsSection,
  LeftRigt,
  Section2,
  TypographyText,
} from "../ReusableComponent/Reusab";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Linkgenration = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Datas = [
    {
      img: 'https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-what-we-do-img.jpg',
      txt1: 'How SEO Link Building is Performed for Start-up Firms?',
      txt2: 'There are many variations of lorem passages of Lorem Ipsum  available, but the majority have suffered.',
      listContent: [
        { listimg: 'https://ryse.radiantthemes.com/wp-content/uploads/2019/07/link-icon.png', listtxt: 'Three-Way Link Building', listtxt1: 'There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.', },
        { listimg: 'https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-new-icon2.png', listtxt: 'Specific Link Building', listtxt1: 'There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat.',  }
        // Add more items as needed
      ]
    }
  ];
  return (
    <>
      <CardsSection
        backgroundImage="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/banner-bg.png"
        txt1="Link Generation"
        txt2="Donec sollicitudin magnaultric semper. Lorem ipsum dolor sit
        amet consectetur.​"
        imges="https://ryse.radiantthemes.com/wp-content/uploads/2020/12/seo-link.png"
      />

{Datas && Datas.map((data, index) => (
      <LeftRigt
        key={index}
        img={data.img}
        txt1={data.txt1}
        txt2={data.txt2}
        Listcontent4={data.listContent}
      />
    ))}
     
      <Grid
        container
        spacing={1}
        sx={{
          p: "6%",
          backgroundImage:
            "url(https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-curve-banner.jpg)",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
        }}
      >
        <Grid item xs={12}>
          <Section2
              pt= "5%"
            text1="SEO Link Building Variations"
            text2={
              <>
                There are many variations of lorem passages of Lorem Ipsum
                available, but the majority have suffered. All the Lorem Ipsum
                generators.
              </>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="basic tabs example"
                sx={{
                  border: "solid .2px ",
                  borderColor: "lightgray",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "red",
                  },
                }}
              >
                {tabLabels.map((label, index) => (
                  <Tab
                    label={label}
                    {...a11yProps(index)}
                    key={index}
                    sx={{
                      pt: "3%",
                      pb: "3%",
                      pl: "2%",
                      pr: "2%",
                      color: "#1E1666",
                      fontWeight: "600",
                      fontSize: "1.15rem",
                      textTransform: "capitalize",
                      "&.Mui-selected": {
                        color: "#1E1666",
                      },
                    }}
                  />
                ))}
              </Tabs>
            </Box>

            {tabContent.map((content, index) => (
              <CustomTabPanel value={value} index={index} key={index}>
                <Grid container spacing={5}>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{ margin: "auto" }}
                  >
                    <img src={content.img} alt="" width="100%" />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{ margin: "auto" }}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TypographyText
                          Typography={content.txt1}
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
                          Typography={content.txt2}
                          fontSize="1.12rem"
                          color="#6A7C92"
                          textAlign={!isSmallScreen ? "left" : "centre"}
                        />
                      </Grid>
                      {content.data.map((data, index) => (
                        <Grid item lg={12} md={12} xs={12} sm={12} key={index}>
                          <ListItem disablePadding sx={{ padding: 0 }}>
                            <ListItemButton
                              style={{ backgroundColor: "transparent" }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "transparent")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "transparent")
                              }
                            >
                              <ListItemIcon>
                                <ArrowRightAltIcon sx={{ color: "red" }} />
                              </ListItemIcon>
                              <TypographyText
                                Typography={data.listtxt}
                                color="#827C92"
                              />
                            </ListItemButton>
                          </ListItem>
                        </Grid>
                      ))}
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: !isSmallScreen
                              ? "flex-start"
                              : "center",
                          }}
                        >
                          <Buttons
                            Buttonname="Contact Us Now"
                            className="button1"
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CustomTabPanel>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Section2
          pt= "5%"
        text1="Advantages of SEO Link Building in the Initial Phase"
        text2={
          <>
            There are many variations of lorem passages of Lorem Ipsum
            available, but the majority have suffered. All the Lorem Ipsum
            generators. Lorem available tent to lora.
          </>
        }
      />


<Grid
        container
        Spacing={2}
        sx={{
          p: "6%",
        }}
      >
        {Data.map((data, index) => (
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

export default Linkgenration;
const Data = [
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-circle-icon1.jpg",
    Typography1: "User Engaging",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-circle-icon2.jpg",
    Typography1: "Web Outreach",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-circle-icon3.jpg",
    Typography1: "Mobile Penetration",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },
  {
    image:
      "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-circle-icon4.jpg",
    Typography1: "Interface Rich",
    Typography2:
      "There are many variations of lorem duos lora spassages of Lorem Ipsum available internet tend to repeat predefined.",
  },]
const tabContent = [
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-tab-img1.png",
    txt1: "Link Building Strategies",
    txt2: "There are many variations of lorem passages of Lorem Ipsum available, but the majority have suffered. All the Lorem Ipsum generators. Lorem available tent to lora.",
    data: [
      { listtxt: "There are many variations of lorem duos." },
      { listtxt: "Lorem Ipsum available internet tend to repeat predefined." },
      {
        listtxt: "Spassages of available internet tend to repeat predefined.",
      },
    ],
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-tab-img2.png",
    txt1: "Link Building Resources",
    txt2: "There are many variations of lorem passages of Lorem Ipsum available, but the majority have suffered. All the Lorem Ipsum generators. Lorem available tent to lora.",
    data: [
      { listtxt: "There are many variations of lorem duos." },
      { listtxt: "Lorem Ipsum available internet tend to repeat predefined." },
      {
        listtxt: "Spassages of available internet tend to repeat predefined.",
      },
    ],
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-tab-img3.png",
    txt1: "Plan Execution",
    txt2: "There are many variations of lorem passages of Lorem Ipsum available, but the majority have suffered. All the Lorem Ipsum generators. Lorem available tent to lora.",
    data: [
      { listtxt: "There are many variations of lorem duos." },
      { listtxt: "Lorem Ipsum available internet tend to repeat predefined." },
      {
        listtxt: "Spassages of available internet tend to repeat predefined.",
      },
    ],
  },
  {
    img: "https://ryse.radiantthemes.com/wp-content/uploads/2019/06/link-building-tab-img4.png",
    txt1: "Tracking and Reporting",
    txt2: "There are many variations of lorem passages of Lorem Ipsum available, but the majority have suffered. All the Lorem Ipsum generators. Lorem available tent to lora.",
    data: [
      { listtxt: "There are many variations of lorem duos." },
      { listtxt: "Lorem Ipsum available internet tend to repeat predefined." },
      {
        listtxt: "Spassages of available internet tend to repeat predefined.",
      },
    ],
  },
];


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const tabLabels = [
  "One-way Link Building",
  "Dedicated Link Building",
  "Backlink Generation",
  "High Value Linking",
];
