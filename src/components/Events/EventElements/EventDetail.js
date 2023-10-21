import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoMask from "../../../assets/images/logo-mask.png";
import { viewevent } from "../../../apis";
import classes from "./EventDetail.module.css";

const EventDetail = () => {
  const eventId = useParams().eventId;

  const [EVENT_DETAIL_DATA, setEventDetail] = useState();

  // const EVENT_CLASSES = [{name: "Yearling"},{name: "Fillies"},{name: "Junior"},{name: "Senior"}];

  const fetchData=async()=>{
    const response= await viewevent(eventId); 
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(res => {
        setEventDetail(res.data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  // const EVENT_DETAIL_DATA = [
  //   {
  //     title: "Best in Show",
  //     data: [
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Yearling Class Mare",
  //     data: [
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Yearling Class Stallion",
  //     data: [
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //       {
  //         horseName: "Avatar vom Godwinn Austinn",
  //         awards: "Gold Champ",
  //         breed: "German Shepherd Dog",
  //         owner: "Asad RAsool",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className={classes["event-detail"]}>
      <div className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div>
          <div className={classes["breed-footer"]}>
            <span className={classes["social-handles"]}>
              <FacebookIcon />
              <YouTubeIcon />
            </span>
            <div>
              <h1>{EVENT_DETAIL_DATA?.event?.title}</h1>
              <h1>{EVENT_DETAIL_DATA?.event?.city} RESULTS</h1>
              <div>
                <p>Date: {EVENT_DETAIL_DATA?.event?.start_date}</p>
                <p>Venue: {EVENT_DETAIL_DATA?.event?.venue}</p>
                <p>Judge(s): {EVENT_DETAIL_DATA?.event?.judges}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["detail-table-list"]}>
        {EVENT_DETAIL_DATA?.result['Yearling']?.map((event) => (
          <div className={classes["detail-table"]}>
            <h1>{'Yearling Class'}</h1>
            <table className={classes["stud-table"]}>
              <thead>
                <tr className={classes["table-header"]}>
                  <th>Horse Name</th>
                  <th>Grading</th>
                  <th>Breed</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {event &&
                  event.map((item) => (
                    <tr>
                      <td>{item.horse_name}</td>
                      <td>{item.result}</td>
                      <td>{item.breed}</td>
                      <td>{item.owners}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}

        {EVENT_DETAIL_DATA?.result['Fillies']?.map((event) => (
          <div className={classes["detail-table"]}>
            <h1>{'Fillies Class'}</h1>
            <table className={classes["stud-table"]}>
              <thead>
                <tr className={classes["table-header"]}>
                  <th>Horse Name</th>
                  <th>Grading</th>
                  <th>Breed</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {event &&
                  event.map((item) => (
                    <tr>
                      <td>{item.horse_name}</td>
                      <td>{item.result}</td>
                      <td>{item.breed}</td>
                      <td>{item.owners}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}

        {EVENT_DETAIL_DATA?.result['Junior']?.map((event) => (
          <div className={classes["detail-table"]}>
            <h1>{'Junior Class'}</h1>
            <table className={classes["stud-table"]}>
              <thead>
                <tr className={classes["table-header"]}>
                  <th>Horse Name</th>
                  <th>Grading</th>
                  <th>Breed</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {event &&
                  event.map((item) => (
                    <tr>
                      <td>{item.horse_name}</td>
                      <td>{item.result}</td>
                      <td>{item.breed}</td>
                      <td>{item.owners}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}

        {EVENT_DETAIL_DATA?.result['Senior']?.map((event) => (
          <div className={classes["detail-table"]}>
            <h1>{'Senior Class'}</h1>
            <table className={classes["stud-table"]}>
              <thead>
                <tr className={classes["table-header"]}>
                  <th>Horse Name</th>
                  <th>Grading</th>
                  <th>Breed</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {event &&
                  event.map((item) => (
                    <tr>
                      <td>{item.horse_name}</td>
                      <td>{item.result}</td>
                      <td>{item.breed}</td>
                      <td>{item.owners}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetail;