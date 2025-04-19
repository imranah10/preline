import React from "react";
import approachbg from "./assets/images/approach/approachbg.avif";
import { IoCallOutline } from "react-icons/io5";

export const Approach = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-18">
        <div className="space-y-3 w-3xl my-3">
          <h2 className="text-white text-3xl font-semibold">Our approach</h2>
          <p className="text-gray-300">
            This profound insight guides our comprehensive strategy — from
            meticulous research and strategic planning to the seamless execution
            of brand development and website or product deployment.
          </p>
        </div>
        <div className="grid grid-cols-2 my-4 gap-4">
  <div>
    <img className="rounded-xl" src={approachbg} alt="approach" />
  </div>

  <div className=" pt-10">
    <h4 className="text-[#FFFF00] font-semibold text-xs mb-4">STEPS</h4>

    <div className="space-y-8">
      {[1, 2, 3, 4].map((number, index) => (
        <div key={index} className="flex items-start gap-4">
          {/* Number with vertical line */}
          <div className="flex flex-col items-center">
            <p className="text-[#FFFF00] rounded-full border border-gray-400 w-6 h-6 flex items-center justify-center">
              {number}
            </p>
            {index !== 3 && (
              <span className="border-l border-gray-300 h-[60px] mt-1"></span>
            )}
          </div>

          {/* Corresponding step title or description */}
          <div>
            <p className="text-white">
            Market Research and Analysis: Identify your target audience and understand their needs, preferences, and behaviors.</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-center border border-[#FFFF00] text-[#FFFF00] py-2  rounded-xl hover:bg-[#FFFF00] hover:text-black transition duration-300 cursor-pointer w-[200px] mt-6">
  <IoCallOutline className="text-2xl mr-2" />
  <button className="font-medium">Schedule a call</button>
</div>

  </div>
</div>


      </div>
    </>
  );
};
