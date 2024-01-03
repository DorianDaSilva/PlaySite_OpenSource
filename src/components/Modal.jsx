import React, { useState } from "react";
import "./css/Modal.css";
import { RxCrossCircled } from "react-icons/rx";

const options = [
  {
    name: "Ethereum",
    url: "https://www.ethereum.org/",
  },
  {
    name: "Polygon",
    url: "https://www.polygon.technology/",
  },
  {
    name: "Bsc",
    url: "https://www.bnbchain.org",
  },
  {
    name: "Solana (soon)",
    url: "https://www.solana.com",
  },
];

const Modal = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    window.location.href = option.url;
    setSelectedOption(null);
  };

  return (
    // Added `onClick` event handler for the entire modal
    <div className="modal">
      <button src={RxCrossCircled} className="close-button" onClick={onClose}>
        <RxCrossCircled />
      </button>

      <div className="modal-header">
        <h2>Select Version</h2>
      </div>
      <ul>
        {options.map((option) => (
          <li key={option.name}>
            <button
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
