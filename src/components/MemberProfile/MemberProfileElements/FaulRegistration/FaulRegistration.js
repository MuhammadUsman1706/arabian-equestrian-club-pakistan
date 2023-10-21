import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ViewRegistration from "./ViewRegistration";
import CreateRegistration from "./CreateRegistration";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";

import classes from "./FaulRegistration.module.css";
import { mylitterregistrations, allstallions } from "../../../../apis";

import { mymares } from "../../../../apis/member-apis";

import { GlobalContext } from "../../../../context/store";
import { useContext } from "react";
import { toast } from "react-toastify";

const data = [
  {
    id: "123",
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    id: "234",
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
  {
    sire: "Brux vom Team Panonainsee",
    dam: "Rita vom Larechs",
    dob: "October 30, 2017",
    createdDate: "May 20, 2015 02:33:48 pm",
    status: "Approved",
  },
];

function Items({ currentItems, setViewRegistration }) {
  return (
    <table className={classes["stud-table"]}>
      <thead>
        <tr className={classes["table-header"]}>
          <th>DOB</th>
          <th>Sire</th>
          <th>Dam</th>
          <th>Created Date</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {currentItems &&
          currentItems.map((item) => (
            <tr>
              <td>{item.dob}</td>
              <td>{item.sire}</td>
              <td>{item.dam}</td>
              <td>{item.createdDate}</td>
              <td>{item.status}</td>
              <td
                id={item.id}
                onClick={() => setViewRegistration(item.id)}
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

function FaulRegistration({ itemsPerPage = 9, setActivePage }) {
  // We start with an empty list of items.
  const memberData = useContext(GlobalContext).user;
  const [viewRegistration, setViewRegistration] = useState(false);
  const [createRegistration, setCreateRegistration] = useState(false);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [studs, setStuds] = useState();
  const [mares, setMares] = useState();
  const [stallions, setStallions] = useState();

  const fetchList = async () => {
    const response = await mylitterregistrations(memberData.friendly_url);
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
          console.log(res.data.data);
          const endOffset = itemOffset + itemsPerPage;
          console.log(`Loading items from ${itemOffset} to ${endOffset}`);
          setCurrentItems(res.data.data.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(data.length / itemsPerPage));
        } else if (response.status === 403) {
          toast.error("Your account is delinquent.", {
            style: { zIndex: "10000" },
          });
          setActivePage("Balance Statement");
        }
      });
  };

  const fetchMares = async () => {
    const response = await mymares(memberData?.id);
    response
      .json()
      .then((my_mares) => ({
        my_mares: my_mares,
        status: response.status,
      }))
      .then((res) => {
        if (res.status == 200) {
          setMares(res.my_mares.my_mares);
        }
      });
  };

  const fetchStallions = async () => {
    const response = await allstallions(memberData?.id);
    response
      .json()
      .then((stallions) => ({
        stallions: stallions,
        status: response.status,
      }))
      .then((res) => {
        if (res.status == 200) {
          setStallions(res.stallions.stallions);
        }
      });
  };

  useEffect(() => {
    fetchMares();
    fetchStallions();

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
      <button
        onClick={() => setCreateRegistration(true)}
        className={classes.btn}
      >
        <span className={classes["btn-text"]}>Create New</span>
      </button>
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
      <ViewRegistration
        open={viewRegistration}
        handleClose={() => setViewRegistration(false)}
      />

      <CreateRegistration
        open={createRegistration}
        handleClose={() => setCreateRegistration(false)}
        mares={mares}
        stallions={stallions}
        user={memberData?.friendly_url}
        refresh={fetchList}
      />

      {/* // TO DO NOW: // CREATE NEW INSPECTION */}
      {/* <CreateCertificate
        open={createRegistration}
        handleClose={() => setCreateRegistration(false)}
      /> */}
    </div>
  );
}

export default FaulRegistration;
