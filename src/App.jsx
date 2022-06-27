import React, { useEffect } from "react";
import Switch from "./Switch";
import Context from "./contexts/Context";
import "./App.css";
const App = () => {
  return (
    <>
      <Context>
        <Switch />
      </Context>
    </>
  );
};

export default App;
