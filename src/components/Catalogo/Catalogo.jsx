//@ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

export default function Catalogo() {
  return (
    <div className="section" id="catalogo">
      <div className="w-full h-full flex flex-col justify-between bg-gray-900">
        <div className="flex justify-between px-4 py-2 items-center gradient-border border-b-4">
          <img src="/assets/caba.png" alt="logo-caba" className="w-1/12" />
          <div className="flex flex-col w-full text-center justify-between py-2 font-bold ">
            <p className="text-xl text-yellow-300">MONITOR DE</p>
            <h1 className="text-5xl text-[#87d9ce] tracking-wider">
              INDICADORES ECONÓMICOS
            </h1>
          </div>
          <img src="/assets/dgioc.png" alt="logo-dgioc " className="w-1/12" />
        </div>
        <div className="w-full h-1/6 text-xl font-semibold text-yellow-300 text-center p-4">
          CATÁLOGO DE INFORMES MENSUALES
        </div>
        <div className="w-full h-5/6 flex flex-col justify-evenly items-center">
          <Link
            target="_blank"
            to="Agosto/InformeMensual"
            className="w-1/4 h-16 flex items-center justify-center text-center text-white cursor-pointer rounded-lg bg-gray-700 shadow shadow-gray-300 hover:shadow-yellow-300 hover:scale-105 hover:bg-gray-600 transition-all duration-300 tracking-wider"
          >
            AGOSTO
          </Link>
          <Link
            target="_blank"
            to="Septiembre/InformeMensual"
            className="w-1/4 h-16 flex items-center justify-center text-center text-white cursor-pointer rounded-lg bg-gray-700 shadow shadow-gray-300 hover:shadow-yellow-300 hover:scale-105 hover:bg-gray-600 transition-all duration-300 tracking-wider"
          >
            SEPTIEMBRE
          </Link>
          {/* <Link
            target="_blank"
            to="Octubre/informemensual"
            className="w-1/4 h-16 flex items-center justify-center text-center text-white cursor-pointer rounded-lg bg-gray-700 shadow shadow-gray-300 hover:shadow-yellow-300 hover:scale-105 hover:bg-gray-600 transition-all duration-300 tracking-wider"
          >
            OCTUBRE
          </Link> */}
        </div>
      </div>
    </div>
  );
}
