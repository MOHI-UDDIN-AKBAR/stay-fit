import React, { useEffect, useState } from "react";
import "./ExerciseDetails.css";
import { useParams } from "react-router-dom";
import { useAllAboutGymExercise } from "../../contexts/Context";
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";
import ExerciseFromYoutube from "../../components/ExerciseFromYoutube/ExerciseFromYoutube";
import SimilarExercise from "../../components/SimilarExercise/SimilarExercise";
const ExerciseDetails = () => {
  const {
    exercises,
    getSimilarExerciseFromYoutube,
    getSimilarExerciseFromTarget,
    similarExercise,
    similarEquipment,
    setSimilarEquipment,
    getSimilarExerciseEquipment,
  } = useAllAboutGymExercise();

  const [currentExercise, setCurrentExercise] = useState({});
  const [extraDetails, setExtraDetails] = useState([]);
  const [currentExerciseName, setCurrentExerciseName] = useState("");
  const [currentExerciseTargetName, setCurrentExerciseTargetName] =
    useState("");
  const [currentExerciseEquipment, setCurrentExerciseEquipment] = useState("");

  const { id } = useParams();
  const findCurrentExercise = (id) => {
    const current = exercises.find((exercises) => exercises.id === id);
    console.log(current);
    if (current) {
      console.log(current.name);
      setCurrentExerciseTargetName(current.target);
      setCurrentExerciseName(current.name);
      setCurrentExercise(current);
      setCurrentExerciseEquipment(current.equipment);
      getSimilarExerciseFromYoutube(current.name);
      getSimilarExerciseFromTarget(current.target);
      getSimilarExerciseEquipment(current.equipment);

      const extraDetailsForCurrentExercise = [
        {
          icon: BodyPartImage,
          name: current.bodyPart,
        },
        {
          icon: TargetImage,
          name: current.target,
        },
        {
          icon: EquipmentImage,
          name: current.equipment,
        },
      ];
      setExtraDetails(extraDetailsForCurrentExercise);
    }
  };

  useEffect(() => {
    // console.log(id);
    findCurrentExercise(id);
    console.log(currentExercise);
  }, [id]);

  return (
    <>
      <div className="CurrentExercise">
        <div className="image">
          <img
            src={currentExercise.gifUrl}
            alt={currentExercise.bodyPart}
            loading="lazy"
          />
        </div>
        <div className="details">
          <h1>{currentExercise.name}</h1>
          <p>
            {" "}
            Exercises keep you strong.
            {currentExercise.name}
            bup is one of the best <br /> exercises to target your{" "}
            {currentExercise.target}. It will help you improve your <br /> mood
            and gain energy.
          </p>
          <div className="extraDetails">
            {extraDetails?.map((item) => (
              <div className="eachExtraDetails" key={item.name}>
                <img src={item.icon} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ExerciseFromYoutube currentExerciseName={currentExerciseName} />
      <SimilarExercise
        currentExerciseTargetName={currentExerciseTargetName}
        similarExercise={similarExercise}
      />
      <SimilarExercise
        currentExerciseTargetName={currentExerciseEquipment}
        similarExercise={similarEquipment}
      />
    </>
  );
};

export default ExerciseDetails;
