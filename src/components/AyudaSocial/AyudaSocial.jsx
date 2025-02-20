import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DesempleoMaxYMin from "./DesempleoMaxYMin";
import Planes from "./Planes";

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
    septiembre: {
      auh: { valor: 84275, intermensual: 4 },
      tope_individual: { valor: 1727688, intermensual: 4 },
      tope_familiar: { valor: 3455376, intermensual: 4 },
      progresar: { valor: 35000, intermensual: 75 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 134028, intermensual: 5.4 },
      desempleo_maximo: { valor: 268057, intermensual: 5.4 },
    },
    octubre: {
      auh: { valor: 87790, intermensual: 4.2 },
      tope_individual: { valor: 1799733, intermensual: 4.2 },
      tope_familiar: { valor: 3599466, intermensual: 4.2 },
      progresar: { valor: 35000, intermensual: 0 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 135786, intermensual: 1.3 },
      desempleo_maximo: { valor: 271571, intermensual: 1.3 },
    },
    noviembre: {
      auh: { valor: 90837, intermensual: 3.5 },
      tope_individual: { valor: 1862184, intermensual: 3.5 },
      tope_familiar: { valor: 3724368, intermensual: 3.5 },
      progresar: { valor: 35000, intermensual: 0 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 135786, intermensual: 0 },
      desempleo_maximo: { valor: 271571, intermensual: 0 },
    },
    diciembre: {
      auh: { valor: 93281, intermensual: 2.7 },
      tope_individual: { valor: 1912277, intermensual: 2.7 },
      tope_familiar: { valor: 3824554, intermensual: 2.7 },
      progresar: { valor: 35000, intermensual: 0 },
      acomp_social: { valor: 78000, intermensual: 0 },
      desempleo_minimo: { valor: 135786, intermensual: 0 },
      desempleo_maximo: { valor: 271571, intermensual: 0 },
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

  fetch('https://especialess3.lanacion.com.ar/monitor-economia-real/data/trabajadores_registrados.json')
    .then(response => response.json())
    .then(data => {
      console.log('Datos de trabajadores registrados:', data);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });

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
        <div className="w-1/3 h-full shadow shadow-gray-500">
          <DesempleoMaxYMin
            data={data}
            meses={meses}
            mesSeleccionado={mesSeleccionado}
          />
        </div>
        <div className="w-2/3 h-full flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-gray-400  shadow shadow-black">
            <Planes
              data={data}
              meses={meses}
              mesSeleccionado={mesSeleccionado}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
