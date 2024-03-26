import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function Monotributo() {
  const meses = ["diciembre", "enero", "febrero"];
  const [mesIndex, setMesIndex] = useState(meses.length - 1);

  const dataMonotributo = [
    { Mes: "diciembre", Valor: 5750.75 },
    { Mes: "enero", Valor: 12128.39 },
    { Mes: "febrero", Valor: 12128.39 },
  ];

  const dataIngresosbrutos = [
    { Mes: "diciembre", Valor: 3750 },
    { Mes: "enero", Valor: 7080 },
    { Mes: "febrero", Valor: 7080 },
  ];

  const handlePrevMonth = () => {
    setMesIndex((prevIndex) =>
      prevIndex === 0 ? meses.length - 1 : prevIndex - 1
    );
  };

  const handleNextMonth = () => {
    setMesIndex((prevIndex) =>
      prevIndex === meses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getValorMensual = (data, mesIndex) => {
    return data[mesIndex].Valor.toLocaleString();
  };

  const getVariacionMensual = (data, mesIndex) => {
    if (mesIndex === 0) {
      return 0;
    } else {
      return (
        ((data[mesIndex].Valor - data[mesIndex - 1].Valor) /
          data[mesIndex - 1].Valor) *
        100
      );
    }
  };

  const getVariacionAcumuladaAnual = (data, mesIndex) => {
    if (mesIndex === 0) {
      return 0;
    } else {
      return ((data[mesIndex].Valor - data[0].Valor) / data[0].Valor) * 100;
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">${payload[0].value}</p>
        </div>
      );
    }

    return null;
  };

  const CustomYAxisTick = (props) => {
    const { x, y, payload, color } = props;
    return (
      <text x={x} y={y} dy={0} fill={color} fontSize={12} textAnchor="end">
        {`$${payload.value.toLocaleString()}`}
      </text>
    );
  };
  const CustomizedAxisTick = (props) => {
    const { x, y, payload, fill } = props;
    return (
      <text x={x} y={y} dy={16} fill={fill} fontSize={12} textAnchor="middle">
        {payload.value}
      </text>
    );
  };

  const renderCustomizedLabel = (props) => {
    const { x, y, value, fill } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <circle r={4} fill={fill} />
        <text
          x={0}
          y={-10}
          dy={0}
          fill={fill}
          fontSize={12}
          fontWeight="bold"
          textAnchor="middle"
        >
          {`$${value.toLocaleString()}`}
        </text>
      </g>
    );
  };

  const roundToNearestThousand = (value) => {
    return Math.ceil(value / 1000) * 1000;
  };

  const maxMonotributo = roundToNearestThousand(
    Math.max(...dataMonotributo.map((item) => item.Valor))
  );
  const maxIngresosBrutos = roundToNearestThousand(
    Math.max(...dataIngresosbrutos.map((item) => item.Valor))
  );
  const maxYValue = Math.max(maxMonotributo, maxIngresosBrutos);

  return (
    <div className="w-full h-full relative flex flex-col">
      <div className="w-full h-[5%] flex items-center text-center justify-center font-black py-6 text-xl">
        <div className="flex w-1/3 flex justify-between items-center">
          <div onClick={handlePrevMonth} className="cursor-pointer">
            <BsChevronLeft />
          </div>
          <div className="">{meses[mesIndex].toUpperCase()}</div>
          <div onClick={handleNextMonth} className="cursor-pointer">
            <BsChevronRight />
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 bg-gray-700 flex ">
        <div className="h-full w-1/2 flex flex-col items-center justify-between">
          <h1 className="bg-yellow-200 border-b-4 border-l-2 border-yellow-600 font-bold p-1 pl-6 w-full rounded-r-xl">
            MONOTRIBUTO CATEGORIA A (SERVICIOS)
          </h1>
          <ResponsiveContainer width="90%" height="80%">
            <AreaChart data={dataMonotributo}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="Mes"
                tick={<CustomizedAxisTick fill="#ffffff" />}
              />
              <YAxis
                tick={<CustomYAxisTick color="#6b7280" />}
                domain={[0, maxYValue]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="Valor"
                stroke="#fef08a"
                fill="#facc15"
              >
                <LabelList
                  dataKey="Valor"
                  content={renderCustomizedLabel}
                  fill="#facc15"
                />
              </Area>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-between bg-gray-300">
          <h1 className="bg-yellow-200 border-b-4 border-r-2 border-yellow-600 font-bold p-1 pr-6 w-full rounded-l-xl text-right">
            INGRESOS BRUTOS CATEGORIA A
          </h1>
          <ResponsiveContainer width="90%" height="80%">
            <AreaChart data={dataIngresosbrutos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="Mes"
                tick={<CustomizedAxisTick fill="#000000" />}
              />
              <YAxis
                tick={<CustomYAxisTick color="#6b7280" />}
                domain={[0, maxYValue]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="Valor"
                stroke="#facc15"
                fill="#fef08a"
              >
                <LabelList dataKey="Valor" content={renderCustomizedLabel} />
              </Area>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full h-1/2 bg-gray-700 flex">
        <div className="h-full w-1/2 flex flex-col justify-evenly items-center">
          <div className="h-1/2 w-full flex items-center justify-center">
            {" "}
            <div className="w-64 h-32 bg-gray-300 border-4 border-yellow-400 rounded-xl">
              <h2 className="w-full bg-yellow-400 text-gray-700 text-center font-bold">
                VALOR MENSUAL
              </h2>
              <span className="text-gray-700 text-3xl flex justify-center items-center flex-col h-24 w-full">
                $ {getValorMensual(dataMonotributo, mesIndex)}
              </span>
            </div>
          </div>
          <div className="h-1/2 w-full flex items-center justify-evenly">
            {" "}
            <div className="w-52 h-20 bg-gray-300 border-4 border-yellow-400 rounded-xl">
              {" "}
              <h2 className="w-full bg-yellow-400 text-gray-700 text-center text-xs font-bold">
                VARIACION MENSUAL
              </h2>
              <span className="text-gray-700 text-2xl flex justify-center items-center flex-col h-14 w-full">
                {getVariacionMensual(dataMonotributo, mesIndex)
                  .toFixed(1)
                  .toLocaleString()}
                pp.
              </span>
            </div>
            <div className="w-52 h-20 bg-gray-300 border-4 border-yellow-400 rounded-xl">
              <h2 className="w-full bg-yellow-400 text-gray-700 text-center text-xs font-bold">
                VARIACION ACUMULADA ANUAL
              </h2>
              <span className="text-gray-700 text-2xl flex justify-center items-center flex-col h-14 w-full">
                {getVariacionAcumuladaAnual(dataMonotributo, mesIndex)
                  .toFixed(1)
                  .toLocaleString()}
                pp.
              </span>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-evenly items-center bg-gray-300">
          <div className="h-1/2 w-full flex items-center justify-center">
            {" "}
            <div className="w-64 h-32 bg-gray-700 border-4 border-yellow-400 rounded-xl">
              <h2 className="w-full bg-yellow-400 text-gray-700 text-center font-bold">
                VALOR MENSUAL
              </h2>
              <span className="text-gray-200 text-3xl flex justify-center items-center flex-col h-24 w-full">
                $ {getValorMensual(dataIngresosbrutos, mesIndex)}
              </span>
            </div>
          </div>
          <div className="h-1/2 w-full flex items-center justify-evenly">
            {" "}
            <div className="w-52 h-20 bg-gray-700 border-4 border-yellow-400 rounded-xl">
              {" "}
              <h2 className="w-full bg-yellow-400 text-gray-700 text-center text-xs font-bold">
                VARIACION MENSUAL
              </h2>
              <span className="text-gray-200 text-2xl flex justify-center items-center flex-col h-14 w-full">
                {getVariacionMensual(dataIngresosbrutos, mesIndex)
                  .toFixed(1)
                  .toLocaleString()}
                pp.
              </span>
            </div>
            <div className="w-52 h-20 bg-gray-700 border-4 border-yellow-400 rounded-xl">
              <h2 className="w-full bg-yellow-400 text-gray-700 text-center text-xs font-bold">
                VARIACION ACUMULADA ANUAL
              </h2>
              <span className="text-gray-200 text-2xl flex justify-center items-center flex-col h-14 w-full">
                {getVariacionAcumuladaAnual(dataIngresosbrutos, mesIndex)
                  .toFixed(1)
                  .toLocaleString()}
                pp.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
