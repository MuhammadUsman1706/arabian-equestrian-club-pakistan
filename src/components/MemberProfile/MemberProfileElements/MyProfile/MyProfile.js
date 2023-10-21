import React, { Fragment, useEffect, useState } from "react";
import EditProfile from "./EditProfile";
import tempMemberCard from "../../../../assets/images/temp-member-card.png";
import tempMember from "../../../../assets/images/temp-member.png";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/store";
import { myhorses, myfarms } from "../../../../apis/member-apis";
import classes from "./MyProfile.module.css";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [farmActive, setFarmActive] = useState(true);
  const [open, setOpen] = useState(false);
  const memberData = useContext(GlobalContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [MEMBER_FARM_DATA, setmemberFarmData] = useState([]);

  const [MEMBER_HORSE_DATA, setmemberHorseData] = useState([]);

  const fetchFarms = async () => {
    const response = await myfarms(memberData?.user?.id);
    response
      .json()
      .then((farms) => ({
        farms: farms,
        status: response.status,
      }))
      .then((res) => {
        setmemberFarmData(res.farms.farms);
      });
  };

  const fetchHorse = async () => {
    const response = await myhorses(memberData?.user?.id);
    response
      .json()
      .then((horses) => ({
        horses: horses,
        status: response.status,
      }))
      .then((res) => {
        setmemberHorseData(res.horses.horses);
      });
  };

  useEffect(() => {
    fetchFarms();
    fetchHorse();
  }, []);

  return (
    <Fragment>
      <div className={classes["breed-table"]}>
        <div className={classes["breed-image"]}>
          <img
            src={
              memberData?.user?.photo != ""
                ? memberData?.user?.photo
                : "https://admin.arabians.pk/public/img/blank.jpg"
            }
          />
          {/* <img src={memberData?.user?.profile_photo_url} /> */}
        </div>
        <table style={{ borderSpacing: "0px auto" }}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                {memberData?.user?.first_name +
                  " " +
                  (memberData?.user?.last_name != null
                    ? memberData?.user?.last_name
                    : "")}
              </td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{memberData?.user?.address}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{memberData?.user?.email}</td>
            </tr>
            <tr>
              <td>Phone No:</td>
              <td>{memberData?.user?.phone}</td>
            </tr>
            <tr>
              <td>Membership No:</td>
              <td>{memberData?.user?.membership_no}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={classes["rounded-buttons"]}>
        <button onClick={() => setFarmActive(true)}>Farms</button>
        <button onClick={() => setFarmActive(false)}>Horses</button>
      </div>
      <div className={classes["member-cards"]}>
        {farmActive
          ? MEMBER_FARM_DATA.map((farm) => (
              <div className={classes["member-card"]}>
                <img src={tempMemberCard} alt={tempMemberCard} />
                <h2>{farm.stud_farm_name}</h2>
              </div>
            ))
          : MEMBER_HORSE_DATA.map((horse) => (
              <div className={classes["member-card"]}>
                <img src={tempMemberCard} alt={tempMemberCard} />
                <h2>{horse.horse_name}</h2>
              </div>
            ))}
      </div>
      <div className={classes["bottom"]}>
        <button className={classes.btn} onClick={handleClickOpen}>
          <span className={classes["btn-text"]}>Edit Profile</span>
        </button>
      </div>

      <EditProfile open={open} setOpen={setOpen} user={memberData.user} />
    </Fragment>
  );
};

export default MyProfile;
