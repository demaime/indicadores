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
import { CgArrowsExpandUpRight } from "react-icons/cg";

export default function Slide3() {
  const grafico1 = {
    "'09": 2244,
    "'10": 1772,
    "'11": 1644,
    "'12": 1704,
    "'13": 1870,
    "'14": 1764,
    "'15": 1829,
    "'16": 1732,
    "'17": 1842,
    "'18": 2038,
    "'19": 2002,
    "'20": 2062,
    "'21": 1961,
    "'22": 2055,
    "'23": 2229,
    "'24": 2056,
  };

  const grafico2 = {
    "'09": { Consumo: 81.4, Exportacion: 18.6 },
    "'10": { Consumo: 87.5, Exportacion: 12.5 },
    "'11": { Consumo: 90, Exportacion: 10 },
    "'12": { Consumo: 92.6, Exportacion: 7.4 },
    "'13": { Consumo: 92.8, Exportacion: 7.2 },
    "'14": { Consumo: 92.4, Exportacion: 7.6 },
    "'15": { Consumo: 92.1, Exportacion: 7.9 },
    "'16": { Consumo: 91.1, Exportacion: 8.9 },
    "'17": { Consumo: 89.6, Exportacion: 10.4 },
    "'18": { Consumo: 83.5, Exportacion: 16.5 },
    "'19": { Consumo: 75.4, Exportacion: 24.6 },
    "'20": { Consumo: 73, Exportacion: 27 },
    "'21": { Consumo: 74.9, Exportacion: 25.1 },
    "'22": { Consumo: 74.1, Exportacion: 25.9 },
    "'23": { Consumo: 74, Exportacion: 26 },
    "'24": { Consumo: 71.3, Exportacion: 28.7 },
  };

  const filteredGrafico1 = Object.entries(grafico1).map(([key, valor]) => ({
    name: key,
    valor,
    fill: key === "'24" ? "#a30013" : "#f2465a", // Color condicional
  }));

  const filteredGrafico2 = Object.keys(grafico2).map((year) => ({
    year,
    Consumo: grafico2[year].Consumo,
    Exportacion: grafico2[year].Exportacion,
  }));

  return (
    <div className="w-full h-full bg-red-300">
      <div className="w-full h-2/3 flex">
        <div className="w-1/2 h-full flex items-center justify-start ">
          <div className="ml-4 relative w-1/2 h-[90%] rounded bg-gray-200 shadow shadow-black flex items-center justify-center">
            <ResponsiveContainer width={"90%"} height={"90%"}>
              <BarChart
                data={filteredGrafico1}
                layout="vertical" // Cambia la disposición a horizontal
                margin={{ top: 0, right: 10, left: -30, bottom: -10 }} // Ajusta los márgenes
              >
                <XAxis
                  type="number"
                  tickFormatter={(valor) => `${valor.toLocaleString()} MM`} // Valores en el eje Y
                  tick={{ fontSize: 10, fill: "#000" }}
                />
                <YAxis
                  type="category"
                  dataKey="name" // Ahora los años están en el eje X
                  tick={{ fontSize: 10, fill: "#000" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#777777",
                    border: "black",
                    borderRadius: "15px",
                    color: "white",
                  }}
                  formatter={(valor) =>
                    `${valor.toLocaleString()} millones de toneladas`
                  }
                />

                <Bar dataKey="valor" barSize={30}>
                  <LabelList
                    dataKey="valor"
                    position="inside"
                    fill="#eee"
                    fontSize={11}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="w-full h-2/3 bg-gray-800 rounded absolute -right-[90%] top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-evenly">
              <div className="w-[90%] h-1/6 mt-2 bg-gray-200 rounded text-red-700 flex flex-col items-center justify-center">
                <p className="font-semibold">PRODUCCION DE CARNE VACUNA</p>
                <p className="text-[10px]">
                  8 meses de 2009 a 2024* - En millones de toneladas r/c/h
                </p>
              </div>

              <div className="w-[90%] h-3/4 text-gray-200 text-sm relative flex items-center">
                <p>
                  En enero-agosto de 2024 la industria frigorífica produjo{" "}
                  <span className="text-red-400">
                    2,056 millones de tn de carne vacuna
                  </span>
                  . En comparación con igual período de 2023{" "}
                  <span className="text-red-400">
                    la producción se retrajo 7,8%
                  </span>
                  , reduciéndose la cantidad ofrecida de carne vacuna en 173,2
                  mil tn. Si bien los valores no están cerca de los pisos y
                  techos históricos, lo que se puede observar es su
                  distribución:
                </p>
                <CgArrowsExpandUpRight
                  size={50}
                  className="absolute -right-[3.2rem] z-50 -bottom-[1.2rem] font-black text-red-800"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-start ">
          <div className="ml-4 relative w-1/2 h-[90%] rounded bg-gray-200 shadow shadow-black flex items-center justify-center">
            <ResponsiveContainer width={"90%"} height={"90%"}>
              <BarChart
                data={filteredGrafico2}
                margin={{ top: 0, right: 25, left: -28, bottom: -10 }} // Ajusta los márgenes
              >
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis
                  tickFormatter={(tick) => `${tick}%`}
                  tick={{ fontSize: 10 }}
                />
                <Tooltip
                  formatter={(value) => `${value}%`}
                  contentStyle={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                />

                <Bar dataKey="Consumo" stackId="a" fill="#f2465a" />
                <Bar dataKey="Exportacion" stackId="a" fill="#d6293d" />
              </BarChart>
            </ResponsiveContainer>
            <div className="w-full h-2/3 bg-gray-800 rounded absolute -right-[90%] top-1/2 transform -translate-y-1/2 text-gray-200 flex justify-center items-center">
              {" "}
              <div className="w-[90%] h-full flex flex-col items-center justify-evenly">
                <p>
                  El descenso en la participación del mercado interno tiene su
                  contracara en el crecimiento de las exportaciones, que{" "}
                  <span className="text-red-400"> aumentaron un 2.7% </span>
                  anual.
                </p>
                <p>
                  Esta composición porcentual sitúa el consumo interno en su
                  nivel más bajo desde 1998
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col items-center justify-between h-16 tracking-wider">
          <div className="w-3/4 h-2 rounded-xl bg-red-400 relative">
            <div className="rounded-full h-2 w-2 bg-gray-900 absolute right-4"></div>
            <div className="rounded-full h-4 w-4 bg-gray-900 absolute right-8 -top-1"></div>
            <div className="absolute left-8 -top-3 text-gray-900 font-black text-xl">
              X
            </div>
          </div>
        </div>
        <p className="text-center text-2xl text-gray-800 font-semibold w-4/5 tracking-wider">
          Se proyecta que 2024 va a cerrar con un promedio de
          <strong> 44.8 kg/hab/año</strong>, cuando el promedio histórico es de{" "}
          <strong> 72.9 kg/hab/año</strong>, aunque viene en baja hace años{" "}
        </p>
      </div>
    </div>
  );
}
