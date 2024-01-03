import React from "react";
import "./css/autonomous.css";
import "./css/aboutOri.css";
import Ui from "./Ui";

const Autonomous = () => {
  return (
    <div>
      <div className="autonomous-container autonomous__play__section">
        <h1 className="text-5xl font-bold text-center">
          WORLD'S FIRST AUTONOMOUS DEX
        </h1>
        <h2 className="text-2xl font-medium text-center">
          Managed by Artificial Intelligence, free from human interference!
        </h2>
      </div>

      {/*UNQUOTE BEFORE GOING LIVE*/}

      <div className="ui-container ">
        <Ui className="spline" />
      </div>
    </div>
  );
};

export default Autonomous;
