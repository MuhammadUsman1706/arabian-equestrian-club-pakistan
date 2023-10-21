import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./ViewInspection.module.css";

const ViewInspection = ({ open, handleClose }) => {
  const data = {
    sire: {
      name: "Brux vom Team Inspection",
      kcpNo: "83013",
      dob: "2018-04-24",
      trainingLevel: "-",
      tattoo: "688018437384",
      breedSurveys: "01",
      city: "-",
      ownerName: "-",
      street: "-",
      matingDate: "2022-10-16",
    },
    dam: {
      name: "Rita vom Larechs",
      kcpNo: "30991",
      dob: "2018-04-24",
      trainingLevel: "-",
      tattoo: "688018437384",
      breedSurveys: "01",
      city: "-",
      ownerName: "-",
      street: "-",
      matingDate: "2022-10-16",
    },
  };

  useEffect(() => {
    if (open) {
      console.log(open);
      //   fetch
    }
  }, [open]);

  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle sx={window.innerWidth > 600 && { padding: "1rem 3rem" }}>
        <div className={classes["modal-title"]}>
          <h2>
            Stud Certificate of {data.sire.name} & {data.dam.name}
          </h2>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>
      <DialogContent sx={window.innerWidth > 600 && { padding: "1rem 3rem" }}>
        <p className={classes["title-text"]}>
          The declaration made on this certificate is certified as true to the
          best of my knowledge the pedigree of the mare has been examined by me
          and has been certified/issue by the G S D.1D.P
        </p>
        <hr />
        <div className={classes["certificate-details"]}>
          <div>
            <h2>Sire</h2>
            <ul>
              <li>
                <span className={classes.field}>Name of Sire: </span>
                <span className={classes.value}>{data.sire.name}</span>
              </li>
              <li>
                <span className={classes.field}>KCP No: </span>
                <span className={classes.value}>{data.sire.kcpNo}</span>
              </li>
              <li>
                <span className={classes.field}>Date of Birth: </span>
                <span className={classes.value}>{data.sire.dob}</span>
              </li>
              <li>
                <span className={classes.field}>Training Level: </span>
                <span className={classes.value}>{data.sire.trainingLevel}</span>
              </li>
              <li>
                <span className={classes.field}>Tattoo: </span>
                <span className={classes.value}>{data.sire.tattoo}</span>
              </li>
              <li>
                <span className={classes.field}>Breed Surveys: </span>
                <span className={classes.value}>{data.sire.breedSurveys}</span>
              </li>
              <li>
                <span className={classes.field}>City: </span>
                <span className={classes.value}>{data.sire.city}</span>
              </li>
              <li>
                <span className={classes.field}>Name of Owner(s) of Stud:</span>
                <span className={classes.value}>{data.sire.ownerName}</span>
              </li>
              <li>
                <span className={classes.field}>Street: </span>
                <span className={classes.value}>{data.sire.street}</span>
              </li>
              <li>
                <span className={classes.field}>Mating Date: </span>
                <span className={classes.value}>{data.sire.matingDate}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2>Dam</h2>
            <ul>
              <li>
                <span className={classes.field}>Name of Sire: </span>
                <span className={classes.value}>{data.sire.name}</span>
              </li>
              <li>
                <span className={classes.field}>KCP No: </span>
                <span className={classes.value}>{data.sire.kcpNo}</span>
              </li>
              <li>
                <span className={classes.field}>Date of Birth: </span>
                <span className={classes.value}>{data.sire.dob}</span>
              </li>
              <li>
                <span className={classes.field}>Training Level: </span>
                <span className={classes.value}>{data.sire.trainingLevel}</span>
              </li>
              <li>
                <span className={classes.field}>Tattoo: </span>
                <span className={classes.value}>{data.sire.tattoo}</span>
              </li>
              <li>
                <span className={classes.field}>Breed Surveys: </span>
                <span className={classes.value}>{data.sire.breedSurveys}</span>
              </li>
              <li>
                <span className={classes.field}>City: </span>
                <span className={classes.value}>{data.sire.city}</span>
              </li>
              <li>
                <span className={classes.field}>Name of Owner(s) of Stud:</span>
                <span className={classes.value}>{data.sire.ownerName}</span>
              </li>
              <li>
                <span className={classes.field}>Street: </span>
                <span className={classes.value}>{data.sire.street}</span>
              </li>
              <li>
                <span className={classes.field}>Mating Date: </span>
                <span className={classes.value}>{data.sire.matingDate}</span>
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewInspection;
