import React, { useContext, useEffect } from "react";
import "./AllCategory.css";
import gym from "../../assets/gym.svg";
import arrow from "../../assets/arrow.svg";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useAllAboutGymExercise } from "../../contexts/Context";

export const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="left-arrow">
      <img src={arrow} alt="left-arrow" style={{ width: "40px" }} />
    </div>
  );
};

export const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollNext()}
      className="right-arrow"
      // style={{ width: "40px" }}
    >
      <img src={arrow} alt="right-arrow" style={{ width: "40px" }} />
    </div>
  );
};

const AllCategory = ({ bodyParts }) => {
  const { bodyPart, setBodyPart } = useAllAboutGymExercise();
  useEffect(() => {
    console.log(bodyPart);
  }, [bodyPart]);
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts.map((item) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className="Category"
          onClick={() => setBodyPart(item)}
        >
          <div className="image">
            <img src={gym} alt={item} />
          </div>
          <span>{item}</span>
        </div>
      ))}
    </ScrollMenu>
  );
};

export default AllCategory;
