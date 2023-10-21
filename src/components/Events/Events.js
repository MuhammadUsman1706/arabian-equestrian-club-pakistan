import React, { useState } from "react";
import { InputBase, IconButton, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import logoMask from "../../assets/images/logo-mask.png";

import classes from "./Events.module.css";
import EventList from "./EventElements/EventList";
import { allevents, viewevent } from "../../apis";
import { useEffect } from "react";

const Events = () => {
  const [UPCOMING_EVENT_DATA, setupcoming] = useState([]);
  const [PREVIOUS_EVENT_DATA, setprevious] = useState([]);

  const fetchData=async()=>{
    const response= await allevents(); 
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(res => {
        setupcoming(res.data.data.upcoming);
        setprevious(res.data.data.previous);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [switchData, setSwitchData] = useState("upcomingEvents");

  return (
    <div className={classes["breed-database"]}>
      <div className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div>
          <h1>EVENTS</h1>
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
                  placeholder="Search Events"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </div>
      <EventList
        itemsPerPage={9}
        setSwitchData={setSwitchData}
        switchData={switchData}
        data={
          switchData === "upcomingEvents"
            ? UPCOMING_EVENT_DATA
            : PREVIOUS_EVENT_DATA
        }
      />
    </div>
  );
};

export default Events;
