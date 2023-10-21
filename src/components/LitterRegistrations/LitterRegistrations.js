import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import horse from "../../assets/images/horse.png";
import logoMask from "../../assets/images/logo-mask.png";

import classes from "./LitterRegistrations.module.css";
import LitterRegistrationList from "./LitterRegistrationElements/LitterRegistrationList";

const LitterRegistration = () => {
  return (
    <div className={classes["breed-database"]}>
      <div className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div>
          <h1>Member Profile</h1>
          <p>
            faheemasghar
          </p>
          <div className={classes["breed-footer"]}>
            <span className={classes["social-handles"]}>
              <FacebookIcon />
              <YouTubeIcon />
            </span>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.tempDiv} >
      <LitterRegistrationList />
      </div>
    </div>
  );
};

export default LitterRegistration;
