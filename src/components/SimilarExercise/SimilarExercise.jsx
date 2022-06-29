import React, { useContext, useEffect } from "react";
import { useAllAboutGymExercise } from "../../contexts/Context";
import "./SimilarExercise.css";
import arrow from "../../assets/arrow.svg";

// import avatarMan from "../../assets/avatarMan.svg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import { LeftArrow, RightArrow } from "../AllCategory/AllCategory";
import Loader from "../../components/Loader/Loader";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="leftArrow">
      <img src={arrow} alt="left-arrow" style={{ width: "40px" }} />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollNext()}
      className="rightArrow"
      // style={{ width: "40px" }}
    >
      <img src={arrow} alt="right-arrow" style={{ width: "40px" }} />
    </div>
  );
};
const SimilarExercise = ({ currentExerciseTargetName, similarExercise }) => {
  //   const { similarExercise } = useAllAboutGymExercise();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  if (similarExercise.length < 1) {
    return <Loader />;
  }

  return (
    <div className="similarExercise" id="similarExercise">
      <div className="heading">
        <h1>
          Similar <span>{currentExerciseTargetName}</span> exercises
        </h1>
      </div>
      <div className="allExercises">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {similarExercise?.map((item, index) => (
            // <div

            // >
            <Link
              to={`/exercise/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              itemId={item.id || item}
              key={item.id}
              title={item.id || item}
            >
              <div className="Exercise">
                <div className="image">
                  <img src={item.gifUrl} alt={item.bodyPart} loading="lazy" />
                  <div className="texts">
                    <button>{item.bodyPart}</button>
                    <button>{item.target}</button>
                  </div>
                </div>
                <h2 className="description">{item.name.slice(0, 20)}...</h2>
              </div>
            </Link>
            // </div>
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default SimilarExercise;
