import styles from "../style";
import { playLogo } from "./assets";
import { socialMedia, footerLinks } from "../constants";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col border-t-[1px] border-t-[#3F3E45]`}
  >
    <div
      className={`${styles.flexStart} md:flex-row flex-col mt-10 mb-20 w-full`}
    >
      <div className="flex-[1] flex flex-col justify-start ">
        <img
          src={playLogo}
          alt="play"
          className="w-[266px] h-[72.14px] object-contain ml-[-25px]"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to trade. <br /> Get your GameFi on!
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px] md:mr-10`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-cyan-600 cursor-pointer ${
                    index !== footerlink.links ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link} target="_blank">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="fontoppins font-normal text-center text-[18px] leading-[27px] text-white mb-4 md:mb-0">
        Copyright Ⓒ 2023 Play GameFi. All Rights Reserved.
      </p>

      <div className="social-media-icons-container">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[2.5rem] h-[2.5rem] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
