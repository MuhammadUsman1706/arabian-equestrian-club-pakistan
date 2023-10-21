import axios from "axios";
import { baseURL_PHP } from ".";

export const aboutTheClub = async () => {
  try {
    const res = await axios.get(`${baseURL_PHP}/about-the-club`);
    //   const resData = await res.json();
    return res;
  } catch (err) {
    console.log(err.message, "club errrrrrrrrr");
  }
};

export const aboutTheBreed = async () => {
  try {
    const res = await axios.get(`${baseURL_PHP}/about-the-breed`);
    //   const resData = await res.json();
    return res;
  } catch (err) {
    console.log(err.message, "club errrrrrrrrr");
  }
};

export const feeStructure = async () => {
  try {
    const res = await axios.get(`${baseURL_PHP}/fee-structure`);
    //   const resData = await res.json();
    return res;
  } catch (err) {
    console.log(err.message, "fee sturcture errrrrrrrrr");
  }
};
export const clubRules = async () => {
  try {
    const res = await axios.get(`${baseURL_PHP}/club-rules`);
    //   const resData = await res.json();
    return res;
  } catch (err) {
    console.log(err.message, "rules errrrrrrrrr");
  }
};
export const clubTeam = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/club-team`);
    return res;
  } catch (err) {
    console.log(err.message, "club team errrrrrrrrr");
  }
};
export const clubJudges = async () => {
  try {
    const res = await axios.get(`${baseURL_PHP}/club-judges`);
    //   const resData = await res.json();
    return res;
  } catch (err) {
    console.log(err.message, "club judges errrrrrrrrr");
  }
};
export const NewsContent = async () => {
  try {
    const res = await axios.get(`${baseURL_PHP}/news-updates`);
    //   const resData = await res.json();
    return res;
  } catch (err) {
    console.log(err.message, "news errrrrrrrrr");
  }
};
