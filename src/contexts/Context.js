import React, { createContext, useContext, useState } from "react";
const gymExercise = createContext();

const Context = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState(["all"]);
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAllBodyParts = async (url, options) => {
    try {
      setIsLoading(true);
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
      setIsLoading(true);
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
        isLoading,
        getDataBySearching,
      }}
    >
      {children}
    </gymExercise.Provider>
  );
};
export const useAllAboutGymExercise = () => useContext(gymExercise);
export default Context;
