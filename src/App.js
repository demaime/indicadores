import { useState } from "react";
import Inflacion from "./components/Inflacion.jsx";
import Transporte from "./components/Transporte.jsx";
import TransporteVariacion from "./components/TransporteVariacion.jsx";
import Banner from "./components/Banner.jsx";

export default function App() {
  const [dataInflacion, setDataInflacion] = useState("nacional");
  const [dataTransporteVariacion, setDataTransporteVariacion] =
    useState("subte");

  return (
    <div className="w-full h-full">
      <Banner />
      <section className="w-full h-96 flex">
        <div className="w-1/6 h-full flex flex-col items-center justify-around border-r">
          <button
            className="p-2 text-3xl rounded-xl w-48 h-24 bg-indigo-400 text-white"
            onClick={() => setDataInflacion("nacional")}
          >
            Nacional
          </button>
          <button
            className="p-2 rounded-xl text-3xl w-48 h-24 bg-yellow-400"
            onClick={() => setDataInflacion("caba")}
          >
            CABA
          </button>
        </div>
        <div className="w-5/6 h-full ">
          <Inflacion data={dataInflacion} />
        </div>
      </section>

      <section className="w-full h-96 bg-gray-800 flex items-center">
        <Transporte />
        <div className="w-full h-full flex flex-col justify-around p-2">
          <TransporteVariacion data={dataTransporteVariacion} />
          <div className="h-1/5 flex justify-evenly items-center">
            <button
              onClick={() => setDataTransporteVariacion("subte")}
              className="w-32 h-12 rounded bg-[#8884d8]"
            >
              SUBTE
            </button>
            <button
              onClick={() => setDataTransporteVariacion("tren")}
              className="w-32 h-12 rounded bg-[#82ca9d]"
            >
              TREN
            </button>
            <button
              onClick={() => setDataTransporteVariacion("colectivo")}
              className="w-32 h-12 rounded bg-[#ff8080]"
            >
              COLECTIVO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
