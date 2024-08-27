import React, { useState } from "react";
import Particular from "./Particular";
import Publico from "./Publico";

export default function Transporte() {
  const [publicoOParticular, setPublicoOParticular] = useState(null);

  return (
    <div className="h-full w-full flex relative">
      {!publicoOParticular ? (
        <div className="h-full w-full flex relative">
          <div className="w-1/2 h-full bg-gray-600  flex items-center justify-center border-r border-gray-500">
            <button
              onClick={() => setPublicoOParticular("publico")}
              className="w-1/2 h-3/4 rounded-lg hover:bg-gray-800 shadow shadow-gray-200 cursor-pointer flex flex-col items-center justify-evenly py-8 hover:scale-105"
            >
              <img className="w-24 h-24" src="/assets/publico.png" alt="" />
              <div className="text-4xl font-semibold text-gray-200">
                PÚBLICO
              </div>
            </button>
          </div>
          <div className="w-1/2 h-full bg-gray-500  flex items-center justify-center border-l border-gray-500">
            <button
              onClick={() => setPublicoOParticular("particular")}
              className="w-1/2 h-3/4 rounded-lg hover:bg-gray-800 shadow shadow-gray-200 cursor-pointer flex flex-col items-center justify-evenly py-8 hover:scale-105"
            >
              <img className="w-24 h-24" src="/assets/privado.png" alt="" />
              <div className="text-4xl font-semibold text-gray-200">
                PARTICULAR
              </div>
            </button>
          </div>
        </div>
      ) : publicoOParticular === "publico" ? (
        <Publico setPublicoOParticular={setPublicoOParticular} />
      ) : (
        <Particular setPublicoOParticular={setPublicoOParticular} />
      )}
    </div>
  );
}
