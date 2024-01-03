import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import "./css/aboutOri.css";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] ${
      index !== 0 ? "mt-4" : "mt-0"
    } ${
      index !== features.length - 1 ? "mb-4" : "mb-0"
    } feature-card`}
    style={{ border: "3px solid RGB(91, 14, 135, 0.3)" }}
  >
    <div className="flex-1 flex flex-col width-[100%] px-2 mx-4 play__about-container-tokenomics">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Exchange = () => {
  return (
    <section id="exchange" className={`${layout.section} play__section mt-[-10rem]`}>
      <div className="absolute z-[0] w-[10%] h-[20%] left-[20%] blue__gradient " />
      <div className={`${layout.sectionInfo} play__about-container-exchange`}>
        <h2 className={styles.heading2}>
          Play Games, <br className="sm:block hidden" /> Make Profits!
        </h2>
        <p className={`${styles.paragraph} mt-[10px]`}>
          Experience the thrill of a groundbreaking autonomous decentralized
          exchange (ADEX) specifically designed for gamers and traders. <br />{" "}
          <br />
          PlaySwap's innovative platform provides an unparalleled level of
          freedom and privacy, empowering you to navigate the exciting world of
          GameFi and play-to-earn (P2E) with confidence.
          <br />
          <br />
          Trade your favorite GameFi tokens, explore the diverse NFT ecosystem,
          and unlock a world of limitless possibilities.
        </p>
      </div>
      <div></div>
      <div className={`${layout.sectionImg} flex-col pt-[20px]`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Exchange;
