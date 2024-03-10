import React from "react";
import { useState, useEffect } from "react";
import { Button, Drawer } from "@mui/material";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import MenuItem from "@mui/material/MenuItem";

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { dropdown, men2, navItems } from "./Header";
import { Link, useLocation } from "react-router-dom";
const ResponsiveHeader = () => {
  const location = useLocation();
  const [openDrawer, setopenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setopenDrawer(false);
  };
  return (
    <div>
      <IconButton
        onClick={() => setopenDrawer(!openDrawer)}
        sx={{ float: "right" }}
      >
        <MenuIcon sx={{ color: "#BD0F65", float: "right" }} />
      </IconButton>

      <Drawer
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        PaperProps={{
          sx: { width: "300px", bgcolor: "white", color: "black" },
        }}
      >
        <List>
          <CloseIcon
            onClick={() => setopenDrawer(false)}
            sx={{ float: "right", marginRight: "10px" }}
          ></CloseIcon>
          <ListItem disablePadding>
            <ListItemButton
            
              sx={{
                color: "black",
                fontFamily: "Lora",
                fontSize: "1rem",
                textTransform: "capitalize",
                minWidth: "120px",
                justifyContent: "flex-start",
                paddingLeft: '8px',
                fontWeight:'500 !important'
              }}
              onClick={() => setopenDrawer(false)}
            >
              <ListItemText>
                {" "}
                <Link to="/" >Home</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          {dropdown.map((category, index) => (
            <ListItem disablePadding key={index}>
              <Button
                onClick={(event) => handleClick(event, index)}
                sx={{
                  color: "black",
                  fontFamily: "Lora",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  minWidth: "120px",
                  justifyContent: "flex-start",
                }}
                disableRipple
              >
                {category.text} &nbsp;&nbsp; <ArrowDropDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && selectedIndex === index}
                onClose={handleClose}
              >
                {category.category.map((item, innerIndex) => (
                  <MenuItem key={innerIndex} onClick={handleClose} sx={{}}>
                    <Link to={item.label} style={{ fontFamily: "Lora" }}>
                      {item.content}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </ListItem>
          ))}

          {men2.map((data, index) => (
            <ListItem disablePadding key={index}>
              <Button
                disableRipple
                sx={{
                  color: "black",
                  fontFamily: "Lora",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  minWidth: "120px",
                  justifyContent: "flex-start",
                }}
                className="buttton_eader"
                onClick={() => setopenDrawer(false)}
              >
                <Link to={data.label} >{data.text}</Link>
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default ResponsiveHeader;
