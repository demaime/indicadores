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

export default function AUH({ data, meses, mesSeleccionado }) {
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
    <div className="h-full w-2/3 border-r-2 border-gray-600">
      <div className="w-full h-1/2 flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded bg-gray-800 flex items-center justify-center shadow shadow-black">
          <ResponsiveContainer width="90%" height="90%" className={"relative"}>
            <div className="w-2/5 h-6 absolute rounded bg-gray-200 text-gray-800 -bottom-6 text-xs font-semibold text-center flex items-center justify-center left-1/2 transform -translate-x-1/2">
              Variaciones intermensuales
            </div>
            <LineChart
              data={dataauh}
              margin={{ left: -20, top: 10, right: 10 }}
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
                stroke="#f9d900"
                strokeWidth={2}
                dot={{ stroke: "#f9d900", fill: "#f9d900" }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="Acompañamiento Social"
                stroke="#00bfff"
                strokeWidth={2}
                dot={{ stroke: "#00bfff", fill: "#00bfff" }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="Progresar"
                stroke="#ff4500"
                strokeWidth={2}
                dot={{ stroke: "#ff4500", fill: "#ff4500" }}
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
      <div className="w-full h-1/2 flex items-center justify-evenly">
        <div className="w-1/4 rounded bg-gray-800 h-[90%] shadow shadow-black relative">
          <div className="tooltip-auh cursor-pointer absolute right-1 top-1 flex rounded-full bg-white font-black text-black items-center justify-center w-4 h-4 text-[10px]">
            ?
          </div>
          <div className="w-full h-2/5 flex">
            <div className="w-1/3 h-full flex items-center justify-center">
              <img
                className="w-[80%] h-[60%]"
                src="/assets/ayudasocial.png"
                alt=""
              />
            </div>
            <div className="w-2/3 h-full text-xl flex items-center justify-center text-center text-[#f9d900]">
              Asignación Universal por Hijo
            </div>
          </div>
          <div className="w-full h-3/5 bg-[#f9d900] text-gray-800 flex flex-col items-center justify-between py-2">
            {" "}
            <h1 className="w-full h-1/5 text-xs text-center flex items-center justify-center  font-bold">
              <IntermensualDisplay
                intermensual={data[mesSeleccionado].auh.intermensual}
              />
            </h1>
            <h1 className="w-full h-1/5 text-5xl text-center flex items-center justify-center  font-black">
              $ {data[mesSeleccionado].auh.valor.toLocaleString()}
            </h1>
            <div className="w-full h-1/5">
              {" "}
              <h1 className="w-full text-xs text-center flex items-center justify-center ">
                Tope ingreso individual:
                <span className="font-semibold mx-2">
                  ${" "}
                  {data[mesSeleccionado].tope_individual.valor.toLocaleString()}
                </span>
              </h1>
              <h1 className="w-full text-xs text-center flex items-center justify-center ">
                Tope ingreso grupo familiar:
                <span className="font-semibold mx-2">
                  $ {data[mesSeleccionado].tope_familiar.valor.toLocaleString()}
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/4 rounded bg-gray-800 h-[90%] shadow shadow-black relative">
          <div className="tooltip-progresar cursor-pointer absolute right-1 top-1 flex rounded-full bg-white font-black text-black items-center justify-center w-4 h-4 text-[10px]">
            ?
          </div>
          <div className="w-full h-2/5 flex">
            <div className="w-1/3 h-full flex items-center justify-center">
              <img src="/assets/beca.png" alt="" />
            </div>
            <div className="w-2/3 h-full text-xl flex items-center justify-center text-center text-[#ff4500]">
              Progresar{" "}
            </div>
          </div>
          <div className="w-full h-3/5 bg-[#ff4500] text-gray-800 flex flex-col items-center justify-evenly py-2">
            <h1 className="w-full h-1/5 text-xs text-center flex items-center justify-center  font-bold">
              <IntermensualDisplay
                intermensual={data[mesSeleccionado].progresar.intermensual}
              />
            </h1>
            <h1 className="w-full h-1/5 text-5xl text-center flex items-center justify-center  font-black">
              $ {data[mesSeleccionado].progresar.valor.toLocaleString()}
            </h1>
          </div>
        </div>
        <div className="w-1/4 rounded bg-gray-800 h-[90%] shadow shadow-black relative">
          <div className="tooltip-acomp_social cursor-pointer absolute right-1 top-1 flex rounded-full bg-white font-black text-black items-center justify-center w-4 h-4 text-[10px]">
            ?
          </div>
          <div className="w-full h-2/5 flex">
            <div className="w-1/3 h-full flex items-center justify-center">
              <img
                className="w-[80%] h-[40%]"
                src="/assets/trabajo.png"
                alt=""
              />
            </div>
            <div className="w-2/3 h-full text-xl flex items-center justify-center text-center text-[#00bfff]">
              Acompañamiento social
            </div>
          </div>
          <div className="w-full h-3/5 bg-[#00bfff] text-gray-800 flex flex-col items-center justify-evenly py-2">
            {" "}
            <h1 className="w-full h-1/5 text-xs text-center flex items-center justify-center  font-bold">
              <IntermensualDisplay
                intermensual={data[mesSeleccionado].acomp_social.intermensual}
              />
            </h1>
            <h1 className="w-full h-1/5 text-5xl text-center flex items-center justify-center  font-black">
              $ {data[mesSeleccionado].acomp_social.valor.toLocaleString()}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
