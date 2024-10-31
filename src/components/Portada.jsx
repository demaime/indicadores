//@ts-nocheck
import React from "react";
import { BsHandIndexThumb } from "react-icons/bs";
import { VscFileSymlinkDirectory } from "react-icons/vsc";

export default function Portada() {
  return (
    <div className="section" id="home">
      <div className="w-full h-full flex flex-col jusitfy-between bg-gray-900">
        <div className="flex justify-between px-4 py-2 items-center gradient-border border-b-4">
          <img src="/assets/caba.png" alt="logo-caba" className="w-1/12" />

          <div className="flex flex-col w-full text-center justify-between py-2 font-bold ">
            <p className="text-xl text-yellow-300">MONITOR DE</p>
            <h1 className="text-5xl text-[#87d9ce] tracking-wider">
              INDICADORES ECONÓMICOS
            </h1>
            {/* <h2 className="text-yellow-400 text-2-xl">MENSUAL - ANUAL 2024</h2> */}
          </div>
          <img src="/assets/dgioc.png" alt="logo-dgioc " className="w-1/12" />
        </div>
        <div className="w-full h-full flex">
          <div className="image-bg w-1/4 h-full border-r-4 gradient-border  flex items-center justify-center relative">
            <a
              className="z-50 flex items-center justify-evenly w-2/3 absolute top-4 left-1/2 transform -translate-x-1/2 text-md font-bold tracking-wider text-center hover:text-[#f57b6dff] rounded-lg bg-gradient text-yellow-300 p-2"
              href="#informeMensual"
            >
              <span>INFORME DEL MES</span>
              <BsHandIndexThumb size={20} />
            </a>
            <div className="w-full absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center flex-col text-center">
              <p className="text-xl text-white font-semibold mb-2">
                EL SECTOR METALÚRGICO
              </p>
              <p className="text-5xl text-[#87d9ce] font-semibold mb-2">
                REGISTRÓ SU PEOR CAÍDA
              </p>
              <h1 className="text-white text-lg font-bold p-4"> EN 5 AÑOS</h1>
            </div>
            <div className="z-50 flex items-center justify-evenly w-2/3 absolute top-12 left-1/2 transform -translate-x-1/2 text-sm font-bold tracking-wider text-center  text-blue-200 p-2">
              <span>SEPTIEMBRE 2024</span>
            </div>
            <a
              href="/catalogo"
              className="z-50 flex items-center justify-evenly w-full absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold tracking-wider text-center  text-yellow-300 p-2"
            >
              <span className="flex items-center">
                <VscFileSymlinkDirectory
                  className="mr-2 text-blue-200"
                  size={25}
                />
                CATALOGO DE INFORMES ANTERIORES
              </span>
            </a>
            <div className="w-[96%] h-[98%] bg-black opacity-70 rounded-lg shadow shadow-black flex items-center"></div>
          </div>
          <div className="w-3/4 h-full text-white flex flex-wrap items-center justify-evenly p-4">
            {[
              {
                href: "#inflacion",
                categoria: "INFLACION",
                periodo: "mensual",
                actual: "septiembre",
              },
              {
                href: "#canasta-salario",
                categoria: "SALARIO - CANASTA - JUBILACION",
                periodo: "mensual",
                actual: "septiembre",
              },
              {
                href: "#ayuda-social",
                categoria: "AYUDA SOCIAL",
                periodo: "mensual",
                actual: "septiembre",
              },
              {
                href: "#dolar",
                categoria: "DOLAR",
                periodo: "mensual",
                actual: "septiembre",
              },
              {
                href: "#transporte",
                categoria: "TRANSPORTE",
                periodo: "mensual",
                actual: "septiembre",
              },
              {
                href: "#alquiler",
                categoria: "ALQUILER",
                periodo: "mensual",
                actual: "septiembre",
              },
              {
                href: "#cotidianos",
                categoria: "GASTOS COTIDIANOS CABA",
                periodo: "mensual",
                actual: "septiembre",
              },
              {
                href: "#ocio",
                categoria: "OCIO",
                periodo: "mensual",
                actual: "septiembre",
              },
              {
                href: "#industrial",
                categoria: "INDUSTRIA",
                periodo: "mensual",
                actual: "agosto / septiembre",
              },
              {
                href: "#actividadeconomica",
                categoria: "ACTIVIDAD ECONOMICA",
                periodo: "mensual",
                actual: "agosto",
              },
              {
                href: "#supermercados",
                categoria: "SUPERMERCADOS",
                periodo: "mensual",
                actual: "julio",
              },
            ].map((item, index) => (
              <a
                key={index}
                className="w-[30%] h-28 m-2 flex flex-col items-center justify-around text-center rounded-lg bg-gray-700 shadow shadow-gray-300 hover:shadow-yellow-300 hover:scale-105 hover:bg-gray-600 transition-all duration-300"
                href={item.href}
              >
                <p className="text-lg font-bold w-full px-2 border-b-2 gradient-border">
                  {item.categoria}
                </p>
                <p className="text-xs text-blue-200 tracking-wider ">
                  {item.periodo.toLocaleUpperCase()}
                </p>
                <p className="text-md font-bold tracking-wider text-yellow-300">
                  {item.actual.toLocaleUpperCase()}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
