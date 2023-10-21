import React, { useContext, useEffect, useState } from "react";
import TransactionHistory from "./TransactionHistory";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useSWR from "swr";
import { globalFetcher } from "../../../../apis";
import { GlobalContext } from "../../../../context/store";
import VisibilityIcon from "@mui/icons-material/Visibility";

import classes from "./BalanceStatement.module.css";
import { CircularProgress } from "@mui/material";

const data = [
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
  {
    id: "123",
    date: "May 20, 2015 02:33:48 pm",
    remarks: "Opening Balance as of 11-12-2020",
    paid: "Zone/Block Level 1 Unit A1",
    deposit: "42,700",
    balance: "42,700",
  },
];
function Items({ currentItems, setViewTransactionHistory }) {
  var total = 0;
  return (
    <table className={classes["stud-table"]}>
      <thead>
        <tr className={classes["table-header"]}>
          <th>Date</th>
          <th>Remarks</th>
          <th>Paid</th>
          <th>Deposit</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {currentItems ? (
          currentItems.map((item) => {
            total = total + (+item.credit - +item.debit);
            console.log(total);
            return (
              <tr>
                <td>{item.created_at}</td>
                <td>{item.remarks}</td>
                <td>{item?.debit || "-"}</td>
                <td>{item?.credit || "-"}</td>
                <td>{total}</td>
                {/* <td
                id={item.id}
                onClick={() => setViewTransactionHistory(item.id)}
                style={{ color: "#C0A147", cursor: "pointer" }}
              >
                Enter Horse
              </td> */}
              </tr>
            );
          })
        ) : (
          <tr>
            <td>-</td>
            <td>No remarks to show</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function BalanceStatement({ itemsPerPage = 9, setActivePage }) {
  // We start with an empty list of items.
  const [viewTransactionHistory, setViewTransactionHistory] = useState(false);
  const [createRegistration, setCreateRegistration] = useState(false);
  const { user } = useContext(GlobalContext);
  const {
    data: walletData,
    error: walletError,
    loading: walletLoading,
  } = useSWR(
    `https://admin.arabians.pk/api/my-wallet/${user.friendly_url}`,
    globalFetcher
  );

  const {
    data: transactionData,
    error: transactionError,
    loading: transactionLoading,
  } = useSWR(
    `https://admin.arabians.pk/api/transaction-list/${user.friendly_url}`,
    globalFetcher
  );

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (transactionData?.user_accounts.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(
        transactionData.user_accounts.slice(itemOffset, endOffset)
      );
      setPageCount(
        Math.ceil(transactionData.user_accounts.length / itemsPerPage)
      );
    }
  }, [itemOffset, itemsPerPage, transactionData]);

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
      <div className={classes["initial-display"]}>
        <button
          onClick={() => setActivePage("Fund Transfer History")}
          className={classes.btn}
        >
          <span className={classes["btn-text"]}>Funds Transfer</span>
        </button>
        <div className={classes["initial-text"]}>
          <h2>
            Current Balance: &nbsp;
            {walletData?.balance !== undefined ? (
              -walletData?.balance
            ) : (
              <CircularProgress />
            )}
          </h2>
          <p onClick={() => setViewTransactionHistory(true)}>
            View Transaction History
          </p>
        </div>
      </div>
      <Items
        setViewTransactionHistory={setViewTransactionHistory}
        currentItems={currentItems}
      />
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
      <TransactionHistory
        open={viewTransactionHistory}
        handleClose={() => setViewTransactionHistory(false)}
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

export default BalanceStatement;
