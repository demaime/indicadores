import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    mes: "Enero",
    caba: 405218,
    norte: 335845,
    suroeste: 236770,
  },
  {
    mes: "Febrero",
    caba: 416991,
    norte: 363590,
    suroeste: 256858,
  },
  {
    mes: "Marzo",
    caba: 422502,
    norte: 372792,
    suroeste: 267105,
  },
];

export default function Alquiler() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [compararCaba, setCompararCaba] = useState(true);
  const [compararNorte, setCompararNorte] = useState(0);
  const [compararSur, setCompararSur] = useState(0);

  // Función para avanzar al siguiente mes
  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al mes anterior
  const prevMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Función para extraer los datos de una ubicación específica (caba, norte o suroeste)
  const getDataForLocation = (location) => {
    return data.map((monthData) => ({
      mes: monthData.mes,
      [location]: monthData[location],
    }));
  };

  const roundToNearestTen = (num) => {
    return Math.round(num / 10) * 10;
  };

  const max = roundToNearestTen(
    Math.max(
      ...data.map((monthData) =>
        Math.max(monthData.caba, monthData.norte, monthData.suroeste)
      )
    )
  );
  const paddingTop = max * 0.1;

  // Función para formatear los números con separadores de miles
  const formatWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Función para formatear los números que se muestran sobre las barras
  const formatBarLabel = (value) => {
    return formatWithCommas(value);
  };

  const calculateVariation = (location) => {
    let totalVariation = 0;
    for (let i = 1; i < data.length; i++) {
      const currentMonthValue = data[i][location];
      const previousMonthValue = data[i - 1][location];
      const monthVariation =
        ((currentMonthValue - previousMonthValue) / previousMonthValue) * 100;
      totalVariation += monthVariation;
    }
    return totalVariation.toFixed(2);
  };

  const calculateMonthlyVariation = (location, selectedIndex) => {
    if (selectedIndex === 0) {
      return 0; // Si es el primer mes, la variación mensual es 0
    }

    const currentMonthValue = data[selectedIndex][location];
    const previousMonthValue = data[selectedIndex - 1][location];

    const percentChange =
      ((currentMonthValue - previousMonthValue) / previousMonthValue) * 100;

    return percentChange.toFixed(2);
  };

  const calculateAnnualCumulativeVariation = (location, selectedIndex) => {
    let cumulativeVariation = 0;
    for (let i = 0; i <= selectedIndex; i++) {
      cumulativeVariation += parseFloat(calculateMonthlyVariation(location, i));
    }

    return cumulativeVariation;
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-1/4 bg-gray-400">
        <div className="w-full bg-gray-300 justify-center items-center h-1/5 flex font-black">
          <div className="flex items-center justify-around w-1/4">
            <button onClick={prevMonth}>{"<"}</button>
            <div className="w-full bg-gray-300 text-center h-1/5">
              {data[currentMonthIndex].mes}
            </div>
            <button onClick={nextMonth}>{">"}</button>
          </div>
        </div>
        <div className="w-full h-4/5 flex">
          <div className="w-1/3 h-full text-xs">
            <div className="w-full h-1/2 flex items-center justify-evenly">
              <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between">
                <span className="w-full h-1/3 text-center ">
                  Variación mes anterior
                </span>
                <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                  {calculateMonthlyVariation("caba", currentMonthIndex)}%
                </span>
              </div>
              <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between">
                <span className="w-full h-1/3 text-center ">
                  Variación acumulada
                </span>
                <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                  {calculateAnnualCumulativeVariation(
                    "caba",
                    currentMonthIndex
                  )}
                  %
                </span>
              </div>
            </div>
            <div className="w-full h-1/2 flex items-center justify-center">
              {compararCaba ? (
                <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between mr-4">
                  <span className="w-full h-1/3 text-center bg-[#82ca9d] text-black">
                    Vs GBA NORTE
                  </span>
                  <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                    {(
                      ((data[currentMonthIndex].caba -
                        data[currentMonthIndex].norte) /
                        data[currentMonthIndex].norte) *
                      100
                    ).toFixed(2) > 0 && "+ "}
                    {(
                      ((data[currentMonthIndex].caba -
                        data[currentMonthIndex].norte) /
                        data[currentMonthIndex].norte) *
                      100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              ) : (
                <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between mr-4">
                  <span className="w-full h-1/3 text-center bg-[#ffc658] text-black">
                    Vs GBA SUR/OESTE
                  </span>
                  <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                    {(
                      ((data[currentMonthIndex].caba -
                        data[currentMonthIndex].suroeste) /
                        data[currentMonthIndex].suroeste) *
                      100
                    ).toFixed(2) > 0 && "+ "}
                    {(
                      ((data[currentMonthIndex].caba -
                        data[currentMonthIndex].suroeste) /
                        data[currentMonthIndex].suroeste) *
                      100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              )}
              <FaExchangeAlt
                size={20}
                onClick={() => setCompararCaba((prevState) => !prevState)}
                className="animate-pulse cursor-pointer"
              />
            </div>
          </div>
          <div className="w-1/3 h-full text-xs">
            <div className="w-full h-1/2 flex items-center justify-evenly">
              <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between">
                <span className="w-full h-1/3 text-center ">
                  Variación mes anterior
                </span>
                <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                  {calculateMonthlyVariation("norte", currentMonthIndex)} %
                </span>
              </div>
              <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between">
                <span className="w-full h-1/3 text-center ">
                  Variación acumulada
                </span>
                <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                  {calculateAnnualCumulativeVariation(
                    "norte",
                    currentMonthIndex
                  )}
                  %
                </span>
              </div>
            </div>
            <div className="w-full h-1/2 flex items-center justify-center">
              {compararNorte ? (
                <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between mr-4">
                  <span className="w-full h-1/3 text-center bg-[#8884d8] text-black">
                    Vs CABA
                  </span>
                  <span className="w-full h-2/3 flex items-center justify-center border-t text-lg ">
                    {(
                      ((data[currentMonthIndex].norte -
                        data[currentMonthIndex].caba) /
                        data[currentMonthIndex].caba) *
                      100
                    ).toFixed(2) > 0 && "+ "}
                    {(
                      ((data[currentMonthIndex].norte -
                        data[currentMonthIndex].caba) /
                        data[currentMonthIndex].caba) *
                      100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              ) : (
                <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between mr-4">
                  <span className="w-full h-1/3 text-center bg-[#ffc658] text-black">
                    Vs GBA SUR/OESTE
                  </span>
                  <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                    {(
                      ((data[currentMonthIndex].norte -
                        data[currentMonthIndex].suroeste) /
                        data[currentMonthIndex].suroeste) *
                      100
                    ).toFixed(2) > 0 && "+ "}
                    {(
                      ((data[currentMonthIndex].norte -
                        data[currentMonthIndex].suroeste) /
                        data[currentMonthIndex].suroeste) *
                      100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              )}
              <FaExchangeAlt
                size={20}
                onClick={() => setCompararNorte((prevState) => !prevState)}
                className="animate-pulse cursor-pointer"
              />
            </div>
          </div>
          <div className="w-1/3 h-full text-xs">
            <div className="w-full h-1/2 flex items-center justify-evenly">
              <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between">
                <span className="w-full h-1/3 text-center ">
                  Variación mes anterior
                </span>
                <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                  {calculateMonthlyVariation("suroeste", currentMonthIndex)}%
                </span>
              </div>
              <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between">
                <span className="w-full h-1/3 text-center ">
                  Variación acumulada
                </span>
                <span className="w-full h-2/3 flex items-center justify-center border-t text-lg">
                  {calculateAnnualCumulativeVariation(
                    "suroeste",
                    currentMonthIndex
                  )}
                  %
                </span>
              </div>
            </div>
            <div className="w-full h-1/2 flex items-center justify-center">
              {compararSur ? (
                <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between mr-4">
                  <span className="w-full h-1/3 text-center bg-[#82ca9d] text-black">
                    Vs GBA NORTE
                  </span>
                  <span className="w-full h-2/3 flex items-center justify-center border-t text-lg ">
                    {(
                      ((data[currentMonthIndex].suroeste -
                        data[currentMonthIndex].norte) /
                        data[currentMonthIndex].norte) *
                      100
                    ).toFixed(2) > 0 && "+ "}
                    {(
                      ((data[currentMonthIndex].suroeste -
                        data[currentMonthIndex].norte) /
                        data[currentMonthIndex].norte) *
                      100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              ) : (
                <div className="w-1/3 h-2/3 bg-gray-700 text-gray-200 rounded flex flex-col items-center justify-between mr-4">
                  <span className="w-full h-1/3 text-center bg-[#8884d8] text-black">
                    Vs CABA
                  </span>
                  <span className="w-full h-2/3 flex items-center justify-center border-t text-lg ">
                    {(
                      ((data[currentMonthIndex].suroeste -
                        data[currentMonthIndex].caba) /
                        data[currentMonthIndex].caba) *
                      100
                    ).toFixed(2) > 0 && "+ "}
                    {(
                      ((data[currentMonthIndex].suroeste -
                        data[currentMonthIndex].caba) /
                        data[currentMonthIndex].caba) *
                      100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              )}
              <FaExchangeAlt
                size={20}
                onClick={() => setCompararSur((prevState) => !prevState)}
                className="animate-pulse cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-3/4 w-full">
        <div className="w-1/3 h-full flex flex-col items-center justify-between ">
          <h1 className="bg-[#8884d8] font-black tracker-widest text-xl w-full text-white text-center">
            CABA
          </h1>
          <ResponsiveContainer height={"75%"} width={"85%"}>
            <BarChart
              width={300}
              height={250}
              data={getDataForLocation("caba")}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" tick={{ fontWeight: "bold" }} />
              <YAxis
                domain={[0, max + paddingTop]}
                tickFormatter={formatWithCommas} // Formatear con separadores de miles
                tick={{ fontWeight: "bold", fontSize: "12px" }}
              />
              <Tooltip />
              <Bar
                dataKey="caba"
                fill="#8884d8"
                label={{ position: "top", formatter: formatBarLabel }} // Formatear el número sobre la barra
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="w-full flex items-center justify-center rounded h-12 text-center bg-[#8884d8]">
            Variación anual acumulada:&nbsp;
            <span className="font-bold"> {calculateVariation("caba")} %</span>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col items-center justify-between border-x-4">
          <h1 className="bg-[#82ca9d] text-white w-full text-center  font-black tracker-widest text-xl">
            GBA - NORTE
          </h1>
          <ResponsiveContainer height={"75%"} width={"85%"}>
            <BarChart
              width={300}
              height={250}
              data={getDataForLocation("norte")}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" tick={{ fontWeight: "bold" }} />
              <YAxis
                domain={[0, max + paddingTop]}
                tickFormatter={formatWithCommas} // Formatear con separadores de miles
                tick={{ fontWeight: "bold", fontSize: "12px" }}
              />
              <Tooltip />
              <Bar
                dataKey="norte"
                fill="#82ca9d"
                label={{ position: "top", formatter: formatBarLabel }} // Formatear el número sobre la barra
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="w-full flex items-center justify-center rounded h-12 text-center bg-[#82ca9d]">
            Variación anual acumulada:&nbsp;
            <span className="font-bold"> {calculateVariation("norte")} %</span>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col items-center justify-between">
          <h1 className="bg-[#ffc658] font-black tracker-widest text-xl text-white text-center w-full">
            GBA - SUR/OESTE
          </h1>
          <ResponsiveContainer height={"75%"} width={"85%"}>
            <BarChart
              width={300}
              height={250}
              data={getDataForLocation("suroeste")}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" tick={{ fontWeight: "bold" }} />
              <YAxis
                domain={[0, max + paddingTop]}
                tickFormatter={formatWithCommas} // Formatear con separadores de miles
                tick={{ fontWeight: "bold", fontSize: "12px" }}
              />
              <Tooltip />
              <Bar
                dataKey="suroeste"
                fill="#ffc658"
                label={{ position: "top", formatter: formatBarLabel }} // Formatear el número sobre la barra
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="w-full flex items-center justify-center rounded h-12 text-center bg-[#ffc658]">
            Variación anual acumulada:&nbsp;
            <span className="font-bold">
              {" "}
              {calculateVariation("suroeste")} %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
