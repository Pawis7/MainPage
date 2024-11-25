"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-8">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-600">
              {" "}
              Pawis{" "}
            </span>
            Here!
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Front end developer",
                1000,
                "C++, Python & JS",
                1000,
              ]}
              wrapper="span"
              speed={51}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ffffff] text-base sm:text-lg mb-6 lg:text-xl">
            i´m making my first web site with webcoded tutorial (isn´t finish
            yet)
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/diego-saul-mu%C3%B1oz-arciniega-31314533a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 to-indigo-600  hover:from-blue-800 hover:to-indigo-900  hover:text-gray-500  text-white">
                <span>Hire Me</span>
              </button>
            </a>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-300 to-indigo-600 hover:from-blue-800 hover:to-indigo-900  hover:text-gray-400 text-white mt-3">
              <a
                href="https://cv.pawstudio.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block bg-[#121212] rounded-full px-5 py-2">
                  My CV
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative overflow-hidden">
            <Image
              src="https://cdn.pawstudio.xyz/hero.png"
              alt="hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
