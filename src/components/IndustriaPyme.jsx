import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function IndustriaPyme() {
  const data = {
    enero: {
      intermensual: -9.1,
      acumulada: -9.1,
      interanual: -30,
      capacidad: 70.8,
    },
    febrero: {
      intermensual: -7.7,
      acumulada: -21.7,
      interanual: -9.9,
      capacidad: 70.9,
    },
    marzo: {
      intermensual: -3.4,
      acumulada: -19.1,
      interanual: -11.9,
      capacidad: 70,
    },
    abril: {
      intermensual: 3.1,
      acumulada: -19,
      interanual: -18.3,
      capacidad: 70.1,
    },
  };

  const aperturaIntermensual = {
    enero: {
      "textiles e indumentaria": -2.3,
      "alimentos y bebidas": -8.7,
      "madera y muebles": -13.5,
      "papel e impresiones": -3,
      "quimicos y plasticos": -11.8,
      "metal y maquinaria": -13.5,
    },
    febrero: {
      "textiles e indumentaria": -2.4,
      "alimentos y bebidas": -1.1,
      "madera y muebles": -3,
      "papel e impresiones": -4.8,
      "quimicos y plasticos": -6.2,
      "metal y maquinaria": -4.9,
    },
    marzo: {
      "textiles e indumentaria": -0.5,
      "alimentos y bebidas": -3.6,
      "madera y muebles": -4.4,
      "papel e impresiones": -5,
      "quimicos y plasticos": -4.4,
      "metal y maquinaria": -4.8,
    },
    abril: {
      "textiles e indumentaria": 2.6,
      "alimentos y bebidas": 0.4,
      "madera y muebles": 6,
      "papel e impresiones": 0.2,
      "quimicos y plasticos": 3.9,
      "metal y maquinaria": 4,
    },
  };

  const aperturaInteranual = {
    enero: {
      "textiles e indumentaria": -18.2,
      "alimentos y bebidas": -22,
      "madera y muebles": -30.6,
      "papel e impresiones": -41.7,
      "quimicos y plasticos": -35.6,
      "metal y maquinaria": -34.8,
    },
    febrero: {
      "textiles e indumentaria": 10.5,
      "alimentos y bebidas": -0.3,
      "madera y muebles": -10,
      "papel e impresiones": -24.6,
      "quimicos y plasticos": -23.1,
      "metal y maquinaria": -15.2,
    },
    marzo: {
      "textiles e indumentaria": 10.9,
      "alimentos y bebidas": -5.6,
      "madera y muebles": -11.9,
      "papel e impresiones": -27.4,
      "quimicos y plasticos": -20.7,
      "metal y maquinaria": -16.8,
    },
    abril: {
      "textiles e indumentaria": -0.2,
      "alimentos y bebidas": -13.7,
      "madera y muebles": -15.7,
      "papel e impresiones": -32.3,
      "quimicos y plasticos": -21.6,
      "metal y maquinaria": -23.7,
    },
  };

  const aperturaAcumulada = {
    enero: {
      "textiles e indumentaria": -2.3,
      "alimentos y bebidas": -8.7,
      "madera y muebles": -13.5,
      "papel e impresiones": -3,
      "quimicos y plasticos": -11.8,
      "metal y maquinaria": -13.5,
    },
    febrero: {
      "textiles e indumentaria": -1.3,
      "alimentos y bebidas": -14.6,
      "madera y muebles": -24.6,
      "papel e impresiones": -26,
      "quimicos y plasticos": -31.2,
      "metal y maquinaria": -27.9,
    },
    marzo: {
      "textiles e indumentaria": 2.3,
      "alimentos y bebidas": -14.2,
      "madera y muebles": -20.1,
      "papel e impresiones": -23.7,
      "quimicos y plasticos": -28.7,
      "metal y maquinaria": -24.5,
    },
    abril: {
      "textiles e indumentaria": -0.1,
      "alimentos y bebidas": -15,
      "madera y muebles": -19.2,
      "papel e impresiones": -23.4,
      "quimicos y plasticos": -27.3,
      "metal y maquinaria": -23.8,
    },
  };

  const colors = {
    "textiles e indumentaria": "#8884d8",
    "alimentos y bebidas": "#82ca9d",
    "madera y muebles": "#ffc658",
    "papel e impresiones": "#ff8042",
    "quimicos y plasticos": "#8dd1e1",
    "metal y maquinaria": "#a4de6c",
  };

  const meses = ["enero", "febrero", "marzo", "abril"];
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [visibilidad, setVisibilidad] = useState(true);

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

  const barData = Object.keys(aperturaIntermensual[mesSeleccionado]).map(
    (key) => ({
      name: key.toUpperCase(),
      valor: aperturaIntermensual[mesSeleccionado][key],
      fill: colors[key],
    })
  );

  const interanualData = Object.keys(aperturaInteranual[mesSeleccionado]).map(
    (key) => ({
      valor: aperturaInteranual[mesSeleccionado][key],
    })
  );

  const acumuladaData = Object.keys(aperturaInteranual[mesSeleccionado]).map(
    (key) => ({
      valor: aperturaAcumulada[mesSeleccionado][key],
    })
  );

  return (
    <div className="w-full h-full">
      <div className="w-full h-[5%] bg-gray-600 text-white flex justify-center items-center relative">
        <FaArrowLeft className="cursor-pointer" onClick={handleMesAnterior} />
        <span className="mx-4 flex items-center justify-center w-1/3">
          {mesSeleccionado.toUpperCase()}
        </span>
        <FaArrowRight className="cursor-pointer" onClick={handleMesSiguiente} />
        <button
          onClick={() => setVisibilidad(!visibilidad)}
          className="w-28 h-6 flex items-center justify-center text-xs font-semibold rounded-xl bg-pink-500 absolute right-0"
        >
          {visibilidad ? "VER EVOLUTIVO" : "VER TARJETAS"}
        </button>
      </div>
      {visibilidad ? (
        <div className="w-full h-[95%]">
          <div className="w-full h-1/5 bg-gray-400 flex items-center justify-evenly">
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN MENSUAL
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {data[mesSeleccionado].intermensual}
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN ACUMULADA
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {data[mesSeleccionado].acumulada}
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN INTERANUAL
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {data[mesSeleccionado].interanual}
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                CAPACIDAD INDUSTRIAL UTILIZADA
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {data[mesSeleccionado].capacidad}
              </span>
            </div>
          </div>
          <div className="w-full h-4/5 flex flex items-start relative justify-start">
            <ResponsiveContainer width="95%" height="90%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                />
                <YAxis domain={[-15, 15]} y tickCount={9} />
                <Tooltip />

                <Bar
                  dataKey="valor"
                  label={{ position: "insideTop", fill: "#000" }}
                ></Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="w-[90%] h-[10%] flex items-center justify-around absolute top-2 mx-auto left-0 right-4">
              <div className="rounded-full h-12 w-12">
                <img src="/assets/textil.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/alimento.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/madera.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/papel.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/quimico.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/metal.png" alt="" />
              </div>
            </div>
            <div className="w-32 absolute h-[10%]  left-1 bottom-2 text-[12px] font-bold">
              <div className="w-full h-1/2 flex items-center text-green-500">
                Interanual
              </div>
              <div className="w-full h-1/2 flex items-center text-blue-500">
                Acumulada
              </div>
            </div>
            <div className="w-[90%] h-[10%] absolute bottom-2 mx-auto left-0 right-4">
              <div className="w-full h-1/2 flex items-center justify-around text-green-500">
                {interanualData.map((item) => (
                  <div className="flex flex-col items-center w-16 items-center justify-center rounded-xl text-white bg-green-500">
                    {item.valor}
                  </div>
                ))}
              </div>
              <div className="w-full h-1/2 flex items-center justify-around text-green-500">
                {acumuladaData.map((item) => (
                  <div className="flex flex-col items-center w-16 items-center justify-center rounded-xl text-white bg-blue-500">
                    {item.valor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[95%] flex">
          <div className="h-full w-1/2 bg-gray-300"></div>
          <div className="h-full w-1/2 bg-gray-500"></div>
        </div>
      )}
    </div>
  );
}
