import React, { useEffect, useState } from "react";
import TransferFundForm from "./TransferFundForm";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";

import classes from "./FundTransfer.module.css";

const data = [
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
  {
    id: "123",
    dateTime: "2014-09-12 11:44:32",
    transferTo: "Hammad Saleem",
    amount: "18500.00",
    remarks: "Pyrder Number : 289279",
  },
];

function Items({ currentItems }) {
  return (
    <table className={classes["stud-table"]}>
      <thead>
        <tr className={classes["table-header"]}>
          <th>Date Time</th>
          <th>Transfer To</th>
          <th>Amount</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {currentItems &&
          currentItems.map((item) => (
            <tr>
              <td>{item.dateTime}</td>
              <td>{item.transferTo}</td>
              <td>{item.amount}</td>
              <td>{item.remarks}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function FundTransfer({ itemsPerPage = 9, setActivePage }) {
  // We start with an empty list of items.
  const [viewForm, setViewForm] = useState(false);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className={classes["stud-certificate-list"]}>
      {/* <div className={classes["initial-display"]}> */}
      <button onClick={() => setViewForm(true)} className={classes.btn}>
        <span className={classes["btn-text"]}>Funds Transfer</span>
      </button>
      {/* <div className={classes["initial-text"]}>
          <h2>Current Balance: 8,927</h2>
          <p>View Trasaction History</p>
        </div> */}
      {/* </div> */}
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <KeyboardArrowRightIcon
            sx={{
              fontSize: "25px",
            }}
          />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <KeyboardArrowLeftIcon
            sx={{
              fontSize: "25px",
            }}
          />
        }
        renderOnZeroPageCount={null}
      />
      <TransferFundForm
        open={viewForm}
        handleClose={() => setViewForm(false)}
      />

      {/* <CreateTransfer
        open={createRegistration}
        handleClose={() => setCreateRegistration(false)}
      /> */}

      {/* // TO DO NOW: // CREATE NEW INSPECTION */}
      {/* <CreateCertificate
        open={createRegistration}
        handleClose={() => setCreateRegistration(false)}
      /> */}
    </div>
  );
}

export default FundTransfer;
