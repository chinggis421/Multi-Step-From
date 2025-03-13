import React from "react";
import { IoMdImage } from "react-icons/io";
export const Step3 = () => {
  return (
    <div>
      <div>
        <p className=" text-[#334155] font-semibold ">Date of birth*</p>
        <input className=" w-[416px] h-[44px] border-[#CBD5E1] border-2 rounded-lg "></input>
      </div>
      <div>
        <p className=" text-[#334155] font-semibold ">profile image*</p>
        <button className=" w-[416px] h-[180px] border-[#CBD5E1] border-2 rounded-lg ">
          <button className=" w-[28px] h-[28px] rounded-full bg-neutral-300  ">
            <IoMdImage />
          </button>
          <p>Add image</p>
        </button>
      </div>
    </div>
  );
};
