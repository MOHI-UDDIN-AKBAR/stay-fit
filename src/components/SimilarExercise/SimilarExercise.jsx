import React, { useContext } from "react";
import { useAllAboutGymExercise } from "../../contexts/Context";
import "./SimilarExercise.css";
import avatarMan from "../../assets/avatarMan.svg";

import { Link } from "react-router-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../AllCategory/AllCategory";
import Loader from "../../components/Loader/Loader";
const SimilarExercise = ({ currentExerciseTargetName, similarExercise }) => {
  //   const { similarExercise } = useAllAboutGymExercise();
  if (similarExercise.length < 1) {
    return <Loader />;
  }

  return (
    <div className="similarExercise">
      <div className="heading">
        <h1>
          Similar <span>{currentExerciseTargetName}</span> exercises
        </h1>
      </div>
      <div className="allExercises">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {similarExercise?.map((exercise, index) => {
            return (
              //   <div >
              <Link
                to={`/exercise/${exercise.id}`}
                key={exercise.id}
                style={{ textDecoration: "none", color: "inherit" }}
                exerciseId={exercise.id || exercise}
              >
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
                  <h2 className="description">
                    {exercise.name.slice(0, 20)}...
                  </h2>
                </div>
              </Link>
              //   </div>
            );
          })}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default SimilarExercise;
