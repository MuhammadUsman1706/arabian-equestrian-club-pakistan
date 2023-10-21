import React, { useState, useEffect, useContext } from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { GlobalContext } from "../../../../context/store";

import classes from "./CreateInspection.module.css";

import { saveLitterInspection } from "../../../../apis";

import { toast } from "react-toastify";

const CreateInspection = ({
  open,
  handleClose,
  mares,
  stallions,
  user,
  refresh,
}) => {
  const [sire, setSire] = useState(0);
  const [dam, setDam] = useState(0);
  const [mating_date, setMD] = useState("");
  const [whelping_date, setWD] = useState("");
  const [foal_gender, setFG] = useState("");

  const memberData = useContext(GlobalContext);

  const inspInfo = {
    sire: sire,
    dam: dam,
    mating_date: mating_date,
    whelping_date: whelping_date,
    foal_gender: foal_gender,
    created_by: user,
  };

  const sendResponse = async (event) => {
    const response = await saveLitterInspection(JSON.stringify(inspInfo));
    const responseData = await response.json();
    if (response.status === 500) {
      toast.error(responseData.message, {
        style: { zIndex: "10000" },
      });
    } else {
      handleClose();
      refresh();
      toast.success(responseData.message, {
        style: { zIndex: "10000" },
      });
      // console.log(responseData);
    }

    // console.log(inspInfo);
  };

  const onHandleChange = (event) => {
    if (event.target.name == "sire") {
      setSire(event.target.value);
    } else if (event.target.name == "dam") {
      setDam(event.target.value);
    } else if (event.target.name == "mating_date") {
      setMD(event.target.value);
    } else if (event.target.name == "whelping_date") {
      setWD(event.target.value);
    } else if (event.target.name == "foal_gender") {
      setFG(event.target.value);
    }

    console.log(event.target.name, event.target.value);
  };

  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle
        sx={
          window.innerWidth > 600
            ? { padding: "2rem 3rem 0 3rem" }
            : { padding: "0.5rem 3rem 0 3rem" }
        }
      >
        <div className={classes["modal-title"]}>
          <div className={classes["modal-title-header"]}>
            <div>
              <h3>Breeder</h3>
              <p>
                {memberData?.user?.first_name +
                  " " +
                  (memberData?.user?.last_name != null
                    ? memberData?.user?.last_name
                    : "")}
              </p>
            </div>
            {/* <div>
              <h3>City</h3>
              <p>Lahore</p>
            </div> */}
          </div>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>
      <DialogContent sx={window.innerWidth > 600 && { padding: "1rem 3rem" }}>
        <hr />
        <div className={classes.inputs}>
          <div>
            <div>
              <label htmlFor="sireName">Sire</label>
              <select
                placeholder="Select Sire Name"
                name="sire"
                id="sire"
                defaultValue={0}
                onChange={onHandleChange}
              >
                <option value={""}>Select Sire</option>
                {stallions &&
                  stallions.map((stallion) => (
                    <option value={stallion.id}>{stallion.horse_name}</option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="damName">Dam</label>
              <select
                placeholder="Select Dam Name"
                name="dam"
                id="dam"
                defaultValue={0}
                onChange={onHandleChange}
              >
                <option value={""}>Select Dam</option>
                {mares &&
                  mares.map((mare) => (
                    <option value={mare.id}>{mare.horse_name}</option>
                  ))}
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="whelping_date">Whelping Date</label>
              <input
                placeholder="dd/mm/yy"
                type="date"
                name="whelping_date"
                id="whelping_date"
                onChange={onHandleChange}
              />
            </div>
            <div>
              <label htmlFor="mating_date">Mating Date</label>
              <input
                placeholder="dd/mm/yy"
                type="date"
                name="mating_date"
                id="mating_date"
                onChange={onHandleChange}
              />
            </div>
          </div>
        </div>
        <div className={classes["radio-buttons"]}>
          <input
            type="radio"
            id="foal_gender"
            name="foal_gender"
            onChange={onHandleChange}
            value="male"
          />
           <label for="male">Male Foal Born</label>
          <br />
          <input
            type="radio"
            id="foal_gender"
            name="foal_gender"
            onChange={onHandleChange}
            value="female"
          />
           <label for="female">Female Foal Born</label>
          <br />
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className={classes["close"]}>
          Close
        </button>
        <button onClick={sendResponse} className={classes["submit"]}>
          Submit
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateInspection;
