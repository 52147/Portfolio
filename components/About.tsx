import React from 'react'

export default function About() {
  return (
<div
  class="flex flex-col items-center py-20 pr-20 pl-20 w-full bg-white max-md:px-5 max-md:max-w-full"
>
  <div class="mt-3 mr-auto ml-48 text-4xl italic text-black max-md:max-w-full">
    ABOUT
  </div>
  <div
    class="flex gap-5 justify-between mt-16 mr-auto ml-48 w-full max-w-[1005px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
  >
    <div class="flex flex-col max-md:max-w-full">
      <div class="text-xl text-black max-md:max-w-full">Boston University</div>
      <div class="mt-4 text-base text-stone-500 max-md:max-w-full">
        Master of Science in Computer Science
      </div>
    </div>
    <div class="my-auto text-base text-stone-500">
      September 2021 - August 2023
    </div>
  </div>
  <div
    class="flex gap-5 justify-between mt-11 mr-auto mb-3.5 ml-48 w-full max-w-[1005px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
  >
    <div class="flex flex-col max-md:max-w-full">
      <div class="text-xl text-black max-md:max-w-full">Soochow University</div>
      <div class="mt-4 text-base text-stone-500 max-md:max-w-full">
        Master of Arts in Political Science
      </div>
    </div>
    <div class="my-auto text-base text-stone-500">
      September 2015 - June 2020
    </div>
  </div>
</div>

  )
}
