import React from "react";
import { useParams } from "react-router-dom";
import tempMemberCard from "../../../assets/images/temp-member-card.png";
import tempMember from "../../../assets/images/temp-member.png";
import { InputBase, IconButton, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import logoMask from "../../../assets/images/logo-mask.png";

import classes from "./MemberDetails.module.css";
import { useState } from "react";

const MemberDetails = () => {
  const memberId = useParams().memberId;
  const [farmActive, setFarmActive] = useState(true);

  const MEMBER_DATA = {
    imageUrl: tempMember,
    name: "Sarim Ali",
    address: "06/09/2000",
    email: "CHESTNUT STALLION",
    phoneNo: "DNA Typed. Parentage qualified",
    membershipNo: "AHR*454606 FIRE AN ICE",
  };

  const MEMBER_FARM_DATA = [
    {
      name: "farm",
      imageUrl: tempMemberCard,
    },
    {
      name: "farm",
      imageUrl: tempMemberCard,
    },
    {
      name: "farm",
      imageUrl: tempMemberCard,
    },
    {
      name: "farm",
      imageUrl: tempMemberCard,
    },
    {
      name: "farm",
      imageUrl: tempMemberCard,
    },
    {
      name: "farm",
      imageUrl: tempMemberCard,
    },
    {
      name: "farm",
      imageUrl: tempMemberCard,
    },
  ];

  const MEMBER_HORSE_DATA = [
    {
      name: "hercules",
      imageUrl: tempMemberCard,
    },
    {
      name: "hercules",
      imageUrl: tempMemberCard,
    },
    {
      name: "hercules",
      imageUrl: tempMemberCard,
    },
    {
      name: "hercules",
      imageUrl: tempMemberCard,
    },
    {
      name: "hercules",
      imageUrl: tempMemberCard,
    },
    {
      name: "hercules",
      imageUrl: tempMemberCard,
    },
    {
      name: "hercules",
      imageUrl: tempMemberCard,
    },
  ];

  return (
    <div className={classes.main}>
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
              <h1>MEMBERS</h1>
              <p>Breed Database / Member Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["breed-details"]}>
        <div className={classes["breed-image"]}>
          <img src={MEMBER_DATA.imageUrl} alt={memberId} />
        </div>
        <div className={classes["breed-table"]}>
          <h1>{memberId}</h1>
          <table style={{ borderSpacing: "0px auto" }}>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{MEMBER_DATA.name}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{MEMBER_DATA.address}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{MEMBER_DATA.email}</td>
              </tr>
              <tr>
                <td>Phone No:</td>
                <td>{MEMBER_DATA.phoneNo}</td>
              </tr>
              <tr>
                <td>Membership No:</td>
                <td>{MEMBER_DATA.membershipNo}</td>
              </tr>
            </tbody>
          </table>
          <div className={classes["rounded-buttons"]}>
            <button onClick={() => setFarmActive(true)}>Farms</button>
            <button onClick={() => setFarmActive(false)}>Horses</button>
          </div>
          <div className={classes["member-cards"]}>
            {farmActive
              ? MEMBER_FARM_DATA.map((farm) => (
                  <div className={classes["member-card"]}>
                    <img src={farm.imageUrl} alt={tempMemberCard} />
                    <h2>{farm.name}</h2>
                  </div>
                ))
              : MEMBER_HORSE_DATA.map((horse) => (
                  <div className={classes["member-card"]}>
                    <img src={horse.imageUrl} alt={tempMemberCard} />
                    <h2>{horse.name}</h2>
                  </div>
                ))}
          </div>
        </div>
        {/* <div className={classes["bottom"]}>
          <button className={classes.btn}>
            <span className={classes["btn-text"]}>View Pedigree</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MemberDetails;
