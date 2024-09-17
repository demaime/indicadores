import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AUH from "./AUH";
import Progresar from "./Progresar";
import DesempleoMaxYMin from "./DesempleoMaxYMin";

export default function AyudaSocial() {
  const data = {
    marzo: {
      auh: { valor: 52553, intermensual: "-" },
      tope_individual: { valor: 1077403, intermensual: "-" },
      tope_familiar: { valor: 2154806, intermensual: "-" },
      progresar: { valor: 20000, intermensual: "-" },
      acomp_social: { valor: 78000, intermensual: "-" },
      desempleo_minimo: { valor: 101400, intermensual: "-" },
      desempleo_maximo: { valor: 202800, intermensual: "-" },
    },
    abril: {
      auh: { valor: 52553, intermensual: 0 },
      tope_individual: { valor: 1077403, intermensual: 0 },
      tope_familiar: { valor: 2154806, intermensual: 0 },
      progresar: { valor: 20000, intermensual: 0 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 101400, intermensual: 0 },
      desempleo_maximo: { valor: 202800, intermensual: 0 },
    },
    mayo: {
      auh: { valor: 52553, intermensual: 0 },
      tope_individual: { valor: 1077403, intermensual: 0 },
      tope_familiar: { valor: 2154806, intermensual: 0 },
      progresar: { valor: 20000, intermensual: 0 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 117158, intermensual: 15.5 },
      desempleo_maximo: { valor: 234315, intermensual: 15.5 },
    },
    junio: {
      auh: { valor: 74354, intermensual: 41.5 },
      tope_individual: { valor: 1524310, intermensual: 41.5 },
      tope_familiar: { valor: 3048620, intermensual: 41.5 },
      progresar: { valor: 20000, intermensual: 0 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 117158, intermensual: 0 },
      desempleo_maximo: { valor: 234315, intermensual: 0 },
    },
    julio: {
      auh: { valor: 77462, intermensual: 4.2 },
      tope_individual: { valor: 1588027, intermensual: 4.2 },
      tope_familiar: { valor: 3176054, intermensual: 4.2 },
      progresar: { valor: 20000, intermensual: 0 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 117158, intermensual: 0 },
      desempleo_maximo: { valor: 234315, intermensual: 0 },
    },
    agosto: {
      auh: { valor: 81010, intermensual: 4.6 },
      tope_individual: { valor: 1660759, intermensual: 4.6 },
      tope_familiar: { valor: 3321518, intermensual: 4.6 },
      progresar: { valor: 20000, intermensual: 0 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 127116, intermensual: 8.5 },
      desempleo_maximo: { valor: 254232, intermensual: 8.5 },
    },
  };

  const meses = Object.keys(data);
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
    <div className="w-full h-full bg-gray-200">
      <div className="w-full h-[5%] bg-gray-800 text-white flex justify-center items-center">
        <FaArrowLeft className="cursor-pointer" onClick={handleMesAnterior} />
        <span className="mx-4 flex items-center justify-center w-1/3">
          {mesSeleccionado.toUpperCase()}
        </span>
        <FaArrowRight className="cursor-pointer" onClick={handleMesSiguiente} />
      </div>
      <div className="w-full h-[95%] flex">
        <AUH data={data} meses={meses} mesSeleccionado={mesSeleccionado} />
        <Progresar
          data={data}
          meses={meses}
          mesSeleccionado={mesSeleccionado}
        />
        <DesempleoMaxYMin
          data={data}
          meses={meses}
          mesSeleccionado={mesSeleccionado}
        />
      </div>
    </div>
  );
}
