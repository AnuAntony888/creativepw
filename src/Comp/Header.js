import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "aos/dist/aos.css";
import AOS from "aos";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ResponsiveHeader from "./ResponsiveHeader";
import Log from "../Assets/log.png";
import MenuItem from "@mui/material/MenuItem";

import Menu from "@mui/material/Menu";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");
  function refreshPage() {
    window.location.href = "/";
  }
  React.useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          marginBottom: "80px",
        }}
      >
        <AppBar
          sx={{
            backgroundColor: "white",
            width: "100%",
            // maxHeight:'80px',

            justifyContent: "space-between",
            position: "sticky !impoertant",
            top: "0px",
            boxShadow: "none",
          }}
          position="fixed"
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              marginTop: !matches ? "5px" : "",
            }}
          >
            {matches ? (
              <>
                <div data-aos="zoom-in" data-aos-duration="1000">
                  <img
                    src={Log}
                    width={120}
                    height={"auto"}
                    onClick={refreshPage}
                    style={{ marginTop: "10px" }}
                  />
                </div>
                <Box>
                  <Button
                    sx={{
                      // color: "#1E1666",
                      // fontWeight: "600",
                      color: "black",
                      fontFamily: "Lora",
                      fontSize: "1rem",
                      textTransform: "capitalize",

                      minWidth: "120px",
                    }}
                    className="buttton_eader"
                    disableRipple
                  >
                    {" "}
                    <Link to="/">Home</Link>
                  </Button>

                  {dropdown.map((category, index) => (
                    <React.Fragment key={index}>
                      <Button
                        id={`basic-button-${index}`}
                        aria-controls={open ? `basic-menu-${index}` : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{
                          color: "black",

                          fontFamily: "Lora",
                          fontSize: "1rem",
                          textTransform: "capitalize",
                          minWidth: "120px",
                        }}
                      >
                        {category.text} &nbsp;&nbsp; <ArrowDropDownIcon />
                      </Button>
                      <Menu
                        id={`basic-menu-${index}`}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": `basic-button-${index}`,
                        }}
                      >
                        {category.category.map((item, innerIndex) => (
                          <MenuItem key={innerIndex} onClick={handleClose}>
                            {item.content}
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  ))}

                  {navItems.map((item) => (
                    <Button
                      disableRipple
                      key={item}
                      sx={{
                        // color: "#1E1666",
                        color: "black",
                        fontFamily: "Lora",
                        fontSize: "1rem",
                        textTransform: "capitalize",

                        minWidth: "120px",
                      }}
                      className="buttton_eader"
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </>
            ) : (
              <>
                <img
                  src={Log}
                  width={120}
                  height={"auto"}
                  onClick={refreshPage}
                />
                <ResponsiveHeader />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export const navItems = [<Link to={"/contactus"}>Contact Us</Link>];

export const dropdown = [
  {
    text: "About Us",
    category: [
      { content: <Link to={"/aboutus"}>About Us 1</Link> },
      { content: <Link to={"/aboutus"}>About Us 2</Link> },
      { content: <Link to={"/aboutus"}>About Us 3</Link> },
    ],
  },
  {
    text: "Services",
    category: [
      { content: <Link to={"/aboutus"}>About Us 1</Link> },
      { content: <Link to={"/aboutus"}>About Us 2</Link> },
      { content: <Link to={"/aboutus"}>About Us 3</Link> },
    ],
  },
  {
    text: "Projects",
    category: [
      { content: <Link to={"/aboutus"}>About Us 1</Link> },
      { content: <Link to={"/aboutus"}>About Us 2</Link> },
      { content: <Link to={"/aboutus"}>About Us 3</Link> },
    ],
  },
];
