import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import OcioTarjetas from "./OcioTarjetas";

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
};

const calcularVariacion = (valorActual, valorAnterior) => {
  return ((valorActual - valorAnterior) / valorAnterior) * 100;
};

const calcularVariaciones = (data) => {
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

  // Añadir un valor predeterminado para el primer mes
  variaciones[meses[0]] = {};
  for (const categoria in data[meses[0]]) {
    variaciones[meses[0]][categoria] = "-";
  }

  return variaciones;
};

const variaciones = calcularVariaciones(data);

const formatearDatosParaGrafica = (variaciones) => {
  if (!variaciones || Object.keys(variaciones).length === 0) {
    return []; // Retorna un array vacío si variaciones no está definido o no tiene datos
  }

  const meses = Object.keys(variaciones);
  const categorias = Object.keys(variaciones[meses[0]]);
  return meses.map((mes) => {
    const datosMes = { mes };
    categorias.forEach((categoria) => {
      datosMes[categoria] = variaciones[mes][categoria];
    });
    return datosMes;
  });
};

const datosGrafica = formatearDatosParaGrafica(variaciones);

export default function Ocio() {
  const meses = ["abril", "mayo"];
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [tarjetasOgrafico, setTarjetasOgrafico] = useState("tarjetas");

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

  const colors = {
    fiesta: "#60a5fa",
    plataforma: "#f87171",
    gimnasio: "#4ade80",
    cine: "#facc15",
    combo: "#f472b6",
    libro: "#fb923c",
    teatro: "#c084fc",
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
      <div className="w-full h-[95%] p-2 relative">
        <div
          onClick={() => setTarjetasOgrafico("tarjetas")}
          className={`absolute h-2/5 w-8 left-4 top-[25%] rounded-xl cursor-pointer writing-vertical tracking-widest font-semibold text-white text-xs items-center justify-center flex ${
            tarjetasOgrafico === "grafico"
              ? "bg-gray-900"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
        >
          VER TARJETAS
        </div>
        <div
          onClick={() => setTarjetasOgrafico("grafico")}
          className={`absolute h-2/5 w-8 right-4 top-[25%] rounded-xl cursor-pointer writing-vertical tracking-widest font-semibold text-white text-xs items-center justify-center flex ${
            tarjetasOgrafico === "grafico"
              ? "bg-gray-400 hover:bg-gray-500"
              : "bg-gray-900"
          }`}
        >
          VER GRAFICO
        </div>
        {tarjetasOgrafico === "tarjetas" ? (
          <OcioTarjetas data={data} mesSeleccionado={mesSeleccionado} />
        ) : (
          <div className="h-full w-full bg-gray-700 flex items-center justify-around">
            <div className="w-2/3 h-[90%] rounded-xl border border-white flex items-center justify-start">
              <ResponsiveContainer width="95%" height="90%">
                <LineChart
                  data={datosGrafica}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="mes"
                    tick={{ fontWeight: "bold", fill: "#999", fontSize: "10" }}
                  />
                  <YAxis
                    domain={[0, 30]}
                    tick={{ fontWeight: "bold", fill: "#999", fontSize: "10" }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip />

                  {Object.keys(
                    variaciones[Object.keys(variaciones)[0]] || {}
                  ).map((categoria, index) => (
                    <Line
                      key={index}
                      type="monotone"
                      dataKey={categoria}
                      stroke={colors[categoria]}
                      strokeWidth={2}
                      // Evitar errores de NaN
                      isAnimationActive={false}
                      dot={false}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/4 h-[90%] rounded-xl border border-white flex flex-col justify-evenly">
              {Object.keys(variaciones[mesSeleccionado]).map(
                (categoria, index) => (
                  <div
                    style={{ color: colors[categoria] }}
                    key={index}
                    className="w-full py-2 px-6 rounded-md flex justify-between items-center font-semibold"
                  >
                    <div className="w-12 h-12">
                      <img src={`/assets/${categoria}.png`} alt="" />
                    </div>
                    <span>{categoria.toUpperCase()}</span>
                    <span className="w-14 text-center">
                      {variaciones[mesSeleccionado][categoria] + " %"}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
