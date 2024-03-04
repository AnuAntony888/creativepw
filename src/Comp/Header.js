import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Log from "../Assets/log.png";
import AOS from "aos";
import "aos/dist/aos.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const refreshPage = () => {
    window.location.href = "/";
  };

  const dropdown = [
    {
      text: "About ",
      category: [
        { content: "Introduction", label: "/introduction" },
        { content: "Mission & Vission", label: "/missionvission" },
        { content: "Our Strength", label: "/ourstrength" },
        { content: "Quality Assurance", label: "/qualtyassurance" },
        { content: "Safety Management", label: "/safetymanagement" },
        
      ],
    },
    {
      text: "Services",
      category: [{ content: "Electrical Contracting", label: "/electricalcontracting" },
        { content: "Plumbing Contracting", label: "/plumbingcontracting" },
        { content: "HVAC Contracting", label: "/HVACcontracting" },
        { content: "Fire Contracting", label: "/firecontracting" },
        { content: "MEP Contracting" ,label: "/MEPcontracting"},
      ],
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "70px" }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "white", width: "100%" }}
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
                      color: "black",
                      fontFamily: "Lora",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                      minWidth: "120px",
                    }}
                    className="buttton_eader"
                    disableRipple
                  >
                    <Link to="/">Home</Link>
                  </Button>
                  {dropdown.map((category, index) => (
                    <React.Fragment key={index}>
                      <Button
                        onClick={(event) => handleClick(event, index)}
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
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && selectedIndex === index}
                        onClose={handleClose}
                      >
                        {category.category.map((item, innerIndex) => (
                          <MenuItem
                            key={innerIndex}
                            onClick={handleClose}
                            sx={{}}
                          >
                            <Link
                              to={item.label}
                              style={{ fontFamily: "Lora" }}
                            >
                              {item.content}
                            </Link>
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  ))}
                  <Button
                    disableRipple
                    sx={{
                      color: "black",
                      fontFamily: "Lora",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                      minWidth: "120px",
                    }}
                    className="buttton_eader"
                  >
                    <Link to="/contactus">Contact Us</Link>
                  </Button>
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
};

export default Header;
export const navItems = [<Link to={"/contactus"}>Contact Us</Link>];
