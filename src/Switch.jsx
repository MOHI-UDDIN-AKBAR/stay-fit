import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExerciseDetails from "./pages/ExerciseDetails/ExerciseDetails";
import NavBar from "./components/NavBar/NavBar";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
const Switch = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exercise/:id" element={<ExerciseDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Switch;
