import React, { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import tempMember from "../../../../assets/images/temp-member.png";

import classes from "./TransferFundForm.module.css";

const TransferFundForm = ({ open, handleClose }) => {
  // useEffect(() => {
  //   if (open) {
  //     console.log(open);
  //     //   fetch
  //   }
  // }, [open]);

  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle
        sx={
          window.innerWidth > 600 && { padding: "1rem 3rem 0 3rem !important" }
        }
      >
        <div className={classes["modal-title"]}>
          <h2>Transfer Fund</h2>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>
      <DialogContent
        sx={
          window.innerWidth > 600 && { padding: "0 3rem 1rem 3rem !important" }
        }
      >
        <hr />
        <p className={classes["sub-heading"]}>
          Current Balance: <span>8,927</span>
        </p>
        <div className={classes["enter-details"]}>
          <div className={classes.inputs}>
            <div>
              <label htmlFor="sireName">Member</label>
              <select
                placeholder="Select Member"
                name="memberName"
                id="memberName"
              >
                <option value="hamza">Hamza</option>
              </select>
            </div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input type="text" name="amount" id="amount" />
            </div>
          </div>
          <br />
          <label
            style={{
              display: "block",
            }}
            htmlFor="remarks"
          >
            Remarks
          </label>
          <textarea
            name="remarks"
            id="remarks"
            cols="30"
            rows="10"
            placeholder="Write Remarks"
          ></textarea>
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className={classes["close"]}>
          Close
        </button>
        <button className={classes["submit"]}>Transfer</button>
      </DialogActions>
    </Dialog>
  );
};

export default TransferFundForm;
