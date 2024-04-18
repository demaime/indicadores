import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

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
    pizza: 12450,
    fideo: 1235.25,
  },
  abril: {
    alquiler: "-",
    luz: "-",
    gas: "-",
    internet: "-",
    celular: "-",
    pan: "-",
    leche: "-",
    yerba: "-",
    cerveza: "-",
    cafe: "-",
    carne: "-",
    pizza: "-",
    fideo: "-",
  },
  mayo: {
    alquiler: "-",
    luz: "-",
    gas: "-",
    internet: "-",
    celular: "-",
    pan: "-",
    leche: "-",
    yerba: "-",
    cerveza: "-",
    cafe: "-",
    carne: "-",
    pizza: "-",
    fideo: "-",
  },
};

const ServiciosMes = ({ mesData }) => {
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

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <FiArrowRightCircle
        className="absolute right-24 text-amber-500 top-1/2 animate-pulse duration-1000 cursor-pointer"
        size={50}
        onClick={toggleSection}
      />
      <div className="w-4/5 flex h-4/5 ">
        <div className="w-1/3 h-full flex flex-col justify-between pl-4 items-start">
          <div className="text-3xl absolute top-2 left-[8%] text-fill font-black">
            SERVICIOS
          </div>
          <div className="text-3xl absolute top-2 right-[8%] text-fill font-black">
            ALIMENTOS
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              LUZ
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
              <img src="/assets/luz.png" alt="" />
            </div>
            <div className="text-4xl">
              <div className="text-4xl">
                {data[mesData].luz !== "-"
                  ? `$${formatNumber(data[mesData].luz)}`
                  : "-"}
              </div>
            </div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              GAS
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
              <img src="/assets/gas.png" alt="" />
            </div>
            <div className="text-4xl">
              <div className="text-4xl">
                {data[mesData].gas !== "-"
                  ? `$${formatNumber(data[mesData].gas)}`
                  : "-"}
              </div>
            </div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              INTERNET
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
              {" "}
              <img src="/assets/internet.png" alt="" />
            </div>
            <div className="text-4xl">
              <div className="text-4xl">
                {data[mesData].internet !== "-"
                  ? `$${formatNumber(data[mesData].internet)}`
                  : "-"}
              </div>
            </div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              CELULAR
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
              {" "}
              <img src="/assets/celu.png" alt="" />
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
          <div className="w-24 h-0.5 bg-yellow-400 absolute bottom-1/3 -left-[15%]"></div>
          <div className="w-24 h-0.5 bg-yellow-400 absolute bottom-5 -left-[15%]"></div>
          <div className="w-24 h-0.5 bg-yellow-400 absolute top-5 -right-[15%]"></div>
          <div className="w-24 h-0.5 bg-yellow-400 absolute top-1/3 -right-[15%]"></div>
          <div className="w-24 h-0.5 bg-yellow-400 absolute bottom-1/3 -right-[15%]"></div>
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
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
              <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                KILO DE PAN
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                {" "}
                <img src="/assets/pan.png" alt="" />
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].pan !== "-"
                    ? `$${formatNumber(data[mesData].pan)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
              <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                LITRO DE LECHE{" "}
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                {" "}
                <img src="/assets/leche.png" alt="" />
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].leche !== "-"
                    ? `$${formatNumber(data[mesData].leche)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
              <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                KILO DE YERBA{" "}
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                {" "}
                <img src="/assets/yerba.png" alt="" />
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].yerba !== "-"
                    ? `$${formatNumber(data[mesData].yerba)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
              <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                FIDEOS
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500 flex items-center justify-center">
                {" "}
                <img src="/assets/fideo.png" alt="" className="h-full w-full" />
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].fideo !== "-"
                    ? `$${formatNumber(data[mesData].fideo)}`
                    : "-"}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-1/3 h-full flex flex-col justify-between pr-4 items-end">
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
              <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                PIZZA
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                {" "}
                <img src="/assets/pizza.png" alt="" />
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].pizza !== "-"
                    ? `$${formatNumber(data[mesData].pizza)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
              <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                CAFE{" "}
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500 flex items-center justify-center">
                {" "}
                <img src="/assets/cafe.png" alt="" className="h-full" />
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].cafe !== "-"
                    ? `$${formatNumber(data[mesData].cafe)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
              <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                KILO DE CARNE{" "}
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                {" "}
                <img src="/assets/carne.png" alt="" />
              </div>
              <div className="text-4xl">
                <div className="text-4xl">
                  {data[mesData].carne !== "-"
                    ? `$${formatNumber(data[mesData].carne)}`
                    : "-"}
                </div>
              </div>
            </div>
            <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
              <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
                LITRO DE CERVEZA
              </div>
              <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
                {" "}
                <img src="/assets/cerveza.png" alt="" />
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
    </div>
  );
};

export default ServiciosMes;
