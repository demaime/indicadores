//@ts-nocheck
import React from "react";

export default function Banner() {
  return (
    <div className="w-full h-20">
      <div className="bg-gray-800 h-full flex justify-between p-2 items-center ">
        <img src="/assets/caba.png" alt="logo-caba" className="w-1/12" />

        <div className="flex flex-col w-full text-center">
          <h1 className="text-white font-bold text-3xl">
            INDICADORES DE REALIDAD
          </h1>
          <h2 className="text-yellow-400">MENSUAL - ANUAL 2024</h2>
        </div>
        <img src="/assets/dgioc.png" alt="logo-dgioc " className="w-1/12" />
      </div>
    </div>
  );
}
