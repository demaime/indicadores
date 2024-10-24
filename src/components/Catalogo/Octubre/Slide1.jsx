import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Slide1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-around px-8">
      <div className="w-1/2 flex flex-col items-center justify-between h-16 tracking-wider">
        <h1 className=" !text-5xl font-bold ">Conclusiones</h1>
        <div className="w-3/4 h-2 rounded-xl bg-red-400 relative">
          <div className="rounded-full h-2 w-2 bg-gray-900 absolute right-4"></div>
          <div className="rounded-full h-4 w-4 bg-gray-900 absolute right-8 -top-1"></div>
          <div className="absolute left-8 -top-3 text-gray-900 font-black text-xl">
            X
          </div>
        </div>
      </div>

      <p className="text-center text-3xl flex flex-col text-gray-600">
        EL CONSUMO DE CARNE VACUNA SE ENCUENTRA EN EL&nbsp;
        <strong className="text-6xl m-2 text-gray-800">
          NIVEL HISTÓRICO MÁS BAJO
        </strong>
      </p>
      <div className="w-full flex items-center justify-evenly">
        <div className="w-1/4 h-32 bg-red-700 text-gray-200 text-xl rounded-xl shadow-lg shadow-black text-center flex flex-col items-center justify-end">
          <p className="w-full h-1/2 text-6xl font-semibold">
            46.9 <span className="text-xl">kg/hab</span>
          </p>
          <p className="w-full h-1/4 text-xs mt-2">ENE - AGO '24</p>
        </div>
        <div className="w-1/4 h-32 bg-red-700 text-gray-200 text-xl rounded-xl shadow-lg shadow-black text-center flex flex-col items-center justify-end">
          <p className="w-full h-1/2 text-6xl font-semibold">-12.1 %</p>
          <p className="w-full h-1/4 text-xs mt-2">
            VARIACIÓN INTERANUAL (ENE-AGO '23 / ENE-AGO '24)
          </p>
        </div>{" "}
        <div className="w-1/4 h-32 bg-red-700 text-gray-200 text-xl rounded-xl shadow-lg shadow-black text-center flex flex-col items-center justify-end">
          <p className="w-full h-1/2 text-6xl font-semibold">-10.1 %</p>
          <p className="w-full h-1/4 text-xs mt-2">
            PROMEDIO MÓVIL (AGO '23 - AGO-24')
          </p>
        </div>
      </div>
      <div className="text-center flex items-center justify-center text-sm w-1/4 h-12 bg-red-200 rounded shadow shadow-red-800">
        <a
          className="w-full flex items-center justify-center font-semibold"
          href="https://ciccra.com.ar/wp-content/uploads/2024/09/Inf-No-283b-2024-agosto.pdf"
        >
          {" "}
          INFORME ORIGINAL <FaExternalLinkAlt className="ml-2" size={10} />
        </a>
      </div>
      {/* <p className="text-center">
        El ticket de ventas promedió los <strong>$ 31.987, un 165% más</strong>{" "}
        que en la última medición, muy por debajo de la inflación anual, lo que
        refleja cómo el ajuste en las compras se hizo más por valor que por
        unidades adquiridas. Este año{" "}
        <strong>
          el 60,4% de los comercios realizó alguna promoción, 10 puntos por
          encima del año pasado
        </strong>
        , cuando sólo 50% habían apelado a ese recurso que en la Argentina se
        vuelve más abundante en épocas de poca demanda.
      </p> */}
    </div>
  );
}