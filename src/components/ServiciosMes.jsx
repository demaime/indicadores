import React from "react";

const ServiciosMes = ({ mes }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-4/5 flex h-4/5 ">
        <div className="w-1/3 h-full flex flex-col justify-between pl-4 items-start">
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              LUZ
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
              {" "}
              <img src="/assets/luz.png" alt="" />
            </div>
            <div className="text-4xl">$1545.32</div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              GAS
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
              {" "}
              <img src="/assets/gas.png" alt="" />
            </div>
            <div className="text-4xl">$1545.32</div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              INTERNET
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
              {" "}
              <img src="/assets/internet.png" alt="" />
            </div>
            <div className="text-4xl">$1545.32</div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pl-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -right-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              CELULAR
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -left-4 p-2 border-l-4 border-yellow-500">
              {" "}
              <img src="/assets/celu.png" alt="" />
            </div>
            <div className="text-4xl">$1545.32</div>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-around items-center">
          <div className="w-full h-3/4 rounded">
            <img src="/assets/house.png" alt="" className="w-full h-full" />
          </div>
          <div className="w-72 h-32 bg-yellow-300 rounded-xl border-yellow-500 border-2 relative flex items-end pb-7 justify-around">
            <div className="w-80 h-12 absolute -top-4  rounded-xl bg-yellow-100 border-yellow-500 border flex items-center justify-center font-bold">
              ALQUILER MONOAMBIENTE
            </div>
            <div className="text-5xl">$1545.32</div>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-between p-4 items-end">
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              KILO DE PAN
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
              {" "}
              <img src="/assets/pan.png" alt="" />
            </div>
            <div className="text-4xl">$1545.32</div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              LITRO DE LECHE{" "}
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
              {" "}
              <img src="/assets/leche.png" alt="" />
            </div>
            <div className="text-4xl">$1545.32</div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              KILO DE YERBA{" "}
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
              {" "}
              <img src="/assets/yerba.png" alt="" />
            </div>
            <div className="text-4xl">$1545.32</div>
          </div>
          <div className="w-72 h-24 bg-yellow-200 rounded-xl border-yellow-400 border-2 relative flex items-end pb-5 pr-4 justify-around">
            <div className="w-72 h-8 absolute -top-4 -left-6 rounded-xl bg-yellow-100 border-yellow-400 border flex items-center justify-center font-bold">
              LITRO DE CERVEZA
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute -right-4 p-2 border-r-4 border-yellow-500">
              {" "}
              <img src="/assets/cerveza.png" alt="" />
            </div>
            <div className="text-4xl">$1545.32</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosMes;
