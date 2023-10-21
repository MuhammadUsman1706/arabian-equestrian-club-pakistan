import React, { Fragment, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { userlogin } from "../../apis/index";
import { GlobalContext } from "../../context/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { TextField } from "@mui/material";
// import { useEffect } from "react";

import classes from "./SignInModal.module.css";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
};

const SignInModal = ({ open, handleClose }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [didForgetPassword, setDidForgetPassword] = useState(false);
  let navigate = useNavigate();
  const { setAuthUser } = useContext(GlobalContext);

  // useEffect(() => {
  //   console.log(userContext);
  // }, [userContext]);

  const loginHandler = async (e) => {
    e.preventDefault();
    // let formData = new FormData();
    // formData.append("username", user);
    // formData.append("password", password);

    const formData = {
      username: user,
      password,
    };

    const response = await userlogin(JSON.stringify(formData));

    if (response.status == 200) {
      response
        .json()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then((res) => {
          setAuthUser(res?.data.data);
          handleClose();
          localStorage.setItem("user", JSON.stringify(res?.data.data));
          toast.success(`Welcome, ${res.data.data.first_name}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { zIndex: "10000" },
          });
          // console.log(res.data.data);
          navigate(`/member-profile`);
        });
    } else {
      toast.error("Credentials did not match any user. Please try again", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { zIndex: "10000" },
      });
    }
  };

  return (
    <Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes["modal-box"]}>
          <div className={classes.login}>
            <h1>{didForgetPassword ? "Forgot Password" : " Log In"}</h1>
            <hr />
            <form className={classes.inputs}>
              {didForgetPassword ? (
                <Fragment>
                  <label htmlFor="nameEmail">Enter Your Email</label>
                  <input type="text" name="nameEmail" id="nameEmail" />
                </Fragment>
              ) : (
                <Fragment>
                  <label htmlFor="email">Username</label>
                  <input
                    onChange={({ target }) => setUser(target.value)}
                    type="text"
                    name="username"
                    id="username"
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={({ target }) => setPassword(target.value)}
                    type="password"
                    name="password"
                    id="password"
                  />
                </Fragment>
              )}
              <span
                onClick={() => setDidForgetPassword((prevState) => !prevState)}
                className={classes.forgot}
              >
                {didForgetPassword ? "Log In" : "Forgot Password"}
              </span>
              <button
                onClick={loginHandler}
                type="submit"
                className={classes.submit}
              >
                {didForgetPassword ? "Submit" : "Log In"}
              </button>
            </form>

            {/* <form>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={({ target }) => setUser(target.value)}
              />
              <TextField
                sx={{ mt: 3 }}
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                onChange={({ target }) => setPassword(target.value)}
              />
              <div style={{ marginTop: "50px" }}>
                <button
                  onClick={(e) => loginHandler()}
                  type="button"
                  value="Login"
                >
                  <span>
                    Login <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
                  </span>
                </button>
              </div>
            </form> */}
          </div>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default SignInModal;
