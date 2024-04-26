import React from 'react'

export default function Footer() {
    return (
      <>
      <div className="flex flex-col items-start pb-20 w-full text-white bg-red-800 max-md:max-w-full">
      <div className="flex overflow-auto flex-row justify-end self-stretch py-12 pr-52 -mr-px w-full text-xs bg-rose-600 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mr-24 max-md:flex-wrap">
          <div>About</div>
          <div>Work Experience</div>
          <div>Volunteer</div>
          <div>UI/UX Design</div>
          <div>Skill Set</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="mt-28 ml-72 text-5xl font-medium max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Shou-Tzu Han Portfolio
      </div>
      <div className="justify-center p-2.5 mt-11 mb-3.5 ml-72 text-xs text-black border border-black border-solid bg-white bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:ml-2.5">
        Download PDF Resume
      </div>
    </div>
    </>
    )
}
