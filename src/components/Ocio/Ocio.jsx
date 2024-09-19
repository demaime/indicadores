import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import OcioGrafico from "./OcioGrafico";

const data = {
  abril: {
    fiesta: 7000,
    plataforma: 4299,
    gimnasio: 17588,
    cine: 5926,
    combo: 7900,
    libro: 21882,
    teatro: 15000,
  },
  mayo: {
    fiesta: 8000,
    plataforma: 4299,
    gimnasio: 20008,
    cine: 6185,
    combo: 8600,
    libro: 22326,
    teatro: 15000,
  },
  junio: {
    fiesta: 10000,
    plataforma: 4299,
    gimnasio: 21240,
    cine: 6716,
    combo: 8600,
    libro: 22626,
    teatro: 15000,
  },
  julio: {
    combo: 9500,
    plataforma: 5121,
    cine: 7295,
    teatro: 19000,
    gimnasio: 22690,
    libro: 23642,
    fiesta: 14000,
  },
};

const calcularVariacion = (valorActual, valorAnterior) => {
  return ((valorActual - valorAnterior) / valorAnterior) * 100;
};

const calcularVariacionesIntermensuales = (data) => {
  const variaciones = {};
  const meses = Object.keys(data);

  for (let i = 1; i < meses.length; i++) {
    const mesActual = meses[i];
    const mesAnterior = meses[i - 1];
    variaciones[mesActual] = {};

    for (const categoria in data[mesActual]) {
      const valorActual = data[mesActual][categoria];
      const valorAnterior = data[mesAnterior][categoria];
      variaciones[mesActual][categoria] = calcularVariacion(
        valorActual,
        valorAnterior
      ).toFixed(2);
    }
  }

  variaciones[meses[0]] = {};
  for (const categoria in data[meses[0]]) {
    variaciones[meses[0]][categoria] = "-";
  }

  return variaciones;
};

const calcularVariacionesAcumuladas = (data) => {
  const variaciones = {};
  const meses = Object.keys(data);
  const mesInicial = meses[0]; // abril

  for (let i = 2; i < meses.length; i++) {
    const mesActual = meses[i];
    variaciones[mesActual] = {};

    for (const categoria in data[mesActual]) {
      const valorActual = data[mesActual][categoria];
      const valorInicial = data[mesInicial][categoria];
      variaciones[mesActual][categoria] = calcularVariacion(
        valorActual,
        valorInicial
      ).toFixed(2);
    }
  }

  // No hay variaciones acumuladas para abril y mayo
  variaciones[meses[0]] = {};
  variaciones[meses[1]] = {};
  for (const categoria in data[meses[0]]) {
    variaciones[meses[0]][categoria] = "-";
    variaciones[meses[1]][categoria] = "-";
  }

  return variaciones;
};

const variacionesItermensuales = calcularVariacionesIntermensuales(data);
const variacionesAcumuladas = calcularVariacionesAcumuladas(data);

export default function Ocio() {
  const meses = ["abril", "mayo", "junio", "julio"];
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="h-full w-full ">
      <div className="w-full h-[5%] bg-gray-600 text-white flex justify-center items-center">
        <FaArrowLeft className="cursor-pointer" onClick={handleMesAnterior} />
        <span className="mx-4 flex items-center justify-center w-1/3">
          {mesSeleccionado.toUpperCase()}
        </span>
        <FaArrowRight className="cursor-pointer" onClick={handleMesSiguiente} />
      </div>
      <div className="w-full h-[95%] flex texture-bg ">
        <div className="w-1/2 h-full pt-6">
          <div className="w-full h-1/3 flex justify-evenly">
            <div
              className="w-44 h-44 flex items-center justify-center rounded-full border-8 border-blue-400 bg-blue-200 relative shadow-xl shadow-gray-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick("fiesta")}
            >
              <h1 className="text-blue-500 text-3xl font-bold">
                ${data[mesSeleccionado].fiesta.toLocaleString()}
              </h1>
              <h1 className="bg-blue-400 text-xl font-bold absolute flex items-center justify-center top-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
                Fiesta
              </h1>
              <div className="w-20 h-20 rounded-full bg-blue-400 absolute -bottom-8 -right-12">
                <img
                  src="/assets/fiesta.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div
              className="w-44 h-44 flex items-center justify-center rounded-full border-8 border-red-400 bg-red-200 relative flex items-center justify-center    shadow-xl shadow-gray-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick("combo")}
            >
              <h1 className="text-red-500 text-3xl font-bold">
                ${data[mesSeleccionado].combo.toLocaleString()}
              </h1>
              <h1 className="bg-red-400 text-xl font-bold absolute flex items-center justify-center top-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
                Combo
              </h1>

              <div className="w-20 h-20 rounded-full bg-red-400 absolute -bottom-8 -left-12">
                {" "}
                <img src="/assets/combo.png" className="w-full h-full" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full h-1/3 flex justify-evenly">
            {" "}
            <div
              className="w-44 h-44 flex items-center justify-end pr-2 rounded-full border-8 border-green-400 bg-green-200 relative     shadow-xl shadow-gray-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick("gimnasio")}
            >
              <h1 className="text-green-500 text-3xl font-bold">
                ${data[mesSeleccionado].gimnasio.toLocaleString()}
              </h1>
              <h1 className="bg-green-400 text-xl font-bold absolute flex items-center justify-center top-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
                Gimnasio
              </h1>
              <div className="w-20 h-20 rounded-full bg-green-400 absolute top-1/3 -left-1/3">
                {" "}
                <img
                  src="/assets/gimnasio.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div
              className="w-44 h-44 flex items-center justify-center rounded-full border-8 border-yellow-400 bg-yellow-200 relative   shadow-xl shadow-gray-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick("cine")}
            >
              <h1 className="text-yellow-500 text-3xl font-bold">
                ${data[mesSeleccionado].cine.toLocaleString()}
              </h1>
              <h1 className="bg-yellow-400 text-xl font-bold absolute flex items-center justify-center bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
                Cine
              </h1>
              <div className="w-20 h-20 rounded-full bg-yellow-400 absolute -top-1/4 left-1/4">
                {" "}
                <img src="/assets/cine.png" className="w-full h-full" alt="" />
              </div>
            </div>
            <div
              className="w-44 h-44 flex items-center justify-start pl-2 rounded-full border-8 border-purple-400 bg-purple-200 relative   shadow-xl shadow-gray-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick("teatro")}
            >
              <h1 className="text-purple-500 text-3xl font-bold">
                ${data[mesSeleccionado].teatro.toLocaleString()}
              </h1>
              <h1 className="bg-purple-400 text-xl font-bold absolute flex items-center justify-center top-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
                Teatro
              </h1>
              <div className="w-20 h-20 rounded-full bg-purple-400 absolute top-1/3 -right-1/3">
                {" "}
                <img
                  src="/assets/teatro.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-full h-1/3 flex justify-evenly">
            <div
              className="w-44 h-44 flex items-center justify-center rounded-full border-8 border-pink-400 bg-pink-200 relative   shadow-xl shadow-gray-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick("plataforma")}
            >
              <h1 className="text-pink-500 text-3xl font-bold">
                ${data[mesSeleccionado].plataforma.toLocaleString()}
              </h1>
              <h1 className="bg-pink-400 text-xl font-bold absolute flex items-center justify-center bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
                Plataforma
              </h1>
              <div className="w-20 h-20 rounded-full bg-pink-400 absolute -top-8 -right-12">
                {" "}
                <img
                  src="/assets/plataforma.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div
              className="w-44 h-44 flex items-center justify-center rounded-full border-8 border-orange-400 bg-orange-200 relative   shadow-xl shadow-gray-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick("libro")}
            >
              <h1 className="text-orange-500 text-3xl font-bold">
                ${data[mesSeleccionado].libro.toLocaleString()}
              </h1>
              <h1 className="bg-orange-400 text-xl font-bold absolute flex items-center justify-center bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg border-4 px-4 border-white text-white">
                Libro
              </h1>
              <div className="w-20 h-20 rounded-full bg-orange-400 absolute -top-8 -left-12">
                <img src="/assets/libro.png" className="w-full h-full" alt="" />
              </div>
            </div>
          </div>
        </div>
        <OcioGrafico
          data={data}
          mesSeleccionado={mesSeleccionado}
          variacionesItermensuales={variacionesItermensuales}
          variacionesAcumuladas={variacionesAcumuladas}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
