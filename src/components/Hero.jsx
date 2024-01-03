import styles from "../style";
import { arrowUp } from "./assets";
import { ChipboyCanvas } from "./canvas";
import Ui from "./Ui";
import { Overlay } from "react-bootstrap";
import { layout } from "../style";

const Hero = () => {
  const handleCanvasDoubleClick = () => {
    window.open("https://skfb.ly/6V7Y7", "_blank");
  };

  return (
    <section
      id="home"
      className={`flex-col justify-between ${styles.paddingZ} hero-container`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-16 hero-text-container`}
      >
        <a
          href="https://google.com"
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Read</span> the full{" "}
            <span className="text-white">whitepaper</span> here
          </p>
        </a>

        <div className="flex flex-row justify-between text-left items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            <span className="text-gradient">Web 3 Gaming</span> <br />{" "}
            Revolution
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] text-left mt-5`}>
          THE WORLD'S FIRST COMMUNITY MANAGED MULTICHAIN GAMEFI AUTONOMOUS
          DECENTRALIZED EXCHANGE & WEB3 GAMING NFT MARKETPLACE
        </p>
      </div>

      {/*UNQUOTE BEFORE GOING LIVE*/}
      
      <div className="hero-canvas-container">
        <ChipboyCanvas
          alt="Video-Game-Hero"
          className="w-full h-auto md:max-h-[500px]"
          onDoubleClick={handleCanvasDoubleClick}
        />
      </div>
    </section>
  );
};

export default Hero;
