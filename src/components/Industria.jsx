import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Industria() {
  const dataPyme = {
    enero: {
      intermensual: -9.1,
      acumulada: -9.1,
      interanual: -30,
      capacidad: 70.8,
    },
    febrero: {
      intermensual: -7.7,
      acumulada: -21.7,
      interanual: -9.9,
      capacidad: 70.9,
    },
    marzo: {
      intermensual: -3.4,
      acumulada: -19.1,
      interanual: -11.9,
      capacidad: 70,
    },
    abril: {
      intermensual: 3.1,
      acumulada: -19,
      interanual: -18.3,
      capacidad: 70.1,
    },
  };

  const aperturaIntermensualPyme = {
    enero: {
      "textiles e indumentaria": -2.3,
      "alimentos y bebidas": -8.7,
      "madera y muebles": -13.5,
      "papel e impresiones": -3,
      "quimicos y plasticos": -11.8,
      "metal y maquinaria": -13.5,
    },
    febrero: {
      "textiles e indumentaria": -2.4,
      "alimentos y bebidas": -1.1,
      "madera y muebles": -3,
      "papel e impresiones": -4.8,
      "quimicos y plasticos": -6.2,
      "metal y maquinaria": -4.9,
    },
    marzo: {
      "textiles e indumentaria": -0.5,
      "alimentos y bebidas": -3.6,
      "madera y muebles": -4.4,
      "papel e impresiones": -5,
      "quimicos y plasticos": -4.4,
      "metal y maquinaria": -4.8,
    },
    abril: {
      "textiles e indumentaria": 2.6,
      "alimentos y bebidas": 0.4,
      "madera y muebles": 6,
      "papel e impresiones": 0.2,
      "quimicos y plasticos": 3.9,
      "metal y maquinaria": 4,
    },
  };

  const aperturaInteranualPyme = {
    enero: {
      "textiles e indumentaria": -18.2,
      "alimentos y bebidas": -22,
      "madera y muebles": -30.6,
      "papel e impresiones": -41.7,
      "quimicos y plasticos": -35.6,
      "metal y maquinaria": -34.8,
    },
    febrero: {
      "textiles e indumentaria": 10.5,
      "alimentos y bebidas": -0.3,
      "madera y muebles": -10,
      "papel e impresiones": -24.6,
      "quimicos y plasticos": -23.1,
      "metal y maquinaria": -15.2,
    },
    marzo: {
      "textiles e indumentaria": 10.9,
      "alimentos y bebidas": -5.6,
      "madera y muebles": -11.9,
      "papel e impresiones": -27.4,
      "quimicos y plasticos": -20.7,
      "metal y maquinaria": -16.8,
    },
    abril: {
      "textiles e indumentaria": -0.2,
      "alimentos y bebidas": -13.7,
      "madera y muebles": -15.7,
      "papel e impresiones": -32.3,
      "quimicos y plasticos": -21.6,
      "metal y maquinaria": -23.7,
    },
  };

  const aperturaAcumuladaPyme = {
    enero: {
      "textiles e indumentaria": -2.3,
      "alimentos y bebidas": -8.7,
      "madera y muebles": -13.5,
      "papel e impresiones": -3,
      "quimicos y plasticos": -11.8,
      "metal y maquinaria": -13.5,
    },
    febrero: {
      "textiles e indumentaria": -1.3,
      "alimentos y bebidas": -14.6,
      "madera y muebles": -24.6,
      "papel e impresiones": -26,
      "quimicos y plasticos": -31.2,
      "metal y maquinaria": -27.9,
    },
    marzo: {
      "textiles e indumentaria": 2.3,
      "alimentos y bebidas": -14.2,
      "madera y muebles": -20.1,
      "papel e impresiones": -23.7,
      "quimicos y plasticos": -28.7,
      "metal y maquinaria": -24.5,
    },
    abril: {
      "textiles e indumentaria": -0.1,
      "alimentos y bebidas": -15,
      "madera y muebles": -19.2,
      "papel e impresiones": -23.4,
      "quimicos y plasticos": -27.3,
      "metal y maquinaria": -23.8,
    },
  };

  const colors = {
    "textiles e indumentaria": "#8884d8",
    "alimentos y bebidas": "#f261da",
    "madera y muebles": "#ffc658",
    "papel e impresiones": "#ff8042",
    "quimicos y plasticos": "#8dd1e1",
    "metal y maquinaria": "#a4de6c",
  };

  //acomodar estos objetos. esto es 2023 casi todo
  const capacidadInstaladaIndustria = {
    enero: {
      Textiles: 41.0,
      "Alimentos y bebidas": 60.4,
      "Productos minerales no metálicos": 68.3,
      "Papel y cartón": 76.4,
      "Refinación de petróleo": 84.1,
      "Edición e impresión": 57.9,
      "Productos del tabáco": 55.7,
      "Industrias metálicas": 81.7,
      "Productos de caucho y plástico": 52.2,
      "Industria automotriz": 31.0,
      "Sustancias y productos químicos": 72.1,
      "Metalmecánica (sin automotriz)": 45.3,
      GENERAL: 62.0,
    },
    febrero: {
      Textiles: 52.4,
      "Alimentos y bebidas": 59.3,
      "Productos minerales no metálicos": 74.4,
      "Papel y cartón": 77.2,
      "Refinación de petróleo": 86.0,
      "Edición e impresión": 59.6,
      "Productos del tabáco": 51.7,
      "Industrias metálicas": 74.5,
      "Productos de caucho y plástico": 53.7,
      "Industria automotriz": 60.5,
      "Sustancias y productos químicos": 74.2,
      "Metalmecánica (sin automotriz)": 52.2,
      GENERAL: 65.0,
    },
    marzo: {
      Textiles: 52.5,
      "Alimentos y bebidas": 61.3,
      "Productos minerales no metálicos": 76.3,
      "Papel y cartón": 76.9,
      "Refinación de petróleo": 85.1,
      "Edición e impresión": 62.5,
      "Productos del tabáco": 61.3,
      "Industrias metálicas": 77.2,
      "Productos de caucho y plástico": 58.0,
      "Industria automotriz": 72.5,
      "Sustancias y productos químicos": 72.1,
      "Metalmecánica (sin automotriz)": 57.3,
      GENERAL: 67.3,
    },
    abril: {
      Textiles: 53.9,
      "Alimentos y bebidas": 62.7,
      "Productos minerales no metálicos": 72.3,
      "Papel y cartón": 74.6,
      "Refinación de petróleo": 86.8,
      "Edición e impresión": 60.6,
      "Productos del tabáco": 63.3,
      "Industrias metálicas": 82.0,
      "Productos de caucho y plástico": 56.8,
      "Industria automotriz": 66.6,
      "Sustancias y productos químicos": 77.0,
      "Metalmecánica (sin automotriz)": 61.0,
      GENERAL: 68.9,
    },
    mayo: {
      Textiles: 58.0,
      "Alimentos y bebidas": 64.6,
      "Productos minerales no metálicos": 72.7,
      "Papel y cartón": 78.7,
      "Refinación de petróleo": 83.1,
      "Edición e impresión": 58.1,
      "Productos del tabáco": 65.5,
      "Industrias metálicas": 81.7,
      "Productos de caucho y plástico": 55.9,
      "Industria automotriz": 62.4,
      "Sustancias y productos químicos": 74.5,
      "Metalmecánica (sin automotriz)": 56.3,
      GENERAL: 67.8,
    },
    junio: {
      Textiles: 64.4,
      "Alimentos y bebidas": 64.2,
      "Productos minerales no metálicos": 74.4,
      "Papel y cartón": 77.4,
      "Refinación de petróleo": 82.4,
      "Edición e impresión": 61.2,
      "Productos del tabáco": 56.8,
      "Industrias metálicas": 81.0,
      "Productos de caucho y plástico": 55.4,
      "Industria automotriz": 64.9,
      "Sustancias y productos químicos": 74.7,
      "Metalmecánica (sin automotriz)": 60.1,
      GENERAL: 68.6,
    },
    julio: {
      Textiles: 63.2,
      "Alimentos y bebidas": 61.3,
      "Productos minerales no metálicos": 71.7,
      "Papel y cartón": 77.4,
      "Refinación de petróleo": 82.3,
      "Edición e impresión": 60.2,
      "Productos del tabáco": 59.1,
      "Industrias metálicas": 66.5,
      "Productos de caucho y plástico": 55.4,
      "Industria automotriz": 57.9,
      "Sustancias y productos químicos": 73.6,
      "Metalmecánica (sin automotriz)": 56.5,
      GENERAL: 65.0,
    },
    agosto: {
      Textiles: 59.3,
      "Alimentos y bebidas": 64.5,
      "Productos minerales no metálicos": 77.8,
      "Papel y cartón": 79.8,
      "Refinación de petróleo": 72.2,
      "Edición e impresión": 60.0,
      "Productos del tabáco": 59.7,
      "Industrias metálicas": 78.7,
      "Productos de caucho y plástico": 57.1,
      "Industria automotriz": 74.3,
      "Sustancias y productos químicos": 70.4,
      "Metalmecánica (sin automotriz)": 61.2,
      GENERAL: 67.9,
    },
    septiembre: {
      Textiles: 59.1,
      "Alimentos y bebidas": 62.4,
      "Productos minerales no metálicos": 76.3,
      "Papel y cartón": 77.4,
      "Refinación de petróleo": 82.0,
      "Edición e impresión": 62.4,
      "Productos del tabáco": 52.6,
      "Industrias metálicas": 85.0,
      "Productos de caucho y plástico": 60.0,
      "Industria automotriz": 68.6,
      "Sustancias y productos químicos": 75.5,
      "Metalmecánica (sin automotriz)": 51.0,
      GENERAL: 67.9,
    },
    octubre: {
      Textiles: 55.8,
      "Alimentos y bebidas": 59.6,
      "Productos minerales no metálicos": 72.9,
      "Papel y cartón": 76.4,
      "Refinación de petróleo": 72.1,
      "Edición e impresión": 56.4,
      "Productos del tabáco": 48.2,
      "Industrias metálicas": 84.5,
      "Productos de caucho y plástico": 57.8,
      "Industria automotriz": 61.0,
      "Sustancias y productos químicos": 70.7,
      "Metalmecánica (sin automotriz)": 55.4,
      GENERAL: 65.3,
    },
    noviembre: {
      Textiles: 59.1,
      "Alimentos y bebidas": 65.2,
      "Productos minerales no metálicos": 74.3,
      "Papel y cartón": 72.7,
      "Refinación de petróleo": 84.7,
      "Edición e impresión": 54.8,
      "Productos del tabáco": 56.2,
      "Industrias metálicas": 79.4,
      "Productos de caucho y plástico": 56.8,
      "Industria automotriz": 68.3,
      "Sustancias y productos químicos": 71.4,
      "Metalmecánica (sin automotriz)": 50.3,
      GENERAL: 66.4,
    },
    diciembre: {
      Textiles: 39.9,
      "Alimentos y bebidas": 57.4,
      "Productos minerales no metálicos": 60.8,
      "Papel y cartón": 67.3,
      "Refinación de petróleo": 85.0,
      "Edición e impresión": 44.2,
      "Productos del tabáco": 44.0,
      "Industrias metálicas": 64.5,
      "Productos de caucho y plástico": 46.5,
      "Industria automotriz": 42.6,
      "Sustancias y productos químicos": 58.2,
      "Metalmecánica (sin automotriz)": 37.9,
      GENERAL: 54.9,
    },
    enero_2024: {
      Textiles: 36.7,
      "Alimentos y bebidas": 57.7,
      "Productos minerales no metálicos": 57.0,
      "Papel y cartón": 69.8,
      "Refinación de petróleo": 83.5,
      "Edición e impresión": 53.9,
      "Productos del tabáco": 50.5,
      "Industrias metálicas": 76.3,
      "Productos de caucho y plástico": 43.5,
      "Industria automotriz": 25.7,
      "Sustancias y productos químicos": 57.1,
      "Metalmecánica (sin automotriz)": 33.4,
      GENERAL: 54.6,
    },
    febrero_2024: {
      Textiles: 45.6,
      "Alimentos y bebidas": 58.1,
      "Productos minerales no metálicos": 59.6,
      "Papel y cartón": 75.4,
      "Refinación de petróleo": 79.2,
      "Edición e impresión": 51.3,
      "Productos del tabáco": 52.2,
      "Industrias metálicas": 66.5,
      "Productos de caucho y plástico": 45.9,
      "Industria automotriz": 47.3,
      "Sustancias y productos químicos": 67.8,
      "Metalmecánica (sin automotriz)": 37.3,
      GENERAL: 57.6,
    },
    marzo_2024: {
      Textiles: 38.5,
      "Alimentos y bebidas": 54.5,
      "Productos minerales no metálicos": 47.2,
      "Papel y cartón": 63.5,
      "Refinación de petróleo": 80.0,
      "Edición e impresión": 48.3,
      "Productos del tabáco": 50.5,
      "Industrias metálicas": 50.0,
      "Productos de caucho y plástico": 44.1,
      "Industria automotriz": 50.8,
      "Sustancias y productos químicos": 64.9,
      "Metalmecánica (sin automotriz)": 38.0,
      GENERAL: 53.4,
    },
    abril_2024: {
      Textiles: 37.7,
      "Alimentos y bebidas": 57.9,
      "Productos minerales no metálicos": 42.7,
      "Papel y cartón": 69.5,
      "Refinación de petróleo": 82.2,
      "Edición e impresión": 49.9,
      "Productos del tabáco": 52.0,
      "Industrias metálicas": 63.7,
      "Productos de caucho y plástico": 42.4,
      "Industria automotriz": 52.6,
      "Sustancias y productos químicos": 63.3,
      "Metalmecánica (sin automotriz)": 44.5,
      GENERAL: 56.6,
    },
  };

  const meses = ["enero", "febrero", "marzo", "abril"];
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [vista, setVista] = useState("PYME");

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

  const barData = Object.keys(aperturaInteranualPyme[mesSeleccionado]).map(
    (key) => ({
      name: key.toUpperCase(),
      valor: aperturaInteranualPyme[mesSeleccionado][key],
      fill: colors[key],
    })
  );

  const intermensualData = Object.keys(
    aperturaIntermensualPyme[mesSeleccionado]
  ).map((key) => ({
    valor: aperturaIntermensualPyme[mesSeleccionado][key],
  }));

  const acumuladaData = Object.keys(
    aperturaInteranualPyme[mesSeleccionado]
  ).map((key) => ({
    valor: aperturaAcumuladaPyme[mesSeleccionado][key],
  }));

  const generalDataOrdenada = meses.map((mes) => ({
    name: mes.toUpperCase(),
    intermensual: dataPyme[mes].intermensual,
    acumulada: dataPyme[mes].acumulada,
    interanual: dataPyme[mes].interanual,
    capacidad: dataPyme[mes].capacidad,
  }));

  const evolutivoIntermensual = Object.keys(aperturaIntermensualPyme).map(
    (month) => ({
      month,
      ...aperturaIntermensualPyme[month],
    })
  );

  return (
    <div className="w-full h-full">
      <div className="w-full h-[5%] bg-gray-600 text-white flex justify-center items-center relative">
        <FaArrowLeft className="cursor-pointer" onClick={handleMesAnterior} />
        <span className="mx-4 flex items-center justify-center w-1/3">
          {mesSeleccionado.toUpperCase()}
        </span>
        <FaArrowRight className="cursor-pointer" onClick={handleMesSiguiente} />
        <div className="absolute right-0 flex space-x-2">
          <button
            onClick={() => setVista("COMPARATIVA")}
            className={`w-28 h-6 flex items-center justify-center text-xs font-semibold rounded-xl ${
              vista === "COMPARATIVA"
                ? "bg-pink-600 text-white"
                : "bg-gray-600 text-white"
            } hover:bg-pink-800`}
          >
            COMPARATIVA
          </button>
          <button
            onClick={() => setVista("PYME")}
            className={`w-28 h-6 flex items-center justify-center text-xs font-semibold rounded-xl ${
              vista === "PYME"
                ? "bg-pink-600 text-white"
                : "bg-gray-600 text-white"
            } hover:bg-pink-800`}
          >
            PYME
          </button>
          <button
            onClick={() => setVista("INDUSTRIA")}
            className={`w-28 h-6 flex items-center justify-center text-xs font-semibold rounded-xl ${
              vista === "INDUSTRIA"
                ? "bg-pink-600 text-white"
                : "bg-gray-600 text-white"
            } hover:bg-pink-800`}
          >
            INDUSTRIA
          </button>
        </div>
      </div>
      {vista === "PYME" ? (
        <div className="w-full h-[95%]">
          <div className="w-full h-1/5 bg-gray-400 flex items-center justify-evenly">
            <div className="w-1/6 h-3/4 rounded-xl bg-yellow-100 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN INTERANUAL
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {dataPyme[mesSeleccionado].interanual} pp
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN MENSUAL
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {dataPyme[mesSeleccionado].intermensual} pp
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN ACUMULADA
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {dataPyme[mesSeleccionado].acumulada} pp
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                CAPACIDAD INDUSTRIAL UTILIZADA
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {dataPyme[mesSeleccionado].capacidad} %
              </span>
            </div>
          </div>
          <div className="w-full h-4/5 flex flex items-start relative justify-start">
            <ResponsiveContainer width="95%" height="90%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                />
                <YAxis domain={[-50, 50]} y tickCount={9} />
                <Tooltip />

                <Bar
                  dataKey="valor"
                  label={{ position: "insideTop", fill: "#000" }}
                ></Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="w-[90%] h-[10%] flex items-center justify-around absolute top-2 mx-auto left-0 right-4">
              <div className="rounded-full h-12 w-12">
                <img src="/assets/textiles.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/alimentos.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/madera.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/papel.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/quimicos.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/metal.png" alt="" />
              </div>
            </div>
            <div className="w-32 absolute h-[10%]  left-1 bottom-2 text-[12px] font-bold">
              <div className="w-full h-1/2 flex items-center text-green-500">
                Intermensual
              </div>
              <div className="w-full h-1/2 flex items-center text-blue-500">
                Acumulada
              </div>
            </div>
            <div className="w-[90%] h-[10%] absolute bottom-2 mx-auto left-0 right-4">
              <div className="w-full h-1/2 flex items-center justify-around text-green-500">
                {intermensualData.map((item) => (
                  <div className="flex flex-col items-center w-24 items-center justify-center rounded-xl text-white bg-green-500">
                    {item.valor} pp
                  </div>
                ))}
              </div>
              <div className="w-full h-1/2 flex items-center justify-around text-green-500">
                {acumuladaData.map((item) => (
                  <div className="flex flex-col items-center w-24 items-center justify-center rounded-xl text-white bg-blue-500">
                    {item.valor} pp
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : vista === "COMPARATIVA" ? (
        <div className="w-full h-[95%]">
          <div className="w-full h-[10%] flex">
            <div className="w-1/2 h-full bg-gray-200 border-b-2 border-gray-500 flex items-center justify-evenly font-semibold text-xs text-white">
              <div className="w-28 h-8 flex items-center justify-center rounded bg-[#8884d8]">
                INTERMENSUAL
              </div>
              <div className="w-28 h-8 flex items-center justify-center rounded bg-[#34a832]">
                ACUMULADA
              </div>
              <div className="w-28 h-8 flex items-center justify-center rounded bg-[#f74640]">
                INTERANUAL
              </div>
              <div className="w-28 h-8 flex items-center justify-center rounded bg-[#ffa21f]">
                CAPACIDAD
              </div>
            </div>
            <div className="w-1/2 h-full bg-gray-900 border-b-2 border-gray-400 flex items-center justify-evenly pl-2">
              {Object.keys(aperturaIntermensualPyme[mesSeleccionado]).map(
                (categoria, index) => (
                  <div
                    key={index}
                    className="w-28 h-8 rounded-full flex items-center justify-end relative"
                    style={{ backgroundColor: colors[categoria] }}
                  >
                    <div className="w-10 h-10 rounded-full absolute -top-1 -left-2 rounded full bg-white flex items-center justify-center">
                      <img
                        className="w-2/3 h-2/3 "
                        src={`/assets/${categoria.split(" ")[0]}.png`}
                        alt=""
                      />
                    </div>
                    <span className=" font-semibold text-[10px] pr-2">
                      {categoria.split(" ")[0].toUpperCase()}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-full h-[90%] flex">
            <div className="h-full w-1/2 bg-gray-200 flex items-center justify-start">
              <ResponsiveContainer width="90%" height="90%">
                <LineChart data={generalDataOrdenada}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" style={{ fontWeight: "bold" }} />
                  <YAxis domain={[-50, 90]} style={{ fontWeight: "bold" }} />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="intermensual"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    strokeWidth={3}
                    label={{
                      position: "top",
                      fill: "#8884d8",
                      fontWeight: "bold",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="acumulada"
                    stroke="#34a832"
                    strokeWidth={3}
                    label={{
                      position: "top",
                      fill: "#34a832",
                      fontWeight: "bold",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="interanual"
                    stroke="#f74640"
                    strokeWidth={3}
                    label={{
                      position: "top",
                      fill: "#f74640",
                      fontWeight: "bold",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="capacidad"
                    stroke="#ffa21f"
                    strokeWidth={3}
                    label={{
                      position: "top",
                      fill: "#ffa21f",
                      fontWeight: "bold",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="h-full w-1/2 bg-gray-900 flex items-center justify-start">
              <ResponsiveContainer width="98%" height={"90%"}>
                <LineChart data={evolutivoIntermensual}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    style={{ fontWeight: "bold" }}
                    tick={{ fill: "white" }}
                    tickFormatter={(value) => value.toUpperCase()}
                  />
                  <YAxis
                    domain={[-20, 20]}
                    style={{ fontWeight: "bold" }}
                    tick={{ fill: "white" }}
                  />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="textiles e indumentaria"
                    stroke="#8884d8"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="alimentos y bebidas"
                    stroke="#f261da"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="madera y muebles"
                    stroke="#ffc658"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="papel e impresiones"
                    stroke="#ff8042"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="quimicos y plasticos"
                    stroke="#8dd1e1"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="metal y maquinaria"
                    stroke="#a4de6c"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          Utilización de la capacidad instalada en la industria (grafico barras
          horizontales)
        </div>
      )}
    </div>
  );
}
