import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Particular({ setPublicoOParticular }) {
  const dataParticular = {
    ENERO: {
      Nafta: { valor: 699, intermensual: 26.4, acumulada: 26.4 },
      PeajeNorte: { valor: 378.5, intermensual: 49, acumulada: 49 },
      PeajeOeste: { valor: 910.43, intermensual: 49, acumulada: 49 },
      Autos: { valor: 21729, intermensual: 133.14, interanual: -33.5 },
      Motos: { valor: 34116, intermensual: 1.58, interanual: -20.3 },
    },
    FEBRERO: {
      Nafta: { valor: 744, intermensual: 6.43, acumulada: 32.83 },
      PeajeNorte: { valor: 378.5, intermensual: 0, acumulada: 49 },
      PeajeOeste: { valor: 910.43, intermensual: 0, acumulada: 49 },
      Autos: { valor: 16614, intermensual: -23.54, interanual: -14.2 },
      Motos: { valor: 31492, intermensual: -7.69, interanual: -14.1 },
    },
    MARZO: {
      Nafta: { valor: 800, intermensual: 7.52, acumulada: 40.35 },
      PeajeNorte: { valor: 378.5, intermensual: 0, acumulada: 49 },
      PeajeOeste: { valor: 910.43, intermensual: 0, acumulada: 49 },
      Autos: { valor: 17289, intermensual: 4.1, interanual: -31.9 },
      Motos: { valor: 29381, intermensual: -6.7, interanual: -40.8 },
    },
    ABRIL: {
      Nafta: { valor: 837, intermensual: 4.63, acumulada: 44.98 },
      PeajeNorte: { valor: 946.25, intermensual: 150, acumulada: 199 },
      PeajeOeste: { valor: 2276.08, intermensual: 150, acumulada: 199 },
      Autos: { valor: 21186, intermensual: 22.5, interanual: -2.6 },
      Motos: { valor: 39183, intermensual: 33.4, interanual: -4.2 },
    },
    MAYO: {
      Nafta: { valor: 870, intermensual: 3.94, acumulada: 48.92 },
      PeajeNorte: { valor: 1277.44, intermensual: 34, acumulada: 234 },
      PeajeOeste: { valor: 3072.71, intermensual: 35, acumulada: 234 },
      Autos: { valor: 22107, intermensual: 4.3, interanual: -7.7 },
      Motos: { valor: 39871, intermensual: 1.8, interanual: -2.9 },
    },
    JUNIO: {
      Nafta: { valor: 905, intermensual: 4, acumulada: 52.92 },
      PeajeNorte: { valor: 1277.44, intermensual: 0, acumulada: 234 },
      PeajeOeste: { valor: 3072.71, intermensual: 0, acumulada: 234 },
      Autos: { valor: 19609, intermensual: -11.3, interanual: -21.8 },
      Motos: { valor: 33483, intermensual: -16, interanual: -3.1 },
    },
    JULIO: {
      Nafta: { valor: 941, intermensual: 3.98, acumulada: 56.9 },
      PeajeNorte: { valor: 1277.44, intermensual: 0, acumulada: 234 },
      PeajeOeste: { valor: 3072.71, intermensual: 0, acumulada: 234 },
      Autos: {
        valor: 26951,
        intermensual: 37.4,
        interanual: -3.8,
      },
      Motos: {
        valor: 40962,
        intermensual: 22.3,
        interanual: 6.9,
      },
    },
    AGOSTO: {
      Nafta: { valor: 992, intermensual: 5.4, acumulada: 58.4 },
      PeajeNorte: { valor: 1277.44, intermensual: 0, acumulada: 234 },
      PeajeOeste: { valor: 3072.71, intermensual: 0, acumulada: 234 },
      Autos: {
        valor: 25171,
        intermensual: 0.5,
        interanual: 7.5,
      },
      Motos: {
        valor: 55615,
        intermensual: 26.8,
        interanual: 27.9,
      },
    },
    SEPTIEMBRE: {
      Nafta: { valor: 1059, intermensual: 6.8, acumulada: 59.7 },
      PeajeNorte: { valor: 1277.44, intermensual: 0, acumulada: 234 },
      PeajeOeste: { valor: 3072.71, intermensual: 0, acumulada: 234 },
      Autos: {
        valor: 26814,
        intermensual: 15.9,
        interanual: 42.1,
      },
      Motos: {
        valor: 41191,
        intermensual: -23.1,
        interanual: 16,
      },
    },
    OCTUBRE: {
      Nafta: { valor: 1048, intermensual: -1, acumulada: 51.9 },
      PeajeNorte: { valor: 1277.44, intermensual: 0, acumulada: 234 },
      PeajeOeste: { valor: 3072.71, intermensual: 0, acumulada: 234 },
      Autos: {
        valor: "Próximo informe: Enero",
        intermensual: 0,
        interanual: 0,
      },
      Motos: {
        valor: "Próximo informe: Enero",
        intermensual: 0,
        interanual: 0,
      },
    },
    NOVIEMBRE: {
      Nafta: { valor: 1077, intermensual: 2.8, acumulada: 55.7 },
      PeajeNorte: { valor: 1277.44, intermensual: 0, acumulada: 234 },
      PeajeOeste: { valor: 3072.71, intermensual: 0, acumulada: 234 },
      Autos: {
        valor: "Próximo informe: Enero",
        intermensual: 0,
        interanual: 0,
      },
      Motos: {
        valor: "Próximo informe: Enero",
        intermensual: 0,
        interanual: 0,
      },
    },
  };

  const meses = Object.keys(dataParticular);
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );

  const handleNextMonth = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    if (currentIndex < meses.length - 1) {
      setMesSeleccionado(meses[currentIndex + 1]);
    }
  };

  const handlePreviousMonth = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    if (currentIndex > 0) {
      setMesSeleccionado(meses[currentIndex - 1]);
    }
  };

  const dataNafta = meses.map((mes) => ({
    mes,
    Nafta: dataParticular[mes].Nafta.valor,
  }));

  const dataPeajes = meses.map((mes) => ({
    mes,
    "Peaje Norte": dataParticular[mes].PeajeNorte.valor,
    "Peaje Oeste": dataParticular[mes].PeajeOeste.valor,
  }));

  const dataPatentamientos = meses.map((mes) => ({
    mes,
    Autos: dataParticular[mes].Autos.valor,
    Motos: dataParticular[mes].Motos.valor,
  }));

  return (
    <div className="w-full h-full bg-green-300">
      <div className="w-full h-[5%] bg-gray-800 flex items-center justify-center relative px-4">
        <div className="w-1/3 h-full flex items-center justify-between">
          <button onClick={handlePreviousMonth}>
            <FaArrowLeft className="text-white" />
          </button>
          <span className="text-white text-lg">{mesSeleccionado}</span>
          <button onClick={handleNextMonth}>
            <FaArrowRight className="text-white" />
          </button>
        </div>
        <button
          className="rounded w-24 bg-blue-800 text-white absolute right-2 top-1"
          onClick={() => setPublicoOParticular(null)}
        >
          Volver
        </button>
      </div>
      <div className="h-[95%] bg-gray-500 w-full flex">
        <div className="h-full w-1/3 flex items-center justify-center">
          <div className="w-[90%] h-[90%] bg-gray-200 rounded relative shadow-lg shadow-gray-700 flex flex-col">
            <div className="w-full h-1/2 flex flex-col items-center">
              <div className="w-full h-1/3 flex items-center justify-center">
                <p className="px-6 py-2 bg-gray-800 text-[#f6893b] text-4xl font-semibold rounded shadow shadow-black">
                  Nafta
                </p>
              </div>
              <div className="w-[95%] rounded h-3/4 bg-[#f6893b] text-[#f6893b]">
                <div className="w-full h-1/2 flex flex-col items-center justify-evenly">
                  <p className="text-center w-1/3 rounded p-2 font-bold text-gray-800 font-semibold text-sm">
                    Valor
                  </p>
                  <p className="text-center w-1/3 rounded p-2 bg-gray-800 font-bold text-3xl">
                    $ {dataParticular[mesSeleccionado].Nafta.valor}
                  </p>
                </div>
                <div className="w-full h-1/2 flex items-center justify-center">
                  <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    {" "}
                    <p className="text-center w-full rounded p-2 font-bold text-gray-800 font-semibold text-xs">
                      Variación intermensual
                    </p>
                    <p className="text-center w-1/2 rounded p-2 bg-gray-800 font-bold text-xl text-gray-200">
                      {dataParticular[mesSeleccionado].Nafta.intermensual} %
                    </p>
                  </div>
                  <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    {" "}
                    <p className="text-center w-full rounded p-2 font-bold text-gray-800 font-semibold text-xs">
                      Variación anual acumulada
                    </p>
                    <p className="text-center w-1/2 rounded p-2 bg-gray-800 font-bold text-xl text-gray-200">
                      {dataParticular[mesSeleccionado].Nafta.acumulada} %
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 flex items-center justify-center">
              <div className="w-[95%] h-[95%] bg-gray-800 rounded flex items-center justify-center">
                <ResponsiveContainer width="90%" height="90%">
                  <LineChart
                    data={dataNafta}
                    margin={{ left: -25, top: 10, right: 10 }}
                  >
                    <XAxis
                      dataKey="mes"
                      tick={{
                        fill: "#e5e7eb",
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    />
                    <YAxis
                      tick={{
                        fill: "#e5e7eb",
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111111",
                        border: "none",
                        borderRadius: "15px",
                        color: "white",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Nafta"
                      stroke="#f6893b"
                      strokeWidth={2}
                      dot={{ stroke: "#f6893b", fill: "#f6893b" }}
                      activeDot={{ r: 8 }}
                    />{" "}
                    <ReferenceLine
                      x={mesSeleccionado}
                      stroke="gray"
                      strokeDasharray="3 3"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="h-24 w-24 rounded-full bg-gray-800 absolute -top-6 -left-4 flex items-center justify-center">
              <img className="w-16 h-16" src="/assets/nafta.png" alt="" />
            </div>
          </div>
        </div>
        <div className="h-full w-2/3 flex flex-col items-center justify-evenly">
          <div className="w-[95%] h-[42.5%] bg-gray-200 rounded relative shadow-lg shadow-gray-700 flex">
            <div className="w-[8%] h-full"></div>
            <div className="w-[42%] h-full flex items-center justify-evenly">
              <div className="w-[45%] h-[95%] bg-[#f9d900] rounded relative text-[#f9d900]">
                <div className="w-full h-1/3 flex flex-col items-center justify-center">
                  <p className="text-center w-1/3 rounded  font-bold text-gray-800 font-semibold text-sm mt-2">
                    Valor
                  </p>
                  <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-xl">
                    $ {dataParticular[mesSeleccionado].PeajeNorte.valor}
                  </p>
                </div>
                <div className="w-full h-2/3 ">
                  <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-xs">
                      Variación intermensual
                    </p>
                    <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-sm text-gray-200">
                      {dataParticular[mesSeleccionado].PeajeNorte.intermensual}{" "}
                      %
                    </p>
                  </div>

                  <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-xs">
                      Variación anual acumulada
                    </p>
                    <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-sm text-gray-200">
                      {dataParticular[mesSeleccionado].PeajeNorte.acumulada} %
                    </p>
                  </div>
                </div>
                <div className="absolute w-2/3 shadow shadow-black h-6 bg-gray-800 flex items-center justify-center p-2 rounded -top-4 left-1/2 transform -translate-x-1/2 font-semibold text-[#f9d900]">
                  Peaje Norte
                </div>
              </div>

              <div className="w-[45%] h-[95%] bg-[#f7fd5d] rounded relative text-[#f7fd5d]">
                <div className="w-full h-1/3 flex flex-col items-center justify-center">
                  <p className="text-center w-1/3 rounded  font-bold text-gray-800 font-semibold text-sm mt-2">
                    Valor
                  </p>
                  <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-xl">
                    $ {dataParticular[mesSeleccionado].PeajeOeste.valor}
                  </p>
                </div>
                <div className="w-full h-2/3 ">
                  <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-xs">
                      Variación intermensual
                    </p>
                    <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-sm text-gray-200">
                      {dataParticular[mesSeleccionado].PeajeOeste.intermensual}{" "}
                      %
                    </p>
                  </div>

                  <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-xs">
                      Variación anual acumulada
                    </p>
                    <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-sm text-gray-200">
                      {dataParticular[mesSeleccionado].PeajeOeste.acumulada} %
                    </p>
                  </div>
                </div>
                <div className="absolute w-2/3 shadow shadow-black h-6 bg-gray-800 flex items-center justify-center p-2 rounded -top-4 left-1/2 transform -translate-x-1/2 font-semibold text-[#f7fd5d]">
                  Peaje Oeste
                </div>
              </div>
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
              <div className="w-[95%] h-[95%] rounded bg-gray-800 flex items-center justify-center">
                <ResponsiveContainer width="90%" height="90%">
                  <LineChart
                    data={dataPeajes}
                    margin={{ left: -25, top: 10, right: 10 }}
                  >
                    <XAxis
                      dataKey="mes"
                      tick={{
                        fill: "#e5e7eb",
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    />
                    <YAxis
                      tick={{
                        fill: "#e5e7eb",
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111111",
                        border: "none",
                        borderRadius: "15px",
                        color: "white",
                      }}
                    />

                    {/* Línea para Peaje Norte */}
                    <Line
                      type="monotone"
                      dataKey="Peaje Norte"
                      stroke="#f9d900"
                      strokeWidth={2}
                      dot={{ stroke: "#f9d900", fill: "#f9d900" }}
                      activeDot={{ r: 8 }}
                    />

                    {/* Línea para Peaje Oeste */}
                    <Line
                      type="monotone"
                      dataKey="Peaje Oeste"
                      stroke="#f7fd5d"
                      strokeWidth={2}
                      dot={{ stroke: "#f7fd5d", fill: "#f7fd5d" }}
                      activeDot={{ r: 8 }}
                    />

                    <ReferenceLine
                      x={mesSeleccionado}
                      stroke="gray"
                      strokeDasharray="3 3"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="h-24 w-24 rounded-full bg-gray-800 absolute -top-4 -left-6 flex items-center justify-center">
              <img className="w-14 h-14" src="/assets/peaje.png" alt="" />
            </div>
          </div>
          <div className="w-[95%] h-[42.5%] bg-gray-200 rounded relative shadow-lg shadow-gray-700 flex">
            <div className="w-[8%] h-full"></div>
            <div className="w-[42%] h-full flex items-center justify-evenly">
              <div className="w-[45%] h-[95%] bg-[#e95faa] rounded relative text-[#e95faa]">
                <div className="w-full h-1/3 flex flex-col items-center justify-center">
                  <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-sm mt-2">
                    Patentamientos
                  </p>
                  <p
                    className={`text-center w-2/3 rounded p-2 bg-gray-800 font-bold ${
                      typeof dataParticular[mesSeleccionado].Autos.valor ===
                      "number"
                        ? "text-xl"
                        : "text-[10px]"
                    }`}
                  >
                    {typeof dataParticular[mesSeleccionado].Autos.valor ===
                    "number"
                      ? `${dataParticular[
                          mesSeleccionado
                        ].Autos.valor.toLocaleString()}`
                      : dataParticular[mesSeleccionado].Autos.valor}
                  </p>
                </div>
                <div className="w-full h-2/3 ">
                  <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-xs">
                      Variación intermensual
                    </p>
                    <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-sm text-gray-200">
                      {dataParticular[mesSeleccionado].Autos.intermensual} %
                    </p>
                  </div>

                  <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-xs">
                      Variación interanual
                    </p>
                    <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-sm text-gray-200">
                      {dataParticular[mesSeleccionado].Autos.interanual} %
                    </p>
                  </div>
                </div>
                <div className="absolute w-2/3 shadow shadow-black h-6 bg-gray-800 flex items-center justify-center p-2 rounded -top-4 left-1/2 transform -translate-x-1/2 font-semibold text-[#e95faa]">
                  Automóviles
                </div>
              </div>
              <div className="w-[45%] h-[95%] bg-[#f590eb] rounded relative text-[#f590eb]">
                <div className="w-full h-1/3 flex flex-col items-center justify-center">
                  <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-sm mt-2">
                    Patenamientos
                  </p>
                  <p
                    className={`text-center w-2/3 rounded p-2 bg-gray-800 font-bold ${
                      typeof dataParticular[mesSeleccionado].Motos.valor ===
                      "number"
                        ? "text-xl"
                        : "text-[10px]"
                    }`}
                  >
                    {typeof dataParticular[mesSeleccionado].Motos.valor ===
                    "number"
                      ? `${dataParticular[
                          mesSeleccionado
                        ].Motos.valor.toLocaleString()}`
                      : dataParticular[mesSeleccionado].Motos.valor}
                  </p>
                </div>
                <div className="w-full h-2/3 ">
                  <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-xs">
                      Variación intermensual
                    </p>
                    <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-sm text-gray-200">
                      {dataParticular[mesSeleccionado].Motos.intermensual} %
                    </p>
                  </div>

                  <div className="w-full h-1/2 flex flex-col items-center justify-center">
                    <p className="text-center w-full rounded  font-bold text-gray-800 font-semibold text-xs">
                      Variación interanual
                    </p>
                    <p className="text-center w-2/3 rounded p-2 bg-gray-800 font-bold text-sm text-gray-200">
                      {dataParticular[mesSeleccionado].Motos.interanual} %
                    </p>
                  </div>
                </div>
                <div className="absolute w-2/3 shadow shadow-black h-6 bg-gray-800 flex items-center justify-center p-2 rounded -top-4 left-1/2 transform -translate-x-1/2 font-semibold text-[#f590eb]">
                  Motovehículos
                </div>
              </div>
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
              <div className="w-[95%] h-[95%] rounded bg-gray-800 flex items-center justify-center">
                {" "}
                <ResponsiveContainer width="90%" height="90%">
                  <LineChart
                    data={dataPatentamientos}
                    margin={{ left: -15, top: 10, right: 10 }}
                  >
                    <XAxis
                      dataKey="mes"
                      tick={{
                        fill: "#e5e7eb",
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    />
                    <YAxis
                      tick={{
                        fill: "#e5e7eb",
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111111",
                        border: "none",
                        borderRadius: "15px",
                        color: "white",
                      }}
                    />

                    {/* Línea para Autos */}
                    <Line
                      type="monotone"
                      dataKey="Autos"
                      stroke="#e95faa"
                      strokeWidth={2}
                      dot={{ stroke: "#e95faa", fill: "#e95faa" }}
                      activeDot={{ r: 8 }}
                    />

                    {/* Línea para Motos */}
                    <Line
                      type="monotone"
                      dataKey="Motos"
                      stroke="#f590eb"
                      strokeWidth={2}
                      dot={{ stroke: "#f590eb", fill: "#f590eb" }}
                      activeDot={{ r: 8 }}
                    />

                    <ReferenceLine
                      x={mesSeleccionado}
                      stroke="gray"
                      strokeDasharray="3 3"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="h-24 w-24 rounded-full bg-gray-800 absolute -top-4 -left-6 flex items-center justify-center">
              <img className="w-14 h-14" src="/assets/patente.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
