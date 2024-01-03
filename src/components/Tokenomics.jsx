import React from "react";
import Feature from "./about-feature/feature";
import "./about-feature/feature.css";
import "./css/aboutOri.css";
import Chart from "./Chart";

const Tokenomics = () => (
  <section
    className="play__about play__section-tokenomics"
    style={{ borderRadius: "20px" }}
    id="tokenomics"
  >
    <div className="play__features-heading-tokenomics">
      <div>
        <h1 className="text-gradient play__features-heading-tokenomics ml-4 mt-5">
          TOKENOMICS
        </h1>
      </div>
    </div>
    <div className="play__section-tokenomics">
      <div className="play__about-container-tokenomics play__about-container-tokenomics__align2">
        <Feature
          title="Token Supply"
          text={<span>Total: 500 Million</span>}
          text2={<span>Vested: 325 Million</span>}
          text3={<span>Burn: 250 Million</span>}
        />
        <Feature
          title="Token Reserves"
          text={<span>Community: 110 Million</span>}
          text2={<span>Reserve: 50 Million</span>}
          text3={<span>Marketing: 15 Million</span>}
        />
        <Feature
          title="Distribution"
          text={<span>Year 1: 120 Million</span>}
          text2={<span>Year 2: 104 Million</span>}
          text3={<span>Year 3: 101 Million</span>}
        />
      </div>

      <div className="play__about-container-tokenomics play__about-container-tokenomics__align">
        <Feature
          title="Token Sales"
          text={
            <span>
              PUBLIC:
              <br /> 20% TGE
              <br />
              20% monthly <br />
            </span>
          }
          text2={
            <span>
              PRIVATE:
              <br /> 6 months vest
              <br />
              10% monthly <br />
            </span>
          }
          text3={
            <span>
              SEED:
              <br /> 18 months vest
              <br />
              10% monthly <br />
            </span>
          }
        />
        <Feature
          title="Founding Team"
          text={
            <span>
              TEAM:
              <br /> 18 months vest
              <br />
              5% monthly + 15%
              <br />
            </span>
          }
          text2={
            <span>
              DEV:
              <br /> 10% TGE
              <br />
              10% monthly
              <br />
            </span>
          }
          text3={
            <span>
              LEGAL:
              <br /> 10% TGE
              <br />
              10% monthly
              <br />
            </span>
          }
        />
        <Feature
          title="Collaborators"
          text={
            <span>
              PARTNERS:
              <br /> 12 months vest<br />5% month
              <br />
            </span>
          }
          text2={
            <span>
              ADVISORS:
              <br /> 12 months vest<br />
              5% monthly
              <br />
            </span>
          }
          text3={
            <span>
              FOUNDER:
              <br /> 11 months vest
              <br />
              50% monthly
              <br />
            </span>
          }
        />
      </div>
    </div>

    <Chart />
  </section>
);

export default Tokenomics;
