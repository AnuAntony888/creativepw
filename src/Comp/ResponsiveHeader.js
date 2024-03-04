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
import { dropdown, navItems } from "./Header";
import { Link, useLocation } from "react-router-dom";
const ResponsiveHeader = () => {
  const location = useLocation();
  const [openDrawer, setopenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        <MenuIcon sx={{ color: "white", float: "right" }} />
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
            <ListItemButton sx={{ textAlign: "left", color: "#2C08D9" }}>
              <ListItemText>
                {" "}
                <Link to="/">Home</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
  

          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "#2C08D9" }}>
                <ListItemText
                  primary={item}
                  onClick={() => setopenDrawer(false)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default ResponsiveHeader;
