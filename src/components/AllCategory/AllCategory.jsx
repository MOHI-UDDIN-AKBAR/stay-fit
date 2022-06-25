import React, { useContext } from "react";
import "./AllCategory.css";
import avatarMan from "../../assets/avatarMan.svg";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return <div onClick={() => scrollPrev()}>previous</div>;
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return <div onClick={() => scrollNext()}>previous</div>;
};
const AllCategory = ({ bodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts?.map((item) => (
        <div className="Category" key={item.id}>
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
