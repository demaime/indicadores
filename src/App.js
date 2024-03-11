import { useState } from "react";
import InflacionDesglose from "./components/InflacionDesglose.jsx";
import Transporte from "./components/Transporte.jsx";
import TransporteVariacion from "./components/TransporteVariacion.jsx";
import Banner from "./components/Banner.jsx";

export default function App() {
  const [dataTransporteVariacion, setDataTransporteVariacion] =
    useState("subte");

  return (
    <div className="w-full h-full">
      <Banner />
      <InflacionDesglose />

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
