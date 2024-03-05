import { useState } from "react";
import Inflacion from "./components/Inflacion.jsx";
import Transporte from "./components/Transporte.jsx";
import TransporteVariacion from "./components/TransporteVariacion.jsx";

export default function App() {
  const [dataInflacion, setDataInflacion] = useState("nacional");
  const [dataTransporteVariacion, setDataTransporteVariacion] =
    useState("subte");

  return (
    <div className="w-full h-full">
      <h1 className="p-2 text-center w-full text-3xl font-bold underline">
        Indicadores de Realidad
      </h1>
      <section className="w-full h-52 flex">
        <div className="w-1/6 h-full bg-green-500 flex flex-col items-center justify-around">
          <button
            className="p-2 rounded-xl bg-green-200 w-32"
            onClick={() => setDataInflacion("nacional")}
          >
            Nacional
          </button>
          <button
            className="p-2 rounded-xl bg-green-200 w-32"
            onClick={() => setDataInflacion("caba")}
          >
            CABA
          </button>
        </div>
        <div className="w-5/6 h-full bg-green-200">
          <Inflacion data={dataInflacion} />
        </div>
      </section>

      <section className="w-full h-96 bg-gray-900 flex items-center">
        <Transporte />
        <div className="w-full h-full flex flex-col justify-around p-2">
          <TransporteVariacion data={dataTransporteVariacion} />
          <div className="h-1/5 flex justify-evenly items-center">
            <button
              onClick={() => setDataTransporteVariacion("subte")}
              className="bg-gray-700 w-32 h-12 rounded bg-[#8884d8]"
            >
              SUBTE
            </button>
            <button
              onClick={() => setDataTransporteVariacion("tren")}
              className="bg-gray-700 w-32 h-12 rounded bg-[#82ca9d]"
            >
              TREN
            </button>
            <button
              onClick={() => setDataTransporteVariacion("colectivo")}
              className="bg-gray-700 w-32 h-12 rounded bg-[#ff8080]"
            >
              COLECTIVO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
