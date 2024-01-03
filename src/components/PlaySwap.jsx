import React from "react";
import styles, { layout } from "../style";
import "./css/autonomous.css";
import alienCatTiny from "./assets/AlienCatTiny.png";

const Playswap = () => {
  return (
    <div className="autonomous-container">
      <h2 className={`${styles.heading2} text-center mb-[50px] `}>
        The Gateway to the Game-Fi Revolution
        <br />
        <br />
      </h2>

      <div className="autonomous-content">
        <div className="image-container-autonomous">
          <img src={alienCatTiny} alt="Background Image" />
        </div>
        <div
          className={`${layout.section} flex justify-center ml-[20px] layout-section`}
        >
          <p className={`${styles.paragraph}  mx-auto md:mx-0 `}>
            Embark on the next frontier of gaming and finance with PlaySwap, the
            first autonomous decentralized exchange (AU-DEX) that seamlessly
            merges web3 gaming, AI, and finance.
            <br />
            <br />
            Our groundbreaking AI-powered DEX empowers you to trade any gaming
            asset across multiple blockchains, eliminating intermediaries and
            restrictions in a permissionless environment.
            <br />
            <br />
            Unlock the boundless potential of the booming game-fi economy by
            discovering, trading, and earning tokens from the most innovative
            and rewarding P2E games on the blockchain.
          </p>
        </div>

        <div
          className={`${layout.section} flex justify-center ml-[20px] layout-section`}
        >
          <p className={`${styles.paragraph} mx-auto md:mx-0`}>
            PlaySwap is not just a simple decentralized trading platform; it's a
            thriving community governed by a DAO, where you hold the reins in
            shaping the platform's future.
            <br />
            <br />
            Experience unparalleled speed, convenience and liquidity by
            aggregating over 70 on-chain sources to minimize slippage & enjoy
            robust privacy as you conduct secure and anonymous transactions.
            <br />
            <br />
            Don't miss the opportunity to become a part of the Game-Fi
            revolution and trade your way to wealth and freedom with PlaySwap.
            <br />
            <br />
          </p>
        </div>
      </div>
      <h2 className={`${styles.heading2} text-center mb-[25px] mt-[100px]`}>
        <br />
        <br />
        GAME ON!
      </h2>
      <h2 className={`${styles.paragraph} text-center text-[30px] `}>
        Decentralized Finance just got a whole lot more exciting!
        <br />
        <br />
      </h2>
    </div>
  );
};

export default Playswap;
