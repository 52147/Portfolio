import React from "react";

export default function Volunteer() {
  return (
    <div
      id="volunteer"
      className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5"
    >
      <div className="flex flex-col mt-11 max-w-full w-[1143px] max-md:mt-10">
        <div className="text-4xl italic text-black max-md:max-w-full">
          VOLUNTEER
        </div>
        <div className="flex gap-5 justify-between mt-3 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col py-0.5 my-auto max-md:max-w-full">
            <div className="flex gap-4 max-md:flex-wrap">
              <div className="text-xl text-black">Software Engineer</div>
              <div className="my-auto text-sm text-stone-500">
                January 2024 - Present
              </div>
            </div>
            <div className="text-base text-stone-500 max-md:max-w-full">
              United Proud Women
            </div>
            <div className="flex gap-2.5 mt-1 text-xs text-black max-md:flex-wrap">
              <div className="justify-center p-2.5 whitespace-nowrap border border-black border-solid">
                Next.js
              </div>
              <div className="justify-center p-2.5 border border-black border-solid">
                Google Sheet API
              </div>
              <div className="justify-center p-2.5 whitespace-nowrap border border-black border-solid">
                Python
              </div>
              <div className="justify-center p-2.5 whitespace-nowrap border border-black border-solid">
                Flask
              </div>
              <div className="justify-center p-2.5 border border-black border-solid">
                Google CLound Platform
              </div>
              <div className="justify-center p-2.5 border border-black border-solid">
                Github Actions
              </div>
            </div>
          </div>
          <a href="https://referral-form-fronted.vercel.app/referral">
            <img
              loading="lazy"
              src="/Rectangle 4 (3).png"
              className="shrink-0 max-w-full aspect-[1.69] w-[234px] shadow-xl hover-image rounded-xl	"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
