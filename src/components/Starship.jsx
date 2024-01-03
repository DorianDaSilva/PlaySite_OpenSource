import React from "react";
import starship from "./assets/starship.png";
import "./css/aboutOri.css";

const Starship = () => {
  return (
    <div className="play__section">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw", /* Expand to full viewport width */
        height: "100vh", /* Expand to full viewport height */
      marginRight: "10vw",
      }}

      className="starship"
    >
      <img
        src={starship}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          maxHeight: "100%", /* Prevent image overflow */

        }}
      />
    </div>
    </div>
  );
};

export default Starship;
