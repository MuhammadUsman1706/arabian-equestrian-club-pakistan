import React, { useEffect, useState } from "react";
import EnterHorse from "./EnterHorse";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { allevents } from "../../../../apis";

import classes from "./ShowEnteries.module.css";



function Items({ currentItems, setViewRegistration }) {
  return (
    <table className={classes["stud-table"]}>
      <thead>
        <tr className={classes["table-header"]}>
          <th>Date</th>
          <th>Event Name</th>
          <th>Location</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {currentItems &&
          currentItems.map((item) => (
            <tr>
              <td>{item.start_date}</td>
              <td>{item.title}</td>
              <td>{item.venue}</td>
              <td
                id={item.id}
                onClick={() => setViewRegistration(item.id)}
                style={{ color: "#C0A147", cursor: "pointer" }}
              >
                Enter Horse
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function ShowEnteries({ itemsPerPage = 9 }) {
  // We start with an empty list of items.
  const [viewRegistration, setViewRegistration] = useState(false);
  const [createRegistration, setCreateRegistration] = useState(false);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [EVENTS, setevents] = useState();

  const fetchData = async () => {
    const response = await allevents();
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      setevents(res.data.data.upcoming);
      // console.log(res.data.data.previous,'--==-===--=');

      setCurrentItems(res.data.data.upcoming);
      setPageCount(Math.ceil(res.data.data.upcoming.length / itemsPerPage));
    });
  }

  useEffect(() => {
    // Fetch items from another resources.
    fetchData();
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(EVENTS);
    // setPageCount(Math.ceil(100 / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % EVENTS.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className={classes["stud-certificate-list"]}>
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
      <EnterHorse
        open={viewRegistration}
        eventId={2}
        handleClose={() => setViewRegistration(false)}
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

export default ShowEnteries;
