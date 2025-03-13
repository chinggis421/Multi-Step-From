import React from "react";
import { FaChevronRight } from "react-icons/fa";
export const Footer = ({ count, onCLick }) => {
  return (
    <div>
      <button
        onClick={onCLick}
        className=" bg-[#121316] w-[416px] h-[44px] flex justify-center items-center rounded-lg "
      >
        <FaChevronRight /> continue {count}/3
      </button>
    </div>
  );
};
