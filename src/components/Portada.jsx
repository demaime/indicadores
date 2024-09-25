//@ts-nocheck
import React from "react";

export default function Portada() {
  return (
    <div className="section" id="home">
      <div className="w-full h-full flex flex-col jusitfy-between bg-gray-800">
        <div className="flex justify-between px-4 py-2 items-center gradient-border border-b-4">
          <img src="/assets/caba.png" alt="logo-caba" className="w-1/12" />

          <div className="flex flex-col w-full text-center justify-between py-2 text-white font-bold ">
            <p className="text-xl text-yellow-300">MONITOR DE</p>
            <h1 className="text-5xl">INDICADORES ECONÓMICOS</h1>
            {/* <h2 className="text-yellow-400 text-2-xl">MENSUAL - ANUAL 2024</h2> */}
          </div>
          <img src="/assets/dgioc.png" alt="logo-dgioc " className="w-1/12" />
        </div>
        <div className="w-full h-full flex">
          <div className="w-1/4 h-full border-r-2 gradient-border"></div>
          <div className="w-3/4 h-full text-white flex flex-col items-center justify-evenly">
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#inflacion"
            >
              INFLACION
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#canasta-salario"
            >
              SALARIO - CANASTA - JUBILACION
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#ayuda-social"
            >
              AYUDA SOCIAL
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#dolar"
            >
              DOLAR
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#transporte"
            >
              TRANSPORTE
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#alquiler"
            >
              ALQUILER
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#cotidianos"
            >
              GASTOS COTIDIANOS CABA
            </a>

            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#ocio"
            >
              OCIO
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#industrial"
            >
              INDUSTRIA
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#actividadeconomica"
            >
              ACTIVIDAD ECONOMICA
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-gray-700 p-2"
              href="#supermercados"
            >
              SUPERMERCADOS
            </a>
            <a
              className="text-md font-bold tracking-wider w-1/4 text-center hover:text-[#f57b6dff] rounded-lg bg-yellow-300 text-gray-700 p-2"
              href="#informeMensual"
            >
              INFORME DEL MES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
