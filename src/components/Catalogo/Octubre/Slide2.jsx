import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";

export default function Slide2() {
  // Datos originales
  const grafico1 = {
    "'05": 62.0,
    "'06": 62.8,
    "'07": 66.3,
    "'08": 67.9,
    "'09": 68.9,
    "'10": 60.8,
    "'11": 55.5,
    "'12": 57.8,
    "'13": 62.0,
    "'14": 60.2,
    "'15": 59.5,
    "'16": 56.7,
    "'17": 57.5,
    "'18": 58.9,
    "'19": 52.0,
    "'20": 50.9,
    "'21": 49.8,
    "'22": 50.5,
    "'23": 53.5,
    "'24": 48.1,
  };

  const grafico2 = {
    "'11": 54.7,
    "'12": 57.7,
    "'13": 62.7,
    "'14": 58.3,
    "'15": 59.5,
    "'16": 55.2,
    "'17": 57.1,
    "'18": 58.2,
    "'19": 51.1,
    "'20": 50.3,
    "'21": 48.5,
    "'22": 49.8,
    "'23": 53.3,
    "'24": 46.9,
  };

  // Filtrar y transformar los datos con color definido
  const filteredGrafico1 = Object.entries(grafico1).map(([key, valor]) => ({
    name: key,
    valor,
    fill: key === "'24" ? "#a30013" : "#d6293d", // Color condicional
  }));

  const filteredGrafico2 = Object.entries(grafico2).map(([key, valor]) => ({
    name: key,
    valor,
    fill: key === "'24" ? "#a30013" : "#d6293d", // Color condicional
  }));

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-white text-xl">
      <div className="w-1/2 h-full flex flex-col">
        <div className="w-full h-1/2 relative">
          <div className="w-1/2 h-8 rounded bg-gray-900 text-red-200 absolute top-2 right-2 flex flex-col items-center justify-center text-xs font-semibold">
            CONSUMO DE CARNE VACUNA POR HABITANTE{" "}
            <span className="text-[10px] text-red-300">
              Enero-agosto de '11 a '24* - En kilogramos por año
            </span>
          </div>
          <div className="absolute flex flex-col items-center justify-center w-24 h-12 rounded bg-gray-900 bottom-1/4 -right-6 text-xl">
            <span>-12.1 %</span>
            <span className="text-xs">ANUAL</span>
          </div>

          <ResponsiveContainer width={"90%"} height={"90%"}>
            <BarChart
              data={filteredGrafico2}
              layout="horizontal" // Cambia la disposición a horizontal
              margin={{ top: 30, right: 10, left: 30, bottom: -15 }} // Ajusta los márgenes
            >
              <XAxis
                dataKey="name" // Ahora los años están en el eje X
                tick={{ fontSize: 10, fill: "#000" }}
              />
              <YAxis
                type="number"
                tickFormatter={(valor) => `${valor.toLocaleString()} kg/año`} // Valores en el eje Y
                tick={{ fontSize: 10, fill: "#000" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#777777",
                  border: "black",
                  borderRadius: "15px",
                  color: "white",
                }}
                formatter={(valor) => `${valor.toLocaleString()} kg/año`}
              />

              <Bar dataKey="valor" barSize={30}>
                <LabelList
                  dataKey="valor"
                  position="top"
                  fill="#000"
                  fontSize={11}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full h-1/2 relative">
          <div className="w-1/2 h-8 rounded bg-gray-900 text-red-200 absolute top-2 right-2 flex flex-col items-center justify-center text-xs font-semibold">
            CONSUMO DE CARNE VACUNA POR HABITANTE{" "}
            <span className="text-[10px] text-red-300">
              Agosto de '05-'24* - Promedio móvil 12 meses - En kg/año
            </span>
          </div>
          <div className="absolute flex flex-col items-center justify-center w-24 h-12 rounded bg-gray-900 bottom-1/4 -right-6 text-xl">
            <span>-10.1 %</span>
            <span className="text-xs">ANUAL</span>
          </div>
          <ResponsiveContainer width={"90%"} height={"90%"}>
            <BarChart
              data={filteredGrafico1}
              layout="horizontal" // Cambia la disposición a horizontal
              margin={{ top: 30, right: 10, left: 30, bottom: -15 }} // Ajusta los márgenes
            >
              <XAxis
                dataKey="name" // Ahora los años están en el eje X
                tick={{ fontSize: 10, fill: "#000" }}
              />
              <YAxis
                type="number"
                tickFormatter={(valor) => `${valor.toLocaleString()} kg/año`} // Valores en el eje Y
                tick={{ fontSize: 10, fill: "#000" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#777777",
                  border: "black",
                  borderRadius: "15px",
                  color: "white",
                }}
                formatter={(valor) => `${valor.toLocaleString()} kg/año`}
              />

              <Bar dataKey="valor" barSize={30}>
                <LabelList
                  dataKey="valor"
                  position="top"
                  fill="#000"
                  fontSize={11}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-[90%] h-[90%] bg-red-200 rounded shadow-lg shadow-red-800 flex flex-col items-center justify-evenly text-gray-800 text-2xl font-semibold">
          <div className="w-[90%] h-1/2 flex items-center">
            <p>
              En lo que respecta al consumo aparente de carne vacuna por
              habitante, en enero/agosto de 2024 habría resultado equivalente a
              <strong> 46,9 kilos/año</strong>, con lo que la baja interanual
              habría sido de <strong>12,1%</strong> (-6,5 kg/hab/año).{" "}
            </p>
          </div>
          <div className="w-[90%] h-[2px] bg-gray-600 rounded"></div>
          <div className="w-[90%] h-1/2 flex items-center">
            <p>
              Por su parte, el promedio móvil de los últimos doce meses quedó en
              <strong> 48,1 kg/hab/año</strong> en el octavo mes del año,
              ubicándose <strong> 10,1%</strong> por debajo del promedio
              alcanzado en agosto de 2023 (-5,4 kg/hab/año).{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
