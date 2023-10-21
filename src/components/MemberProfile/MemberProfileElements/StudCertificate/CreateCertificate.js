import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import classes from "./CreateCertificate.module.css";
import { saveStudCertificate } from "../../../../apis";

const CreateCertificate = ({
  open,
  handleClose,
  mares,
  stallions,
  user,
  refresh,
}) => {
  const [sire, setSire] = useState(0);
  const [dam, setDam] = useState();
  const [mating_date, setmating_date] = useState("");

  const studInfo = {
    sire: sire,
    dam: dam,
    mating_date: mating_date,
    created_by: user,
    dam_error: 0,
    sire_error: 0,
  };

  const sendResponse = async (event) => {
    // const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    // toast.promise(
    //     resolveAfter3Sec,
    //     {
    //       pending: 'Promise is pending',
    //       success: 'Promise resolved 👌',
    //       error: 'Promise rejected 🤯'
    //     }
    // )

    const response = await saveStudCertificate(JSON.stringify(studInfo));
    const responseData = await response.json();
    if (response.status === 500) {
      handleClose();
      toast.error(responseData.message, {
        style: { zIndex: "10000" },
      });
    } else if (response.status === 200) {
      handleClose();
      refresh();
      toast.success(responseData.message, {
        style: { zIndex: "10000" },
      });
    }
  };

  const onHandleChange = (event) => {
    if (event.target.name == "sire") {
      setSire(event.target.value);
    }

    if (event.target.name == "dam") {
      setDam(event.target.value);
    }

    if (event.target.name == "mating_date") {
      setmating_date(event.target.value);
    }

    console.log(event.target.name, event.target.value);
  };

  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle sx={window.innerWidth > 600 && { padding: "1rem 3rem" }}>
        <div className={classes["modal-title"]}>
          <h2>Online Stud Certificate</h2>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>
      <DialogContent sx={window.innerWidth > 600 && { padding: "1rem 3rem" }}>
        <p className={classes["title-text"]}>
          By filling out this online stud certificate, I certify that the
          information contained in is correct to the best of my knowledge and
          understanding. Furthermore, I have also informed my local Group Breed
          Warden of this mating.
        </p>
        <p className={classes.balance}>
          Current Balance: <span>8,927</span>
        </p>
        <hr />
        <div className={classes.inputs}>
          <div>
            <label htmlFor="horseName">Name of Sire</label>
            <select
              placeholder="Select Sire"
              name="sire"
              id="sire"
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
            <label htmlFor="mareName">Name of Mare</label>
            <select
              placeholder="Select Mare"
              name="dam"
              id="dam"
              onChange={onHandleChange}
            >
              <option value={""}>Select Mare</option>
              {mares &&
                mares.map((mare) => (
                  <option value={mare.id}>{mare.horse_name}</option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="mating_date">Mating Date</label>
            <input
              placeholder="Select Mare"
              type="date"
              name="mating_date"
              id="mating_date"
              onChange={onHandleChange}
            />
          </div>
        </div>

        <div className={classes.notice}>
          <h1>STUD CERTIFICATE</h1>
          <div>
            <div className={classes["notice-para"]}>
              <hr />
              <p>
                Once you click Submit, this certificate will be recorded. An
                online copy of this certificate will also be available to the
                owner of the mare. If you already have a positive balance in
                your account, that balance will be used for payment. If payment
                is required, you will be alerted of the amount payable. All
                payments are only acceptable in the form of a Bank Draft or Pay
                Order, drawn on a local bank and made out in favor of “ AECP
                (Pvt) Ltd. ". No payments made via any other method are
                acceptable.
              </p>
            </div>
            <div className={classes["fee-card"]}>
              <h2>Stud Certificate Fee</h2>
              <p>
                Rs. <span style={{ fontWeight: "bold" }}>100</span> Certificate
              </p>
            </div>
          </div>
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

export default CreateCertificate;
