import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.png";

import classes from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import SignInModal from "../Auth/SignInModal";
import { GlobalContext } from "../../context/store";

const Navbar = (user) => {
  // Temp
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen((prevState) => !prevState);
  const handleClose = () => setOpen(false);

  const { unsetAuthUser } = useContext(GlobalContext);
  // Temp

  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = () => setDrawerState((prevState) => !prevState);
  const navbarNavigationHandler = (event) => {
    navigate(`${event?.target?.id}`);
  };
  const logoutUserHandler = () => {
    unsetAuthUser();
    navigate("/");
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      id={classes["dropdown-box"]}
    >
      <div
        onClick={navbarNavigationHandler}
        id=""
        className={classes["dropdown-logo"]}
      >
        <img src={logo} alt="AECP logo" title="AECP logo" />
        <span style={{ color: "white" }}>
          <ClearIcon />
        </span>
      </div>
      <List className={classes["dropdown-list"]}>
        {/* <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="HOME" />
            </ListItemButton>
          </ListItem>
        </Link> */}
        <Link to="/breed-database">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="AECP DATABASE" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/farms">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="FARMS" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/studs">
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemText primary="MEMBERS" /> */}
              <ListItemText primary="STUDS" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/members">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="MEMBERS" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/about-aecp/suscription">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="FEE STRUCTURE" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/about-aecp">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="ABOUT" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/events">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="EVENTS" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding>
          <ListItemButton className={classes["dropdown-buttons"]}>
            {/* <button className={classes["color-button"]}>Buy Now</button> */}
            <button className={classes["inverse-button"]}>Log In</button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div className={classes.navbar}>
      <img
        onClick={navbarNavigationHandler}
        id=""
        src={logo}
        alt="AECP logo"
        title="AECP logo"
        style={{ cursor: "pointer" }}
      />
      <div className={classes["hidden-mobile"]}>
        <ul>
          {/* <li>
            <Link to="/">HOME</Link>
          </li> */}
          <li>
            <Link to="/breed-database">AECP DATABASE</Link>
          </li>
          <li>
            <Link to="/farms">FARMS</Link>
          </li>
          <li>
            <Link to="/studs">STUDS</Link>
          </li>
          <li>
            <Link to="/members">MEMBERS</Link>
          </li>
          {/* <li>
            <Link to="/about-aecp/memberApp">BECOME MEMBER</Link>
          </li> */}
          <li>
            <Link to="/about-aecp/suscription">FEE STRUCTURE</Link>
          </li>
          <li>
            <Link to="/about-aecp">ABOUT</Link>
          </li>
          {/* <li>
            <Link to="/about-aecp/rules">RULES AND REGULATIONS</Link>
          </li>
          <li>
            <Link to="/about-aecp/AECPteam">AECP TEAM</Link>
          </li> */}
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
        </ul>
      </div>
      {user?.user?.email ? (
        <div className={classes["logged-in-buttons"]}>
          <button
            className={`${classes["inverse-button"]} ${classes["hidden-mobile"]}`}
          >
            <Link to="/member-profile">MY PROFILE</Link>
          </button>
          <button
            onClick={logoutUserHandler}
            className={`${classes["inverse-button"]} ${classes["hidden-mobile"]}`}
          >
            <Link to="/member-profile">LOGOUT</Link>
          </button>
        </div>
      ) : (
        <div className={classes["logged-in-buttons"]}>
          <button
            onClick={handleOpen}
            className={`${classes["inverse-button"]} ${classes["hidden-mobile"]}`}
          >
            LOGIN
          </button>
          <Link to="/sign-up">
            <button
              className={`${classes["inverse-button"]} ${classes["hidden-mobile"]}`}
            >
              SIGN UP
            </button>
          </Link>
        </div>
      )}
      <div className={classes.dropdown}>
        <Button
          style={{
            padding: 0,
            color: "white",
          }}
          onClick={toggleDrawer}
        >
          <MenuIcon fontSize="medium" />
        </Button>
        <Drawer
          PaperProps={{
            sx: {
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            },
          }}
          anchor={"top"}
          open={drawerState}
          onClose={toggleDrawer}
        >
          {list()}
        </Drawer>
      </div>
      <SignInModal open={open} handleClose={handleClose} />
    </div>
  );
};
export default Navbar;
