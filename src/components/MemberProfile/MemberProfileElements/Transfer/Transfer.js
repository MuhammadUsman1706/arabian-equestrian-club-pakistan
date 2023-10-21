import React, { useEffect, useState, useContext } from "react";
import ViewTransfer from "./ViewTransfer";
import CreateTransfer from "./CreateTransfer";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import classes from "./Transfer.module.css";
import { GlobalContext } from "../../../../context/store";
import { ownerships } from "../../../../apis";

const data = [
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
  {
    id: "123",
    date: "October 30, 2017",
    horse: "Brux vom Team Panonainsee",
    owner: "Ariene McCoy",
    status: "owner",
    from: "-",
    to: "-",
  },
];

function Items({ currentItems, setViewRegistration }) {
  return (
    <table className={classes["stud-table"]}>
      <thead>
        <tr className={classes["table-header"]}>
          <th>Date</th>
          <th>Horse</th>
          <th>Owner</th>
          <th>Status</th>
          <th>From</th>
          <th>To</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {currentItems &&
          currentItems.map((item) => (
            <tr>
              <td>{item.date}</td>
              <td>{item.horse_name}</td>
              <td>{item.first_name+' '+(item.last_name != null ? item.last_name : '')}</td>
              <td>{item.type}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              {/* <td
                id={item.id}
                onClick={() => setViewRegistration(item.id)}
                style={{ color: "#0F2D25" }}
              >
                <VisibilityIcon />
              </td> */}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function Transfer({ itemsPerPage = 9 }) {
  // We start with an empty list of items.
  const [viewRegistration, setViewRegistration] = useState(false);
  const [createRegistration, setCreateRegistration] = useState(false);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const memberData = useContext(GlobalContext).user;

  const fetchList = async () => {
    const response = await ownerships(memberData?.id);
    response
      .json()
      .then((data) => ({
        data: data,
        status: response.status,
      }))
      .then((res) => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(res.data.ownership);
        setPageCount(Math.ceil(res.data.ownership?.length / itemsPerPage));
      });
  };

  useEffect(() => {
    // Fetch items from another resources.
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(data.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(data.length / itemsPerPage));
    fetchList();
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
      {/* <button
        onClick={() => setCreateRegistration(true)}
        className={classes.btn}
      >
        <span className={classes["btn-text"]}>Create New</span>
      </button> */}
      <Items
        setViewRegistration={setViewRegistration}
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
      <ViewTransfer
        open={viewRegistration}
        handleClose={() => setViewRegistration(false)}
      />

      <CreateTransfer
        open={createRegistration}
        handleClose={() => setCreateRegistration(false)}
      />

      {/* // TO DO NOW: // CREATE NEW INSPECTION */}
      {/* <CreateCertificate
        open={createRegistration}
        handleClose={() => setCreateRegistration(false)}
      /> */}
    </div>
  );
}

export default Transfer;
