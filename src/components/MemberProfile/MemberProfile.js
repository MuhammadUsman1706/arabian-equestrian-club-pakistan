import React, { useState, useContext } from "react";
import SideDrawer from "./MemberProfileElements/SideDrawer";
import MyProfile from "./MemberProfileElements/MyProfile/MyProfile";
import StudCertificate from "./MemberProfileElements/StudCertificate/StudCertificateList";
import FaulInspection from "./MemberProfileElements/FaulInspection/FaulInspection";
import FaulRegistration from "./MemberProfileElements/FaulRegistration/FaulRegistration";
import Transfer from "./MemberProfileElements/Transfer/Transfer";
import HorsesEntered from "./MemberProfileElements/HorsesEntered/HorsesEntered";
import NewsUpdates from "./MemberProfileElements/NewsUpdates/NewsUpdates";
import ShowEnteries from "./MemberProfileElements/ShowEnteries/ShowEnteries";
import BalanceStatement from "./MemberProfileElements/BalanceStatement/BalanceStatement";
import FundTransfer from "./MemberProfileElements/FundTransfer/FundTransfer";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoMask from "../../assets/images/logo-mask.png";
// import tempMemberCard from "../../assets/images/temp-member-card.png";
// import tempMember from "../../assets/images/temp-member.png";

import { GlobalContext } from "../../context/store";

import classes from "./MemberProfile.module.css";

const MemberProfile = () => {
  // const [farmActive, setFarmActive] = useState(true);
  const [activePage, setActivePage] = useState("My Profile");
  const memberData = useContext(GlobalContext);

  const pageChangeHandler = (event) => {
    const page = event.currentTarget.id;
    setActivePage(page);
  };

  return (
    <div className={classes["member-profile"]}>
      <div className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div>
          <div className={classes["breed-footer"]}>
            <span className={classes["social-handles"]}>
              <FacebookIcon />
              <YouTubeIcon />
            </span>
            <div>
              <h1>MY PROFILE</h1>
              <p>
                {memberData?.user?.first_name +
                  " " +
                  (memberData?.user?.last_name != null
                    ? memberData?.user?.last_name
                    : "")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["member-details"]}>
        <section className={`${classes["view-controller"]} ${classes["hide"]}`}>
          <div
            id="My Profile"
            onClick={pageChangeHandler}
            className={activePage === "My Profile" && classes.active}
          >
            My Profile
          </div>
          <div
            id="Stud Certificate List"
            onClick={pageChangeHandler}
            className={activePage === "Stud Certificate List" && classes.active}
          >
            Stud Certificate
          </div>
          <div
            id="Faul Inspection"
            onClick={pageChangeHandler}
            className={activePage === "Faul Inspection" && classes.active}
          >
            Faul Inspection
          </div>
          <div
            id="Faul Registration"
            onClick={pageChangeHandler}
            className={activePage === "Faul Registration" && classes.active}
          >
            Faul Registration
          </div>
          <div
            id="Transfer/Lease"
            onClick={pageChangeHandler}
            className={activePage === "Transfer/Lease" && classes.active}
          >
            Transfer Lease
          </div>
          <div
            id="Show Enteries/Surveys"
            onClick={pageChangeHandler}
            className={activePage === "Show Enteries/Surveys" && classes.active}
          >
            Show Enteries/Surveys
          </div>
          <div
            id="Horses Entered"
            onClick={pageChangeHandler}
            className={activePage === "Horses Entered" && classes.active}
          >
            Horses Entered
          </div>
          <div
            id="News & Updates"
            onClick={pageChangeHandler}
            className={activePage === "News & Updates" && classes.active}
          >
            News & Updates
          </div>
          <div
            id="Balance Statement"
            onClick={pageChangeHandler}
            className={`
              ${activePage === "Balance Statement" && classes.active}
              ${activePage === "Fund Transfer History" && classes.active}
              `}
          >
            Balance Statement
          </div>
        </section>
        <section className={classes["breed-details"]}>
          <SideDrawer
            activeHeading={activePage}
            pageChangeHandler={pageChangeHandler}
          />
          {/* <div className={classes["drawer-open"]}>
            <h1>My Profile</h1>
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
            >
              <section className={classes["view-controller"]}>
                <div className={classes.active}>My Profile</div>
                <div>Stud Certificate</div>
                <div>Faul Inspection</div>
                <div>Faul Registration</div>
                <div>Transfer Lease</div>
                <div>Show Enteries/Surveys</div>
                <div>Horses Entered</div>
                <div>News & Updates</div>
                <div>Balance Statement</div>
              </section>
            </Drawer>
          </div> */}
          {activePage === "My Profile" && <MyProfile />}
          {activePage === "Stud Certificate List" && (
            <StudCertificate setActivePage={setActivePage} />
          )}
          {activePage === "Faul Inspection" && (
            <FaulInspection setActivePage={setActivePage} />
          )}
          {activePage === "Faul Registration" && (
            <FaulRegistration setActivePage={setActivePage} />
          )}
          {activePage === "Transfer/Lease" && <Transfer />}
          {activePage === "Show Enteries/Surveys" && <ShowEnteries />}
          {activePage === "Horses Entered" && <HorsesEntered />}
          {activePage === "News & Updates" && <NewsUpdates />}
          {activePage === "Balance Statement" && (
            <BalanceStatement setActivePage={setActivePage} />
          )}
          {activePage === "Fund Transfer History" && <FundTransfer />}
        </section>
      </div>
    </div>
  );
};

export default MemberProfile;
