import React, { useEffect } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./Home.css";
import SearchExercises from "../../components/SearchExercises/SearchExercises";
import { useAllAboutGymExercise } from "../../contexts/Context";
const Home = () => {
  const { getAllBodyParts } = useAllAboutGymExercise();
  useEffect(() => {
    // getAllBodyParts();
  }, []);
  return (
    <div className="Home">
      <HeroBanner />
      <SearchExercises />
      <h1>Exercises</h1>
    </div>
  );
};

export default Home;
