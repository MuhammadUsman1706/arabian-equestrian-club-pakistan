import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getstuds } from "../../../apis";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

// import ReactDOM from "react-dom";
import classes from "./StudList.module.css";

function Items({ currentItems }) {
  // console.log("CurrentItems: ", currentItems);
  const navigate = useNavigate();

  const studDetailNavigateHandler = (friendly_URL) => {
    navigate(`${friendly_URL}`);
  };

  return (
    <div className={classes["stud-cards"]}>
      {currentItems &&
        currentItems.map((item) => (
          // <div
          //   className={classes["stud-card"]}
          //   onClick={() => {
          //     studDetailNavigateHandler(item.friendly_URL);
          //   }}
          // >
          //   <img
          //     src={
          //       item.imageUrl != ""
          //         ? item.imageUrl
          //         : "/static/media/temp-horse.cc8728a6d7a678026833.png"
          //     }
          //     alt={item.horse_name}
          //   />
          //   <h2>{item.horse_name}</h2>
          // </div>
          <div
            className={classes["stud-card"]}
            onClick={() => {
              studDetailNavigateHandler(item.friendly_URL);
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
                  {new Date(item.birth_year).getFullYear()}
                </h2>
                <span> | </span>
                <h2 className={`${classes.icon} ${classes.male}`}>
                  <MaleIcon fontSize="inherit" />
                </h2>
              </div>
              <div>
                <h2>
                  <span className={classes.bold}>Breeder:</span>{" "}
                  {item.breeder || "-"}
                </h2>
                <span> | </span>
                <h2>
                  <span className={classes.bold}>Owner:</span> John Shepard
                </h2>
              </div>
            </div>

            {/* <h2>{item.horse_name}</h2> */}
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

  const fetchData = async () => {
    const response = await getstuds();
    response
      .json()
      .then((studs) => ({
        studs: studs,
        status: response.status,
      }))
      .then((res) => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(res.studs.studs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(res.studs.studs.length / itemsPerPage));
      });
  };

  useEffect(() => {
    // Fetch items from another resources.
    fetchData();
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
    <div className={classes["stud-list"]}>
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
