import React, { useEffect, useState } from "react";
import "./SearchExercises.css";
import AllCategory from "../../components/AllCategory/AllCategory";
import { useAllAboutGymExercise } from "../../contexts/Context";
const SearchExercises = () => {
  const { search, setSearch, bodyParts, getAllBodyParts, setBodyParts } =
    useAllAboutGymExercise();
  const handleExercise = () => {
    // console.log(search);
  };
  useEffect(() => {
    console.log(bodyParts);
    getAllBodyParts();
  }, []);
  useEffect(() => {
    console.log(search);
  }, [search]);
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
