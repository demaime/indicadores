//@ts-nocheck
import React from "react";

export default function Banner() {
  return (
    <div className="section" id="home">
      <div className="w-full h-full flex flex-col jusitfy-between  bg-gray-800">
        <div className="flex justify-between p-2 items-center border-b-4 border-gray-700 ">
          <img src="/assets/caba.png" alt="logo-caba" className="w-1/12" />

          <div className="flex flex-col w-full text-center justify-between py-4">
            <h1 className="text-white font-bold text-5xl">
              INDICADORES DE REALIDAD
            </h1>
            <h2 className="text-yellow-400 text-2-xl">MENSUAL - ANUAL 2024</h2>
          </div>
          <img src="/assets/dgioc.png" alt="logo-dgioc " className="w-1/12" />
        </div>
        <div className="w-full text-white flex flex-col items-center justify-evenly h-4/5">
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#inflacion"
          >
            INFLACION
          </a>
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#dolar"
          >
            DOLAR
          </a>
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#dolar"
          >
            EJEMPLO 1
          </a>
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#dolar"
          >
            EJEMPLO 2
          </a>
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#dolar"
          >
            EJEMPLO 3
          </a>
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#dolar"
          >
            EJEMPLO 4
          </a>
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#dolar"
          >
            EJEMPLO 5
          </a>
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#dolar"
          >
            EJEMPLO 6
          </a>
          <a
            className="text-md font-bold tracking-wider w-1/5 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
            href="#dolar"
          >
            EJEMPLO 7
          </a>
        </div>
      </div>
    </div>
  );
}
