import React from "react";
import { data } from "./Succdata";
export const SuccCard = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-x-2  shadow-2xl ">
        {data.map((items, index) => {
          return (
            <div
              key={index}
              className="border group w-4xl h-[380px]  bg-[#111010] border-white rounded-xl p-4 space-y-3"
            >
              <img className="w-14" src={items.image} alt="" />
              <div className="text-white">
                <h2 className="text-5xl">{items.growth}</h2>
                <p className="text-2xl">{items.title}</p>
                <p className="text-gray-300">{items.desc}</p>
              </div>
              <a
                href="#"
                className="border-b-2 font-semibold border-gray-500 text-[#FFFF00] group-hover:border-yellow-500 transition duration-300 group-hover:shadow-xl-[#FFFF00]"
              >
                Case study
              </a>

             
            </div>
          );
        })}
      </div>
    </>
  );
};
