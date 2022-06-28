import React, { useEffect, useState } from "react";
import muscleArm from "./muscle-arm.svg";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  // const [location, setLocation] = useState("");
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();
  const getLocation = () => {
    // setIsActive(pathname);
    if (location.hash == "#exercises") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useEffect(() => {
    getLocation();
  }, [location]);
  console.log(location);
  return (
    <div className="NavBar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={muscleArm} alt="muscle-arm" />
        </Link>
      </div>
      <NavLink to="/" className={isActive ? "activeLink" : "link"}>
        <button>Home</button>
      </NavLink>
      <a
        href="#exercises"
        className={isActive ? "link" : "activeLink"}
        style={{ scrollBehavior: "smooth" }}
      >
        <button>Exercises</button>
      </a>
    </div>
  );
};

export default NavBar;
