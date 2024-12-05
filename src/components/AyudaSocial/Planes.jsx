import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import IntermensualDisplay from "./IntermensualDisplay";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

// Define el objeto con los textos de los tooltips
const tooltipTexts = {
  auh: `<div style="font-size: 12px; text-align: justify; padding: 4px">
      Es un derecho para los padres o tutores de menores de 18 años que no
      perciban ingresos formales. Desde Julio de 2024,
      <strong>
        este plan está sujeto a la actualización según el Índice de Precios al
        Consumidor (IPC) cada dos meses
      </strong>
    </div>`,
  progresar: `    <div style="font-size: 12px; text-align: justify; padding: 4px">
      Dirigido a jóvenes de entre 16 y 24 años, con el propósito de garantizar
      el acceso a la educación formal. Este plan <strong>otorga una beca mensual a los beneficiarios </strong>que cumplan
      con los requisitos de inscripción y progresión académica, promoviendo así
      su inserción laboral futura a través de la finalización de estudios
      secundarios, terciarios o universitarios.</div>`,
  acomp_social: `<div style="font-size: 12px; text-align: justify; padding: 4px">
      Los beneficiaros del ex programa POTENCIAR TRABAJO fueron redistribuídos en
      dos planes diferentes:  
      <br/><br/><ul>
        <li>
          <strong>Volver al trabajo:</strong> Para personas entre 18 y 49 años,
          tiene como finalidad desarrollar y consolidar un nivel de competencias
          sociolaborales para alcanzar un nivel de empleabilidad inicial real y
          mejorar las oportunidades de inserción laboral.
        </li><br/>
        <li>
          <strong>Acompañamiento Social</strong> Para beneficiarios de más de 50
          años o que son madres de cuatro o más hijos menores de 18 años. Brinda
          talleres sobre educación, salud, nutrición y derechos, capacitaciones
          para impulsar emprendimientos socioproductivos, asesoramiento para
          jubilarse y ayuda económica o material para garantizar una nutrición
          adecuada.
        </li>
      </ul>
    </div>`,
};

export default function Planes({ data, meses, mesSeleccionado }) {
  useEffect(() => {
    // Inicializa los tooltips con el texto correspondiente
    Object.keys(tooltipTexts).forEach((key) => {
      tippy(`.tooltip-${key}`, {
        content: tooltipTexts[key],
        allowHTML: true,
      });
    });
  }, []);

  const dataauh = meses.map((mes) => ({
    mes,
    "Asignación Universal por Hijo": data[mes].auh.valor,
    "Acompañamiento Social": data[mes].acomp_social.valor,
    Progresar: data[mes].progresar.valor,
  }));

  return (
    <div className="h-full w-full">
      <div className="w-full h-2/3 flex items-center justify-center">
        {" "}
        <ResponsiveContainer
          width="95%"
          height="95%"
          className={"relative bg-gray-700 p-4 rounded"}
        >
          <div className="w-2/5 h-6 absolute rounded bg-gray-200 text-gray-800 -bottom-4 shadow shadow-black text-xs font-semibold text-center flex items-center justify-center left-1/2 transform -translate-x-1/2">
            Variaciones intermensuales
          </div>
          <LineChart data={dataauh} margin={{ left: -20, top: 10, right: 10 }}>
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
              domain={[0, 120000]}
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
              dataKey="Asignación Universal por Hijo"
              stroke="#f1fe50"
              strokeWidth={2}
              dot={{ stroke: "#f1fe50", fill: "#f1fe50" }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Acompañamiento Social"
              stroke="#63b0fc"
              strokeWidth={2}
              dot={{ stroke: "#63b0fc", fill: "#63b0fc" }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Progresar"
              stroke="#fe9150"
              strokeWidth={2}
              dot={{ stroke: "#fe9150", fill: "#fe9150" }}
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
      <div className="h-1/3 w-full flex">
        <div className="h-full w-1/3 p-2 flex flex-col items-center justify-evenly">
          <h1 className="w-full text-end border-r-4 border-gray-900 text-sm shadow shadow-black bg-gray-700 rounded p-2 font-semibold text-gray-200 relative">
            ASIGNACION UNIVERSAL POR HIJO
            <span className="w-14 h-14 absolute bg-gray-900 rounded-full -left-2 -top-2 p-2 flex items-center justify-center">
              <img src="/assets/ayudasocial.png" alt="" />
            </span>
          </h1>
          <div className="w-[90%] rounded h-[75%] bg-gray-800"></div>
        </div>
        <div className="h-full w-1/3 p-2 border-x border-gray-200 flex flex-col items-center justify-evenly">
          <h1 className="w-full text-end border-r-4 border-gray-900 text-sm shadow shadow-black bg-gray-700 rounded p-2 font-semibold text-gray-200 relative">
            PROCREAR
            <span className="w-14 h-14 absolute bg-gray-900 rounded-full -left-2 -top-2 p-1 flex items-center justify-center">
              <img src="/assets/beca.png" alt="" />
            </span>
          </h1>
          <div className="w-[90%] rounded h-[75%] bg-gray-800"></div>
        </div>
        <div className="h-full w-1/3 p-2 flex flex-col items-center justify-evenly">
          <h1 className="w-full text-end border-r-4 border-gray-900 text-sm shadow shadow-black bg-gray-700 rounded p-2 font-semibold text-gray-200 relative">
            ACOMPAÑAMIENTO SOCIAL
            <span className="w-14 h-14 absolute bg-gray-900 rounded-full -left-2 -top-2 p-2 flex items-center justify-center">
              <img src="/assets/trabajo.png" alt="" />
            </span>
          </h1>
          <div className="w-[90%] rounded h-[75%] bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
