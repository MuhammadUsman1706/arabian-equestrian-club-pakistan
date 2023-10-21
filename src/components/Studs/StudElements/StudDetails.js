import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import tempHorse from "../../../assets/images/temp-horse.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoMask from "../../../assets/images/logo-mask.png";

import classes from "./StudDetails.module.css";

import { viewhorse } from "../../../apis";
import PedigreeModal from "./PedigreeModal";

const StudDetails = () => {
  const studId = useParams().studId;
  const [showPedigreeModal, setShowPedigreeModal] = useState(false);
  const [STUD_DATA, setStudData] = useState([]);

  const fetchData = async () => {
    const response = await viewhorse(studId);
    response
      .json()
      .then((horse) => ({
        horse: horse,
        status: response.status,
      }))
      .then((res) => {
        setStudData(res.horse.horse);
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
              <h1>STUDS</h1>
              <p>Studs / Stud Details </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.main}>
        <div className={classes["stud-details"]}>
          <div className={classes["stud-image"]}>
            <img
              src={STUD_DATA.imageUrl != "" ? STUD_DATA.imageUrl : tempHorse}
              alt={studId}
            />
          </div>
          <div className={classes["stud-table"]}>
            <h1 style={{ textTransform: "uppercase" }}>
              {studId} {STUD_DATA?.birth_year?.slice(0, 4)}
            </h1>

            {/* <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{STUD_DATA.horse_name}</td>
                </tr>
                <tr>
                  <td>Foaled:</td>
                  <td>{STUD_DATA.foaled}</td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>{STUD_DATA.gender}</td>
                </tr>
                <tr>
                  <td>Parentage:</td>
                  <td>{STUD_DATA?.parentage}</td>
                </tr>
                <tr>
                  <td>Sire:</td>
                  <td>{STUD_DATA.sire_name}</td>
                </tr>
                <tr>
                  <td>Dam:</td>
                  <td>{STUD_DATA.dam_name}</td>
                </tr>
                <tr>
                  <td>Breeder:</td>
                  <td>{STUD_DATA.breeder}</td>
                </tr>
                <tr>
                  <td>Farm:</td>
                  <td>{STUD_DATA.breeder}</td>
                </tr>
              </tbody>
            </table> */}
            <table>
              <tbody>
                <tr>
                  <td>Registeration No:</td>
                  <td>{STUD_DATA.registeration}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>{STUD_DATA.horse_name}</td>
                </tr>
                <tr>
                  <td>Foaled:</td>
                  <td>{STUD_DATA.birth_year}</td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>{STUD_DATA.gender}</td>
                </tr>
                <tr>
                  <td>Color:</td>
                  <td>{STUD_DATA.color}</td>
                </tr>
                <tr>
                  <td>Stallions:</td>
                  <td>{STUD_DATA.sire_name}</td>
                </tr>
                <tr>
                  <td>Mare:</td>
                  <td>{STUD_DATA.dam_name}</td>
                </tr>
                <tr>
                  <td>Origin:</td>
                  <td>{STUD_DATA.origin}</td>
                </tr>
                <tr>
                  <td>Breeder:</td>
                  <td>{STUD_DATA.breeder}</td>
                </tr>
                <tr>
                  <td>Owner:</td>
                  <td>
                    <Link to="/members" className={classes["redirect"]}>
                      {STUD_DATA.owner_name}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Farm:</td>
                  <td>
                    <Link to="/farms" className={classes["redirect"]}>
                      {STUD_DATA.farm}
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
        </div>
        <PedigreeModal
          open={showPedigreeModal}
          setOpen={setShowPedigreeModal}
        />
      </div>
    </Fragment>
  );
};

export default StudDetails;
