import { useState } from "react";
import Inflacion from "./components/Inflacion.jsx";
import Transporte from "./components/Transporte.jsx";

export default function App() {
  const [dataInflacion, setDataInflacion] = useState("nacional");

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
      <h2 className="text-center font-bold">Boletos mínimos</h2>
      <section className="w-full h-96 bg-gray-900 flex items-center">
        <Transporte />
      </section>
    </div>
  );
}
