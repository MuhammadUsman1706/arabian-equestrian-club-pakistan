import React, { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./CreateTransfer.module.css";

const CreateTransfer = ({ open, handleClose }) => {
  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle
        sx={
          window.innerWidth > 600
            ? { padding: "1rem 3rem 0 3rem !important" }
            : { padding: "1rem 1rem 0 1rem !important" }
        }
      >
        <div className={classes["modal-title"]}>
          <h3>
            Horse Ownership Transfer Fee is waived in case of a breeder
            transferring ownership of a foal.
          </h3>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>

      <DialogContent
        sx={
          window.innerWidth > 600
            ? { padding: "0rem 3rem 1rem 3rem !important" }
            : { padding: "0rem 1rem 1rem 1rem !important" }
        }
      >
        <hr style={{ margin: "1rem 0" }} />
        <p className={classes["title-text"]}>
          Once you click Submit, the ownership of the Horse will be transferred
          to the new owner. If you already have a positive balance in your
          account, that balance will be used for payment. If payment is
          required, you will be alerted of the amount payable. All payments are
          only acceptable in the form of a Bank Draft or Pay Order, drawn on a
          local bank and made out in favour of “AECP (Pvt) Ltd.“. No payments
          made via any other method are acceptable.
        </p>
        <h2 className={classes["sub-heading"]}>Ownership Transfer</h2>
        <hr style={{ margin: "1rem 0" }} />
        <p className={classes["title-text"]}>
          By filling out this online ownership transfer form, I hereby declare
          that the ownership of the said Horse has been transferred from myself
          to the new owner.
        </p>

        <div className={classes["horse-lease"]}>
          <h2 className={classes["sub-heading"]}>Horse Lease</h2>
          <hr style={{ margin: "1rem 0" }} />
          <div className={classes.inputs}>
            <div>
              <label htmlFor="sireName">Transfer Type</label>
              <select
                placeholder="Select Transfer Type"
                type="text"
                name="transferType"
                id="transferType"
              >
                <option value="volvo">Volvo</option>
              </select>
            </div>
            <div>
              <label htmlFor="horseName">Name of Horse</label>
              <select
                placeholder="Select Horse Name"
                type="text"
                name="horseName"
                id="horseName"
              >
                <option value="volvo">Volvo</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="remarks">Remarks</label>
            <textarea
              placeholder="Write Remarks"
              name="remarks"
              id="remarks"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        {/* <div>
          <div className={classes["sub-headings"]}>
            <h2 className={classes["sub-heading"]}>Details of Faul</h2>
            <h3 className={classes["sub-heading"]}>
              Total Chargable Amount: <span>3700</span>
            </h3>
          </div> 
          <hr style={{ margin: "0.5rem 0 1rem 0" }} />
          <div className={classes.inputs2}>
            <div>
              <label htmlFor="whelpingDate">Fauls Whelping Date</label>
              <input
                placeholder="dd/mm/yy"
                type="date"
                name="whelpingDate"
                id="whelpingDate"
              />
            </div>
            <div>
              <div>
                <label htmlFor="horseName">Horse Name</label>
                <input
                  // placeholder="Select Dam Name"
                  type="text"
                  name="horseName"
                  id="horseName"
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="colorMarkings">Color and Markings</label>
                <select name="colorMarkings" id="colorMarkings">
                  <option value="white">White</option>
                  <option value="black">Black</option>
                </select>
              </div>
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" />
              </div>
            </div>
          </div>
        </div> */}
        <div className={classes.notice}>
          {/* <h1 style={{ margin: "1.5rem 0 10px 0" }}>FAUL REGISTRATION</h1> */}
          <div>
            <div className={classes["notice-para"]}>
              {/* <hr /> */}
              <p>
                Once you click Submit, the Horse will be marked as leased to the
                new owner. If you already have a positive balance in your
                account, that balance will be used for payment. If payment is
                required, you will be alerted of the amount payable. All
                payments are only acceptable in the form of a Bank Draft or Pay
                Order, drawn on a local bank and made out in favour of “AECP
                (Pvt) Ltd.“. No payments made via any other method are
                acceptable.
              </p>
            </div>
            <div className={classes["fee-card"]}>
              <h2>Horse Ownership Transfer Fee</h2>
              <p>
                Rs. <span style={{ fontWeight: "bold" }}>1000</span> Transfer
              </p>
            </div>
            <div className={classes["fee-card"]}>
              <h2>Foal Fee</h2>
              <p>
                Rs. <span style={{ fontWeight: "bold" }}>1000</span> lease
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className={classes["close"]}>
          Close
        </button>
        <button className={classes["submit"]}>Submit</button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTransfer;
