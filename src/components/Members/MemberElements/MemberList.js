import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import tempMember from "../../../assets/images/temp-member.png";

// import ReactDOM from "react-dom";

import classes from "./MemberList.module.css";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const data = [
  {
    name: "Sarim Ali",
    imageUrl: tempMember,
  },
  {
    name: "Muhammad Usman",
    imageUrl: tempMember,
  },
  {
    name: "Muhammad Hamza",
    imageUrl: tempMember,
  },
  {
    name: "Khansa Siraj",
    imageUrl: tempMember,
  },
  {
    name: "1",
    imageUrl: tempMember,
  },
  {
    name: "2",
    imageUrl: tempMember,
  },
  {
    name: "3",
    imageUrl: tempMember,
  },
  {
    name: "4",
    imageUrl: tempMember,
  },
  {
    name: "5",
    imageUrl: tempMember,
  },
  {
    name: "6",
    imageUrl: tempMember,
  },
  {
    name: "7",
    imageUrl: tempMember,
  },
  {
    name: "8",
    imageUrl: tempMember,
  },
  {
    name: "1",
    imageUrl: tempMember,
  },
  {
    name: "2",
    imageUrl: tempMember,
  },
  {
    name: "3",
    imageUrl: tempMember,
  },
  {
    name: "4",
    imageUrl: tempMember,
  },
  {
    name: "5",
    imageUrl: tempMember,
  },
  {
    name: "6",
    imageUrl: tempMember,
  },
  {
    name: "7",
    imageUrl: tempMember,
  },
  {
    name: "8",
    imageUrl: tempMember,
  },
  {
    name: "1",
    imageUrl: tempMember,
  },
  {
    name: "2",
    imageUrl: tempMember,
  },
  {
    name: "3",
    imageUrl: tempMember,
  },
  {
    name: "4",
    imageUrl: tempMember,
  },
  {
    name: "5",
    imageUrl: tempMember,
  },
  {
    name: "6",
    imageUrl: tempMember,
  },
  {
    name: "7",
    imageUrl: tempMember,
  },
  {
    name: "8",
    imageUrl: tempMember,
  },
];

function Items({ currentItems }) {
  // console.log("CurrentItems: ", currentItems);
  const navigate = useNavigate();

  const breedDetailNavigateHandler = (name) => {
    navigate(`${name}`);
  };
  return (
    <div className={classes["breed-cards"]}>
      {currentItems &&
        currentItems.map((item) => (
          <div
            className={classes["breed-card"]}
            onClick={() => {
              breedDetailNavigateHandler(item.first_name);
            }}
          >
            <img src={item.profile_photo_url} alt={item.first_name} />
            <h2>
              {item.first_name} {item.last_name}
            </h2>
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

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
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
    <div className={classes["breed-list"]}>
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
