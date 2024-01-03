import React from "react";
import "./css/aboutOri.css";
import Spline from "@splinetool/react-spline";

const Ui = () => {
  return (
    <>
      <div className="ui">
        <Spline scene="https://prod.spline.design/9VJ9N9o3xciLo5K1/scene.splinecode" />
      </div>

      <div className="ui-md">
        <Spline scene="https://prod.spline.design/U8Ob1uXf5YsJgSnk/scene.splinecode" />
      </div>

      <div className="ui-sm">
        <Spline scene="https://prod.spline.design/KpOE-Kxczxxgxrlu/scene.splinecode" />
      </div>

      <div className="ui-xs">
        <Spline scene="https://prod.spline.design/7FFZ1QMI131vsppV/scene.splinecode" />
      </div>
    </>
  );
};
export default Ui;
