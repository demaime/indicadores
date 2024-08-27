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

export default function Publico({ setPublicoOParticular }) {
  const dataPublico = {
    ENERO: {
      Subte: { valor: 110, intermensual: 37.5, acumulada: 37.5 },
      Tren: { valor: 43.38, intermensual: 45.32, acumulada: 45.32 },
      Colectivo: { valor: 76.92, intermensual: 45.24, acumulada: 45.24 },
    },
    FEBRERO: {
      Subte: { valor: 125, intermensual: 13.63, acumulada: 51.13 },
      Tren: { valor: 130, intermensual: 199.68, acumulada: 245 },
      Colectivo: { valor: 270, intermensual: 251.01, acumulada: 296.25 },
    },
    MARZO: {
      Subte: { valor: 125, intermensual: 0, acumulada: 51.13 },
      Tren: { valor: 130, intermensual: 0, acumulada: 245 },
      Colectivo: { valor: 270, intermensual: 0, acumulada: 296.25 },
    },
    ABRIL: {
      Subte: { valor: 125, intermensual: 0, acumulada: 51.13 },
      Tren: { valor: 130, intermensual: 0, acumulada: 245 },
      Colectivo: { valor: 270, intermensual: 0, acumulada: 296.25 },
    },
    MAYO: {
      Subte: { valor: 574, intermensual: 359.2, acumulada: 410.3 },
      Tren: { valor: 200, intermensual: 53.8, acumulada: 298.8 },
      Colectivo: { valor: 270, intermensual: 0, acumulada: 296.25 },
    },
    JUNIO: {
      Subte: { valor: 650, intermensual: 13.2, acumulada: 423.5 },
      Tren: { valor: 200, intermensual: 0, acumulada: 298.8 },
      Colectivo: { valor: 270, intermensual: 0, acumulada: 296.25 },
    },
    JULIO: {
      Subte: { valor: 650, intermensual: 0, acumulada: 423.5 },
      Tren: { valor: 200, intermensual: 0, acumulada: 298.8 },
      Colectivo: { valor: 371.13, intermensual: 37.46, acumulada: 333.71 },
    },
  };

  const meses = Object.keys(dataPublico);
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

  const dataSubte = meses.map((mes) => ({
    mes,
    valor: dataPublico[mes].Subte.valor,
  }));

  const dataTren = meses.map((mes) => ({
    mes,
    valor: dataPublico[mes].Tren.valor,
  }));

  const dataColectivo = meses.map((mes) => ({
    mes,
    valor: dataPublico[mes].Colectivo.valor,
  }));

  return (
    <div className="w-full h-full bg-gray-400">
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
      <div className="w-full h-[95%] flex">
        <div className="w-1/3 h-full">
          <div className="w-full h-2/3 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded bg-gray-800 flex items-center justify-center">
              {" "}
              <ResponsiveContainer width="90%" height="90%">
                <LineChart
                  data={dataSubte}
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
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="valor"
                    stroke="#44f56c"
                    strokeWidth={2}
                    dot={{ stroke: "#44f56c", fill: "#44f56c" }}
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
          <div className="w-full h-1/3 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded bg-gray-500 relative shadow shadow-gray-900">
              {" "}
              <div className="cube"></div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full border-x-4 border-gray-800">
          <div className="w-full h-2/3 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded bg-gray-800 flex items-center justify-center">
              {" "}
              <ResponsiveContainer width="90%" height="90%">
                <LineChart
                  data={dataTren}
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
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="valor"
                    stroke="#5f91ff"
                    strokeWidth={2}
                    dot={{ stroke: "#5f91ff", fill: "#5f91ff" }}
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
          <div className="w-full h-1/3 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded bg-gray-500 relative shadow shadow-gray-900">
              {" "}
              <div className="cube"></div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full">
          <div className="w-full h-2/3 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded bg-gray-800 flex items-center justify-center">
              {" "}
              <ResponsiveContainer width="90%" height="90%">
                <LineChart
                  data={dataColectivo}
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
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="valor"
                    stroke="#ef7070"
                    strokeWidth={2}
                    dot={{ stroke: "#ef7070", fill: "#ef7070" }}
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
          <div className="w-full h-1/3 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded bg-gray-500 relative shadow shadow-gray-900">
              <div className="cube"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
