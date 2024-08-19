import React, { useState } from "react";

export default function TicketPromedio({ vista, setVista, mesSeleccionado }) {
  const totales = {
    ENERO: {
      bebidas: { ventas: 152299121, interanual: 232.5, porcentual: 14 },
      almacen: { ventas: 301765364, interanual: 282.3, porcentual: 27.4 },
      panaderia: { ventas: 41844496, interanual: 292.4, porcentual: 3.8 },
      lacteos: { ventas: 111536925, interanual: 247, porcentual: 10.1 },
      carnes: { ventas: 124015931, interanual: 293.8, porcentual: 11.2 },
      verduleria: { ventas: 48008427, interanual: 208.1, porcentual: 4.4 },
      alimentosPreparados: {
        ventas: 10271315,
        interanual: 218.3,
        porcentual: 0.9,
      },
      limpieza: { ventas: 167880221, interanual: 282.3, porcentual: 15.2 },
      indumentaria: { ventas: 17639080, interanual: 139.9, porcentual: 1.6 },
      electronicos: { ventas: 45229031, interanual: 122.7, porcentual: 4.1 },
      otros: { ventas: 80523445, interanual: 203.6, porcentual: 7.3 },
      total: { ventas: 1103083356, interanual: 248.4, porcentual: 100 },
    },
    FEBRERO: {
      bebidas: { ventas: 161538887, interanual: 261.5, porcentual: 13.5 },
      almacen: { ventas: 330253599, interanual: 309.3, porcentual: 27.7 },
      panaderia: { ventas: 48199179, interanual: 341.5, porcentual: 4 },
      lacteos: { ventas: 124933356, interanual: 276.4, porcentual: 10.5 },
      carnes: { ventas: 129788882, interanual: 273.6, porcentual: 10.9 },
      verduleria: { ventas: 52066144, interanual: 238.3, porcentual: 4.4 },
      alimentosPreparados: {
        ventas: 11360646,
        interanual: 248.6,
        porcentual: 1,
      },
      limpieza: { ventas: 185320684, interanual: 337.1, porcentual: 15.5 },
      indumentaria: { ventas: 17652445, interanual: 145.8, porcentual: 1.5 },
      electronicos: { ventas: 44554520, interanual: 132, porcentual: 3.7 },
      otros: { ventas: 87044986, interanual: 225.6, porcentual: 7.3 },
      total: { ventas: 1192713328, interanual: 274.6, porcentual: 100 },
    },
    MARZO: {
      bebidas: { ventas: 176648915, interanual: 257.3, porcentual: 12.4 },
      almacen: { ventas: 421601795, interanual: 338, porcentual: 29.6 },
      panaderia: { ventas: 58368811, interanual: 354.8, porcentual: 4.1 },
      lacteos: { ventas: 155371660, interanual: 297, porcentual: 10.9 },
      carnes: { ventas: 152830614, interanual: 260.4, porcentual: 10.7 },
      verduleria: { ventas: 59375847, interanual: 249.5, porcentual: 4.2 },
      alimentosPreparados: {
        ventas: 13246425,
        interanual: 242.7,
        porcentual: 0.9,
      },
      limpieza: { ventas: 219267489, interanual: 338.5, porcentual: 15.4 },
      indumentaria: { ventas: 18901299, interanual: 185.1, porcentual: 1.3 },
      electronicos: { ventas: 52682333, interanual: 155, porcentual: 3.7 },
      otros: { ventas: 94244644, interanual: 279.8, porcentual: 6.8 },
      total: { ventas: 1422899832, interanual: 291.8, porcentual: 100 },
    },
    ABRIL: {
      bebidas: { ventas: 147816193, interanual: 218.5, porcentual: 11.1 },
      almacen: { ventas: 391756176, interanual: 259, porcentual: 29.3 },
      panaderia: { ventas: 54412340, interanual: 276.5, porcentual: 4.1 },
      lacteos: { ventas: 157490564, interanual: 282.4, porcentual: 11.8 },
      carnes: { ventas: 149742957, interanual: 212.8, porcentual: 11.2 },
      verduleria: { ventas: 59332668, interanual: 245.8, porcentual: 4.4 },
      alimentosPreparados: {
        ventas: 12715632,
        interanual: 205.4,
        porcentual: 0.9,
      },
      limpieza: { ventas: 200295534, interanual: 291.1, porcentual: 15 },
      indumentaria: { ventas: 25148334, interanual: 228.6, porcentual: 1.9 },
      electronicos: { ventas: 51972236, interanual: 135.3, porcentual: 3.9 },
      otros: { ventas: 84422398, interanual: 244.8, porcentual: 6.3 },
      total: { ventas: 1335105032, interanual: 246, porcentual: 100 },
    },
    MAYO: {
      bebidas: { ventas: 140121285, interanual: 214.3, porcentual: 9.9 },
      almacen: { ventas: 423919417, interanual: 285.6, porcentual: 30 },
      panaderia: { ventas: 59376675, interanual: 303.4, porcentual: 4.2 },
      lacteos: { ventas: 170075429, interanual: 290.1, porcentual: 12 },
      carnes: { ventas: 153950343, interanual: 239.9, porcentual: 10.9 },
      verduleria: { ventas: 60571949, interanual: 251.3, porcentual: 4.3 },
      alimentosPreparados: {
        ventas: 13628092,
        interanual: 220.2,
        porcentual: 1,
      },
      limpieza: { ventas: 207457596, interanual: 300.5, porcentual: 14.7 },
      indumentaria: { ventas: 34292094, interanual: 305.8, porcentual: 2.4 },
      electronicos: { ventas: 65096403, interanual: 176.4, porcentual: 4.6 },
      otros: { ventas: 85587418, interanual: 236, porcentual: 6 },
      total: { ventas: 1414076701, interanual: 263.6, porcentual: 100 },
    },
  };

  const imagenes = {
    bebidas: {
      fullname: "Bebidas",
      img: "/assets/bebidas.png",
    },
    almacen: {
      fullname: "Almacen",
      img: "/assets/almacen.png",
    },
    panaderia: {
      fullname: "Panadería",
      img: "/assets/pan.png",
    },
    lacteos: {
      fullname: "Lácteos",
      img: "/assets/lacteos.png",
    },
    carnes: {
      fullname: "Carnes",
      img: "/assets/carneenvasada.png",
    },
    verduleria: {
      fullname: "Verdulería y frutería",
      img: "/assets/verduleria.png",
    },
    alimentosPreparados: {
      fullname: "Alimentos preparados y rotisería",
      img: "/assets/preparados.png",
    },
    limpieza: {
      fullname: "Artículos de limpieza y perfumería",
      img: "/assets/limpieza.png",
    },
    indumentaria: {
      fullname: "Indumentaria, calzado y textiles para el hogar",
      img: "/assets/textiles.png",
    },
    electronicos: {
      fullname: "Electrónicos y artículos para el hogar",
      img: "/assets/electronicos.png",
    },
    otros: {
      fullname: "Otros",
      img: "/assets/otros.png",
    },
    total: {
      fullname: "Total",
      img: "/assets/ticket.png",
    },
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const ranking = Object.keys(totales[mesSeleccionado])
    .filter((key) => key !== "total")
    .sort(
      (a, b) =>
        totales[mesSeleccionado][b].porcentual -
        totales[mesSeleccionado][a].porcentual
    );

  const handleClick = (index) => {
    setSelectedItem(ranking[index]);
  };

  const getPreviousMonth = (month) => {
    const months = Object.keys(totales);
    const index = months.indexOf(month);
    return index > 0 ? months[index - 1] : null;
  };

  const monthPrevious = getPreviousMonth(mesSeleccionado);
  const ventasCurrent = totales[mesSeleccionado][selectedItem]?.ventas || 0;
  const ventasPrevious = monthPrevious
    ? totales[monthPrevious][selectedItem]?.ventas || 0
    : 0;
  const variacionIntermensual = ventasPrevious
    ? ((ventasCurrent - ventasPrevious) / ventasPrevious) * 100
    : 0;

  return (
    <div className="w-full h-[95%]">
      <div className="w-full h-1/2 flex items-center justify-evenly relative">
        <button
          className="text-white bg-blue-900 rounded w-24 h-6 flex items-center justify-center absolute top-1 right-4 hover:bg-blue-600 border-black border-2 text-sm font-normal"
          onClick={() => setVista("general")}
        >
          Volver
        </button>

        {/* Tarjeta principal */}
        <div
          className="h-[90%] w-1/5 rounded-xl border border-gray-700 cursor-pointer hover:bg-yellow-200 bg-gray-100 hover:scale-105 relative flex flex-col items-center justify-evenly"
          onClick={() => handleClick(0)}
        >
          <div className="w-1/2 h-1/2 mr-4">
            <img src={imagenes[ranking[0]].img} alt="" />
          </div>
          <h1 className="text-4xl font-semibold">
            {totales[mesSeleccionado][ranking[0]].porcentual}%
          </h1>
          <div className="rounded-full border-2 border-black w-16 h-16 bg-white -top-2 -right-2 absolute flex items-center justify-center">
            <img src="/assets/gold.png" className="w-3/4 h-3/4" alt="" />
          </div>
        </div>

        {/* Grilla de tarjetas */}
        <div className="h-full w-3/5">
          <div className="h-1/2 w-full flex items-center justify-evenly">
            {ranking.slice(1, 6).map((_, index) => (
              <div
                key={index}
                className={`h-[90%] w-1/6 border-y rounded-xl border border-gray-700 cursor-pointer hover:bg-yellow-200 hover:scale-105 relative bg-gray-100 flex flex-col items-center justify-evenly ${
                  selectedItem === ranking[index + 1] ? "bg-orange-400" : ""
                }`}
                onClick={() => handleClick(index + 1)}
              >
                <div className="w-1/2 h-1/2 mr-4">
                  <img src={imagenes[ranking[index + 1]].img} alt="" />
                </div>
                <h1 className="text-3xl font-semibold">
                  {totales[mesSeleccionado][ranking[index + 1]].porcentual}%
                </h1>
                <div
                  className={`rounded-full border-2 border-black bg-white -top-2 -right-2 absolute flex items-center justify-center ${
                    index === 0 ? "w-12 h-12" : "w-8 h-8"
                  }`}
                >
                  {index + 2}
                </div>
              </div>
            ))}
          </div>

          <div className="h-1/2 w-full flex items-center justify-evenly">
            {ranking.slice(6, 11).map((_, index) => (
              <div
                key={index}
                className={`h-[90%] w-1/6 border-y rounded-xl border border-gray-700 cursor-pointer hover:bg-yellow-200 hover:scale-105 relative bg-gray-100 flex flex-col items-center justify-evenly ${
                  selectedItem === ranking[index + 6] ? "bg-orange-400" : ""
                }`}
                onClick={() => handleClick(index + 6)}
              >
                <div className="w-1/2 h-1/2 mr-4">
                  <img src={imagenes[ranking[index + 6]].img} alt="" />
                </div>
                <h1 className="text-3xl font-semibold">
                  {totales[mesSeleccionado][ranking[index + 6]].porcentual}%
                </h1>
                <div className="rounded-full border-2 border-black w-8 h-8 bg-white -top-2 -right-2 absolute flex items-center justify-center">
                  {index + 7}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Información del elemento seleccionado */}
      <div className="w-full h-1/2 flex items-center justify-center">
        {selectedItem ? (
          <div className="bg-orange-400 border border-gray-700 h-[90%] w-[95%] rounded-xl flex items-center justify-evenly">
            <div className="w-1/5 h-full flex items-center justify-center text-center text-4xl font-semibold">
              {imagenes[selectedItem].fullname}
            </div>
            <div className="w-2/5 h-full flex items-center justify-center text-white font-black text-6xl drop-shadow-md shadow-black">
              $ {totales[mesSeleccionado][selectedItem].ventas.toLocaleString()}
            </div>
            <div className="w-1/5 h-full flex flex-col items-center justify-evenly">
              <span className="flex- h-1/3 w-full flex items-center justify-center text-4xl bg-orange-200 p-2 rounded-xl relative font-black border border-black">
                <div className="absolute w-[90%] -top-4 h-6 text-sm text-orange-400 tracking-wider bg-black rounded text-center items-center justify-center flex font-semibold">
                  Variación Interanual
                </div>
                {totales[mesSeleccionado][selectedItem].interanual} %
              </span>
              <span className="flex- h-1/3 w-full flex items-center justify-center text-4xl bg-orange-200 p-2 rounded-xl relative font-black border border-black">
                <div className="absolute w-[90%] -top-4 h-6 text-sm text-orange-400 tracking-wider bg-black rounded text-center items-center justify-center flex font-semibold">
                  Variación Intermensual
                </div>
                {variacionIntermensual.toFixed(2)} %
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-orange-400 border border-gray-700 h-[90%] w-[95%] rounded-xl flex items-center justify-center text-4xl">
            Seleccione una categoría para ver las estadísticas
          </div>
        )}
      </div>
    </div>
  );
}
