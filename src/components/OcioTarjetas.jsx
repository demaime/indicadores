import React from "react";

export default function OcioTarjetas({ data, mesSeleccionado }) {
  return (
    <div className="w-full h-full bg-gray-300">
      <div className="w-full h-1/3 flex justify-evenly">
        <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-blue-400 bg-blue-200 relative  ">
          <h1 className="text-blue-500 text-3xl font-bold">
            ${data[mesSeleccionado].fiesta.toLocaleString()}
          </h1>
          <h1 className="bg-blue-400 text-xl font-bold absolute flex items-center justify-center top-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
            Fiesta
          </h1>
          <div className="w-24 h-24 rounded-full bg-blue-400 absolute -bottom-8 -right-12">
            <img src="/assets/fiesta.png" className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-red-400 bg-red-200 relative flex items-center justify-center   ">
          <h1 className="text-red-500 text-3xl font-bold">
            ${data[mesSeleccionado].combo.toLocaleString()}
          </h1>
          <h1 className="bg-red-400 text-xl font-bold absolute flex items-center justify-center top-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
            Combo
          </h1>

          <div className="w-24 h-24 rounded-full bg-red-400 absolute -bottom-8 -left-12">
            {" "}
            <img src="/assets/combo.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full h-1/3 flex justify-evenly">
        {" "}
        <div className="w-48 h-48 flex items-center justify-end pr-2 rounded-full border-8 border-green-400 bg-green-200 relative    ">
          <h1 className="text-green-500 text-3xl font-bold">
            ${data[mesSeleccionado].gimnasio.toLocaleString()}
          </h1>
          <h1 className="bg-green-400 text-xl font-bold absolute flex items-center justify-center top-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
            Gimnasio
          </h1>
          <div className="w-24 h-24 rounded-full bg-green-400 absolute top-1/4 -left-1/4">
            {" "}
            <img src="/assets/gimnasio.png" className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-yellow-400 bg-yellow-200 relative  ">
          <h1 className="text-yellow-500 text-3xl font-bold">
            ${data[mesSeleccionado].cine.toLocaleString()}
          </h1>
          <h1 className="bg-yellow-400 text-xl font-bold absolute flex items-center justify-center bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
            Cine
          </h1>
          <div className="w-24 h-24 rounded-full bg-yellow-400 absolute -top-1/4 left-1/4">
            {" "}
            <img src="/assets/cine.png" className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="w-48 h-48 flex items-center justify-start pl-2 rounded-full border-8 border-purple-400 bg-purple-200 relative  ">
          <h1 className="text-purple-500 text-3xl font-bold">
            ${data[mesSeleccionado].teatro.toLocaleString()}
          </h1>
          <h1 className="bg-purple-400 text-xl font-bold absolute flex items-center justify-center top-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
            Teatro
          </h1>
          <div className="w-24 h-24 rounded-full bg-purple-400 absolute top-1/4 -right-1/4">
            {" "}
            <img src="/assets/teatro.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full h-1/3 flex justify-evenly">
        <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-pink-400 bg-pink-200 relative  ">
          <h1 className="text-pink-500 text-3xl font-bold">
            ${data[mesSeleccionado].plataforma.toLocaleString()}
          </h1>
          <h1 className="bg-pink-400 text-xl font-bold absolute flex items-center justify-center bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
            Plataforma
          </h1>
          <div className="w-24 h-24 rounded-full bg-pink-400 absolute -top-8 -right-12">
            {" "}
            <img
              src="/assets/plataforma.png"
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-orange-400 bg-orange-200 relative  ">
          <h1 className="text-orange-500 text-3xl font-bold">
            ${data[mesSeleccionado].libro.toLocaleString()}
          </h1>
          <h1 className="bg-orange-400 text-xl font-bold absolute flex items-center justify-center bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
            Libro
          </h1>
          <div className="w-24 h-24 rounded-full bg-orange-400 absolute -top-8 -left-12">
            <img src="/assets/libro.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
