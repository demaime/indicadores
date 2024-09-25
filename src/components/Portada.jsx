//@ts-nocheck
import React from "react";
import { BsHandIndexThumb } from "react-icons/bs";

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
          <div className="w-1/4 h-full border-r-4 gradient-border image-bg flex items-center justify-center relative">
            <a
              className="z-50 flex items-center justify-evenly w-2/3 absolute top-4 left-1/2 transform -translate-x-1/2 text-md font-bold tracking-wider text-center hover:text-[#f57b6dff] rounded-lg bg-gradient text-yellow-300 p-2"
              href="#informeMensual"
            >
              <span>INFORME DEL MES</span>
              <BsHandIndexThumb size={20} />
            </a>
            <div className="w-full absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center flex-col text-center">
              <p className="text-xl text-white font-semibold mb-2">
                EL CONSUMO DE CARNE VACUNA
              </p>
              <p className="text-lg text-white font-semibold mb-2">
                SE ENCUENTRA EN EL{" "}
              </p>
              <h1 className="text-[#87d9ce] text-5xl font-bold p-4">
                NIVEL HISTÓRICO MÁS BAJO
              </h1>
            </div>
            <div className="z-50 flex items-center justify-evenly w-2/3 absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold tracking-wider text-center  text-yellow-300 p-2">
              <span>AGOSTO 2024</span>
            </div>
            <div className="w-[96%] h-[98%] bg-black opacity-70 rounded-lg shadow shadow-black flex items-center"></div>
          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
