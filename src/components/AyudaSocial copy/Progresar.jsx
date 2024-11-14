import React from "react";
import IntermensualDisplay from "./IntermensualDisplay";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Progresar({ data, meses, mesSeleccionado }) {
  const dataProgresar = meses.map((mes) => ({
    mes,
    "Beca Progresar": data[mes].progresar.valor,
  }));

  const dataSocial = meses.map((mes) => ({
    mes,
    "Acompañamiento Social": data[mes].acomp_social.valor,
  }));

  return (
    <div className="h-full w-1/3 bg-gray-400">
      <div className="w-full h-1/2 py-2">
        <div className="w-full h-1/3">
          <div className="h-1/2 w-full">
            <h1 className="ml-2 text-2xl font-bold">BECA PROGRESAR</h1>
          </div>
          <div className="h-1/2 w-full flex items-center justify-end">
            <h1 className="mr-4 text-5xl font-black flex items-center">
              {" "}
              $ {data[mesSeleccionado].progresar.valor.toLocaleString()}
              <span className="bg-gray-200 rounded text-sm ml-2 flex items-center justify-center rounded px-1">
                <IntermensualDisplay
                  intermensual={data[mesSeleccionado].progresar.intermensual}
                />
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full h-2/3 flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-gray-200 flex items-center justify-center shadow shadow-black">
            <ResponsiveContainer width="90%" height="90%">
              <LineChart
                data={dataProgresar}
                margin={{ left: -25, top: 10, right: 10 }}
              >
                <XAxis
                  dataKey="mes"
                  tick={{
                    fill: "#000",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                />
                <YAxis
                  tick={{
                    fill: "#000",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                  domain={[0, 30000]}
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
                  dataKey="Beca Progresar"
                  stroke="#0330fc"
                  strokeWidth={2}
                  dot={{ stroke: "#0330fc", fill: "#0330fc" }}
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
      </div>
      <div className="w-full h-1/2 py-2">
        <div className="w-full h-1/3">
          <div className="h-1/2 w-full flex items-center">
            <h1 className="ml-2 text-2xl font-bold">ACOMPAÑAMIENTO SOCIAL</h1>
            <Tippy content={"ex potenciar trabajo"}>
              <span className="ml-1 flex rounded-full bg-white font-black text-black items-center justify-center w-4 h-4 text-[10px]">
                ?
              </span>
            </Tippy>
          </div>
          <div className="h-1/2 w-full flex items-center justify-end">
            <h1 className="mr-4 text-5xl font-black flex items-center">
              {" "}
              $ {data[mesSeleccionado].acomp_social.valor.toLocaleString()}
              <span className="bg-gray-200 rounded text-sm ml-2 flex items-center justify-center rounded px-1">
                <IntermensualDisplay
                  intermensual={data[mesSeleccionado].acomp_social.intermensual}
                />
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full h-2/3 flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-gray-200 flex items-center justify-center shadow shadow-black">
            <ResponsiveContainer width="90%" height="90%">
              <LineChart
                data={dataSocial}
                margin={{ left: -25, top: 10, right: 10 }}
              >
                <XAxis
                  dataKey="mes"
                  tick={{
                    fill: "#000",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                />
                <YAxis
                  tick={{
                    fill: "#000",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                  domain={[50000, 100000]}
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
                  dataKey="Acompañamiento Social"
                  stroke="#fc0320"
                  strokeWidth={2}
                  dot={{ stroke: "#fc0320", fill: "#fc0320" }}
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
      </div>
    </div>
  );
}
