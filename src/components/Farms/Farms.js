import React, { useState, useEffect } from "react";
import FarmList from "./FarmElements/FarmList";
import { InputBase, IconButton, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import logoMask from "../../assets/images/logo-mask.png";
import tempFarm from "../../assets/images/temp-farm.png";

import classes from "./Farms.module.css";

const Farms = () => {
  const [farms, setFarms] = useState([]);

  return (
    <div className={classes["breed-database"]}>
      <div className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div>
          <h1>FARMS</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={classes["breed-footer"]}>
            <span className={classes["social-handles"]}>
              <FacebookIcon />
              <YouTubeIcon />
            </span>
            <div>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "100px",
                  width: 300,
                }}
              >
                <IconButton
                  sx={{ p: "10px", color: "white" }}
                  aria-label="menu"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1, color: "white" }}
                  placeholder="Search Farms"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </div>
      {farms && <FarmList itemsPerPage={12} data={farms} />}
    </div>
  );
};

export default Farms;
