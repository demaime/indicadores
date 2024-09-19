import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUp, FaArrowDown, FaEquals } from "react-icons/fa";

export default function OcioGrafico({
  data,
  mesSeleccionado,
  variacionesItermensuales,
  variacionesAcumuladas,
  selectedCategory,
}) {
  const meses = Object.keys(data);
  const categorias = Object.keys(data[meses[0]]);

  const datosGrafica = meses.map((mes) => {
    const datosMes = { mes };
    categorias.forEach((categoria) => {
      datosMes[categoria] = data[mes][categoria];
    });
    return datosMes;
  });

  // Colores por categoría
  const colors = {
    fiesta: "#60a5fa",
    combo: "#f87171",
    gimnasio: "#4ade80",
    cine: "#facc15",
    plataforma: "#f472b6",
    libro: "#fb923c",
    teatro: "#c084fc",
  };

  console.log(variacionesItermensuales[mesSeleccionado]);

  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly ">
      <div className="w-[90%] h-[55%] bg-gray-800 rounded-xl shadow-xl shadow-black">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={datosGrafica}
            margin={{ top: 20, right: 30, left: -10, bottom: 5 }}
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

            {/* Líneas para cada categoría */}
            {categorias.map((categoria) => (
              <Line
                key={categoria}
                type="monotone"
                dataKey={categoria}
                stroke={colors[categoria]}
                activeDot={{ r: 8 }}
                strokeWidth={2}
                dot={{ stroke: colors[categoria], fill: colors[categoria] }}
              />
            ))}
            <ReferenceLine
              x={mesSeleccionado}
              stroke="white"
              strokeDasharray="3 3"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-[90%] h-[35%] bg-gray-800 rounded-xl shadow-xl shadow-black flex flex-col items-center justify-evenly">
        <div
          className="w-full h-[30%] flex items-center justify-center text-3xl tracking-wider font-black"
          style={{ color: colors[selectedCategory] }}
        >
          {selectedCategory && selectedCategory.toUpperCase()}
        </div>
        <div className="w-full h-full flex justify-around items-center">
          {selectedCategory ? (
            <>
              <div
                className="w-2/5 h-[70%] rounded-xl flex flex-col justify-center items-center p-4 shadow shadow-black"
                style={{ backgroundColor: colors[selectedCategory] }}
              >
                <div
                  className={`text-lg font-bold mb-2 bg-gray-800 h-3/5 shadow shadow-black w-full flex text-center items-center justify-center rounded-t-xl`}
                  style={{ color: colors[selectedCategory] }}
                >
                  Variación Mensual
                </div>
                <div className="text-3xl font-bold h-2/5 shadow shadow-black w-full flex text-center items-center justify-center rounded-b-xl bg-gray-800 text-gray-200">
                  {parseFloat(
                    variacionesItermensuales[mesSeleccionado][selectedCategory]
                  ) > 0 ? (
                    <FaArrowUp className="text-green-500 mr-2" />
                  ) : parseFloat(
                      variacionesItermensuales[mesSeleccionado][
                        selectedCategory
                      ]
                    ) < 0 ? (
                    <FaArrowDown className="text-red-500 mr-2" />
                  ) : (
                    <FaEquals className="text-gray-500 mr-2" />
                  )}
                  {variacionesItermensuales[mesSeleccionado][selectedCategory]}%
                </div>
              </div>
              <div
                className="w-2/5 h-[70%] rounded-xl flex flex-col justify-center items-center p-4 shadow shadow-black"
                style={{ backgroundColor: colors[selectedCategory] }}
              >
                <div
                  className={`text-lg font-bold mb-2 bg-gray-800 h-3/5 shadow shadow-black w-full flex flex-col text-center items-center justify-center rounded-t-xl`}
                  style={{ color: colors[selectedCategory] }}
                >
                  <span>Variación Acumulada</span>
                  {mesSeleccionado === "abril" || mesSeleccionado === "mayo" ? (
                    <span className="text-xs font-semibold text-gray-300">
                      (Desde JUNIO)
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-gray-300">
                      (MAYO - {mesSeleccionado.toUpperCase()})
                    </span>
                  )}
                </div>
                <div className="text-3xl font-bold h-2/5 shadow shadow-black w-full flex text-center items-center justify-center rounded-b-xl bg-gray-800 text-gray-200">
                  {parseFloat(
                    variacionesAcumuladas[mesSeleccionado][selectedCategory]
                  ) > 0 ? (
                    <FaArrowUp className="text-green-500 mr-2" />
                  ) : parseFloat(
                      variacionesAcumuladas[mesSeleccionado][selectedCategory]
                    ) < 0 ? (
                    <FaArrowDown className="text-red-500 mr-2" />
                  ) : (
                    <FaEquals className="text-gray-500 mr-2" />
                  )}
                  {variacionesAcumuladas[mesSeleccionado][selectedCategory]}%
                </div>
              </div>
            </>
          ) : (
            <div className="text-white text-center">
              <span>No se ha seleccionado ninguna categoría</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
