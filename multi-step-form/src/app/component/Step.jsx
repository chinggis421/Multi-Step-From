import React from "react";

export const Step = () => {
  return (
    <div className=" flex-col justify-start items-start gap-2 ">
      <div>
        <p className=" text-[#334155] font-semibold ">First name*</p>
        <input className=" w-[416px] h-[44px] border-[#CBD5E1] border-2 rounded-lg "></input>
      </div>
      <div>
        <p className=" text-[#334155] font-semibold ">Last name*</p>
        <input className=" w-[416px] h-[44px] border-[#CBD5E1] border-2 rounded-lg "></input>
      </div>
      <div>
        <p className=" text-[#334155] font-semibold ">Username*</p>
        <input className=" w-[416px] h-[44px] border-[#CBD5E1] border-2 rounded-lg "></input>
      </div>
    </div>
  );
};
