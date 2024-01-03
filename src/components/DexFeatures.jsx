import React from "react";
import "./css/dexFeatures.css"; // Import the CSS file
import { dexFeatures } from "../constants";
import { RxCodesandboxLogo } from "react-icons/rx";
import { RxLockClosed } from "react-icons/rx";
import { RxSketchLogo } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import { RxGlobe } from "react-icons/rx";
import "./css/aboutOri.css";

const DexFeatures = () => {
  return (
    <div className="dex__play__section">
      {dexFeatures.map((feature, index) => (
        <div key={feature.id} className="dex-feature-card">
          <i
            className={`font-bold text-[64px] mb-4`}
            style={{ borderRadius: "50%" }}
          >
            {feature.title === "AI Power" ? (
              <RxCodesandboxLogo />
            ) : feature.title === "Privacy" ? (
              <RxLockClosed />
            ) : feature.title === "Liquidity" ? (
              <RxSketchLogo />
            ) : feature.title === "Governance" ? (
              <RxPerson />
            ) : (
              <RxGlobe />
            )}
          </i>
          <h3 className="text-white font-bold text-[24px] leading-[32px] mb-0">
            {feature.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DexFeatures;
