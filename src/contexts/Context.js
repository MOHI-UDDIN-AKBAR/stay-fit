import React, { createContext, useContext, useState } from "react";
const gymExercise = createContext();
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "736992fe88msh6899ef5f8ad1cddp10d8bajsn02d78df78d36",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const Context = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState(["all"]);
  const getAllBodyParts = async () => {
    try {
      const response = await fetch(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      const data = await response.json();
      //   console.log(data);
      if (data) {
        setBodyParts(["all", ...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   getAllBodyParts();

  return (
    <gymExercise.Provider
      value={{ search, setSearch, bodyParts, setBodyParts, getAllBodyParts }}
    >
      {children}
    </gymExercise.Provider>
  );
};
export const useAllAboutGymExercise = () => useContext(gymExercise);
export default Context;
