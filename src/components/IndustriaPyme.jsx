import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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
    "alimentos y bebidas": "#f261da",
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

  const generalDataOrdenada = meses.map((mes) => ({
    name: mes.toUpperCase(),
    intermensual: data[mes].intermensual,
    acumulada: data[mes].acumulada,
    interanual: data[mes].interanual,
    capacidad: data[mes].capacidad,
  }));

  const evolutivoIntermensual = Object.keys(aperturaIntermensual).map(
    (month) => ({
      month,
      ...aperturaIntermensual[month],
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
                <img src="/assets/textiles.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/alimentos.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/madera.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/papel.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/quimicos.png" alt="" />
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
        <div className="w-full h-[95%]">
          <div className="w-full h-[10%] flex">
            <div className="w-1/2 h-full bg-gray-200 border-b-2 border-gray-500 flex items-center justify-evenly font-semibold text-xs text-white">
              <div className="w-28 h-8 flex items-center justify-center rounded bg-[#8884d8]">
                INTERMENSUAL
              </div>
              <div className="w-28 h-8 flex items-center justify-center rounded bg-[#34a832]">
                ACUMULADA
              </div>
              <div className="w-28 h-8 flex items-center justify-center rounded bg-[#f74640]">
                INTERANUAL
              </div>
              <div className="w-28 h-8 flex items-center justify-center rounded bg-[#ffa21f]">
                CAPACIDAD
              </div>
            </div>
            <div className="w-1/2 h-full bg-gray-900 border-b-2 border-gray-400 flex items-center justify-evenly pl-2">
              {Object.keys(aperturaIntermensual[mesSeleccionado]).map(
                (categoria, index) => (
                  <div
                    key={index}
                    className="w-28 h-8 rounded-full flex items-center justify-end relative"
                    style={{ backgroundColor: colors[categoria] }}
                  >
                    <div className="w-10 h-10 rounded-full absolute -top-1 -left-2 rounded full bg-white flex items-center justify-center">
                      <img
                        className="w-2/3 h-2/3 "
                        src={`/assets/${categoria
                          .split(" ")[0]
                          .toUpperCase()}.png`}
                        alt=""
                      />
                    </div>
                    <span className=" font-semibold text-[10px] pr-2">
                      {categoria.split(" ")[0].toUpperCase()}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-full h-[90%] flex">
            <div className="h-full w-1/2 bg-gray-200 flex items-center justify-start">
              <ResponsiveContainer width="90%" height="90%">
                <LineChart data={generalDataOrdenada}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" style={{ fontWeight: "bold" }} />
                  <YAxis domain={[-50, 90]} style={{ fontWeight: "bold" }} />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="intermensual"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    strokeWidth={3}
                    label={{
                      position: "top",
                      fill: "#8884d8",
                      fontWeight: "bold",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="acumulada"
                    stroke="#34a832"
                    strokeWidth={3}
                    label={{
                      position: "top",
                      fill: "#34a832",
                      fontWeight: "bold",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="interanual"
                    stroke="#f74640"
                    strokeWidth={3}
                    label={{
                      position: "top",
                      fill: "#f74640",
                      fontWeight: "bold",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="capacidad"
                    stroke="#ffa21f"
                    strokeWidth={3}
                    label={{
                      position: "top",
                      fill: "#ffa21f",
                      fontWeight: "bold",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="h-full w-1/2 bg-gray-900 flex items-center justify-start">
              <ResponsiveContainer width="98%" height={"90%"}>
                <LineChart data={evolutivoIntermensual}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    style={{ fontWeight: "bold" }}
                    tick={{ fill: "white" }}
                    tickFormatter={(value) => value.toUpperCase()}
                  />
                  <YAxis
                    domain={[-20, 20]}
                    style={{ fontWeight: "bold" }}
                    tick={{ fill: "white" }}
                  />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="textiles e indumentaria"
                    stroke="#8884d8"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="alimentos y bebidas"
                    stroke="#f261da"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="madera y muebles"
                    stroke="#ffc658"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="papel e impresiones"
                    stroke="#ff8042"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="quimicos y plasticos"
                    stroke="#8dd1e1"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="metal y maquinaria"
                    stroke="#a4de6c"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
