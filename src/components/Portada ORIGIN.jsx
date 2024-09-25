//@ts-nocheck
import React from "react";

export default function Portada() {
  return (
    <div className="section" id="home">
      <div className="w-full h-full flex flex-col jusitfy-between bg-gray-800">
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
        <div className="w-full text-white flex flex-col items-center justify-evenly h-5/6">
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
            className="text-md font-bold tracking-wider w-1/4 text-center hover:text-yellow-300 rounded-lg bg-yellow-600 text-gray-200 p-2"
            href="#informeMensual"
          >
            INFORME DEL MES
          </a>
        </div>
      </div>
    </div>
  );
}
