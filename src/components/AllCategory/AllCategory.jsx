import React, { useContext } from "react";
import "./AllCategory.css";
import avatarMan from "../../assets/avatarMan.svg";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ForNow from "./ForNow";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="right-arrow">
      <img src={avatarMan} alt="right-arrow" style={{ width: "40px" }} />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollNext()}
      className="left-arrow"
      style={{ width: "40px" }}
    >
      <img src={avatarMan} alt="right-arrow" style={{ width: "40px" }} />
    </div>
  );
};

const AllCategory = ({ bodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts.map((item, id) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className="Category"
        >
          <div className="image">
            <img src={avatarMan} alt={item} />
          </div>
          <span>{item}</span>
        </div>
      ))}
    </ScrollMenu>
  );
};

export default AllCategory;
