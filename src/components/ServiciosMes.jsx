import React from "react";

export default function ServiciosMes() {
  // const dataLuz = [
  //   { Mes: "Enero", Valor: 7699 },
  //   { Mes: "Febrero", Valor: 123 },
  // ];
  // const dataGas = [];
  // const dataIntenet = [];
  // const dataTelefono = [];

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="absolute top-1/4 w-full h-32 text-white bg-red-600 flex items-center justify-center text-5xl text-center">
        SLIDE EN DESARROLLO.
      </div>
      <div className="h-1/2 w-full flex">
        <div className="h-full w-1/2 bg-gray-100 flex">
          <div className="h-full w-1/3 flex flex-col p-2">
            <div className="w-full bg-gray-700 text-yellow-400 rounded font-bold text-center">
              Luz
            </div>
            <div className="h-full flex items-center justify-center">
              <img src="/assets/luz.png" alt="" className="h-2/3" />
            </div>
          </div>
          <div className="h-full w-2/3 "></div>
        </div>
        <div className="h-full w-1/2 bg-gray-300 flex">
          <div className="h-full w-1/3 flex flex-col p-2 ">
            <div className="w-full bg-gray-700 text-yellow-400 rounded font-bold text-center">
              Gas
            </div>
            <div className="h-full flex items-center justify-center">
              <img src="/assets/gas.png" alt="" className="h-2/3" />
            </div>
          </div>
          <div className="h-full w-2/3 "></div>
        </div>
      </div>
      <div className="h-1/2 w-full flex">
        <div className="h-full w-1/2 bg-gray-300 flex">
          <div className="h-full w-1/3 flex flex-col p-2 ">
            <div className="w-full bg-gray-700 text-yellow-400 rounded font-bold text-center">
              Abono celular
            </div>
            <div className="h-full flex items-center justify-center">
              <img src="/assets/telefono.png" alt="" className="h-2/3" />
            </div>
          </div>
          <div className="h-full w-2/3 "></div>
        </div>
        <div className="h-full w-1/2 bg-gray-100 flex">
          <div className="h-full w-1/3 flex flex-col p-2 ">
            <div className="w-full bg-gray-700 text-yellow-400 rounded font-bold text-center">
              Internet
            </div>
            <div className="h-full flex items-center justify-center">
              <img src="/assets/internet.png" alt="" className="h-2/3" />
            </div>
          </div>
          <div className="h-full w-2/3 "></div>
        </div>
      </div>
    </div>
  );
}
