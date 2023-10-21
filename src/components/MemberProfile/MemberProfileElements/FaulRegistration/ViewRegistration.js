import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import tempMember from "../../../../assets/images/temp-member.png";

import classes from "./ViewRegistration.module.css";

const ViewRegistration = ({ open, handleClose }) => {
  const MEMBER_DATA = {
    imageUrl: tempMember,
    name: "Arlene McCoy",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    email: "curtis.weaver@example.com",
    phoneNo: "(225) 555-0118",
    farm: "vom Larechs /",
    previousLetterUsed: "'R' vom Larechs",
  };

  const FOAL_TABLE_INFO = [
    {
      name: "Remo11vom Larech",
      gender: "M",
      dnaSample: "Yes",
      microchips: "920006543210274",
      hair: "Stock Hair",
      color: "Black-Gold",
    },
    {
      name: "Remo11vom Larech",
      gender: "M",
      dnaSample: "Yes",
      microchips: "920006543210274",
      hair: "Stock Hair",
      color: "Black-Gold",
    },
    {
      name: "Remo11vom Larech",
      gender: "M",
      dnaSample: "Yes",
      microchips: "920006543210274",
      hair: "Stock Hair",
      color: "Black-Gold",
    },
  ];

  useEffect(() => {
    if (open) {
      console.log(open);
      //   fetch
    }
  }, [open]);

  return (
    <Dialog fullWidth={true} maxWidth="xl" open={open} onClose={handleClose}>
      <DialogTitle
        sx={
          window.innerWidth > 600 && { padding: "1rem 3rem 0 3rem !important" }
        }
      >
        <div className={classes["modal-title"]}>
          <h2>Breeder Details</h2>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>
      <DialogContent
        sx={
          window.innerWidth > 600 && { padding: "0 3rem 1rem 3rem !important" }
        }
      >
        <hr />
        <div className={classes["breed-table"]}>
          <div className={classes["breed-image"]}>
            <img src={MEMBER_DATA.imageUrl} />
          </div>
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
                <td>Phone No:</td>
                <td>{MEMBER_DATA.phoneNo}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{MEMBER_DATA.email}</td>
              </tr>
              <tr>
                <td>Farm:</td>
                <td>{MEMBER_DATA.farm}</td>
              </tr>
              <tr>
                <td>Previous Letter Used:</td>
                <td>{MEMBER_DATA.previousLetterUsed}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={classes["faul-parent"]}>
          <h2>Faul Parent</h2>
          <hr />
          <div className={classes["parent-details"]}>
            <ul className={classes["detail-list"]}>
              <li>
                <span>Sire:</span> +92-0301-7736382
              </li>

              <li>
                <span>DNA Status:</span> 4140 Parker Rd. Allentown, New Mexico
                31134
              </li>
            </ul>
            <ul className={classes["detail-list"]}>
              <li>
                <span>Dam:</span> +92-0301-7736382
              </li>
              <li>
                <span>DNA Status:</span> 4140 Parker Rd. Allentown, New Mexico
                31134
              </li>
            </ul>
          </div>
        </div>
        <div className={classes["foals-information"]}>
          <h2>Foals Information</h2>
          <hr />
          <div className={classes["parent-details"]}>
            <ul className={classes["detail-list"]}>
              <li>
                <span>Missing Date:</span> December 15,2021
              </li>
            </ul>
            <ul className={classes["detail-list"]}>
              <li>
                <span>Whelping Date:</span> December 15,2021
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.table}>
          <table className={classes["stud-table"]}>
            <thead>
              <tr className={classes["table-header"]}>
                <th>Foals Name</th>
                <th>Gender</th>
                <th>DNA Sample Taken</th>
                <th>Microchips</th>
                <th>Hair</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {FOAL_TABLE_INFO &&
                FOAL_TABLE_INFO.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.dnaSample}</td>
                    <td>{item.microchip}</td>
                    <td>{item.hair}</td>
                    <td>{item.color}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewRegistration;
