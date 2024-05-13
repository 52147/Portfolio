import React from "react";

export default function UXDesign() {
  return (
    <div
      id="ui-ux-design"
      className="flex flex-col items-center px-20 pt-20 pb-36 mb-5 bg-stone-200 max-md:px-5"
    >
      <div className="flex flex-col mt-9 max-w-full w-[1146px]">
        <div className="text-4xl italic text-black max-md:max-w-full">
          UI/UX DESIGN
        </div>
        <div className="mt-28 max-w-full w-[1149px] max-md:mt-10 ml-4">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pr-28 pl-px text-xl text-black max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/Rectangle 38.png" // Adjusted to correct path starting from the root
                  className="w-full aspect-[1.4] max-w-[470px] max-md:max-w-full"
                />
                <div className="mt-11 max-md:mt-10 max-md:max-w-full">
                  Seekway
                </div>
                <div className="mt-4 mb-5 text-base text-stone-500 max-md:max-w-full">
                  A dating and travel app, helping users connect with potential
                  partners interested in travel.
                </div>
                <img
                  loading="lazy"
                  src="/Rectangle 38 (2).png"
                  className="mt-32 w-full aspect-[1.51] max-w-[470px] max-md:mt-10 max-md:max-w-full"
                />
                <div className="mt-11 max-md:mt-10 max-md:max-w-full">
                  Personal Portfolio
                </div>
                <div className="mt-4 text-base text-stone-500 max-md:max-w-full">
                  A professional and passionate 2 years work experience software
                  engineer personal website.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pr-28 pl-px text-xl text-black max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/Rectangle 38 (1).png" // Adjusted to correct path starting from the root
                  className="w-full aspect-[1.4] max-w-[470px] max-md:max-w-full"
                />
                <div className="mt-11 max-md:mt-10 max-md:max-w-full">
                  E-Foodie
                </div>
                <div className="mt-4 mb-5 text-base text-stone-500 max-md:max-w-full">
                  A new media company that promotes restaurants and services.{" "}
                </div>
                <img
                  loading="lazy"
                  src="/Rectangle 38 (3).png"
                  className="mt-32 w-full aspect-[1.51] max-w-[470px] max-md:mt-10 max-md:max-w-full"
                />
                <div className="mt-11 max-md:mt-10 max-md:max-w-full">
                  Go2pos Marketing
                </div>
                <div className="mt-4 text-base text-stone-500 max-md:max-w-full">
                  we provide comprehensive solution include digital marketing,
                  business analytics, website creation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
