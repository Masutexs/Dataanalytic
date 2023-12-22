import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Logowhite } from "../assets";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex cursor-pointer justify-between items-center h-24 w-full mx-auto px-4 text-white">
      <a href="/">
        <img
          src={Logowhite}
          alt="Logowhite"
          className="w-80 h-auto  object-contain"
        />
      </a>
      <ul className="uppercase hidden lg:flex">
        <li className="hover:text-slate-300 p-4">Home</li>
        <li className="hover:text-slate-300 p-4">Company</li>
        <li className="hover:text-slate-300 p-4">Resources</li>
        <li className="hover:text-slate-300 p-4">About</li>
        <li className="hover:text-slate-300 p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block lg:hidden mr-9">
        {nav ? <AiOutlineClose size={45} /> : <AiOutlineMenu size={45} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[200px] border-r border-r-gray-900 bg-[#000300] h-full ease-in-out duration-500"
            : "fixed left-[-727%]"
        }>
        <a href="/">
          <img
            src={Logowhite}
            alt="Logowhite"
            className="w-[50%] h-[20%]  object-contain"
          />
        </a>

        <ul className="p-4 uppercase">
          <li className="hover:text-slate-300 hover:scale-105 duration-300 p-4 border-b border-gray-600">
            Home
          </li>
          <li className="hover:text-slate-300 hover:scale-105 duration-300 p-4 border-b border-gray-600">
            Company
          </li>
          <li className="hover:text-slate-300 hover:scale-105 duration-300 p-4 border-b border-gray-600">
            Resources
          </li>
          <li className="hover:text-slate-300 hover:scale-105 duration-300 p-4 border-b border-gray-600">
            About
          </li>
          <li className="hover:text-slate-300 hover:scale-105 duration-300 p-4">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
