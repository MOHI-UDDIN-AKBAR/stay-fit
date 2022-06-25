import React from "react";
import avatarMan from "../../assets/avatarMan.svg";

const ForNow = ({ item }) => {
  return (
    <div className="Category">
      <div className="image">
        <img src={avatarMan} alt={item} />
      </div>
      <span>{item}</span>
    </div>
  );
};

export default ForNow;
