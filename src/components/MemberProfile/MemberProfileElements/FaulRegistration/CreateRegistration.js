import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./CreateRegistration.module.css";

import { saveLitterRegistration } from "../../../../apis";

import { toast } from "react-toastify";

import { GlobalContext } from "../../../../context/store";

const CreateRegistration = ({
  open,
  handleClose,
  mares,
  stallions,
  user,
  refresh,
}) => {
  const [sire, setSire] = useState(0);
  const [dam, setDam] = useState(0);
  const [foal_name, setFN] = useState("");
  const [color_markings, setCG] = useState("");
  const [whelping_date, setWD] = useState("");
  const [gender, setFG] = useState("");

  const memberData = useContext(GlobalContext);

  const inspInfo = {
    sire: sire,
    dam: dam,
    dob: whelping_date,
    gender: gender,
    foal_name: foal_name,
    color_markings: color_markings,
    created_by: memberData?.user?.id,
  };

  const sendResponse = async (event) => {
    const response = await saveLitterRegistration(JSON.stringify(inspInfo));
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
    } else if (event.target.name == "foal_name") {
      setFN(event.target.value);
    } else if (event.target.name == "whelping_date") {
      setWD(event.target.value);
    } else if (event.target.name == "gender") {
      setFG(event.target.value);
    } else if (event.target.name == "color_markings") {
      setCG(event.target.value);
    }

    console.log(event.target.name, event.target.value);
  };

  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle
        sx={
          window.innerWidth > 600
            ? { padding: "1rem 3rem" }
            : { padding: "1rem 1rem" }
        }
      >
        <div className={classes["modal-title"]}>
          <h2>Online Faul Registration</h2>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>

      <DialogContent
        sx={
          window.innerWidth > 600
            ? { padding: "1rem 3rem" }
            : { padding: "1rem 1rem" }
        }
      >
        <p className={classes["title-text"]}>
          By filling out this online form, I certify that this faul has been
          duly inspected by a Group Breed Warden of the AECP during the first
          week after birth.
        </p>
        <p className={classes.balance}>
          {/* Current Balance: <span>8,927</span> */}
        </p>
        {/* <p className={classes["title-text"]}>
          Faul Registration Fee: <span>2,200</span> | Per Foal Fee:
          <span> 3000</span> | Second Faul Inspection Charges:
          <span> 1500 </span>
          same city /<span> 3000 </span>other city
        </p> */}
        <hr style={{ margin: "1.5rem 0" }} />
        <div className={classes["registration-details"]}>
          <ul className={classes["detail-list"]}>
            <li>
              <span>Full Name:</span>{" "}
              {memberData?.user?.first_name +
                " " +
                (memberData?.user?.last_name != null
                  ? memberData?.user?.last_name
                  : "")}
            </li>

            <li>
              <span>Address:</span> {memberData?.user?.address}
            </li>
          </ul>
        </div>

        <div>
          <h2 className={classes["sub-heading"]}>Faul Parent</h2>
          <hr style={{ margin: "0.5rem 0 1rem 0" }} />
          <div className={classes.inputs}>
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
        </div>
        <div>
          <div className={classes["sub-headings"]}>
            <h2 className={classes["sub-heading"]}>Details of Faul</h2>
            {/* <h3 className={classes["sub-heading"]}>
              Total Chargable Amount: <span>3700</span>
            </h3> */}
          </div>
          <hr style={{ margin: "0.5rem 0 1rem 0" }} />
          <div className={classes.inputs2}>
            <div>
              <label htmlFor="whelpingDate">Fauls Whelping Date</label>
              <input
                placeholder="dd/mm/yy"
                type="date"
                name="whelping_date"
                id="whelping_date"
                onChange={onHandleChange}
              />
            </div>
            <div>
              <div>
                <label htmlFor="foal_name">Foal Name</label>
                <input
                  // placeholder="Select Dam Name"
                  type="text"
                  name="foal_name"
                  id="foal_name"
                  onChange={onHandleChange}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={onHandleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="colorMarkings">Color and Markings</label>
                <input
                  type="text"
                  name="color_markings"
                  id="color_markings"
                  onChange={onHandleChange}
                />
              </div>
              {/* <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" disabled/>
              </div> */}
            </div>
          </div>
        </div>
        <div className={classes.notice}>
          <h1 style={{ margin: "1.5rem 0 10px 0" }}>FAUL REGISTRATION</h1>
          <div>
            <div className={classes["notice-para"]}>
              <hr />
              <p>
                Once you click Submit, this application for faul registration
                will be submitted and held for approval. If you already have a
                positive balance in your account, that balance will be used for
                payment. If payment is required, you will be alerted of the
                amount payable. All payments are only acceptable in the form of
                a Bank Draft or Pay Order, drawn on a local bank and made out in
                favour of “HECP.“. No payments made via any other method are
                acceptable.
              </p>
            </div>
            <div className={classes["fee-card"]}>
              <h2>Faul Registration Fee</h2>
              <p>
                Rs. <span style={{ fontWeight: "bold" }}>2200</span> faul
              </p>
            </div>
            <div className={classes["fee-card"]}>
              <h2>Foal Fee</h2>
              <p>
                Rs. <span style={{ fontWeight: "bold" }}>3000</span> foal
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className={classes["close"]}>
          Close
        </button>
        <button className={classes["submit"]} onClick={sendResponse}>
          Submit
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateRegistration;
