import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import GraficoGastosCotidianos from "./GraficoGastosCotidianos";

const data = {
  marzo: {
    alquiler: 284561,
    luz: 7699,
    gas: "-",
    internet: 24000,
    celular: 6948,
    pan: 1980.05,
    leche: 1114.65,
    yerba: 3771.89,
    cerveza: 2005.49,
    cafe: 3200,
    carne: 8487.04,
    coca: 2029.38,
    fideos: 1235.25,
  },
  abril: {
    alquiler: 290615,
    luz: 7699,
    gas: "-",
    internet: 27999,
    celular: 7988,
    pan: 2086.96,
    leche: 1196.96,
    yerba: 3869.81,
    cerveza: 2091.11,
    cafe: 3200,
    carne: 9022.9,
    coca: 2030.26,
    fideos: 1180.75,
  },
};

const calculateSingleVariation = (current, previous) => {
  if (current === "-" || previous === "-") return "-";

  const currentNumber = parseFloat(current);
  const previousNumber = parseFloat(previous);

  // Check if previousNumber is NaN or if it's 0 (for March, when there's no previous month)
  if (isNaN(currentNumber) || isNaN(previousNumber) || previousNumber === 0)
    return "-";

  const variation = ((currentNumber - previousNumber) / previousNumber) * 100;

  if (variation > 0) {
    return `+${variation.toFixed(2)}%`;
  } else {
    return `${variation.toFixed(2)}%`;
  }
};

const getVariations = (data) => {
  const months = Object.keys(data);
  const variations = {};

  for (let i = 0; i < months.length; i++) {
    const currentMonth = months[i];
    const previousMonth = i === 0 ? null : months[i - 1];
    variations[currentMonth] = {};

    if (previousMonth) {
      for (const category in data[currentMonth]) {
        variations[currentMonth][category] = calculateSingleVariation(
          data[currentMonth][category],
          data[previousMonth][category]
        );
      }
    } else {
      // Handle the first month where there's no previous month
      for (const category in data[currentMonth]) {
        variations[currentMonth][category] = "-";
      }
    }
  }

  return variations;
};

const variaciones = getVariations(data);

const ServiciosMes = ({ mesData, graficoOEtiquetas }) => {
  const [showServicios, setShowServicios] = useState(true);

  const toggleSection = () => {
    setShowServicios(!showServicios);
  };

  const formatNumber = (number) => {
    if (number === "-" || isNaN(number)) {
      return number;
    }

    return parseFloat(number).toLocaleString();
  };
  console.log(variaciones[mesData]);

  return (
    <div className="w-full h-full flex items-center justify-center relative ">
      {graficoOEtiquetas ? (
        <FiArrowRightCircle
          className="absolute right-24 text-orange-400 top-1/2 animate-pulse duration-1000 cursor-pointer"
          size={50}
          onClick={toggleSection}
        />
      ) : (
        ""
      )}

      {graficoOEtiquetas ? (
        <div className="w-4/5 flex h-4/5 ">
          <div className="w-1/3 h-full flex flex-col justify-between pl-4 items-start">
            <div className="text-3xl absolute top-2 left-[8%] text-fill font-black">
              SERVICIOS
            </div>
            <div className="text-3xl absolute top-2 right-[8%] text-fill font-black">
              ALIMENTOS
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around shadow-lg">
              <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                LUZ
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
                <img src="/assets/luz.png" alt="" />
              </div>
              <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -right-4 p-2 border-2 border-yellow-500">
                {variaciones[mesData].luz}
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].luz !== "-"
                    ? `$${formatNumber(data[mesData].luz)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around shadow-lg">
              <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                GAS
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
                <img src="/assets/gas.png" alt="" />
              </div>
              <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -right-4 p-2 border-2 border-yellow-500">
                {variaciones[mesData].gas}
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].gas !== "-"
                    ? `$${formatNumber(data[mesData].gas)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around shadow-lg">
              <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                TV + INTERNET
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
                {" "}
                <img src="/assets/internet.png" alt="" />
              </div>
              <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -right-4 p-2 border-2 border-yellow-500">
                {variaciones[mesData].internet}
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].internet !== "-"
                    ? `$${formatNumber(data[mesData].internet)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around shadow-lg">
              <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                CELULAR
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
                {" "}
                <img src="/assets/celular.png" alt="" />
              </div>
              <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -right-4 p-2 border-2 border-yellow-500">
                {variaciones[mesData].celular}
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].celular !== "-"
                    ? `$${formatNumber(data[mesData].celular)}`
                    : "-"}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full flex flex-col justify-around items-center border-x-2 border-yellow-400 p-4 relative">
            <div className="w-24 h-0.5 bg-yellow-400 absolute top-5 -left-[15%]"></div>
            <div className="w-24 h-0.5 bg-yellow-400 absolute top-1/3 -left-[15%]"></div>
            <div className="w-24 h-0.5 bg-yellow-400 absolute bottom-1 text-xs flex items-center justify-center font-semibold/3 -left-[15%]"></div>
            <div className="w-24 h-0.5 bg-yellow-400 absolute bottom-5 -left-[15%]"></div>
            <div className="w-24 h-0.5 bg-yellow-400 absolute top-5 -right-[15%]"></div>
            <div className="w-24 h-0.5 bg-yellow-400 absolute top-1/3 -right-[15%]"></div>
            <div className="w-24 h-0.5 bg-yellow-400 absolute bottom-1 text-xs flex items-center justify-center font-semibold/3 -right-[15%]"></div>
            <div className="w-24 h-0.5 bg-yellow-400 absolute bottom-5 -right-[15%]"></div>
            <div className="w-full h-3/4 rounded">
              <img src="/assets/house.png" alt="" className="w-full h-full" />
            </div>
            <div className="w-72 h-32 bg-yellow-300 rounded-xl border-yellow-500 border-2 relative flex items-end pb-7 justify-around">
              <div className="w-80 h-12 absolute -top-4  rounded-xl bg-yellow-100 border-yellow-500 border flex items-center justify-center font-bold">
                ALQUILER MONOAMBIENTE
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].alquiler !== "-"
                    ? `$${formatNumber(data[mesData].alquiler)}`
                    : "-"}
                </div>
              </div>
            </div>
          </div>
          {showServicios ? (
            <div className="w-1/3 h-full flex flex-col justify-between pr-4 items-end">
              <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around shadow-xl">
                <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                  KILO DE PAN
                </div>
                <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                  {" "}
                  <img src="/assets/pan.png" alt="" />
                </div>
                <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -left-4 p-2 border-2 border-yellow-500">
                  {variaciones[mesData].pan}
                </div>
                <div className="text-4xl">
                  <div className="text-4xl">
                    {data[mesData].pan !== "-"
                      ? `$${formatNumber(data[mesData].pan)}`
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around shadow-xl">
                <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                  LITRO DE LECHE{" "}
                </div>
                <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                  <img src="/assets/leche.png" alt="" />
                </div>
                <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -left-4 p-2 border-2 border-yellow-500">
                  {variaciones[mesData].pan}
                </div>
                <div className="text-4xl">
                  <div className="text-4xl">
                    {data[mesData].leche !== "-"
                      ? `$${formatNumber(data[mesData].leche)}`
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around shadow-xl">
                <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                  KILO DE YERBA{" "}
                </div>
                <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                  {" "}
                  <img src="/assets/yerba.png" alt="" />
                </div>
                <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -left-4 p-2 border-2 border-yellow-500">
                  {variaciones[mesData].yerba}
                </div>
                <div className="text-4xl">
                  <div className="text-4xl">
                    {data[mesData].yerba !== "-"
                      ? `$${formatNumber(data[mesData].yerba)}`
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around shadow-xl">
                <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                  FIDEOS
                </div>
                <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500 flex items-center justify-center">
                  {" "}
                  <img
                    src="/assets/fideos.png"
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -left-4 p-2 border-2 border-yellow-500">
                  {variaciones[mesData].fideos}
                </div>
                <div className="text-4xl">
                  <div className="text-4xl">
                    {data[mesData].fideos !== "-"
                      ? `$${formatNumber(data[mesData].fideos)}`
                      : "-"}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-1/3 h-full flex flex-col justify-between pr-4 items-end">
              <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around shadow-xl">
                <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                  COCA COLA
                </div>
                <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                  {" "}
                  <img src="/assets/coca.png" alt="" />
                </div>
                <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -left-4 p-2 border-2 border-yellow-500">
                  {variaciones[mesData].coca}
                </div>
                <div className="text-4xl">
                  <div className="text-4xl">
                    {data[mesData].coca !== "-"
                      ? `$${formatNumber(data[mesData].coca)}`
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around shadow-xl">
                <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                  CAFE{" "}
                </div>
                <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500 flex items-center justify-center">
                  {" "}
                  <img src="/assets/cafe.png" alt="" className="h-full" />
                </div>
                <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -left-4 p-2 border-2 border-yellow-500">
                  {variaciones[mesData].cafe}
                </div>
                <div className="text-4xl">
                  <div className="text-4xl">
                    {data[mesData].cafe !== "-"
                      ? `$${formatNumber(data[mesData].cafe)}`
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around shadow-xl">
                <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                  KILO DE CARNE{" "}
                </div>
                <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                  {" "}
                  <img src="/assets/carne.png" alt="" />
                </div>
                <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -left-4 p-2 border-2 border-yellow-500">
                  {variaciones[mesData].carne}
                </div>
                <div className="text-4xl">
                  <div className="text-4xl">
                    {data[mesData].carne !== "-"
                      ? `$${formatNumber(data[mesData].carne)}`
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around shadow-xl">
                <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                  LITRO DE CERVEZA
                </div>
                <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                  {" "}
                  <img src="/assets/cerveza.png" alt="" />
                </div>
                <div className="w-14 h-8 bg-white rounded-xl absolute bottom-1 text-xs flex items-center justify-center font-semibold -left-4 p-2 border-2 border-yellow-500">
                  {variaciones[mesData].cerveza}
                </div>
                <div className="text-4xl">
                  <div className="text-4xl">
                    {data[mesData].cerveza !== "-"
                      ? `$${formatNumber(data[mesData].cerveza)}`
                      : "-"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <GraficoGastosCotidianos
          data={data}
          variaciones={variaciones}
          mesData={mesData}
        />
      )}
    </div>
  );
};

export default ServiciosMes;
