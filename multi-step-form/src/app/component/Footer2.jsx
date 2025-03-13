import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

export const Footer2 = () => {
  return (
    <div>
      <button className="w-[128px] h-[44px] rounded-lg  ">Back</button>
      <FaChevronLeft />
      <button className=" bg-[#121316] w-[280px] h-[44px] flex justify-center items-center rounded-lg ">
        continue 2/3 <img src="bow_right.svg" alt="" />
      </button>
    </div>
  );
};
