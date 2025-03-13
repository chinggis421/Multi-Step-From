import React from "react";

export const Step2 = () => {
  return (
    <div className=" flex-col justify-start items-start gap-2 ">
      <div>
        <p className=" text-[#334155] font-semibold ">Email*</p>
        <input className=" w-[416px] h-[44px] border-[#CBD5E1] border-2 rounded-lg "></input>
      </div>
      <div>
        <p className=" text-[#334155] font-semibold ">Phone number*</p>
        <input className=" w-[416px] h-[44px] border-[#CBD5E1] border-2 rounded-lg "></input>
      </div>

      <p className=" text-[#334155] font-semibold ">Password*</p>
      <input className=" w-[416px] h-[44px] border-[#CBD5E1] border-2 rounded-lg "></input>
      <div>
        <p className=" text-[#334155] font-semibold ">Confirm password*</p>
        <input className=" w-[416px] h-[44px] border-[#CBD5E1] border-2 rounded-lg "></input>
      </div>
    </div>
  );
};
