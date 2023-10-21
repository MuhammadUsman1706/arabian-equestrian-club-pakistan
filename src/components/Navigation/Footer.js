import React, { Fragment } from "react";
import logo from "../../assets/images/logo.png";
import logoMask from "../../assets/images/logo-mask.png";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.footer}>
        <div className={classes["masked-logo"]}>
          <img src={logoMask} alt="" />
        </div>
        <img src={logo} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className={classes["footer-links"]}>
          <div>
            <span>Home</span>
            <span>Breed Database</span>
            <span>Members</span>
          </div>
          <div>
            <span className={classes["stick"]}>Farms</span>
            <span>Events</span>
            <span>About Club</span>
          </div>
        </div>
        <div className={classes.contact}>
          <span>
            <PhoneIcon sx={{ margin: "0 15px" }} />
            +7 386-418-6395
          </span>
          <span>
            <LocationOnIcon sx={{ margin: "0 15px" }} />
            +7 386-418-6395
          </span>
          <span>
            <MailIcon sx={{ margin: "0 15px" }} />
            +7 386-418-6395
          </span>
        </div>
        <div className={classes["social-handles"]}>
          <FacebookIcon />
          <YouTubeIcon />
        </div>
      </div>
      <div className={classes.copyright}>
        <p>AECP © 2022, All rights reserved - Powered by Inspedium Corp.-</p>
      </div>
    </Fragment>
  );
};

export default Footer;
