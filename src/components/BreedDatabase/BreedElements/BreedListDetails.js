import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

import horse from "../../../assets/images/horse.png";

import { viewbreed } from "../../../apis";

import classes from "./BreedListDetails.module.css";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  const navigate = useNavigate();

  const breedId = useParams().breedId;

  const [HORSE_DATA, setHorseData] = useState([]);

  const breedDetailNavigateHandler = (name) => {
    navigate(`${name}`);
  };

  return (
    <div className={classes["stud-cards"]}>
      {currentItems &&
        currentItems.map((item) => (
          <div
            className={classes["stud-card"]}
            onClick={() => {
              breedDetailNavigateHandler(item.friendly_URL);
            }}
          >
            <img
              src={
                item.imageUrl ||
                "/static/media/temp-horse.cc8728a6d7a678026833.png"
              }
              alt={item.horse_name}
            />
            <div className={classes.details}>
              <div>
                <h2 className={classes.bold}>{item.horse_name}</h2>
                <span> | </span>
                <h2 className={classes.bold}>
                  {new Date(item?.birth_year).getFullYear()}
                </h2>
                <span> | </span>
                <h2 className={`${classes.icon} ${classes.male}`}>
                  <MaleIcon fontSize="inherit" />
                </h2>
              </div>
              <div>
                <h2>
                  <span className={classes.bold}>Breeder:</span>{" "}
                  {item?.breeder || "-"}
                </h2>
                <span> | </span>
                <h2>
                  <span className={classes.bold}>Owner:</span> John Shepard
                </h2>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, data }) {
  // We start with an empty list of items.
  const breedId = useParams().breedId;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const fetchData = async () => {
    const response = await viewbreed(breedId);
    response
      .json()
      .then((horses) => ({
        horses: horses,
        status: response.status,
      }))
      .then((res) => {
        // setHorseData(temp[0][1]);
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(res.horses.horses.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(res.horses.horses.length / itemsPerPage));
      });
  };

  useEffect(() => {
    // Fetch items from another resources.
    // console.log(breedId);
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
