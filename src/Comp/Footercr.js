import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import Log from "../Assets/log2.png";
import { TypographyText } from "../ReusableComponent/Reusab";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Footercr = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          pt: "2%",
          margin: "auto",
          bgcolor: "#E7E9ED",
          pl: "6%",
          pr: "6%",
          pb: "2%",
          textAlign: "left",
        }}
      >
        <Grid item lg={2.5} md={3} sm={6} xs={12} sx={{ margin: "auto" }}>
          <img src={Log} alt="" width={"100%"} />
        </Grid>

        {Menu.map((data, index) => (
          <Grid item lg={2.5} md={3} sm={6} xs={12} key={index}>
            <TypographyText
              Typography={data.text}
              fontWeight="600"
              fontSize={"1.2rem"}
              textAlign="left"
              // color="#1E1666"
            />
            <List>
              {data.data.map((post, indexs) => (
                <ListItem
                  sx={{ textAlign: "left", padding: "0 !important" }}
                  key={indexs}
                >
                  <ListItemText
                    sx={{ textAlign: "left", padding: "0", fontFamily: "Lora" }}
                  >
                    <Link to={post.link} style={{ fontFamily: "Lora" }}>
                      {post.label}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}

        {Menu1.map((data, index) => (
          <Grid item lg={4} md={3} sm={6} xs={12} key={index}>
            <TypographyText
              Typography={data.text}
              fontWeight="600"
              fontSize={"1.2rem"}
              textAlign="left"
              // color="#1E1666"
            />
            <List>
              {data.data.map((post, indexs) => (
                <ListItem
                  sx={{ textAlign: "left", padding: "0 !important" }}
                  key={indexs}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    {post.icon}
                  </ListItemIcon>

                  <ListItemText
                    sx={{ textAlign: "left", padding: "0", fontFamily: "Lora" }}
                  >
                    <Link to={post.link} style={{ fontFamily: "Lora" }}>
                      {post.label}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{ p: "10px", backgroundColor: "#FBE7F2" }}
        className="homepadding"
      >
        <TypographyText
          Typography={<>Copyright Ⓒ 2024  Creative Power Electromechanical Works L.L.C | All Rights Reserved
            </>
          }
          fontSize=".9rem"
          textAlign="centre"
          // color="#1E1666"
          fontWeight="600"
        />
      </Box>
    </div>
  );
};

export default Footercr;
const Menu = [
  {
    text: "Quick Links",
    data: [
      { label: "Home", link: "/" },
      { label: "About Us ", link: "/aboutus" },
      { label: "Services", link: "/services" },
      { label: "News", link: "/news" },
      { label: "Contact Us", link: "/contactus" },
    ],
  },
  {
    text: "Our Services",
    data: [
      { label: "Electrical Contracting", link: "/" },
      { label: "Plumbing Contracting ", link: "/aboutus" },
      { label: "HVAC Contracting", link: "/services" },
      { label: "Fire Contracting", link: "/news" },
      { label: "MEP Contracting", link: "/contactus" },
    ],
  },
];

const Menu1 = [
  {
    text: "Address",
    data: [
      {
        label: "+971 4 2981 609",
        link: "/",
        icon: <PhoneIcon sx={{ color: "black" }} />,
      },
      {
        label: "info@creativepw.com",
        link: "/",
        icon: <EmailIcon sx={{ color: "black" }} />,
      },
      {
        label: "www.creativepw.com",
        link: "/",
        icon: <LanguageIcon sx={{ color: "black" }} />,
      },

      {
        label: (
          <>
            address,
            <br />
          </>
        ),
        link: "/",
        icon: <LocationOnIcon sx={{ color: "black" }} />,
      },
    ],
  },
];
