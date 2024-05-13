import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCode,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div
        className="flex flex-col items-start pb-20 w-full text-white max-w-full"
        style={{
          backgroundImage: 'url("/Rectangle 58 (1).png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mt-10 md:mt-28 ml-5 md:ml-72 text-4xl md:text-5xl font-medium">
          <div className="mb-8 ml-0">Shou-Tzu Han Portfolio</div>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/shou-tzu-han-713724200/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white w-5 h-5 hover:text-zinc-600		"
              />
            </a>
            <a href="https://github.com/52147">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white w-5 h-5 hover:text-zinc-600"
              />
            </a>
            <a href="https://medium.com/@web_39620">
              <FontAwesomeIcon
                icon={faMediumM}
                className="text-white w-5 h-5 hover:text-zinc-600	"
              />
            </a>
            <a href="https://leetcode.com/u/04114239/">
              <FontAwesomeIcon
                icon={faCode}
                className="text-white w-5 h-5 hover:text-zinc-600	"
              />{" "}
            </a>
            <a href="https://portfolio-52147s-projects.vercel.app/">
              <FontAwesomeIcon
                icon={faWindowMaximize}
                className="text-white w-5 h-5 hover:text-zinc-600	"
              />
            </a>
            <a href="mailto:debrah@bu.edu">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white w-5 h-5 hover:text-zinc-600"
              />
              {/* Email Icon */}
            </a>
          </div>
        </div>
        <a
          href="Shoutzu_Han_Resume.pdf"
          className="px-12 bg-transparent hover:bg-black hover:text-white transition-colors flex justify-center items-center p-2.5 mt-6 md:mt-11 mb-3.5 ml-5 md:ml-72 text-xs text-black border border-black border-solid cursor-pointer"
        >
          View PDF Resume
        </a>
      </div>
    </>
  );
}
