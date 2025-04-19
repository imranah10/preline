import React from "react";
import { data } from "./Succdata";

export const SuccCard = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-4 shadow-2xl">
        {data.map((items, index) => {
          return (
            <div
              key={index}
              className="relative border group w-[350px] h-[420px] bg-[#111010] border-white rounded-xl p-4  flex flex-col justify-between"
            >
              <div className="space-y-3">
                <img className="w-14" src={items.image} alt="" />
                <div className="text-white">
                  <h2 className="text-5xl">{items.growth}</h2>
                  <p className="text-2xl">{items.title}</p>
                  <p className="text-gray-300">{items.desc}</p>
                </div>
              </div>

              {/* Button and hover effect */}
              <div className="relative z-10">
                <a
                  href="#"
                  className="relative z-20 border-b-2 font-semibold border-gray-500 text-[#FFFF00] group-hover:border-yellow-500 transition duration-300"
                >
                  Case study
                </a>
              </div>

              {/* Background hover effect - stays inside card */}
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-12 transition-all duration-300 bg-gradient-to-t from-[#FFFF00] via-[#171717] to-[#171717] z-0 rounded-b-xl" />
            </div>
          );
        })}
      </div>
    </>
  );
};
