import React, { useEffect, useState } from "react";
import { useAllAboutGymExercise } from "../../contexts/Context";
import Loader from "../Loader/Loader";
import { Pagination } from "@mui/material";
import "./Exercises.css";
import { Link } from "react-router-dom";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const urlForAllExercise = "https://exercisedb.p.rapidapi.com/exercises";
const Exercises = () => {
  const { getData, bodyPart, exercises } = useAllAboutGymExercise();
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercise = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1300, behavior: "smooth" });
  };
  useEffect(() => {
    getData(urlForAllExercise, options, bodyPart);

    // console.log(exercises);
  }, [bodyPart]);
  return (
    <div className="Exercises">
      <div className="heading">
        <h1>Showing Results</h1>
      </div>
      <div className="allExercises">
        {currentExercise?.map((exercise) => {
          return (
            <Link to={`/exercise/${exercise.id}`} key={exercise.id}>
              <div className="Exercise">
                <div className="image">
                  <img
                    src={exercise.gifUrl}
                    alt={exercise.bodyPart}
                    loading="lazy"
                  />
                  <div className="texts">
                    <button>{exercise.bodyPart}</button>
                    <button>{exercise.target}</button>
                  </div>
                </div>
                <h2 className="description">{exercise.name.slice(0, 20)}...</h2>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="pagination">
        {exercises.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            className="paginationComponent"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
