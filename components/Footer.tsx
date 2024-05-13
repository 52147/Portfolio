export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center p-16 bg-black max-md:px-5">
        <div className="max-w-full w-[1098px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[51%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-6 text-white max-md:mt-10">
                <div className="text-xl">Shou-Tzu Han Portfolio</div>
                <div className="mt-8 text-sm">
                  A professional and passionate 2 years work experience software
                  engineer personal website.
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c815ee92723e81be749d07bcb7bc2c5ff44930dc8b32ded8e003323d9c86eaa?apiKey=235a0c63833248a189ef6b6106f98ae2&"
                  className="mt-11 max-w-full aspect-[5.88] w-[142px] max-md:mt-10"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-sm text-white whitespace-nowrap max-md:mt-10">
                <div className="text-base max-md:mr-1">Pages</div>
                <div className="mt-6">About</div>
                <div className="mt-3">Service</div>
                <div className="mt-3">Advantage</div>
                <div className="mt-3">Case</div>
                <div className="mt-3">Contact</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
              <a
                className="justify-center self-stretch pl-9 p-2.5 my-auto w-full text-xs text-black bg-white border border-black border-solid max-md:px-5 max-md:mt-10"
                href="Shoutzu_Han_Resume.pdf"
              >
                View PDF Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
