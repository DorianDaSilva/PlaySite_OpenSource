import React from "react";
import styles, { layout } from "../style";
import { CatCanvas } from "./canvas";
import "./css/aboutOri.css"

const Governance = () => {
  const handleCanvasDoubleClick = () => {
    window.open("https://skfb.ly/oELNA", "_blank");
  };

  return (
    <section
      id="governance"
      className={`${layout.section} mb-20 image-container play__section`}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <div className="play__image play__image__gov ">
        <img src="/src/components/assets/governance.png" alt="governance" />

      </div>

      <div className={`${layout.sectionInfo} play__about-container-tokenomics `}>
        <h2 className="play_heading2">
          Community Governance
        </h2>
        <p className={`${styles.paragraph} w-full mt-5 mx-auto md:mx-0 `}>
          Empower your DEX experience with our revolutionary DAO governance
          protocol. <br />
          <br />
          Every token holder holds the power to influence the DEX's future,
          participating in consensus-driven decision-making and witnessing AI's
          seamless implementation of community resolutions.
        </p>
      </div>
    </section>
  );
};

export default Governance;
