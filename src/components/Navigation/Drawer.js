import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import horseIcon from "../../assets/images/horseIcon.png";

import classes from "./Drawer.module.css";
import "react-modern-drawer/dist/index.css";

const FloatingDrawer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const pageChangeHandler = (event) => {
    const page = event.currentTarget.id;
    setActivePage(page);
    navigate(`about-aecp/${page}`);
  };

  return (
    <Fragment className={classes["drawer-parent"]}>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className={classes.drawer}
      >
        <div className={classes["drawer-call"]}>
          <IconButton onClick={toggleDrawer} aria-label="delete">
            <img src={horseIcon} alt="Horse" />
            {/* {isOpen ? (
              <ArrowForwardIosIcon />
            ) : (
              <ArrowBackIosNewIcon />
            )} */}
          </IconButton>
        </div>
        <section className={`${classes["view-controller"]}`}>
          <div
            id="aboutAECP"
            style={{ borderTopRightRadius: "15px" }}
            onClick={pageChangeHandler}
            className={activePage === "aboutAECP" && classes.active}
          >
            About AECP
          </div>
          <div
            id="aboutTheBreed"
            onClick={pageChangeHandler}
            className={activePage === "aboutTheBreed" && classes.active}
          >
            About The Breed
          </div>
          <div
            id="suscription"
            onClick={pageChangeHandler}
            className={activePage === "suscription" && classes.active}
          >
            Subscription and Fee Structure
          </div>
          <div
            id="rules"
            onClick={pageChangeHandler}
            className={activePage === "rules" && classes.active}
          >
            Rules and Regulations
          </div>
          <div
            id="memberApp"
            onClick={pageChangeHandler}
            className={activePage === "memberApp" && classes.active}
          >
            Membership Application
          </div>
          <div
            id="AECPteam"
            onClick={pageChangeHandler}
            className={activePage === "AECPteam" && classes.active}
          >
            AECP Team
          </div>
          <div
            id="AECPjudges"
            onClick={pageChangeHandler}
            className={activePage === "AECPjudges" && classes.active}
          >
            AECP Judges
          </div>
          <div
            id="news"
            onClick={pageChangeHandler}
            className={activePage === "news" && classes.active}
          >
            News & Updates
          </div>
          <div
            id="constitution"
            onClick={pageChangeHandler}
            className={activePage === "constitution" && classes.active}
          >
            AECP Constitution
          </div>
        </section>
      </Drawer>
    </Fragment>
  );
};

export default FloatingDrawer;
