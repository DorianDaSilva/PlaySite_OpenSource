import React from "react";
import styles, { layout } from "../style";
import "./css/aboutOri.css";

const AI = () => {
  const handleCanvasDoubleClick = () => {
    window.open("https://skfb.ly/ooWKu", "_blank");
  };

  return (
    <section
      id="rewards"
      className={`${layout.sectionReverse} image-container play__section`}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <div className={`${layout.sectionInfo} play__about-container-tokenomics`}>
        <h2 className="play_heading2">AI Powered</h2>
        <p className={`${styles.paragraph} max-width mt-5`}>
          Experience the transformative power of AI autonomous agents as they
          elevate your GameFi experience to unprecedented heights.
          <br />
          <br />
          These intelligent entities seamlessly manage the platform's business
          operations and implementation of DAO resolutions, amongst other
          functions, ensuring 24/7 uptime and efficient resource allocation.
          <br />
          <br />
          Unlike traditional DEX teams, PlaySwap's autonomous AI agents operate
          tirelessly, streamlining processes and enhancing decision-making with
          data-driven insights.
        </p>
      </div>

      <div className="play__image play__image__ai">
        <img src="/src/components/assets/autonomous.png" alt="governance" />
      </div>
    </section>
  );
};
export default AI;
