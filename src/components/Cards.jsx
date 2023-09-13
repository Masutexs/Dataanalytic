import React from "react";
import rock from "../assets/rock-emoji.png";
import paper from "../assets/paper-emoji.png";
import scissors from "../assets/scissors-emoji.png";

const Cards = () => {
  return (
    <div className="w-full py-[8rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-10 ronded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-5rem] bg-white"
            src={rock}
            alt="/"
          />
          <h2 className="text-center py-8 text-2xl font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#161625e7] hover:text-white ease-in-out duration-500 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col bg-gray-100 p-4 my-10 ronded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-5rem] bg-transparent"
            src={scissors}
            alt="/"
          />
          <h2 className="text-center py-8 text-2xl font-bold">Double User</h2>
          <p className="text-center text-4xl font-bold">$179</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">1 TB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">5 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 10 GB</p>
          </div>
          <button className="bg-[#161625] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#00df9a] hover:text-white ease-in-out duration-500 text-[#00df9b]">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-10 ronded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-5rem] bg-white"
            src={paper}
            alt="/"
          />
          <h2 className="text-center py-8 text-2xl font-bold">Tripple User</h2>
          <p className="text-center text-4xl font-bold">$289</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">10 TB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">10 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 30 GB</p>
          </div>
          <button className="bg-[#00df9b] w-[200px] rounded-md font-medium hover:bg-[#161625e7] hover:text-white ease-in-out duration-500 my-6 mx-auto px-6 py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
