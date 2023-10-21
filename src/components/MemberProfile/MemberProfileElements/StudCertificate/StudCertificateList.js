import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ViewCertificate from "./ViewCertificate";
import CreateCertificate from "./CreateCertificate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";

import classes from "./StudCertificateList.module.css";
import { mystudcertificates, allmares } from "../../../../apis";
import { mystallions } from "../../../../apis/member-apis";

import { GlobalContext } from "../../../../context/store";
import { useContext } from "react";
import { toast } from "react-toastify";

function Items({ currentItems, setViewCertificate }) {
  return (
    <table className={classes["stud-table"]}>
      <thead>
        <tr className={classes["table-header"]}>
          <th>Sire</th>
          <th>Dam</th>
          <th>Mating Date</th>
          <th>Created Date</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {currentItems &&
          currentItems?.map((item) => (
            <tr>
              <td>{item.sire}</td>
              <td>{item.dam}</td>
              <td>{item.matingDate}</td>
              <td>{item.createdDate}</td>
              <td
                style={{
                  color: item.status === "Unused" ? "#C0A147" : "#0F2D25",
                }}
              >
                {item.status}
              </td>
              <td
                id={item.id}
                onClick={() => setViewCertificate(item.id)}
                style={{ color: "#0F2D25" }}
              >
                <VisibilityIcon />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function StudCertificateList({ itemsPerPage = 9, setActivePage }) {
  // We start with an empty list of items.
  const memberData = useContext(GlobalContext).user;
  const [certificateData, setCertificateData] = useState([]);

  const [viewCertificate, setViewCertificate] = useState(false);
  const [createCertificate, setCreateCertificate] = useState(false);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [studs, setStuds] = useState();
  const [mares, setMares] = useState();
  const [stallions, setStallions] = useState();

  const fetchList = async () => {
    const response = await mystudcertificates(memberData.friendly_url);
    response
      .json()
      .then((data) => ({
        data: data,
        status: response.status,
      }))
      .then((res) => {
        if (res.status == 200) {
          // let temp = Object.entries(res.data);
          setStuds(res.data.data);
          const endOffset = itemOffset + itemsPerPage;
          console.log(`Loading items from ${itemOffset} to ${endOffset}`);
          console.log(res.data.data);
          setCurrentItems(res.data.data.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(res.data.data.length / itemsPerPage));
        } else if (response.status === 403) {
          toast.error("Your account is delinquent.", {
            style: { zIndex: "10000" },
          });
          setActivePage("Balance Statement");
        }
      });
  };

  const fetchMares = async () => {
    const response = await allmares(memberData?.id);
    response
      .json()
      .then((mares) => ({
        mares: mares,
        status: response.status,
      }))
      .then((res) => {
        if (res.status == 200) {
          setMares(res.mares.mares);
        }
      });
  };

  const fetchStallions = async () => {
    const response = await mystallions(memberData?.id);
    response
      .json()
      .then((my_stallions) => ({
        my_stallions: my_stallions,
        status: response.status,
      }))
      .then((res) => {
        if (res.status == 200) {
          setStallions(res.my_stallions.my_stallions);
        }
      });
  };

  useEffect(() => {
    // Fetch items from another resources.
    fetchMares();
    fetchStallions();
    fetchList();
  }, [itemOffset, itemsPerPage, studs]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % studs.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className={classes["stud-certificate-list"]}>
      <button
        onClick={() => setCreateCertificate(true)}
        className={classes.btn}
      >
        <span className={classes["btn-text"]}>Create New</span>
      </button>
      <Items
        setViewCertificate={setViewCertificate}
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
      <ViewCertificate
        open={viewCertificate}
        handleClose={() => setViewCertificate(false)}
      />
      <CreateCertificate
        open={createCertificate}
        handleClose={() => setCreateCertificate(false)}
        mares={mares}
        stallions={stallions}
        user={memberData?.friendly_url}
        refresh={fetchList}
      />
    </div>
  );
}

export default StudCertificateList;
