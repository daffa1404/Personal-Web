import React from "react";
import "../styles/Assets3D.css";

const ThreeDScene = () => {
  return (
    <div className="three-d-robot">
      <spline-viewer
        url="https://prod.spline.design/Uw3vUTEsw5NAbBbm/scene.splinecode"
        className="three-d-viewer"
      ></spline-viewer>
    </div>
  );
};

export default ThreeDScene;
