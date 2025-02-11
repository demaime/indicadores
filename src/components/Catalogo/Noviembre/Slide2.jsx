export default function Slide2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly bg-white text-white text-xl">
      <div className="w-full h-1/2 flex">
        <div className="w-1/2 h-full flex items-center justify-evenly">
          <div className="w-64 h-32 bg-amber-400 rounded flex flex-col items-center justify-evenly ">
            <p className="h-8 bg-gray-800 text-amber-400 w-[110%] rounded text-center">
              CRECIMIENTO DE VENTAS
            </p>
            <p className="font-black text-5xl">213 %</p>
            <p className="text-sm font-semibold">en pesos vs 2023</p>
          </div>
          <div className="w-64 h-32 bg-amber-400 rounded flex flex-col items-center justify-evenly ">
            <p className="h-8 bg-gray-800 text-amber-400 w-[110%] rounded text-center">
              INFLACIÓN INTERANUAL{" "}
            </p>
            <p className="font-black text-5xl">209 %</p>
            <p className="text-sm font-semibold">vs SEPT 2023</p>
          </div>{" "}
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-amber-400 flex items-center justify-center">
            {" "}
            <p className="px-8 text-justify text-gray-700 font-semibold">
              El evento de comercio electrónico, desarrollado entre el lunes 4 y
              el miércoles 6 de noviembre por la Cámara Argentina de Comercio
              Electrónico (CACE), registró ventas por más de{" "}
              <strong className="text-gray-800">$493.000 millones</strong>, lo
              que representó un crecimiento de{" "}
              <strong className="text-gray-800">213% </strong>respecto de la
              edición de 2023 (en septiembre, la inflación interanual fue de
              209%, según el último dato disponible del Indec).
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-[90%] bg-amber-200 rounded flex">
            <div className="w-2/3 h-full bg-gray-800 text-amber-400 font-semibold p-4 rounded text-center flex items-center justify-center">
              A la hora de analizar los factores que empujaron los resultados,
              desde el ámbito empresarial señalaron la dupla conformada por
              mayores alternativas de financiación y megaofertas. El 60.9% de las transacciones se vieron afectadas por alguna promoción o descuento.
            </div>
            <div className="w-1/3 h-full flex flex-col items-center justify-evenly">
              <div className="flex items-center w-[90%] h-1/4 rounded bg-amber-400 text-gray-800 text-sm justify-between text-center font-semibold p-4">
                <span className="text-3xl font-black mr-2">5.5 </span>millones
                de ordenes emitidas (+ 34%)
              </div>
              <div className="flex items-center w-[90%] h-1/4 rounded bg-amber-400 text-gray-800 text-sm justify-between text-center font-semibold p-4">
                <span className="text-3xl font-black mr-2">114</span>millones de
                pesos por minuto
              </div>
              <div className="flex items-center w-[90%] h-1/4 rounded bg-amber-400 text-gray-800 text-sm justify-between text-center font-semibold p-4">
                <span className="text-3xl font-black mr-2">10.5</span>millones
                de productos comercializados (+ 35% )
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
