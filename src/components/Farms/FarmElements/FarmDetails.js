import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tempMemberCard from "../../../assets/images/temp-member.png";
import tempFarm from "../../../assets/images/temp-farm.png";
import tempHorse from "../../../assets/images/horse.png";
import { InputBase, IconButton, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import logoMask from "../../../assets/images/logo-mask.png";

import classes from "./FarmDetails.module.css";

import { viewfarm } from "../../../apis";
import Carousel from "react-material-ui-carousel";

const FarmDetails = () => {
  const farmId = useParams().farmId;
  // const [farmActive, setFarmActive] = useState(true);

  const [FARM_DATA, setFarmData] = useState([]);

  const HORSE_OWNER_DATA = [
    {
      name: "Pegasus",
      imageUrl: tempHorse,
      ownerRegistrationNumber: "db34893a-ddb9",
    },
    {
      name: "Roach",
      imageUrl:
        "https://preview.redd.it/thank-god-now-we-can-pet-roach-in-the-witcher-3-next-gen-v0-aoz1is9zxf6a1.png?width=640&crop=smart&auto=webp&s=5a18e6e3394b132cc4149880cefdb3d55333da8a",
      ownerRegistrationNumber: "db34893a-ddb9",
    },
    {
      name: "Stallion",
      imageUrl:
        "https://images.unsplash.com/photo-1626952650502-140aba80b3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwaG9yc2V8ZW58MHx8MHx8&w=1000&q=80",
      ownerRegistrationNumber: "db34893a-ddb9",
    },
  ];

  const fetchData = async () => {
    const response = await viewfarm(farmId);
    response
      .json()
      .then((farm) => ({
        farm: farm,
        status: response.status,
      }))
      .then((res) => {
        setFarmData(res.farm.farm);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <h1>FARMS</h1>
              <p>Breed Database / Farm Details</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["breed-details"]}>
        <div className={classes["breed-image"]}>
          <Carousel swipe={false}>
            <img
              src={FARM_DATA[0]?.image || tempFarm}
              alt={FARM_DATA[0]?.stud_farm_name}
            />
            <img
              src={FARM_DATA[0]?.image || tempFarm}
              alt={FARM_DATA[0]?.stud_farm_name}
            />
            <img
              src={FARM_DATA[0]?.image || tempFarm}
              alt={FARM_DATA[0]?.stud_farm_name}
            />
          </Carousel>
        </div>
        <div className={classes["breed-table"]}>
          <h1>Stud Farm</h1>
          <table style={{ borderSpacing: "0px auto", fontSize: "20px" }}>
            <tbody>
              <tr>
                <td className={classes.title}>Name:</td>
                {FARM_DATA[0]?.stud_farm_name}
              </tr>
              <tr>
                <td className={classes.title}>City:</td>
                <td>{FARM_DATA[0]?.address}</td>
              </tr>
              <tr>
                <td className={classes.title}>Website:</td>
                <td>{FARM_DATA[0]?.website}</td>
              </tr>
            </tbody>
          </table>
          {/* <div className={classes["rounded-buttons"]}>
            <button onClick={() => setFarmActive(true)}>Farms</button>
            <button onClick={() => setFarmActive(false)}>Horses</button>
          </div> */}
          <div className={classes["member-cards"]}>
            {HORSE_OWNER_DATA.map((horse) => (
              <div className={classes["member-card"]}>
                <img src={horse.imageUrl} alt={tempMemberCard} />
                <div>
                  <h3>{horse.name}</h3>
                  <p>
                    <strong>Reg No:</strong> {horse.ownerRegistrationNumber}
                  </p>
                </div>
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

export default FarmDetails;
