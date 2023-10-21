import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "auth",
  initialState: {
    userId: "",
    userName: "",
  },
  reducers: {
    login,
  },
});
