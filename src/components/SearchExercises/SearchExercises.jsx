import React, { useEffect, useState } from "react";
import "./SearchExercises.css";
import AllCategory from "../../components/AllCategory/AllCategory";
import { useAllAboutGymExercise } from "../../contexts/Context";
const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const urlForAllExercise = "https://exercisedb.p.rapidapi.com/exercises";
const urlForForSearchingExercise =
  "https://exercisedb.p.rapidapi.com/exercises";
const SearchExercises = () => {
  const {
    search,
    setSearch,
    bodyParts,
    getAllBodyParts,
    setBodyParts,
    getData,
    exercises,
    bodyPart,
    getDataBySearching,
  } = useAllAboutGymExercise();
  const handleExercise = () => {
    getDataBySearching(urlForForSearchingExercise, options);
    // console.log(search);
  };
  useEffect(() => {
    // console.log(bodyParts);
    getAllBodyParts(url, options);
  }, []);

  useEffect(() => {
    // console.log(search);
  }, [search]);
  // useEffect(() => {
  //   // getData(urlForAllExercise, options);
  //   console.log(exercises);
  // }, [bodyPart]);
  return (
    <div className="SearchExercises">
      <div className="heading">
        <h1>
          Awesome Exercises You <br />
          Should Know
        </h1>
      </div>
      <div className="input">
        <input
          type="text"
          name="exercise"
          placeholder="Search Exercise"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button onClick={handleExercise}>Search</button>
      </div>
      <div className="allCategory">
        <AllCategory bodyParts={bodyParts} />
      </div>
    </div>
  );
};

export default SearchExercises;
