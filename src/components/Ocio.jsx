import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import OcioTarjetas from "./OcioTarjetas";

const data = {
  abril: {
    fiesta: 7000,
    netflix: 4299,
    gym: 17588,
    cine: 5926,
    combo: 7900,
    libro: 21882,
    teatro: 15000,
  },
  mayo: {
    fiesta: 8000,
    netflix: 4299,
    gym: 20008,
    cine: 6185,
    combo: 8600,
    libro: 22326,
    teatro: 15000,
  },
};

export default function Ocio() {
  const meses = ["abril", "mayo"];
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [tarjetasOgrafico, setTarjetasOgrafico] = useState("tarjetas");

  const handleMesAnterior = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    const newIndex = currentIndex === 0 ? meses.length - 1 : currentIndex - 1;
    setMesSeleccionado(meses[newIndex]);
  };

  const handleMesSiguiente = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    const newIndex = currentIndex === meses.length - 1 ? 0 : currentIndex + 1;
    setMesSeleccionado(meses[newIndex]);
  };

  const calcularVariacion = (valorActual, valorAnterior) => {
    return ((valorActual - valorAnterior) / valorAnterior) * 100;
  };
  const calcularVariacionesMensuales = (data) => {
    const variaciones = {};
    const meses = Object.keys(data);

    for (let i = 1; i < meses.length; i++) {
      const mesActual = meses[i];
      const mesAnterior = meses[i - 1];
      variaciones[mesActual] = {};

      for (const categoria in data[mesActual]) {
        const valorActual = data[mesActual][categoria];
        const valorAnterior = data[mesAnterior][categoria];
        variaciones[mesActual][categoria] = calcularVariacion(
          valorActual,
          valorAnterior
        );
      }
    }
    return variaciones;
  };

  const variaciones = calcularVariacionesMensuales(data);

  console.log(variaciones);

  return (
    <div className="h-full w-full bg-gray-200">
      <div className="w-full h-[5%] bg-gray-600 text-white flex justify-center items-center">
        <FaArrowLeft className="cursor-pointer" onClick={handleMesAnterior} />
        <span className="mx-4 flex items-center justify-center w-1/3">
          {mesSeleccionado.toUpperCase()}
        </span>
        <FaArrowRight className="cursor-pointer" onClick={handleMesSiguiente} />
      </div>
      <div className="w-full h-[95%] p-2 relative">
        <div
          onClick={() => setTarjetasOgrafico("tarjetas")}
          className={`absolute h-2/5 w-8 left-4 top-[25%] rounded-xl cursor-pointer writing-vertical tracking-widest font-semibold text-white text-xs items-center justify-center flex ${
            tarjetasOgrafico === "grafico"
              ? "bg-gray-900"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
        >
          VER TARJETAS
        </div>
        <div
          onClick={() => setTarjetasOgrafico("grafico")}
          className={`absolute h-2/5 w-8 right-4 top-[25%] rounded-xl cursor-pointer writing-vertical tracking-widest font-semibold text-white text-xs items-center justify-center flex ${
            tarjetasOgrafico === "grafico"
              ? "bg-gray-400 hover:bg-gray-500"
              : "bg-gray-900"
          }`}
        >
          VER GRAFICO
        </div>
        {tarjetasOgrafico === "tarjetas" ? (
          <OcioTarjetas data={data} mesSeleccionado={mesSeleccionado} />
        ) : (
          <div className="h-full w-full bg-gray-700 flex items-center justify-around">
            <div className="w-2/3 h-[90%] rounded-xl border border-white"></div>
            <div className="w-1/4 h-[90%] rounded-xl border border-white"></div>
          </div>
        )}
      </div>
    </div>
  );
}
