import React from "react";
import styles, { layout } from "../style";
import BunnyCanvas from "./canvas/Bunny";

const Earn = () => {

  const handleCanvasDoubleClick = () => {
    window.open("https://skfb.ly/ooWKu", "_blank");
  };

    return (
    <section
      id="rewards"
      className={`${layout.sectionReverse} image-container`}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {" "}
          NFT & Token <br className="sm:block hidden" /> Rewards{" "}
        </h2>
        <p className={`${styles.paragraph} max-width mt-5`}>
          Several staking mechanisms will be introduced allowing users to earn
          token rewards by staking the platform's native token at a juicy apy, LP
          farming & creating or adding liquidity to pools.
          <br /> <br /> They will also be able to stake their Play NFT to gain
          access to airdrops, seasonal promotions, giveaways & whitelist spots
          for new projects mints.
        </p>
      </div>

      <div className={`${layout.sectionImgReverse} flex justify-center items-center w-1/2 md:pl-20`}
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/src/components/assets/bgImage2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}

        onDoubleClick={handleCanvasDoubleClick}>
        {/*<BunnyCanvas />*/}

        <div className="absolute z-[3] -left-[70%] top-0 w-[50%] h-[20%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-[60%] bottom-0 w-[50%] h-[20%] rounded-full blue__gradient" />
        <div className="absolute z-[1] -left-[50%] bottom-0 w-[60%] h-[30%] rounded-full pink__gradient" />
      </div>
    </section>
  );
}
export default Earn;
