import React from "react";

export default function Header() {
  return (
    <>
      <div
        className="flex flex-col items-start pb-20 w-full text-white bg-red-800 max-w-full"
        style={{
          backgroundImage: 'url("/Rectangle 58 (1).png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mt-10 md:mt-28 ml-5 md:ml-72 text-4xl md:text-5xl font-medium">
          Shou-Tzu Han Portfolio
        </div>
        <a
          href="Shoutzu_Han_Resume.pdf"
          // download="Shoutzu_Han_Resume.pdf"
          className="px-12 bg-transparent hover:bg-black hover:text-white transition-colors flex justify-center items-center p-2.5 mt-6 md:mt-11 mb-3.5 ml-5 md:ml-72 text-xs text-black border border-black border-solid bg-white bg-opacity-0 cursor-pointer"
        >
          View PDF Resume
        </a>
      </div>
    </>
  );
}
