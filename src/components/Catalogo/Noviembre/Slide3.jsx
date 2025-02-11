import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const dataDescuentos = {
  Servicios: 74,
  "Supermercados y Bodegas": 36,
  "Salud y Belleza": 34,
  "Bebés y Niños": 33,
  Varios: 33,
  "Muebles, Hogar y Deco": 32,
  "Indumentaria y Calzado": 29,
  "Deportes y Fitness": 28,
  Viajes: 25,
  "Motos y Autos": 24,
  "Electro y Tecnología": 23,
};

// Convertir el objeto a un array para Recharts
const dataForChart = Object.entries(dataDescuentos).map(
  ([name, porcentaje]) => ({
    name,
    porcentaje,
  })
);

// Agregar datos para el pie chart
const dataPie = [
  { name: "Indumentaria", value: 41.3, ticketPromedio: 83630 },
  { name: "Deco y hogar", value: 5.8, ticketPromedio: 144468 },
  { name: "Salud y belleza", value: 8.5, ticketPromedio: 64741 },
  { name: "Comida y bebida", value: 2.4, ticketPromedio: 63799 },
  { name: "Electronica y tecnologia", value: 1.1, ticketPromedio: 151080 },
  { name: "Libreria, arte y educacion", value: 3.8, ticketPromedio: 50737 },
  { name: "Otros segmentos", value: 37.1, ticketPromedio: 74577 },
];

// Colores en tonos amber
const COLORS = [
  "#d97706", // amber-900
  "#f59e0b", // amber-500
  "#fbbf24", // amber-400
  "#fcd34d", // amber-300
  "#fde68a", // amber-200
  "#fef3c7", // amber-100
  "#fffbeb", // amber-50
];

export default function Slide3() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-1/2 flex">
        <div className="w-1/2 h-full flex items-center justify-center ">
          <div className="w-[90%] h-[90]% rounded bg-amber-400 font-semibold p-4 text-center flex items-center justify-center">
            La Facultad de Ciencias Sociales de la Universidad de Buenos Aires
            realizó una auditoría para garantizar “la transparencia y veracidad
            de las ofertas publicadas” por las empresas que se sumaron al Cyber
            Monday. <br />
            <br />
            El descuento promedio del evento fue de 29%, traccionado hacia
            arriba por categorías como Servicios (74%) -que incluyó propuestas
            para cursos de capacitación y de seguros de hogar o viajes, así como
            también para la adquisición de líneas para celulares-, Supermercados
            y Bodegas (36%), y Salud y Belleza (34%).
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <ResponsiveContainer width="100%">
            <BarChart
              layout="vertical"
              data={dataForChart}
              margin={{
                top: 20,
                right: 50,
                left: 50,
                bottom: 5,
              }}
            >
              <XAxis type="number" tick={{ fontSize: 10 }} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{
                  fontSize: 14,
                  width: 500,
                  wordWrap: "break-word",
                }}
                width={150}
              />
              <Tooltip />
              <Bar
                dataKey="porcentaje"
                fill="#f59e0b"
                label={{ position: "inside", fill: "white" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full h-1/2 bg-gray-700 flex">
        <div className="w-1/2 h-full flex items-center justify-center px-8">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataPie}
                cx="35%"
                cy="50%"
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                }) => {
                  const radius = outerRadius * 0.8;
                  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
                  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="black"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={12}
                    >
                      {`${(percent * 100).toFixed(1)}%`}
                    </text>
                  );
                }}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {dataPie.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                iconType="circle"
                formatter={(value, entry) => {
                  const item = dataPie.find((d) => d.name === value);
                  return `${value}: $${item.ticketPromedio.toLocaleString()}`;
                }}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-[90%] h-[90%] bg-amber-200 text-gray-700 rounded p-4 flex flex-col items-center justify-evenly text-center">
            <p>
              El ticket promedio fue de <strong>$ 81.215</strong>, siendo
              <strong> indumentaria </strong>una de las categorías con mayor
              flujo de transacciones.{" "}
            </p>
            <p>
              El <strong>71% </strong> de las ventas fueron abonadas a través de
              tarjetas de crédito, la transferencia bancaria representó el{" "}
              <strong>14% </strong>, las tarjetas de débito el{" "}
              <strong>4% </strong>, el dinero en cuenta y los pagos
              personalizados el <strong>5% </strong>, y el efectivo el{" "}
              <strong>1% </strong>.
            </p>
            <p>
              En cuanto a las opciones de financiamiento, el{" "}
              <strong>53%</strong> de los pagos se realizaron en una cuota, el{" "}
              <strong>23%</strong> en tres cuotas, el <strong>17% </strong>en
              seis cuotas, el<strong> 4% </strong>en nueve cuotas, y el{" "}
              <strong>3%</strong> en doce cuotas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
