import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import tempMember from "../../../assets/images/temp-member.png";

// import ReactDOM from "react-dom";

import classes from "./EventList.module.css";
import { Fragment } from "react";

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems, setSwitchData, switchData }) {
  const navigate = useNavigate();

  const eventDetailNavigateHandler = (id) => {
    if (switchData === "previousEvents") navigate(`/events/${id}`);
  };

  return (
    <Fragment>
      <div className={classes["switch-events"]}>
        <button
          className={switchData === "upcomingEvents" && classes.active}
          onClick={() => {
            setSwitchData("upcomingEvents");
          }}
        >
          Upcoming Events
        </button>
        <button
          className={switchData === "previousEvents" && classes.active}
          onClick={() => {
            setSwitchData("previousEvents");
          }}
        >
          Previous Events
        </button>
      </div>
      <div className={classes["event-cards"]}>
        {currentItems &&
          currentItems.map((event) => (
            <div className={classes["event-card"]}>
              <div
                onClick={() => eventDetailNavigateHandler(event.id)}
                className={classes["event-header"]}
              >
                <div>
                  <p className={classes.date}>
                    {new Date(event.start_date).getDate()}th
                  </p>
                  <p className={classes.month}>
                    {new Date(event.start_date).toLocaleString("default", {
                      month: "long",
                    })}
                    {
                      // new Date(event.start_date).getFullYear()
                    }
                  </p>
                </div>
                <span className={classes.vl}></span>
                <h2>{event.title}</h2>
              </div>
              <div className={classes["event-details"]}>
                {/* <p>
                  <span className={classes["event-details-heading"]}>
                    Hosted By:{" "}
                  </span>
                  <span className={classes["event-details-text"]}>
                    {event?.hostedBy}
                  </span>
                </p> */}
                <p>
                  <span className={classes["event-details-heading"]}>
                    Venue:{" "}
                  </span>
                  <span className={classes["event-details-text"]}>
                    {event.venue}
                  </span>
                </p>
                <p>
                  <span className={classes["event-details-heading"]}>
                    Judge(s):{" "}
                  </span>
                  <span className={classes["event-details-text"]}>
                    {event?.judges}
                  </span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
}

function PaginatedItems({ itemsPerPage, data, setSwitchData, switchData }) {
  // We start with an empty list of items.
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
  }, [itemOffset, itemsPerPage, switchData, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className={classes["breed-list"]}>
      <Items
        currentItems={currentItems}
        setSwitchData={setSwitchData}
        switchData={switchData}
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
    </div>
  );
}

// // Add a <div id="container"> to your HTML to see the componend rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container")
// );

export default PaginatedItems;
