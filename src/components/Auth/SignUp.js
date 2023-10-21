import { React, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { register } from "../../apis";
import { getcities } from "../../apis/member-apis";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const [citiesList, setCitiesList] = useState({});
  const [cityNames, setCityNames] = useState([]);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    cnic: "",
    city: 1,
    phone: "",
    address: "",
    email: "",
    last_name: "",
    zip: "",
    photo: null,
  });

  useEffect(() => {
    const fetchCitiesHandler = async () => {
      const response = await getcities();
      const responseData = await response.json();
      setCitiesList(responseData.cities);
      setCityNames(Object.keys(responseData.cities));
      // console.log(responseData);
    };

    fetchCitiesHandler();
  }, []);

  const setUserInfoHandler = (event) => {
    if (event.target.name === "photo") {
      setUserInfo((prevState) => ({
        ...prevState,
        photo: event.target.files[0],
      }));
      return;
    }
    if (event.target.name === "city") {
      setUserInfo((prevState) => ({
        ...prevState,
        city: citiesList[event.target.value],
      }));
      return;
    }
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sendResponse = async (event) => {
    event.preventDefault();
    // Object.values(userInfo).forEach((info) => {
    //   if (!info) {
    //     console.log("Form incomplete, req not sent");
    //     toast.error("Form incomplete, req not sent");
    //     return;
    //   }
    // });

    console.log(userInfo);
    const response = await register(JSON.stringify(userInfo));
    const responseData = await response.json();
    if (response.status === 500) {
      toast.error(responseData.message, {
        style: { zIndex: "10000" },
      });
    } else {
      toast.success(responseData.message, {
        style: { zIndex: "10000" },
      });
    }
  };

  return (
    <form onSubmit={sendResponse} className={classes.signup}>
      <h1>Sign Up</h1>
      <hr />
      <p>
        By filling out this online form, I agree to be bound by AECP (Pvt) Ltd.
        Rules and Bye-laws as may be amended and in force, from time to time. I
        hereby acknowledge the jurisdiction of the committee of the AECP on all
        questions or disputes or complaints or reports of any kind whatsoever,
        arising in respect of club related activities, and I hereby expressly
        agree that the decision of the Committee upon any question or dispute or
        complaint or report shall be final and binding on me. I further declare
        that I am not suspended or disqualified by the Horse Club of Pakistan or
        any affiliate bodies of the Horse Club of Pakistan, FCI or the WUSV.
      </p>
      <div className={classes.inputs}>
        <div>
          <label htmlFor="first_name">Full Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            required
            onBlur={setUserInfoHandler}
          />
          <label htmlFor="city">City</label>
          <select
            type="text"
            name="city"
            id="city"
            required
            onBlur={setUserInfoHandler}
          >
            {cityNames.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            onBlur={setUserInfoHandler}
          />
        </div>

        <div>
          <label htmlFor="cnic">CNIC</label>
          <input
            type="text"
            name="cnic"
            id="cnic"
            required
            onBlur={setUserInfoHandler}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            onBlur={setUserInfoHandler}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            required
            id="email"
            onBlur={setUserInfoHandler}
          />
        </div>
      </div>
      <label className={classes.label} htmlFor="photo">
        Profile Picture
      </label>
      <Button
        sx={{
          borderRadius: " 8px",
          backgroundColor: "white",
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "black",
          padding: "0.5rem 1.5rem",
        }}
        variant="contained"
        component="label"
      >
        Choose File
        <input
          hidden
          name="photo"
          accept="image/*"
          type="file"
          required
          onChange={setUserInfoHandler}
        />
      </Button>
      <div className={classes["fee-section"]}>
        <h4>Membership Application Fee</h4>
        <h4>Rs. 2500</h4>
        <h4>Annual Subscription Fee</h4>
        <h4>Rs. 2000</h4>
      </div>

      <p>
        Once you click Submit, your membership application will be received and
        you will be contacted by our staff for facilitation of payment. All
        payments are only acceptable in the form of a Bank Draft or Pay Order,
        drawn on a local back and made out in favour of "AECP (Pvt) Ltd." No
        payments made via any other method are acceptable.
      </p>
      <button type="submit" className={classes.submit}>
        Submit
      </button>
    </form>
  );
};

export default SignUp;
