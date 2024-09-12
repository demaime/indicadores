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

export default function OcioGrafico({
  data,
  mesSeleccionado,
  variacionesItermensuales,
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
    plataforma: "#f87171",
    gimnasio: "#4ade80",
    cine: "#facc15",
    combo: "#f472b6",
    libro: "#fb923c",
    teatro: "#c084fc",
  };

  console.log(variacionesItermensuales[mesSeleccionado]);

  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly ">
      <div className="w-[90%] h-[45%] bg-gray-800 rounded-xl shadow-xl shadow-black">
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
      <div className="w-[90%] h-[45%] bg-gray-800 rounded-xl shadow-xl shadow-black"></div>
    </div>
  );
}
