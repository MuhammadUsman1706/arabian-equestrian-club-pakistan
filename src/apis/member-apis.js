import { baseURL_PHP } from ".";

export const getcities = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/cities`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const mymares = async (friendlyurl) => {
  try {
    const res = await fetch(`${baseURL_PHP}/my-mares/${friendlyurl}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const mystallions = async (friendlyurl) => {
  try {
    const res = await fetch(`${baseURL_PHP}/my-stallions/${friendlyurl}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const myfarms = async (friendlyurl) => {
  try {
    const res = await fetch(`${baseURL_PHP}/my-farms/${friendlyurl}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const myhorses = async (friendlyurl) => {
  try {
    const res = await fetch(`${baseURL_PHP}/my-horses/${friendlyurl}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
