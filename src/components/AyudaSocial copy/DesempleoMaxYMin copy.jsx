import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import Tippy styles
import IntermensualDisplay from "./IntermensualDisplay";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export default function DesempleoMaxYMin({ data, meses, mesSeleccionado }) {
  const tooltipContent = `   <div style="font-size: 12px; text-align: justify; padding: 4px">
      Está dirigido a los trabajadores asalariados registrados, legalmente
      despedidos “sin justa causa” o “por fuerza mayor”, o bien que hayan
      perdido su trabajo por quiebre de la empresa en la que trabajaban; y a
      trabajadores detectados como no registrados en acciones de fiscalización
      del Plan Nacional de Regularización del Trabajo (PNRT) y posteriormente
      despedidos.
      </br>      </br>
            <h3>Ley N°13.047</h3>
      <table>
        <thead>
          <tr>
            <th>Período de Cotización</th>
            <th>Duración de las prestaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>De 6 a 11 meses</td>
            <td>2 meses</td>
          </tr>
          <tr>
            <td>De 12 a 23 meses</td>
            <td>4 meses</td>
          </tr>
          <tr>
            <td>De 24 a 35 meses</td>
            <td>8 meses</td>
          </tr>
          <tr>
            <td>36 meses</td>
            <td>12 meses</td>
          </tr>
        </tbody>
      </table>
            </br>
      <h3>Ley N°25.371</h3>
      <table>
        <thead>
          <tr>
            <th>Período de Cotización</th>
            <th>Duración de las prestaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8 a 11 meses</td>
            <td>3 meses</td>
          </tr>
          <tr>
            <td>12 a 17 meses</td>
            <td>4 meses</td>
          </tr>
          <tr>
            <td>18 a 24 meses</td>
            <td>8 meses</td>
          </tr>
        </tbody>
      </table>
    </div>`;

  const combinedData = meses.map((mes) => ({
    mes,
    "Desempleo Mínimo": data[mes].desempleo_minimo.valor,
    "Desempleo Máximo": data[mes].desempleo_maximo.valor,
  }));

  return (
    <div className="h-full w-1/3 bg-gray-200">
      <div className="w-full h-full">
        <div className="w-full h-1/3 flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-gray-800">
            <div className="w-full h-1/3 text-2xl flex items-center justify-center text-center text-gray-200 relative">
              <Tippy
                content={
                  <span dangerouslySetInnerHTML={{ __html: tooltipContent }} />
                }
              >
                <div className="cursor-pointer absolute right-1 top-1 flex rounded-full bg-white font-black text-black items-center justify-center w-4 h-4 text-[10px]">
                  ?
                </div>
              </Tippy>
              SEGURO POR DESEMPLEO
            </div>
            <div className="w-full h-2/3 flex">
              <div className="w-3/4 h-full">
                <div className="w-full h-1/2 flex items-start justify-center">
                  {" "}
                  <div className="w-[90%] h-[90%] rounded text-gray-800 bg-[#3a993a] relative flex items-center justify-center">
                    <h1 className="flex items-center justify-center font-semibold w-16 h-4 text-xs bg-gray-200 rounded -top-2 -left-2 absolute">
                      Máximo
                    </h1>
                    <h2 className="text-3xl font-bold">
                      ${" "}
                      {data[
                        mesSeleccionado
                      ].desempleo_maximo.valor.toLocaleString()}{" "}
                    </h2>
                  </div>
                </div>
                <div className="w-full h-1/2 flex items-start justify-center">
                  {" "}
                  <div className="w-[90%] h-[90%] rounded text-gray-800 bg-[#28fa28] relative flex items-center justify-center">
                    <h1í className="flex items-center justify-center font-semibold w-16 h-4 text-xs bg-gray-200 rounded -top-2 -left-2 absolute">
                      Máximo
                    </h1í>
                    <h2 className="text-3xl font-bold">
                      ${" "}
                      {data[
                        mesSeleccionado
                      ].desempleo_minimo.valor.toLocaleString()}{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-1/4 h-full flex items-center justify-center">
                <div className="h-[90%] w-[90%] rounded-full bg-gray-200 flex items-center justify-center text-xl">
                  <IntermensualDisplay
                    intermensual={
                      data[mesSeleccionado].desempleo_minimo.intermensual
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2/3 flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-gray-800 flex items-center justify-center shadow shadow-black">
            <ResponsiveContainer
              width="90%"
              height="90%"
              className={"relative"}
            >
              <div className="w-2/5 h-6 absolute rounded bg-gray-600 text-gray-300 -top-8 text-xs font-semibold text-center flex items-center justify-center left-1/2 transform -translate-x-1/2">
                Variaciones intermensuales
              </div>
              <AreaChart
                data={combinedData}
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
                  domain={[0, 300000]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111111",
                    border: "none",
                    borderRadius: "15px",
                    color: "white",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="Desempleo Máximo"
                  stroke="#3a993a"
                  fill="#3a993a"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="Desempleo Mínimo"
                  stroke="#28fa28"
                  fill="#1f2937"
                  fillOpacity={1}
                />
                <ReferenceLine
                  x={mesSeleccionado}
                  stroke="gray"
                  strokeDasharray="3 3"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// <h1 className="mr-4 text-5xl font-black flex items-center">
//   {" "}
//   $ {data[
//     mesSeleccionado
//   ].desempleo_minimo.valor.toLocaleString()}{" "}
//   - ${" "}
//   {data[mesSeleccionado].desempleo_maximo.valor.toLocaleString()}
//   <span className="bg-gray-200 rounded text-sm ml-2 flex items-center justify-center rounded px-1">
//     <IntermensualDisplay
//       intermensual={
//         data[mesSeleccionado].desempleo_minimo.intermensual
//       }
//     />
//   </span>
// </h1>;
