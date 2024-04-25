import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import axios from "axios";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function DolarNuevo() {
  const [mesSeleccionado, setMesSeleccionado] = useState("abril");
  const [porcentajeOmoneda, setPorcentajeOmoneda] = useState("porcentaje");
  const [promediosOficial2024, setPromediosOficial2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
  });
  const [promediosBlue2024, setPromediosBlue2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
  });
  const [promediosMep2024, setPromediosMep2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
  });
  const [promediosTarjeta2024, setPromediosTarjeta2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
  });
  const [promediosCcl2024, setPromediosCcl2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
  });
  const [promediosCripto2024, setPromediosCripto2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
  });
  const [promediosMayorista2024, setPromediosMayorista2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
  });

  const promedioOficial = parseFloat(promediosOficial2024[mesSeleccionado]);
  const promedioBlue = parseFloat(promediosBlue2024[mesSeleccionado]);
  const promedioMep = parseFloat(promediosMep2024[mesSeleccionado]);
  const promedioTarjeta = parseFloat(promediosTarjeta2024[mesSeleccionado]);
  const promedioCcl = parseFloat(promediosCcl2024[mesSeleccionado]);
  const promedioCripto = parseFloat(promediosCripto2024[mesSeleccionado]);
  const promedioMayorista = parseFloat(promediosMayorista2024[mesSeleccionado]);

  const data = [
    {
      name: "oficial",
      minValue: 0,
      maxValue: promedioOficial,
      color: "#4ade80",
    },
    {
      name: "mayorista",
      minValue: promedioOficial,
      maxValue: promedioMayorista,
      color: "#fb923c",
    },
    {
      name: "blue",
      minValue: promedioOficial,
      maxValue: promedioBlue,
      color: "#60a5fa",
    },
    {
      name: "mep",
      minValue: promedioOficial,
      maxValue: promedioMep,
      color: "#f87171",
    },
    {
      name: "ccl",
      minValue: promedioOficial,
      maxValue: promedioCcl,
      color: "#22d3ee",
    },
    {
      name: "cripto",
      minValue: promedioOficial,
      maxValue: promedioCripto,
      color: "#f472b6",
    },
    {
      name: "tarjeta",
      minValue: promedioOficial,
      maxValue: promedioTarjeta,
      color: "#facc15",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/oficial"
        );
        // Calcular el promedio de ventas para cada mes
        const dataOficial2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const promedios = {
          enero: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          // Agrega más meses si es necesario
        };
        setPromediosOficial2024(promedios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/blue"
        );
        // Calcular el promedio de ventas para cada mes
        const dataBlue2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const promedios = {
          enero: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          // Agrega más meses si es necesario
        };
        setPromediosBlue2024(promedios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/bolsa"
        );
        // Calcular el promedio de ventas para cada mes
        const dataMep2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const promedios = {
          enero: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
        };
        setPromediosMep2024(promedios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/tarjeta"
        );
        // Calcular el promedio de ventas para cada mes
        const dataTarjeta2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const promedios = {
          enero: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
        };
        setPromediosTarjeta2024(promedios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/contadoconliqui"
        );
        // Calcular el promedio de ventas para cada mes
        const dataCcl2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const promedios = {
          enero: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
        };
        setPromediosCcl2024(promedios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/cripto"
        );
        // Calcular el promedio de ventas para cada mes
        const dataCripto2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const promedios = {
          enero: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
        };
        setPromediosCripto2024(promedios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/mayorista"
        );
        // Calcular el promedio de ventas para cada mes
        const dataMayorista2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const promedios = {
          enero: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
        };
        setPromediosMayorista2024(promedios);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

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
      labelFontColor: "#FFFFFF",
      titleFontColor: "#FFFFFF",
      minimum: 600,
      maximum: 1600,
      interval: 100,
    },
    axisX: {
      labelFontColor: "#FFFFFF",
    },
    backgroundColor: "transparent",
    data: [
      {
        type: "rangeColumn",
        dataPointWidth: 30,
        indexLabel: "",
        dataPoints: data.map((entry) => ({
          label: entry.name.toUpperCase(),
          y: [entry.minValue, entry.maxValue],
          color: entry.color,
        })),
      },
    ],
    toolTip: {
      content: function (e) {
        var content = " ";
        var entry = e.entries[0].dataPoint;
        var maxValue = entry.y[1];
        var difference = maxValue - promedioOficial;
        content += `<strong>${entry.label}</strong><br/>`;
        content += `Valor: $${maxValue}<br/>`;
        content += `Diferencia con el valor oficial: $${difference.toFixed(
          2
        )}<br/>`;
        return content;
      },
    },
  };

  const evolutivo = [
    {
      mes: "enero",
      oficial: promediosOficial2024.enero,
      mayorista: promediosMayorista2024.enero,
      blue: promediosBlue2024.enero,
      mep: promediosMep2024.enero,
      ccl: promediosCcl2024.enero,
      cripto: promediosCripto2024.enero,
      tarjeta: promediosTarjeta2024.enero,
    },
    {
      mes: "febrero",
      oficial: promediosOficial2024.febrero,
      mayorista: promediosMayorista2024.febrero,
      blue: promediosBlue2024.febrero,
      mep: promediosMep2024.febrero,
      ccl: promediosCcl2024.febrero,
      cripto: promediosCripto2024.febrero,
      tarjeta: promediosTarjeta2024.febrero,
    },
    {
      mes: "marzo",
      oficial: promediosOficial2024.marzo,
      mayorista: promediosMayorista2024.marzo,
      blue: promediosBlue2024.marzo,
      mep: promediosMep2024.marzo,
      ccl: promediosCcl2024.marzo,
      cripto: promediosCripto2024.marzo,
      tarjeta: promediosTarjeta2024.marzo,
    },

    {
      mes: "abril",
      oficial: promediosOficial2024.abril,
      mayorista: promediosMayorista2024.abril,
      blue: promediosBlue2024.abril,
      mep: promediosMep2024.abril,
      ccl: promediosCcl2024.abril,
      cripto: promediosCripto2024.abril,
      tarjeta: promediosTarjeta2024.abril,
    },
  ];

  const tiposDolar = Object.keys(evolutivo[0]).filter((key) => key !== "mes");

  const getColorByName = (name) => {
    const tipo = data.find((item) => item.name === name);
    return tipo ? tipo.color : "#000000"; // Si no se encuentra el tipo, devuelve un color negro
  };

  const minDomain = 600;
  const maxDomain = 1600;
  const increment = 100;
  const numberOfLines = Math.floor((maxDomain - minDomain) / increment) + 1;

  const yAxisDomain = [minDomain, maxDomain];

  // Ajustar el dominio para que haya líneas cada 100 unidades
  if (numberOfLines > 10) {
    // Redondear el mínimo hacia abajo al múltiplo de 100 más cercano
    const roundedMin = Math.floor(minDomain / increment) * increment;
    // Redondear el máximo hacia arriba al múltiplo de 100 más cercano
    const roundedMax = Math.ceil(maxDomain / increment) * increment;
    yAxisDomain[0] = roundedMin;
    yAxisDomain[1] = roundedMax;
  }

  // Calcular las líneas del eje Y
  const yLines = [];
  for (let i = yAxisDomain[0]; i <= yAxisDomain[1]; i += increment) {
    yLines.push(i);
  }

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
                  <span className="w-full h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    ${promedioOficial}
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                    + / -
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-orange-400">
                  {" "}
                  <span className="w-full h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    ${promedioMayorista}
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    $
                    {porcentajeOmoneda === "porcentaje"
                      ? (
                          ((promedioMayorista - promedioOficial) /
                            promedioOficial) *
                          100
                        ).toFixed(2) + "%"
                      : (promedioMayorista - promedioOficial).toFixed(2)}
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-blue-400">
                  {" "}
                  <span className="w-full h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    ${promedioBlue}
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    $
                    {porcentajeOmoneda === "porcentaje"
                      ? (
                          ((promedioBlue - promedioOficial) / promedioOficial) *
                          100
                        ).toFixed(2) + "%"
                      : (promedioBlue - promedioOficial).toFixed(2)}
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-red-400">
                  {" "}
                  <span className="w-full h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    ${promedioMep}
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    $
                    {porcentajeOmoneda === "porcentaje"
                      ? (
                          ((promedioMep - promedioOficial) / promedioOficial) *
                          100
                        ).toFixed(2) + "%"
                      : (promedioMep - promedioOficial).toFixed(2)}
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-cyan-400">
                  {" "}
                  <span className="w-full h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    ${promedioCcl}
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    $
                    {porcentajeOmoneda === "porcentaje"
                      ? (
                          ((promedioCcl - promedioOficial) / promedioOficial) *
                          100
                        ).toFixed(2) + "%"
                      : (promedioCcl - promedioOficial).toFixed(2)}
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-pink-400">
                  {" "}
                  <span className="w-full h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    ${promedioCripto}
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    $
                    {porcentajeOmoneda === "porcentaje"
                      ? (
                          ((promedioCripto - promedioOficial) /
                            promedioOficial) *
                          100
                        ).toFixed(2) + "%"
                      : (promedioCripto - promedioOficial).toFixed(2)}
                  </span>
                </div>
                <div className="h-full w-[10%] rounded bg-yellow-400">
                  {" "}
                  <span className="w-full h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    ${promedioTarjeta}
                  </span>
                  <span className="w-full border-t border-gray-300 h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                    $
                    {porcentajeOmoneda === "porcentaje"
                      ? (
                          ((promedioTarjeta - promedioOficial) /
                            promedioOficial) *
                          100
                        ).toFixed(2) + "%"
                      : (promedioTarjeta - promedioOficial).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="absolute left-4 w-16 rounded h-14 bg-white top-4 z-40 text-black py-2">
                <span className="w-full h-1/2 text-[10px] flex items-center justify-center text-gray-800 font-semibold">
                  Valor
                </span>
                <span className="w-full border-t border-gray-300 h-1/2 text-xs flex items-center justify-center text-gray-800 font-semibold">
                  Diferencia
                </span>
              </div>
            </div>
          </div>
          <div className="h-full w-1/3 ">
            <div className="h-[10%] w-full flex flex-col items-center justify-evenly">
              <div className="flex w-full h-2/3">
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
              <div className="h-1/3 w-full flex items-center justify-center">
                <button className="text-yellow-200">
                  {mesSeleccionado ? mesSeleccionado.toUpperCase() : "MES"}
                </button>
              </div>
            </div>
            <div className="h-[90%] w-full relative">
              <div className="absolute top-3 w-full flex ">
                <div className="w-[10%] bg-red-40 h-full border-r-2 border-gray-600 flex flex-col justify-between">
                  <button
                    className="w-10 h-6 bg-blue-900 p-2 rounded flex items-center justify-center my-1"
                    onClick={() => setPorcentajeOmoneda("porcentaje")}
                  >
                    %
                  </button>
                  <button
                    className="w-10 h-6 bg-blue-900 p-2 rounded flex items-center justify-center my-1"
                    onClick={() => setPorcentajeOmoneda("moneda")}
                  >
                    $
                  </button>
                </div>
                <div className="w-[90%] pl-2 h-full">cosas</div>
              </div>
            </div>
          </div>
          <div className="h-full w-1/3">
            <ResponsiveContainer height={"90%"}>
              <LineChart
                className="p-2 font-bold text-white"
                width={1030}
                height={350}
                data={evolutivo}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                style={{ color: "white" }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis domain={yAxisDomain} tick={yLines} />
                <Tooltip />

                {tiposDolar.map((tipo, index) => (
                  <Line
                    key={index}
                    type="monotone"
                    dataKey={tipo}
                    name={tipo}
                    stroke={getColorByName(tipo)}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="w-full h-1/4 bg-gray-300 flex flex-col">
        <div className="w-full h-8 bg-pink-200 font-semibold tracker-wider text-black flex items-center justify-center ">
          COTIZACION AL DIA
        </div>
        |
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
