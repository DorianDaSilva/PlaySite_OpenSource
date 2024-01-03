import React from "react";
import Feature from "./about-feature/feature";
import "./css/aboutOri.css";

const About = () => (
  <section id="about" className="play__section mt-20">
    <div className="play__about rounded-lg pt-10 pb-10 sm:px-4">
      <div className="play__about-heading sm:text-sm">
        <h1 className="text-gradient play__features-container__feature-title text-2xl sm:text-lg">
          Join the future, <br /> Win the game
        </h1>
        <p className="rgb(0,246,255)">Explore the Lite paper</p>
      </div>

      <div className="play__about-container font-poppins font-normal text-dimWhite text-lg leading-8 sm:text-base">
        <Feature
          title="Artificial Intelligence"
          text="AI-powered agents managing every aspect of the business ensure an unparalleled level of efficiency and reliability. welcome to the future of DeFi."
          className="sm:mb-6"
        />

        <Feature
          title="Privacy Layer"
          text="Experience the unparalleled privacy of zk-SNARKs. Take full control of your financial data with a truly private and secure DEX experience."
          className="sm:mb-6"
        />

        <Feature
          title="Endless Liquidity"
          text="Frictionless transactions at the best market prices, slippage & MEV attacks  protection by accessing over 70 on-chain liquidity pools ."
          className="sm:mb-6"
        />
      </div>
    </div>
  </section>
);

export default About;
