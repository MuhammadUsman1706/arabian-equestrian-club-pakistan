import React, { useEffect, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import tempMember from "../../../../assets/images/temp-member.png";
import { GlobalContext } from "../../../../context/store";
import classes from "./EnterHorse.module.css";
import { useState } from "react";
import { allstallions, allmares, event_elig_horse } from "../../../../apis";


const EnterHorse = ({ open, eventId, handleClose }) => {

  const memberData = useContext(GlobalContext);

  const [mares, setMares] = useState();
  const [stallions, setStallions] = useState();

  const [horse, setHorse] = useState();
  const [event_id, setEvent] = useState(eventId);

  const [qualify, setQualify] = useState();

  const LEASE_DATA = {
    phone: "+92-0301-7736382",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    email: "curtis.weaver@example.com",
  };

  const onHandleChange = (event) => {

    if(event.target.name == "horse_id")
    {
      setHorse(event.target.value);

      verify_horse();
    }

  };

  const fetchMares = async () => {
    const response = await allmares(memberData.friendly_url);
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
    const response = await allstallions(memberData?.user?.friendly_url);
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

  const verify_horse = async () => {
    const verifyInfo = {
      horse_id: horse,
      event_id: event_id
    }
    const response = await event_elig_horse(JSON.stringify(verifyInfo));
    const responseData = await response.json();
    if (response.status === 500) {
      // toast.error(responseData.message);
      console.log('error')

    } else if (response.status === 200) {
      // toast.success(responseData.message);
      setQualify(responseData.class);
      // console.log(responseData);
      
    }
  };

  useEffect(() => {
    if (open) {
      console.log(open);
      fetchMares();
      fetchStallions();
      //   fetch
    }
  }, [open]);

  return (
    <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle
        sx={
          window.innerWidth > 600 && { padding: "1rem 3rem 0 3rem !important" }
        }
      >
        <div className={classes["modal-title"]}>
          <h2>
            Horses which are already entered in show will not appear in this
            list
          </h2>
          <CloseIcon onClick={handleClose} />
        </div>
      </DialogTitle>
      <DialogContent
        sx={
          window.innerWidth > 600 && { padding: "0 3rem 1rem 3rem !important" }
        }
      >
        <hr />
        <div className={classes["enter-details"]}>
          <div className={classes.inputs}>
            <div>
              <label htmlFor="sireName">Member</label>
              <input
                placeholder={memberData?.user?.first_name+' '+(memberData?.user?.last_name != null ? memberData?.user?.last_name : '')}
                type="text"
                name="memberName"
                id="memberName"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="horseName">Name of Horse</label>
                <select
                placeholder="Select Horse"
                name="horse_id"
                id="memberName"
                onChange={onHandleChange}
                >
                  <option value={''}>Select Horse</option>
                  {stallions && stallions.map((stallion) => (
                    <option value={stallion.id}>{stallion.horse_name}</option>
                  ))}
                  {mares && mares.map((mare) => (
                    <option value={mare.id}>{mare.horse_name}</option>
                  ))}
                </select>
            </div>
            {qualify?.class ? 
            <div className={classes.inputs}>
              <div>
                <label htmlFor="sireName">Qualify for Class</label>
                <input
                  placeholder={qualify?.class}
                  type="text"
                  name="memberName"
                  id="memberName"
                  readOnly
                />
              </div>
            </div>
            :
            ''
            }
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className={classes["close"]}>
          Close
        </button>
        {qualify?.class ?
        <button className={classes["submit"]}>Submit</button>
        :
        ''
        }
      </DialogActions>
    </Dialog>
  );
};

export default EnterHorse;
