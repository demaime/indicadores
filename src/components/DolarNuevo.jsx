import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import axios from "axios";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function DolarNuevo() {
  const [mesSeleccionado, setMesSeleccionado] = useState("abril");

  const [promedios2024, setPromedios2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    // Agrega más meses si es necesario
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/oficial"
        );
        // Calcular el promedio de ventas para cada mes
        const data2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const promedios = {
          enero: calcularPromedio(
            data2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            data2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            data2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            data2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          // Agrega más meses si es necesario
        };
        setPromedios2024(promedios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  // Función para calcular el promedio de ventas
  const calcularPromedio = (data) => {
    const totalVentas = data.reduce(
      (total, cotizacion) => total + cotizacion.venta,
      0
    );
    return (data.length > 0 ? totalVentas / data.length : 0).toFixed(2);
  };

  const handleClickMes = (mesNombre) => {
    setMesSeleccionado(mesNombre);
  };

  const officialValue = promedios2024[mesSeleccionado];

  console.log(officialValue);

  const data = [
    { name: "OFICIAL", minValue: 0, maxValue: officialValue, color: "#4ade80" },
    { name: "Blue", minValue: officialValue, maxValue: 850, color: "#60a5fa" },
    { name: "CCL", minValue: officialValue, maxValue: 880, color: "#22d3ee" },
    { name: "MEP", minValue: officialValue, maxValue: 920, color: "#f87171" },
    {
      name: "Cripto",
      minValue: officialValue,
      maxValue: 925,
      color: "#f472b6",
    },
    {
      name: "Tarjeta",
      minValue: officialValue,
      maxValue: 1070,
      color: "#facc15",
    },
    {
      name: "Mayorista",
      minValue: officialValue,
      maxValue: 1450,
      color: "#fb923c",
    },
  ];

  const meses = [
    { orden: 1, nombre: "enero" },
    { orden: 2, nombre: "febrero" },
    { orden: 3, nombre: "marzo" },
    { orden: 4, nombre: "abril" },
    { orden: 5, nombre: "mayo" },
    { orden: 6, nombre: "junio" },
    { orden: 7, nombre: "julio" },
    { orden: 8, nombre: "agosto" },
    { orden: 9, nombre: "septiembre" },
    { orden: 10, nombre: "octubre" },
    { orden: 11, nombre: "noviembre" },
    { orden: 12, nombre: "diciembre" },
  ];

  const options = {
    animationEnabled: true,

    axisY: {
      title: "Valor",
      prefix: "$",
      labelFontColor: "#FFFFFF", // Letras blancas
      titleFontColor: "#FFFFFF", // Letras blancas
      minimum: 800, // Valor mínimo del eje Y
      maximum: 1500, // Valor máximo del eje Y
      interval: 50, // Intervalo entre marcas del eje Y
    },
    axisX: {
      labelFontColor: "#FFFFFF", // Letras blancas
    },
    backgroundColor: "transparent", // Fondo transparente
    data: [
      {
        type: "rangeColumn",
        dataPointWidth: 30, // Ancho de las barras
        indexLabel: "", // Eliminar el índice de la etiqueta
        dataPoints: data.map((entry) => ({
          label: entry.name,
          y: [entry.minValue, entry.maxValue],
          color: entry.color, // Asignación de color
        })),
      },
    ],
    toolTip: {
      content: function (e) {
        var content = " ";
        var entry = e.entries[0].dataPoint;
        var maxValue = entry.y[1];
        var difference = maxValue - officialValue;
        content += `<strong>${entry.label}</strong><br/>`;
        content += `Valor: $${maxValue}<br/>`;
        content += `Diferencia con el valor oficial: $${difference}<br/>`;
        return content;
      },
    },
  };

  return (
    <div className="w-full h-full bg-gray-800 text-gray-100">
      <div className="w-full h-3/4">
        <div className="w-full h-8 bg-yellow-200 font-semibold tracker-wider text-black flex items-center justify-center ">
          COTIZACION HISTORICA
        </div>
        <div className="h-full w-full flex">
          <div className="h-full w-1/3">
            <div className="w-full bg-transparent rounded-lg h-[10%] flex flex-col items-center justify-center border-b-2 border-gray-600 ">
              <p className="text-lg">COMPARATIVA POR PRECIO PROMEDIO</p>
              <p className="text-xs text-gray-300">
                Valores promedios comparados con el dolar oficial
              </p>
            </div>
            <div className="h-[90%] w-full flex flex-col items-center justify-center relative p-2">
              <CanvasJSChart
                options={options}
                containerProps={{ width: "100%", height: "85%" }}
              />
              <div className="absolute top-4 w-[95%] h-14 flex left-4 justify-between px-4 z-30 bg-gray-800">
                <div className="h-full w-[10%] rounded bg-transparent"> </div>
                <div className="h-full w-[10%] rounded bg-green-400">
                  {" "}
                  <span className="w-full h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    {officialValue}
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    + / -
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-blue-400">
                  {" "}
                  <span className="w-full h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    $900
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    +6.8%
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-cyan-400">
                  {" "}
                  <span className="w-full h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    $900
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    +6.8%
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-red-400">
                  {" "}
                  <span className="w-full h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    $900
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    +6.8%
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-pink-400">
                  {" "}
                  <span className="w-full h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    $900
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    +6.8%
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-yellow-400">
                  {" "}
                  <span className="w-full h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    $900
                  </span>
                  <span className="w-full  border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    +6.8%
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-orange-400">
                  {" "}
                  <span className="w-full h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    $900
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    +6.8%
                  </span>
                </div>
              </div>
              <div className="absolute left-4 w-16 rounded h-14 bg-white top-4 z-40 text-black py-2">
                <span className="w-full h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                  Valor
                </span>
                <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                  Diferencia
                </span>
              </div>
            </div>
          </div>
          <div className="h-full w-1/3">
            <div className="h-[10%] w-full flex flex-col items-center justify-evenly ">
              <div className="flex w-full h-1/3">
                {meses.map((mes) => (
                  <div
                    className={`w-1/12 h-full flex items-center justify-center text-xs cursor-pointer rounded border-gray-800 border-t ${
                      mes.nombre === mesSeleccionado ? "bg-gray-500" : ""
                    }`}
                    onClick={() => handleClickMes(mes.nombre)}
                  >
                    {mes.orden}
                  </div>
                ))}
              </div>
              <div className="h-2/3 w-full flex items-center justify-center">
                <button className="text-yellow-200">
                  {mesSeleccionado ? mesSeleccionado.toUpperCase() : "MES"}
                </button>
              </div>
            </div>
            <div className="h-[90%] w-full">contenido de abajo</div>
          </div>
          <div className="h-full w-1/3"></div>
        </div>
      </div>
      <div className="w-full h-1/4 bg-gray-300 flex flex-col">
        <div className="w-full h-8 bg-pink-200 font-semibold tracker-wider text-black flex items-center justify-center ">
          COTIZACION AL DIA
        </div>
        <div className="w-full h-full bg-gray-800 text-gray-100 flex">
          <div className="h-full w-4/5 flex">
            <div className="h-full w-[15%]  border-r border-gray-600 pl-4">
              <div className="w-full h-1/5 flex items-center justify-center"></div>
              <div className="w-full h-2/5 flex items-center text-2xl">
                EN VIVO
                <img src="/assets/live.gif" alt="" className="w-2 h-2 ml-3" />
              </div>
              <div className="w-full h-1/5 flex items-center text-lg text-center">
                17/04/2024
              </div>
              <div className="w-full h-1/5 flex items-center text-xs">
                16/04/2024
              </div>
            </div>
            <div className="h-full w-5/6 flex">
              <div className="w-1/4 h-full">
                <div className="w-full h-1/5 flex items-center justify-center text-green-400 text-lg border-b-2 border-green-200 ">
                  OFICIAL
                </div>
                <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                  $880&nbsp; <span className="text-gray-400">(+2.3%)</span>
                </div>

                <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                  $875&nbsp; <span className="text-gray-400">(+5.4%)</span>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center text-xs">
                  812 <span className="text-gray-400">(+5.9%)</span>
                </div>
              </div>
              <div className="w-1/4 h-full">
                <div className="w-full h-1/5 flex items-center justify-center text-blue-400 text-lg border-b-2 border-blue-200">
                  BLUE
                </div>
                <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                  $880&nbsp; <span className="text-gray-400">(+2.3%)</span>
                </div>

                <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                  $875&nbsp; <span className="text-gray-400">(+5.4%)</span>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center text-xs">
                  812&nbsp; <span className="text-gray-400">(+5.9%)</span>
                </div>
              </div>
              <div className="w-1/4 h-full">
                <div className="w-full h-1/5 flex items-center justify-center text-red-400 text-lg border-b-2 border-red-200">
                  MEP
                </div>
                <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                  $880&nbsp; <span className="text-gray-400">(+2.3%)</span>
                </div>

                <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                  $875&nbsp; <span className="text-gray-400">(+5.4%)</span>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center text-xs">
                  812&nbsp; <span className="text-gray-400">(+5.9%)</span>
                </div>
              </div>
              <div className="w-1/4 h-full">
                <div className="w-full h-1/5 flex items-center justify-center text-yellow-400 text-lgx border-b-2 border-yellow-200">
                  TARJETA
                </div>
                <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                  $880&nbsp; <span className="text-gray-400">(+2.3%)</span>
                </div>

                <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                  $875&nbsp; <span className="text-gray-400">(+5.4%)</span>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center text-xs">
                  812&nbsp; <span className="text-gray-400">(+5.9%)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-1/5 border-l border-gray-600 pl-4">
            <div className="w-full h-1/3 items-center flex ">
              <div className="h-full w-1/2 items-center flex text-cyan-400">
                CCL
              </div>
              <div className="h-full w-1/2 items-center flex">
                {" "}
                812&nbsp; <span className="text-gray-400">(+5.9%)</span>
              </div>
            </div>
            <div className="w-full h-1/3 items-center flex">
              {" "}
              <div className="h-full w-1/2 items-center flex text-orange-400">
                Mayorista
              </div>
              <div className="h-full w-1/2 items-center flex">
                {" "}
                812&nbsp; <span className="text-gray-400">(+5.9%)</span>
              </div>
            </div>
            <div className="w-full h-1/3 items-center flex">
              {" "}
              <div className="h-full w-1/2 items-center flex text-pink-400">
                Cripto
              </div>
              <div className="h-full w-1/2 items-center flex">
                {" "}
                812&nbsp; <span className="text-gray-400">(+5.9%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
