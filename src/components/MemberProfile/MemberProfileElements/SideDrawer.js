import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./SideDrawer.module.css";

const SideDrawer = ({ activeHeading, pageChangeHandler }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className={classes["drawer-open"]}>
      <h1>{activeHeading}</h1>
      <Button
        style={{
          display: "none",
          color: "black",
        }}
        onClick={() => setShowDrawer(true)}
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        onClick={() => setShowDrawer(false)}
      >
        <section className={classes["view-controller"]}>
          <div
            id="My Profile"
            onClick={pageChangeHandler}
            className={activeHeading === "My Profile" && classes.active}
          >
            My Profile
          </div>
          <div
            id="Stud Certificate List"
            onClick={pageChangeHandler}
            className={
              activeHeading === "Stud Certificate List" && classes.active
            }
          >
            Stud Certificate
          </div>
          <div
            id="Faul Inspection"
            onClick={pageChangeHandler}
            className={activeHeading === "Faul Inspection" && classes.active}
          >
            Faul Inspection
          </div>
          <div
            id="Faul Registration"
            onClick={pageChangeHandler}
            className={activeHeading === "Faul Registration" && classes.active}
          >
            Faul Registration
          </div>
          <div
            id="Transfer/Lease"
            onClick={pageChangeHandler}
            className={activeHeading === "Transfer/Lease" && classes.active}
          >
            Transfer Lease
          </div>
          <div
            id="Show Enteries/Surveys"
            onClick={pageChangeHandler}
            className={
              activeHeading === "Show Enteries/Surveys" && classes.active
            }
          >
            Show Enteries/Surveys
          </div>
          <div
            id="Horses Entered"
            onClick={pageChangeHandler}
            className={activeHeading === "Horses Entered" && classes.active}
          >
            Horses Entered
          </div>
          <div
            id="News & Updates"
            onClick={pageChangeHandler}
            className={activeHeading === "News & Updates" && classes.active}
          >
            News & Updates
          </div>
          <div
            id="Balance Statement"
            onClick={pageChangeHandler}
            className={`
              ${activeHeading === "Balance Statement" && classes.active}
              ${activeHeading === "Fund Transfer History" && classes.active}
              `}
          >
            Balance Statement
          </div>
        </section>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
