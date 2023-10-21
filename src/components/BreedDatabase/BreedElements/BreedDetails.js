import React, { useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import tempHorse from "../../../assets/images/temp-horse.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoMask from "../../../assets/images/logo-mask.png";

import classes from "./BreedDetails.module.css";
import { useState } from "react";

import { viewhorse } from "../../../apis";
import PedigreeModal from "../../Studs/StudElements/PedigreeModal";

const BreedDetails = () => {
  const horseId = useParams().horseId;
  const [HORSE_DATA, setHorseData] = useState([]);
  const [showPedigreeModal, setShowPedigreeModal] = useState(false);

  const fetchData = async () => {
    const response = await viewhorse(horseId);
    response
      .json()
      .then((horse) => ({
        horse: horse,
        status: response.status,
      }))
      .then((res) => {
        setHorseData(res.horse.horse);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>
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
              <h1>BREED DATABASE</h1>
              <p>Breed Database / Horse Details </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes["breed-details"]}>
          <div className={classes["breed-image"]}>
            <img
              src={HORSE_DATA.imageUrl != "" ? HORSE_DATA.imageUrl : tempHorse}
              alt={horseId}
            />
          </div>
          <div className={classes["breed-table"]}>
            <h1>
              {HORSE_DATA.horse_name} {HORSE_DATA?.birth_year?.slice(0, 4)}
            </h1>
            {/* <h1>{HORSE_DATA.horse_name} </h1> */}
            <table>
              <tbody>
                <tr>
                  <td>Registeration No:</td>
                  <td>{HORSE_DATA.registeration}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>{HORSE_DATA.horse_name}</td>
                </tr>
                <tr>
                  <td>Foaled:</td>
                  <td>{HORSE_DATA.birth_year}</td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>{HORSE_DATA.gender}</td>
                </tr>
                <tr>
                  <td>Color:</td>
                  <td>{HORSE_DATA.color}</td>
                </tr>
                <tr>
                  <td>Stallions:</td>
                  <td>{HORSE_DATA.sire_name}</td>
                </tr>
                <tr>
                  <td>Mare:</td>
                  <td>{HORSE_DATA.dam_name}</td>
                </tr>
                <tr>
                  <td>Origin:</td>
                  <td>{HORSE_DATA.origin}</td>
                </tr>
                <tr>
                  <td>Breeder:</td>
                  <td>{HORSE_DATA.breeder}</td>
                </tr>
                <tr>
                  <td>Owner:</td>
                  <td>
                    <Link to="/members" className={classes["redirect"]}>
                      {HORSE_DATA.owner_name}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Farm:</td>
                  <td>
                    <Link to="/farms" className={classes["redirect"]}>
                      {HORSE_DATA.farm}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes["bottom"]}>
            <button
              onClick={() => setShowPedigreeModal(true)}
              className={classes.btn}
            >
              <span className={classes["btn-text"]}>View Pedigree</span>
            </button>
          </div>
          <PedigreeModal
            open={showPedigreeModal}
            setOpen={setShowPedigreeModal}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default BreedDetails;
