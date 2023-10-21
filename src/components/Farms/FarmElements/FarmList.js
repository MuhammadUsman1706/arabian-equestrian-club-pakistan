import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import tempFarm from "../../../assets/images/temp-farm.png";

// import ReactDOM from "react-dom";

import classes from "./FarmList.module.css";

import { getfarms } from "../../../apis";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  // console.log("CurrentItems: ", currentItems);
  const navigate = useNavigate();

  const farmDetailNavigateHandler = (friendly_URl) => {
    navigate(`${friendly_URl}`);
  };
  return (
    <div className={classes["farm-cards"]}>
      {currentItems &&
        currentItems.map((item) => (
          <div
            className={classes["farm-card"]}
            onClick={() => {
              farmDetailNavigateHandler(item.friendly_URl);
            }}
          >
            <img src={item.image != '' ? item.image : tempFarm} alt={item.stud_farm_name} />
            <h2 className={classes["farm-name"]}>{item.stud_farm_name}</h2>
            {/* <h2>{}</h2> */}
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, data }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const fetchData=async()=>{
    const response= await getfarms(); 
      response.json().then(farms => ({
        farms: farms,
        status: response.status
      })
      ).then(res => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(res.farms.farms.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(res.farms.farms.length / itemsPerPage));
      });
  }

  useEffect(() => {
    // Fetch items from another resources.
    fetchData();
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
    <div className={classes["farm-list"]}>
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
    </div>
  );
}

// // Add a <div id="container"> to your HTML to see the componend rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container")
// );

export default PaginatedItems;
