import React from "react";
import variacion from "./variacion.jpg";
import categorias from "./categorias.jpg";

export default function Slide3() {
  return (
    <div className="w-full h-full flex bg-white">
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-[90%] h-[90%] flex flex-col items-center justify-between">
          <img src={variacion} alt="" />
          <div className="w-full h-1/2 bg-blue-900 rounded flex flex-col items-center justify-evenly p-6 text-white shadow-black shadow-md relative">
            <div className="absolute h-6 w-2/3 text-center -top-2 rounded bg-gray-800 text-black shadow shadow-black text-teal-200">
              VARIACIONES INTERANUALES
            </div>
            <div className="text-lg text-center">
              Tres de los seis rubros relevados registraron subas interanuales
              en sus ventas y en tres hubo declives. La mayor retracción ocurrió
              en Equipos periféricos, celulares y accesorios que descendieron
              <span className="text-teal-400 font-semibold">
                {" "}
                15,6% frente al año pasado.{" "}
              </span>{" "}
              El que más creció fue Electrodomésticos, artefactos del hogar y
              equipos de audio y video
              <span className="text-teal-400 font-semibold">
                {" "}
                (+12,1% anual).{" "}
              </span>
              impulsado por la oferta de financiamiento de hasta 9 cuotas sin
              interés y hasta 36 cuotas con interés, en el marco de una demanda
              deprimida.
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center ">
        <div className="w-[90%] h-[90%] flex flex-col items-center justify-between">
          <img src={categorias} alt="" />
          <div className="w-full h-1/2 bg-blue-900 rounded flex items-center justify-center p-6 text-white shadow-black shadow-md relative">
            <div className="absolute h-6 w-2/3 text-center -top-2 rounded bg-gray-800 text-black shadow shadow-black text-teal-200">
              TICKET PROMEDIO
            </div>
            <div className="text-xl text-center flex flex-col items-center justify-evenly h-full">
              <p>
                Seis de cada diez comercios encuestados, ofrecieron alguna
                oferta por la fecha, destacándose las promociones bancarias y
                los descuentos por pago en efectivo.
              </p>
              <p>
                El ticket de ventas tuvo un promedio de{" "}
                <span className="text-teal-400 font-semibold"> $33.819, </span>{" "}
                reflejando la inclinación de las familias por regalos
                económicos. Libros e indumentaria de bajos precios fueron
                opciones muy buscadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
