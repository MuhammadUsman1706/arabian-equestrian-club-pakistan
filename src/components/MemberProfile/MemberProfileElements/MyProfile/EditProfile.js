import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./MyProfile.module.css";

const EditProfile = ({ open, setOpen, user }) => {
  //   const [open, setOpen] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth={true} maxWidth="xl" open={open} onClose={handleClose}>
      <DialogTitle>
        <div className={classes["modal-title"]}>
          <h2>Edit Profile Details</h2>
          <CloseIcon onClick={handleClose} />
        </div>
        <hr />
      </DialogTitle>
      <DialogContent>
        <form className={classes["modal-form"]}>
          <div className={classes["modal-row"]}>
            <div>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                defaultValue={user?.first_name}
              />
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                defaultValue={user?.last_name != null ? user?.last_name : ""}
              />
            </div>
            <div>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                disabled
                value={user?.username}
              />
            </div>
            <div>
              <label htmlFor="membershipNo">Membership No.</label>
              <input
                type="text"
                name="membershipNo"
                id="membershipNo"
                value={user?.membership_no}
                disabled
              />
            </div>
          </div>
          <div className={classes["modal-row"]}>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                defaultValue={user?.phone}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                defaultValue={user?.email}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
          </div>
          <div className={classes["modal-row"]}>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                defaultValue={user?.address}
              />
            </div>
          </div>
          <div className={classes["modal-row"]}>
            <div>
              <label htmlFor="profilePicture">Profile Picture</label>
              <Button
                sx={{
                  borderRadius: " 8px",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  color: "black",
                  padding: "0.5rem 1.5rem",
                  width: "150px",
                }}
                variant="contained"
                component="label"
              >
                Choose File
                <input hidden accept="image/*" type="file" />
              </Button>
            </div>
          </div>
          <div className={classes["modal-second-title"]}>
            <h2>Change Password</h2>
            <hr />
          </div>
          <div className={classes["password-form"]}>
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
              onClick={() => setShowPasswordForm((prevState) => !prevState)}
            >
              Show Password Form
              <ArrowDropDownIcon />
            </Button>

            {showPasswordForm && (
              <Fragment>
                <div className={classes["password-form-input"]}>
                  <label htmlFor="oldPassword">Old Password</label>
                  <input type="password" name="oldPassword" id="oldPassword" />
                </div>
                <div className={classes["password-form-input"]}>
                  <label htmlFor="newPassword">New Password</label>
                  <input type="password" name="newPassword" id="newPassword" />
                </div>
                <div className={classes["password-form-input"]}>
                  <label htmlFor="repeatPassword">Repeat Password</label>
                  <input
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                  />
                </div>
              </Fragment>
            )}
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className={classes["close"]}>
          Close
        </button>
        <button className={classes["submit"]}>Submit</button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfile;
