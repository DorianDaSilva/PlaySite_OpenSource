import React, { useState } from "react";
import Modal from "./Modal";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="py-2 px-8 ml-10 bg-blue-gradient rounded-[10px] font-poppins font-medium text-[14px] text-white cursor-pointer outline-none"
        onClick={handleClick}
      >
        Launch App
      </button>

      {isOpen && <Modal onClose={handleClose} />}
    </>
  );
};

export default Button;

// import React from "react";

// const Button = ({ styles }) => (
//   <a href="https://coinmarketcap.com">
//     <button type="button"  className={`py-2 px-8 ml-10 bg-blue-gradient rounded-[10px] font-poppins font-medium text-[14px] text-white outline-none`}>
//       Launch App
//     </button>
//   </a>
// );

// export default Button;
