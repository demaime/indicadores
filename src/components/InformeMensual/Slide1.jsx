import React from "react";

export default function Slide1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-around px-8">
      <div className="w-1/2 flex flex-col items-center justify-between h-16 tracking-wider">
        <h1 className=" !text-5xl font-bold ">Conclusiones</h1>
        <div className="w-3/4 h-2 rounded-xl bg-yellow-300 relative">
          <div className="rounded-full h-2 w-2 bg-gray-700 absolute right-4"></div>
          <div className="rounded-full h-4 w-4 bg-gray-700 absolute right-8 -top-1"></div>
          <div className="absolute left-8 -top-3 text-gray-700 font-black text-xl">
            X
          </div>
        </div>
      </div>
      <p className="text-center">
        Las ventas minoristas pymes por el Día del Niño{" "}
        <strong>cayeron 14,4% </strong>frente a la misma fecha del año pasado,
        medidas a precios constantes. Fue una semana en la que las familias se
        orientaron a buscar productos económicos o en oferta. Se observó un
        consumo más cauteloso que el del año anterior, donde las prioridades se
        orientaron hacia lo esencial y funcional.
      </p>
      <div className="w-full flex items-center justify-evenly">
        <div className="w-1/4 h-32 bg-yellow-300 text-black text-xl border-2 rounded shadow-lg shadow-gray-500 text-center flex flex-col items-center justify-end">
          <p className="w-full h-1/2 text-6xl font-semibold">-14.4%</p>
          <p className="w-full h-1/4 text-xs mt-2">VARIACIÓN INTERANUAL</p>
        </div>
        <div className="w-1/4 h-32 bg-yellow-300 text-black text-xl border-2 rounded shadow-lg shadow-gray-500 text-center flex flex-col items-center justify-end">
          <p className="w-full h-1/2 text-6xl font-semibold">$31.987</p>
          <p className="w-full h-1/4 text-xs mt-2">TICKET PROMEDIO</p>
        </div>{" "}
        <div className="w-1/4 h-32 bg-yellow-300 text-black text-xl border-2 rounded shadow-lg shadow-gray-500 text-center flex flex-col items-center justify-end">
          <p className="w-full h-1/2 text-6xl font-semibold">60.4%</p>
          <p className="w-full h-1/4 text-xs mt-2">
            DE LOS COMERCIOS REALIZÓ ALGUNA PROMOCIÓN
          </p>
        </div>
      </div>
      <p className="text-center">
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
      </p>
    </div>
  );
}
