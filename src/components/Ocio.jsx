import React from "react";

export default function Ocio() {
  return (
    <div className="h-full w-full bg-gray-200">
      <div className="w-full h-[5%] bg-gray-600 text-white">
        SELECTOR DE MES
      </div>{" "}
      <div className="w-full h-[95%] p-2">
        {" "}
        <div className="w-full h-1/3 flex justify-evenly">
          <div className="w-48 h-48 rounded-full border-8 border-blue-400 bg-blue-200 relative  ">
            <div className="w-24 h-24 rounded-full bg-blue-400 absolute -bottom-8 -right-12">
              <img src="/assets/fiesta.png" className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="w-48 h-48 rounded-full border-8 border-red-400 bg-red-200 relative    ">
            <div className="w-24 h-24 rounded-full bg-red-400 absolute -bottom-8 -left-12">
              {" "}
              <img src="/assets/combo.png" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-evenly">
          {" "}
          <div className="w-48 h-48 rounded-full border-8 border-green-400 bg-green-200 relative    ">
            <div className="w-24 h-24 rounded-full bg-green-400 absolute top-1/4 -left-1/4">
              {" "}
              <img src="/assets/gym.png" className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="w-48 h-48 rounded-full border-8 border-yellow-400 bg-yellow-200 relative  ">
            <div className="w-24 h-24 rounded-full bg-yellow-400 absolute -top-1/4 left-1/4">
              {" "}
              <img src="/assets/cine.png" className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="w-48 h-48 rounded-full border-8 border-purple-400 bg-purple-200 relative  ">
            <div className="w-24 h-24 rounded-full bg-purple-400 absolute top-1/4 -right-1/4">
              {" "}
              <img src="/assets/teatro.png" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-evenly">
          <div className="w-48 h-48 rounded-full border-8 border-pink-400 bg-pink-200 relative  ">
            <div className="w-24 h-24 rounded-full bg-pink-400 absolute -top-8 -right-12">
              {" "}
              <img src="/assets/netflix.png" className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="w-48 h-48 rounded-full border-8 border-orange-400 bg-orange-200 relative  ">
            <div className="w-24 h-24 rounded-full bg-orange-400 absolute -top-8 -left-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
