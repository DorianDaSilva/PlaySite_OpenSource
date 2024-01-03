import React from "react";
import { useState } from "react";
import Button from "./Button";

import { close, playLogo, menu, alienCatTiny } from "./assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="playLogo">
        <Link to="/">
          <img src={playLogo} alt="play" className="w-[200px] h-full start-0" />
        </Link>
      </div>

      <div className="alienCat">
        <Link to="/">
          <img
            src={alienCatTiny}
            alt="play"
            className="w-[200px] h-full start-0"
          />
        </Link>
      </div>

      <div className="flex justify-end items-center z-[100] cursor-pointer menu">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? "flex" : "hidden"} sidebar`}>
          <ul className="list-none flex flex-col flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className="pb-4 pt-2 border-b border-cyan-400 text-white text-[18px] hover:text-cyan-600"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center z-[1000] cursor-pointer button">
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
