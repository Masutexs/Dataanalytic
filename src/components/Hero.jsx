import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9b] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-2">
            Fast, flexible, financing for{" "}
            <TypeAnimation
              className="md:text-5xl sm:text-4xl text-xl font-bold"
              sequence={["BTC", 2000, "BTB", 2000, "SASS", 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              style={{ color: "gray" }}
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <Button text={'Get Started'}/>
        
        {/* <button className="bg-[#00df9b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
