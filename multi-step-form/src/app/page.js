"use client";
import Image from "next/image";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Step } from "./component/Step";
import { Header2 } from "./component/Header2";
import { Footer2 } from "./component/Footer2";
import { Step2 } from "./component/Step2";
import { Header3 } from "./component/Header3";
import { Footer3 } from "./component/Footer3";
import { Step3 } from "./component/Step3";
import { useState } from "react";
export default function Home() {
  const [step, setStep] = useState(1);
  const handleadd = () => {
    setStep(step + 1);
  };
  return (
    <div className="flex h-[100vh] bg-[#F4F4F4] justify-center items-center  ">
      <div className=" w-[480px] h-[655px] bg-[#FFF] p-8 flex justify-between flex-col ">
        <div>
          <Header />
          <Step />
        </div>

        <Footer onCLick={handleadd} count={step} />
      </div>
      <div className=" w-[480px] h-[655px] bg-[#FFF] p-8 flex justify-between flex-col ">
        <div>
          <Header2 />
          <Step2 />
        </div>
        <Footer2 />
      </div>
      <div className=" w-[480px] h-[655px] bg-[#FFF] p-8 flex justify-between flex-col ">
        <div>
          <Header3 />
          <Step3 />
        </div>
        <Footer3 />
      </div>
    </div>
  );
}
