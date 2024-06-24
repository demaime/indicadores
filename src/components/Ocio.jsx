import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = {
  abril: {
    fiesta: 7000,
    netflix: 4299,
    gym: 17588,
    cine: 5926,
    combo: 7900,
    libro: 21882,
    teatro: 15000,
  },
  mayo: {
    fiesta: 8000,
    netflix: 4299,
    gym: 20008,
    cine: 6185,
    combo: 8600,
    libro: 22326,
    teatro: 15000,
  },
};

export default function Ocio() {
  const meses = ["abril", "mayo"];
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );

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
  return (
    <div className="h-full w-full bg-gray-200">
      <div className="w-full h-[5%] bg-gray-600 text-white flex justify-center items-center">
        <FaArrowLeft className="cursor-pointer" onClick={handleMesAnterior} />
        <span className="mx-4 flex items-center justify-center w-1/3">
          {mesSeleccionado.toUpperCase()}
        </span>
        <FaArrowRight className="cursor-pointer" onClick={handleMesSiguiente} />
      </div>
      <div className="w-full h-[95%] p-2">
        {" "}
        <div className="w-full h-1/3 flex justify-evenly">
          <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-blue-400 bg-blue-200 relative  ">
            <h1 className="text-blue-400 text-3xl font-bold">
              ${data[mesSeleccionado].fiesta.toLocaleString()}
            </h1>
            <div className="w-24 h-24 rounded-full bg-blue-400 absolute -bottom-8 -right-12">
              <img src="/assets/fiesta.png" className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-red-400 bg-red-200 relative flex items-center justify-center   ">
            <h1 className="text-red-400 text-3xl font-bold">
              ${data[mesSeleccionado].combo.toLocaleString()}
            </h1>

            <div className="w-24 h-24 rounded-full bg-red-400 absolute -bottom-8 -left-12">
              {" "}
              <img src="/assets/combo.png" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-evenly">
          {" "}
          <div className="w-48 h-48 flex items-center justify-end pr-2 rounded-full border-8 border-green-400 bg-green-200 relative    ">
            <h1 className="text-green-400 text-3xl font-bold">
              ${data[mesSeleccionado].gym.toLocaleString()}
            </h1>
            <div className="w-24 h-24 rounded-full bg-green-400 absolute top-1/4 -left-1/4">
              {" "}
              <img src="/assets/gym.png" className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-yellow-400 bg-yellow-200 relative  ">
            <h1 className="text-yellow-400 text-3xl font-bold">
              ${data[mesSeleccionado].cine.toLocaleString()}
            </h1>
            <div className="w-24 h-24 rounded-full bg-yellow-400 absolute -top-1/4 left-1/4">
              {" "}
              <img src="/assets/cine.png" className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="w-48 h-48 flex items-center justify-start pl-2 rounded-full border-8 border-purple-400 bg-purple-200 relative  ">
            <h1 className="text-purple-400 text-3xl font-bold">
              ${data[mesSeleccionado].teatro.toLocaleString()}
            </h1>
            <div className="w-24 h-24 rounded-full bg-purple-400 absolute top-1/4 -right-1/4">
              {" "}
              <img src="/assets/teatro.png" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-evenly">
          <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-pink-400 bg-pink-200 relative  ">
            <h1 className="text-pink-400 text-3xl font-bold">
              ${data[mesSeleccionado].netflix.toLocaleString()}
            </h1>
            <div className="w-24 h-24 rounded-full bg-pink-400 absolute -top-8 -right-12">
              {" "}
              <img src="/assets/netflix.png" className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-orange-400 bg-orange-200 relative  ">
            <h1 className="text-orange-400 text-3xl font-bold">
              ${data[mesSeleccionado].libro.toLocaleString()}
            </h1>
            <div className="w-24 h-24 rounded-full bg-orange-400 absolute -top-8 -left-12">
              <img src="/assets/libro.png" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
