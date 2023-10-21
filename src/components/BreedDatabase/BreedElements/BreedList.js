import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tempHorse from "../../../assets/images/temp-horse.png";

import classes from "./BreedList.module.css";

import { getbreeds } from "../../../apis";

const BreedList = () => {
  const navigate = useNavigate();
  const [breedList, setBreedList] = useState([]);

  const fetchData = async () => {
    const response = await getbreeds();
    response
      .json()
      .then((variations) => ({
        variations: variations,
        status: response.status,
      }))
      .then((res) => {
        let temp = Object.entries(res.variations);
        setBreedList(temp[0][1]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const breedListDetailNavigateHandler = (name) => {
    navigate(name);
  };

  return (
    <div className={classes["breed-cards"]}>
      {breedList &&
        breedList.map((list) => (
          <div
            className={classes["breed-card"]}
            onClick={() => {
              breedListDetailNavigateHandler(list.name);
            }}
          >
            <img src={tempHorse} alt={list.name} />
            <h2>{list.name}</h2>
          </div>
        ))}
    </div>
  );
};

export default BreedList;
