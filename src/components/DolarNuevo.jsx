import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
// var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const officialValue = 900; // Puedes cambiar este valor según sea necesario

const data = [
  { name: "OFICIAL", minValue: 0, maxValue: officialValue, color: "green" },
  { name: "Blue", minValue: officialValue, maxValue: 850, color: "blue" },
  { name: "CCL", minValue: officialValue, maxValue: 880, color: "cyan" },
  { name: "MEP", minValue: officialValue, maxValue: 920, color: "red" },
  { name: "Cripto", minValue: officialValue, maxValue: 925, color: "pink" },
  { name: "Tarjeta", minValue: officialValue, maxValue: 1070, color: "yellow" },
  {
    name: "Mayorista",
    minValue: officialValue,
    maxValue: 1450,
    color: "orange",
  },
  // Agrega más tipos de cambio aquí si es necesario
];

const options = {
  animationEnabled: true,
  // title: {
  //   text: "Cotización Histórica",
  //   fontColor: "#FFFFFF", // Letras blancas
  // },
  axisY: {
    title: "Valor",
    prefix: "$",
    labelFontColor: "#FFFFFF", // Letras blancas
    titleFontColor: "#FFFFFF", // Letras blancas
    minimum: 700, // Valor mínimo del eje Y
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
      content += `Valor máximo: $${maxValue}<br/>`;
      content += `Diferencia con el valor oficial: $${difference}<br/>`;
      return content;
    },
  },
};

export default function DolarNuevo() {
  return (
    <div className="w-full h-full bg-gray-800 text-gray-100">
      <div className="w-full h-3/4">
        <div className="w-full h-8 bg-yellow-200 font-semibold tracker-wider text-black flex items-center justify-center ">
          COTIZACION HISTORICA
        </div>
        <div className="h-full w-full flex">
          <div className="h-full w-1/3 flex flex-col items-center justify-center">
            <CanvasJSChart
              options={options}
              containerProps={{ width: "100%", height: "85%" }}
            />
          </div>
          <div className="h-full w-1/3"></div>
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
