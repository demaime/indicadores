import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import TicketPromedio from "./TicketPromedio";
import VentasxM2 from "./VentasxM2";
import PersonalOcupado from "./PersonalOcupado";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO"];
const data = {
  ENERO: {
    intermensual: -3.4,
    interanual: -13.8,
    acumulada: -13.8,
    efectivo: 232481,
    debito: 355548,
    credito: 435277,
    otrosMediosDePago: 79777,
    salonDeVenta: 1071681,
    online: 31402,
    ticketPromedio: 13857,
    ventasPorM2: 330115,
    personalOcupado: 100105,
  },
  FEBRERO: {
    intermensual: 0.5,
    interanual: -11.4,
    acumulada: -12.7,
    efectivo: 241843,
    debito: 375962,
    credito: 483315,
    otrosMediosDePago: 91593,
    salonDeVenta: 1158080,
    online: 34634,
    ticketPromedio: 15797,
    ventasPorM2: 355764,
    personalOcupado: 99829,
  },
  MARZO: {
    intermensual: 0.1,
    interanual: -9.3,
    acumulada: -11.5,
    efectivo: 277515,
    debito: 438829,
    credito: 592790,
    otrosMediosDePago: 113766,
    salonDeVenta: 1384218,
    online: 38682,
    ticketPromedio: 17536,
    ventasPorM2: 423723,
    personalOcupado: 99861,
  },
  ABRIL: {
    intermensual: -3.3,
    interanual: -17.6,
    acumulada: -13,
    efectivo: 233013,
    debito: 410326,
    credito: 582602,
    otrosMediosDePago: 109163,
    salonDeVenta: 1294626,
    online: 40479,
    ticketPromedio: 17564,
    ventasPorM2: 397215,
    personalOcupado: 99257,
  },
  MAYO: {
    intermensual: 3.9,
    interanual: -9.7,
    acumulada: -12.4,
    efectivo: 243754,
    debito: 426181,
    credito: 623234,
    otrosMediosDePago: 120907,
    salonDeVenta: 1362228,
    online: 51849,
    ticketPromedio: 18625,
    ventasPorM2: 420571,
    personalOcupado: 98761,
  },
};

const intermensualData = meses.map((mes) => ({
  mes,
  intermensual: data[mes].intermensual,
}));
const interanualData = meses.map((mes) => ({
  mes,
  interanual: data[mes].interanual,
}));
const acumuladaData = meses.map((mes) => ({
  mes,
  acumulada: data[mes].acumulada,
}));

export default function Supermercados() {
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [vista, setVista] = useState("general");

  const handleMesAnterior = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    const newIndex = currentIndex === 0 ? meses.length - 1 : currentIndex - 1;
    setMesSeleccionado(meses[newIndex]);
  };

  const handleMesSiguiente = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    const newIndex = currentIndex === meses.length - 1 ? 0 : currentIndex + 1;
    setMesSeleccionado(meses[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handleMesAnterior();
      } else if (event.key === "ArrowRight") {
        handleMesSiguiente();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mesSeleccionado]);

  const getArrowAndColor = (value) => {
    if (value > 0) {
      return {
        arrow: <FaArrowUp className="mr-2 mt-1" size={35} />,
        color: "text-green-500",
      };
    } else if (value < 0) {
      return {
        arrow: <FaArrowDown className="mr-2 mt-1" size={35} />,
        color: "text-red-500",
      };
    } else {
      return { arrow: null, color: "text-gray-500" };
    }
  };

  const { arrow, color } = getArrowAndColor(data[mesSeleccionado].intermensual);

  const COLORS = ["#405D72", "#EE9322", "#557A46", "#DD5746"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const medioDePagoData = [
    { name: "Efectivo", value: data[mesSeleccionado].efectivo },
    { name: "Debito", value: data[mesSeleccionado].debito },
    { name: "Credito", value: data[mesSeleccionado].credito },
    {
      name: "Otros Medios de Pago",
      value: data[mesSeleccionado].otrosMediosDePago,
    },
  ];

  const getPorcentajeCambio = (actual, anterior) => {
    if (meses.indexOf(mesSeleccionado) === 0) {
      return null; // Retorna null si es enero
    }
    return (((actual - anterior) / anterior) * 100).toFixed(1);
  };

  return (
    <div className="w-full h-full bg-gray-200">
      <div className="w-full h-[5%] bg-gray-600 text-white flex justify-center items-center">
        <FaArrowLeft className="cursor-pointer" onClick={handleMesAnterior} />
        <span className="mx-4 flex items-center justify-center w-1/3">
          {mesSeleccionado.toUpperCase()}
        </span>
        <FaArrowRight className="cursor-pointer" onClick={handleMesSiguiente} />
      </div>
      {vista === "general" ? (
        <div className="w-full h-[95%] flex">
          <div className="w-2/3 h-full">
            <div className="w-full h-1/2 flex items-center justify-evenly">
              <div className="w-1/4 h-3/4 rounded border shadow-lg flex flex-col items-center justify-between p-1">
                <p className="text-xs font-semibold">Variación intermensual</p>
                <div className={`flex items-center text-5xl ${color}`}>
                  {arrow}
                  <h1>{data[mesSeleccionado].intermensual}%</h1>
                </div>
                <ResponsiveContainer width="90%" height="60%">
                  <LineChart
                    data={intermensualData}
                    margin={{ top: 10, left: -35, bottom: 0, right: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" tick={{ fontSize: 8, fill: "gray" }} />
                    <YAxis tick={{ fontSize: 8, fill: "gray" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      labelStyle={{ color: "white" }}
                      itemStyle={{ color: "white" }}
                    />
                    <ReferenceLine y={0} stroke="gray" strokeDasharray="3 3" />
                    <ReferenceLine
                      x={mesSeleccionado}
                      stroke="black"
                      strokeDasharray="3 3"
                    />
                    <Line
                      type="monotone"
                      dataKey="intermensual"
                      stroke="#8884d8"
                      dot={{ r: 1 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/4 h-3/4 rounded border shadow-lg flex flex-col items-center justify-between p-1">
                <p className="text-xs font-semibold">Variación interanual</p>
                <div
                  className={`flex items-center text-5xl ${
                    getArrowAndColor(data[mesSeleccionado].interanual).color
                  }`}
                >
                  {getArrowAndColor(data[mesSeleccionado].interanual).arrow}
                  <h1>{data[mesSeleccionado].interanual}%</h1>
                </div>
                <ResponsiveContainer width="90%" height="60%">
                  <LineChart
                    data={interanualData}
                    margin={{ top: 10, left: -35, bottom: 0, right: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" tick={{ fontSize: 8, fill: "gray" }} />
                    <YAxis tick={{ fontSize: 8, fill: "gray" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      labelStyle={{ color: "white" }}
                      itemStyle={{ color: "white" }}
                    />
                    <ReferenceLine y={0} stroke="gray" strokeDasharray="3 3" />
                    <ReferenceLine
                      x={mesSeleccionado}
                      stroke="black"
                      strokeDasharray="3 3"
                    />
                    <Line
                      type="monotone"
                      dataKey="interanual"
                      stroke="#82ca9d"
                      dot={{ r: 1 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/4 h-3/4 rounded border shadow-lg flex flex-col items-center justify-between p-1">
                <p className="text-xs font-semibold">Variación acumulada</p>
                <div
                  className={`flex items-center text-5xl ${
                    getArrowAndColor(data[mesSeleccionado].acumulada).color
                  }`}
                >
                  {getArrowAndColor(data[mesSeleccionado].acumulada).arrow}
                  <h1>{data[mesSeleccionado].acumulada}%</h1>
                </div>
                <ResponsiveContainer width="90%" height="60%">
                  <LineChart
                    data={acumuladaData}
                    margin={{ top: 10, left: -35, bottom: 0, right: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" tick={{ fontSize: 8, fill: "gray" }} />
                    <YAxis tick={{ fontSize: 8, fill: "gray" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      labelStyle={{ color: "white" }}
                      itemStyle={{ color: "white" }}
                    />
                    <ReferenceLine y={0} stroke="gray" strokeDasharray="3 3" />
                    <ReferenceLine
                      x={mesSeleccionado}
                      stroke="black"
                      strokeDasharray="3 3"
                    />
                    <Line
                      type="monotone"
                      dataKey="acumulada"
                      stroke="#ffc658"
                      dot={{ r: 1 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="w-full h-1/2 flex items-center justify-evenly">
              <div className="w-2/5 h-3/4 rounded border shadow-lg flex flex-col items-center justify-center relative">
                <p className="text-xs text-center mb-1 font-semibold">
                  Ventas por medio de pago{" "}
                </p>
                <span className="text-gray-500 text-[8px]">
                  (Millones de pesos)
                </span>
                <ResponsiveContainer width="100%" height="80%">
                  <PieChart>
                    <Pie
                      data={medioDePagoData}
                      cx="25%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {medioDePagoData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute bottom-2 right-2 h-4/5 w-1/2 text-md text-center ">
                  <ul className="flex flex-col items-center justify-around h-full">
                    <li style={{ color: COLORS[0] }}>Efectivo</li>
                    <li>{data[mesSeleccionado].efectivo.toLocaleString()}</li>
                    <li style={{ color: COLORS[1] }}>Tarjeta de Débito</li>
                    <li>{data[mesSeleccionado].debito.toLocaleString()}</li>
                    <li style={{ color: COLORS[2] }}>Tarjeta de Crédito</li>
                    <li>{data[mesSeleccionado].credito.toLocaleString()}</li>
                    <li style={{ color: COLORS[3] }}>Otros medios de pago</li>
                    <li>
                      {data[mesSeleccionado].otrosMediosDePago.toLocaleString()}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-2/5 h-3/4 rounded border shadow-lg flex flex-col items-center justify-center relative">
                <p className="text-xs text-center mb-1 font-semibold">
                  Ventas por tipo de canal
                </p>
                <span className="text-gray-500 text-[8px]">
                  (Millones de pesos)
                </span>
                <ResponsiveContainer width="100%" height="80%">
                  <PieChart>
                    <Pie
                      data={[
                        {
                          name: "Salon de venta",
                          value: data[mesSeleccionado].salonDeVenta,
                        },
                        {
                          name: "Online",
                          value: data[mesSeleccionado].online,
                        },
                      ]}
                      cx="25%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#82ca9d"
                      dataKey="value"
                    >
                      {[
                        {
                          name: "Salon de venta",
                          value: data[mesSeleccionado].salonDeVenta,
                        },
                        {
                          name: "Online",
                          value: data[mesSeleccionado].online,
                        },
                      ].map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute bottom-2 right-2 h-4/5 w-1/2 text-md text-center ">
                  <ul className="flex flex-col items-center justify-around h-full py-8">
                    <li style={{ color: COLORS[0] }}>Salón de Ventas</li>
                    <li>
                      {data[mesSeleccionado].salonDeVenta.toLocaleString()}
                    </li>
                    <li style={{ color: COLORS[1] }}>Canal Online</li>
                    <li>{data[mesSeleccionado].online.toLocaleString()}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center justify-evenly ">
            <div className="w-4/5 h-1/4 rounded border shadow-lg flex flex-col items-center justify-center relative">
              <div className="absolute w-10 h-10 left-4">
                <img src="/assets/factura.png" alt="" />
              </div>
              <BsFillPlusCircleFill
                onClick={() => setVista("ticket")}
                className="absolute -right-5 bottom-1/2 transform translate-y-1/2 text-gray-600 w-10 h-10 hover:scale-125 hover:text-gray-700 hover:cursor-pointer"
              />

              <p className="text-xs font-semibold">Ticket promedio</p>
              <div className="flex items-center text-5xl text-gray-500">
                <h1>
                  ${data[mesSeleccionado].ticketPromedio.toLocaleString()}
                </h1>
              </div>
              {meses.indexOf(mesSeleccionado) !== 0 && (
                <span
                  className={
                    getPorcentajeCambio(
                      data[mesSeleccionado].ticketPromedio,
                      data[meses[meses.indexOf(mesSeleccionado) - 1]]
                        .ticketPromedio
                    ) < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  (
                  {getPorcentajeCambio(
                    data[mesSeleccionado].ticketPromedio,
                    data[meses[meses.indexOf(mesSeleccionado) - 1]]
                      .ticketPromedio
                  )}
                  %)
                </span>
              )}
            </div>
            <div className="w-4/5 h-1/4 rounded border shadow-lg flex flex-col items-center justify-center relative">
              <div className="absolute w-10 h-10 left-4">
                <img src="/assets/argentina.png" alt="" />
              </div>
              <BsFillPlusCircleFill
                onClick={() => setVista("ventas")}
                className="absolute -right-5 bottom-1/2 transform translate-y-1/2 text-gray-600 w-10 h-10 hover:scale-125 hover:text-gray-700 hover:cursor-pointer"
              />
              <p className="text-xs text-center font-semibold">
                Ventas totales por m2
              </p>
              <div className="flex items-center text-5xl text-gray-500">
                <h1>${data[mesSeleccionado].ventasPorM2.toLocaleString()}</h1>
              </div>
              {meses.indexOf(mesSeleccionado) !== 0 && (
                <span
                  className={
                    getPorcentajeCambio(
                      data[mesSeleccionado].ventasPorM2,
                      data[meses[meses.indexOf(mesSeleccionado) - 1]]
                        .ventasPorM2
                    ) < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  (
                  {getPorcentajeCambio(
                    data[mesSeleccionado].ventasPorM2,
                    data[meses[meses.indexOf(mesSeleccionado) - 1]].ventasPorM2
                  )}
                  %)
                </span>
              )}
            </div>
            <div className="w-4/5 h-1/4 rounded border shadow-lg flex flex-col items-center justify-center relative">
              <div className="absolute w-10 h-10 left-4">
                <img src="/assets/equipo.png" alt="" />
              </div>
              <BsFillPlusCircleFill
                onClick={() => setVista("personal")}
                className="absolute -right-5 bottom-1/2 transform translate-y-1/2 text-gray-600 w-10 h-10 hover:scale-125 hover:text-gray-700 hover:cursor-pointer"
              />
              <p className="text-xs text-center font-semibold">
                Personal ocupado
              </p>
              <div className="flex items-center text-5xl text-gray-500">
                <h1>
                  {data[mesSeleccionado].personalOcupado.toLocaleString()}
                </h1>
              </div>
              {meses.indexOf(mesSeleccionado) !== 0 && (
                <span
                  className={
                    getPorcentajeCambio(
                      data[mesSeleccionado].personalOcupado,
                      data[meses[meses.indexOf(mesSeleccionado) - 1]]
                        .personalOcupado
                    ) < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  (
                  {getPorcentajeCambio(
                    data[mesSeleccionado].personalOcupado,
                    data[meses[meses.indexOf(mesSeleccionado) - 1]]
                      .personalOcupado
                  )}
                  %)
                </span>
              )}
            </div>
          </div>
        </div>
      ) : vista === "ticket" ? (
        <TicketPromedio vista={vista} setVista={setVista} />
      ) : vista === "ventas" ? (
        <VentasxM2
          vista={vista}
          setVista={setVista}
          mesSeleccionado={mesSeleccionado}
        />
      ) : vista === "personal" ? (
        <PersonalOcupado vista={vista} setVista={setVista} />
      ) : (
        <></>
      )}
    </div>
  );
}
