import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center p-20 w-full bg-white max-md:px-5 max-md:max-w-full"
    >
      <div className="flex flex-col mt-9 max-w-full w-[1146px]">
        <div className="text-4xl italic text-black max-md:max-w-full">
          ABOUT
        </div>
        <div className="flex gap-5 justify-between mt-16 w-full max-w-[1203px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-xl text-black max-md:max-w-full">
              Boston University
            </div>
            <div className="mt-4 text-base text-stone-500 max-md:max-w-full">
              Master of Science in Computer Science
            </div>
          </div>
          <div className="my-auto text-base text-stone-500">
            September 2021 - August 2023
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-11 mb-3.5 w-full max-w-[1203px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-xl text-black max-md:max-w-full">
              Soochow University
            </div>
            <div className="mt-4 text-base text-stone-500 max-md:max-w-full">
              Master of Arts in Political Science
            </div>
          </div>
          <div className="my-auto text-base text-stone-500">
            September 2015 - June 2020
          </div>
        </div>
      </div>
    </div>
  );
}
