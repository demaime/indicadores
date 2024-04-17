import React from "react";

const ServiciosMes = ({ mes }) => {
  return (
    <div className="w-full h-full bg-yellow-200 flex justify-center items-center relative">
      <div className="w-20 h-20 rounded-full bg-red-400 absolute top-2 left-2"></div>
      <div className="w-20 h-20 rounded-full bg-red-400 absolute bottom-2 left-2"></div>
      <div className="w-20 h-20 rounded-full bg-red-400 absolute top-2 right-2"></div>
      <div className="w-20 h-20 rounded-full bg-red-400 absolute bottom-2 right-2"></div>
      <div className="w-20 h-20 rounded-full bg-red-400 absolute top-1/4 left-2"></div>
      <div className="w-20 h-20 rounded-full bg-red-400 absolute top-1/4 right-2"></div>
      <div className="w-20 h-20 rounded-full bg-red-400 absolute bottom-1/4 left-2"></div>
      <div className="w-20 h-20 rounded-full bg-red-400 absolute top-1/4 right-2"></div>
    </div>
  );
};

export default ServiciosMes;
