import { Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypographyText } from "../ReusableComponent/Reusab";

import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
const Foter = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const footerlink = [
    {
      txt: <>About us</>,
      data: [
        {
          text1:
            "There are many variations of lorem spassages of Lorem Ipsum available internet tend to repeat predefined.",
        },
      ],
    },
    {
      txt: <>Important Links</>,
      data: [
        { text1: <Link to="/">Home</Link> },
        { text1: <Link to={"/aboutus"}>About Us</Link> },
        { text1: <Link to={"/freequote"}>Free Quote</Link> },
        { text1: <Link to={"/faq"}>FAQ</Link> },
        { text1: <Link to={"/contactus"}>Contact Us</Link> },
      ],
    },
    {
      txt: <>Featured Services</>,
      data: [
        { text1: <Link to="/">Searh Engine Optimizaion</Link> },
        { text1: <Link to={"/aboutus"}>Searh Engine Optimizaion</Link> },
        { text1: <Link to={"/freequote"}>Searh Engine Optimizaion</Link> },
        { text1: <Link to={"/faq"}>Searh Engine Optimizaion</Link> },
        { text1: <Link to={"/contactus"}>Searh Engine Optimizaion</Link> },
      ],
    },
    {
      txt: <>Contact Us</>,
      data: [
        { text1: "Office Address" },
        { text1: "121 King St, Melbourne VIC 3000," },
        { text1: "Australia" },
        { text1: "Phone: (888)123-4587" },
        { text1: "Email: info@admin.com" },
      ],
    },
  ];

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",

          backgroundPositionX: "60%",
          backgroundImage:
            location.pathname === "/"
              ? isSmallScreen
                ? `url(http://ryse.radiantthemes.com/wp-content/uploads/2020/03/footer-bg-1.jpg)`
                : "url(https://ryse.radiantthemes.com/wp-content/uploads/2020/03/footer-bg.jpg)"
              : "none",
          backgroundColor:
            location.pathname === "/" ? "transparent" : "#332295",
          backgroundPositionY: "13%",
          pl: "8%",
          pr: "8%",
          pt: location.pathname === "/" ? "20%" : "8%",
          pb: "3%",
          textAlign: "left",
          backgroundRepeat: isSmallScreen ? "repeat" : "no-repeat",
          // objectFit:'cover'
        }}
      >
        {footerlink.map((post, index) => (
          <Grid
            item
            lg={index === 0 ? 3.5 : index === 1 ? 2.5 : 3}
            md={3}
            sm={6}
            xs={12}
          >
            <TypographyText
              Typography={post.txt}
              fontWeight="600"
              fontSize={"1.25rem"}
              color={location.pathname === "/" ? "black" : "white"}
              textAlign="left"
            />
            <List sx={{ textAlign: "left" }}>
              {post.data.map((datas, indexs) => (
                <ListItem
                  sx={{ textAlign: "left", padding: "0 !important" }}
                  key={indexs}
                >
                  <ListItemText sx={{ textAlign: "left", padding: "0" }}>
                    <TypographyText
                      Typography={datas.text1}
                      color={location.pathname === "/" ? "black" : "white"}
                    />
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            {index === 0 ? <img src={''} width={120} height={"auto"} /> : ""}
          </Grid>
        ))}
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          md={12}
          sx={{ margin: "auto", textAlign: "center" }}
        >
          <hr />
          <TypographyText
            Typography="Designed by Radiant Themes"
            textAlign="centre"
            color={location.pathname === "/" ? "black" : "white"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Foter;
