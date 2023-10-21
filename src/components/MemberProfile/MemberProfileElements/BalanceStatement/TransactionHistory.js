import React, { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import tempMember from "../../../../assets/images/temp-member.png";

import classes from "./TransactionHistory.module.css";

const TransactionHistory = ({ open, handleClose }) => {
  const transactionData = [
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
    {
      id: "123",
      dateTime: "2014-09-12 11:44:32",
      paymentMethod: "Pyorder",
      amount: "18500.00",
      bankDrawnOn: "Summit Bank",
      chequeNo: "-",
      note: "Pyrder Number : 289279",
    },
  ];

  useEffect(() => {
    if (open) {
      console.log(open);
      //   fetch
    }
  }, [open]);

  return (
    <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle
        sx={
          window.innerWidth > 600 && { padding: "1rem 3rem 0 3rem !important" }
        }
      >
        <div className={classes["modal-title"]}>
          <h2>Old Transaction History</h2>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>
      <DialogContent
        sx={
          window.innerWidth > 600 && {
            padding: "0 3rem 1rem 3rem !important",
          }
        }
      >
        <hr />
        <div className={classes["table-parent"]}>
          <table className={classes["stud-table"]}>
            <thead>
              <tr className={classes["table-header"]}>
                <th>Date Time</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th>Bank Drawn On</th>
                <th>Cheque No</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {transactionData &&
                transactionData.map((item) => (
                  <tr>
                    <td>{item.dateTime}</td>
                    <td>{item.paymentMethod}</td>
                    <td>{item.amount}</td>
                    <td>{item.bankDrawnOn}</td>
                    <td>{item.chequeNo}</td>
                    <td>{item.note}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
      {/* <DialogActions>
        <button onClick={handleClose} className={classes["close"]}>
          Close
        </button>
        <button className={classes["submit"]}>Submit</button>
      </DialogActions> */}
    </Dialog>
  );
};

export default TransactionHistory;
