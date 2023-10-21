import React, { Fragment,useEffect, useState, useContext } from "react";
import classes from './HorseEntered.module.css';
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GlobalContext } from "../../../../context/store";
import { horsesEntered } from "../../../../apis";




const data = [
  {
    id: "123",
    title: "Pakistan Sieger Show -2022",
    date:"February 5th,2022",
    judge: "Imran Husain",
    eventName: "Pakistan Sieger Show -2022",
    horseName: "Megan vom larechs",
    class: "Foal",
    dateOfEvent: "May 20, 2015",
  },
  {
    id: "123",
    title: "Pakistan Sieger Show -2022",
    date:"February 5th,2022",
    judge: "Imran Husain",
    eventName: "Pakistan Sieger Show -2022",
    horseName: "Megan vom larechs",
    class: "Foal",
    dateOfEvent: "May 20, 2015",
  },
  {
    id: "123",
    title: "Pakistan Sieger Show -2022",
    date:"February 5th,2022",
    judge: "Imran Husain",
    eventName: "Pakistan Sieger Show -2022",
    horseName: "Megan vom larechs",
    class: "Foal",
    dateOfEvent: "May 20, 2015",
  },
  {
    id: "123",
    title: "Pakistan Sieger Show -2022",
    date:"February 5th,2022",
    judge: "Imran Husain",
    eventName: "Pakistan Sieger Show -2022",
    horseName: "Megan vom larechs",
    class: "Foal",
    dateOfEvent: "May 20, 2015",
  },
  {
    id: "123",
    title: "Pakistan Sieger Show -2022",
    date:"February 5th,2022",
    judge: "Imran Husain",
    eventName: "Pakistan Sieger Show -2022",
    horseName: "Megan vom larechs",
    class: "Foal",
    dateOfEvent: "May 20, 2015",
  },
  {
    id: "123",
    title: "Pakistan Sieger Show -2022",
    date:"February 5th,2022",
    judge: "Imran Husain",
    eventName: "Pakistan Sieger Show -2022",
    horseName: "Megan vom larechs",
    class: "Foal",
    dateOfEvent: "May 20, 2015",
  },
];

function Items({ currentItems, childItems }) {

  return (
    <>
    
        {currentItems &&
            currentItems.map((item) => (
              <Fragment>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className={classes.showDiv}>
            <span className={classes.showDetails}>{item.title}</span>
            <span className={classes.showDate}>{item.start_date} &nbsp; Judge(s): {item.judges}</span>
          </div>
        {/* <button className={classes.Horsebtn}>
          <span className={classes["Horse-btn-text"]}>View Catalog <ArrowForwardIcon sx={{ marginLeft: "5px", width: "0.8em" }} /> </span>
        </button> */}
      </div>

      <table className={classes["stud-table"]}>
        <thead>
          <tr className={classes["table-header"]}>
            <th>Event Name</th>
            <th>Horse Name</th>
            <th>Class</th>
            <th>Date Of Event</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
        {childItems &&
            childItems.map((child) => (
              child.show_id == item.id ? (
              <tr>
                <td>{item.title}</td>
                <td>{child.horse_name}</td>
                <td>{child.class}</td>
                <td>{item.start_date}</td>
                {/* <td><span className={classes.certificate}> {item.ResultCard} </span></td> */}
                {/* <td><span className={classes.certificate}> Certificate </span></td> */}
                <td><span className={classes.certificate}> {child.result} </span></td>
              </tr>
              )
              :
              ''
            )
            )
        }
        </tbody>
      </table>
      </Fragment>
            ))}
      
    </>
  );
}

function HorsesEntered({ itemsPerPage = 4 }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [childItems, setChildItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const memberData = useContext(GlobalContext).user;

  const fetchList = async () => {
    const response = await horsesEntered(memberData?.id);
    response
      .json()
      .then((data) => ({
        data: data,
        status: response.status,
      }))
      .then((res) => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(res.data.events);
        setChildItems(res.data.entered);
        setPageCount(Math.ceil(res.data.events?.length / itemsPerPage));
      });
  };

  useEffect(() => {
    // Fetch items from another resources.
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(data.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(data.length / itemsPerPage));
    fetchList();
  }, [itemOffset, itemsPerPage]);

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


      <Items
        currentItems={currentItems}
        childItems={childItems}
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

export default HorsesEntered;
