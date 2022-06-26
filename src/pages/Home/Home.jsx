import React, { useEffect } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./Home.css";
import SearchExercises from "../../components/SearchExercises/SearchExercises";
import Exercises from "../../components/Exercises/Exercises";
import { useAllAboutGymExercise } from "../../contexts/Context";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const { getAllBodyParts, isLoading } = useAllAboutGymExercise();
  useEffect(() => {
    // getAllBodyParts();
    console.log(isLoading);
  }, [isLoading]);
  return (
    <div className="Home">
      <HeroBanner />
      <SearchExercises />
      {isLoading ? <Loader /> : <Exercises />}
    </div>
  );
};

export default Home;
