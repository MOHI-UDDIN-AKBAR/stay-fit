import React, { createContext, useContext, useState } from "react";
const gymExercise = createContext();

const optionsForYoutube = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API_KEY_FOR_YOUTUBE_SEARCH,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const Context = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState(["all"]);
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [similarExercise, setSimilarExercise] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);
  const [exerciseFromYoutube, setExerciseFromYoutube] = useState([]);

  const getAllBodyParts = async (url, options) => {
    try {
      // setIsLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      //   console.log(data);
      if (data) {
        setBodyParts(["all", ...data]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   getAllBodyParts();
  const getData = async (url, options, bodyPart) => {
    if (bodyPart !== "all") {
      url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
    }
    try {
      // setIsLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data);
      // console.log("calling");
      if (data) {
        setExercises(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataBySearching = async (url, options) => {
    try {
      // setIsLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      if (data) {
        console.log("confirm");
        // console.log(search);
        const newData = data.filter(
          (exercise) =>
            exercise.bodyPart.toLowerCase().includes(search) ||
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search)
        );
        console.log(newData);
        if (newData) {
          setExercises(newData);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getSimilarExerciseFromYoutube = async (exerciseName) => {
    // console.log(exerciseName);
    try {
      const response = await fetch(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseName} exercise`,
        optionsForYoutube
      );
      const data = await response.json();
      if (data) {
        // console.log(data);
        setExerciseFromYoutube(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarExerciseFromTarget = async (CurrentExerciseTargetName) => {
    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/target/${CurrentExerciseTargetName}`,
        options
      );
      const data = await response.json();
      if (data) {
        setSimilarExercise(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getSimilarExerciseEquipment = async (CurrentExerciseTargetName) => {
    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${CurrentExerciseTargetName}`,
        options
      );
      const data = await response.json();
      if (data) {
        // console.log(data);
        setSimilarEquipment(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <gymExercise.Provider
      value={{
        search,
        setSearch,
        bodyParts,
        setBodyParts,
        getAllBodyParts,
        bodyPart,
        setBodyPart,
        getData,
        exercises,
        getSimilarExerciseFromYoutube,
        isLoading,
        getDataBySearching,
        getSimilarExerciseFromTarget,
        similarExercise,
        exerciseFromYoutube,
        similarEquipment,
        setSimilarEquipment,
        getSimilarExerciseEquipment,
      }}
    >
      {children}
    </gymExercise.Provider>
  );
};
export const useAllAboutGymExercise = () => useContext(gymExercise);
export default Context;
