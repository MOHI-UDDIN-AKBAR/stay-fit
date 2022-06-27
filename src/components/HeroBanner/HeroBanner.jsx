import React from "react";
import "./HeroBanner.css";
import imageTwo from "../../assets/images/imageTwo.jpg";
const HeroBanner = () => {
  return (
    <div className="HeroBanner">
      <div className="text">
        <h3>Fitness Club</h3>
        <h1>
          Sweat, Smile
          <br />
          And Repeat
        </h1>
        <p>Check out the most effective exercises personalized to you</p>
        <div className="button">
          <button>Explore Exercise</button>
        </div>
        <div className="bigText">
          <h1>Exercises</h1>
        </div>
      </div>
      <div className="image">
        <img src={imageTwo} alt="imageOne" />
      </div>
    </div>
  );
};

export default HeroBanner;
