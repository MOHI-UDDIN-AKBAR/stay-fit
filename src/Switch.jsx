import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExerciseDetails from "./pages/ExerciseDetails/ExerciseDetails";
import NavBar from "./components/NavBar/NavBar";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
const Switch = () => {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      {/* <Loader /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exercise/:id" element={<ExerciseDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Switch;
