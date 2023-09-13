import React from "react";
import Laptop from "../assets/Laptop4.gif";
import Button from "./Button";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[600px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="pl-6 flex flex-col justify-center">
          <p className="text-[#00df9b] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto
            hic sed voluptatum tempora ipsa, officiis provident totam. Ut et
            repudiandae, totam repellendus voluptatum soluta dolores deserunt!
            Incidunt, similique vel!
          </p>
          <Button text={"Get Started"} 
          />
          {/* <button className="bg-black w-[200px] rounded-md  font-medium my-6 mx-auto md:mx-0 py-3 px-6 text-[#00df9b]">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
