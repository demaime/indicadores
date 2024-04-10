import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataNacion = [
  {
    Diciembre: {
      GENERAL: 25.5,
      "Bienes y servicios": 32.7,
      Transporte: 31.7,
      Comunicación: 15.6,
      "Recreación y cultura": 20.2,
      "Equipamiento y mantenimiento del hogar": 30.7,
      "Bebidas alcohólicas y tabaco": 20.2,
      Salud: 32.6,
      "Alimentos y bebidas no alcohólicas": 29.7,
      "Restaurantes y hoteles": 21.6,
      "Vivienda, agua, electricidad, gas y otros combustibles": 13.8,
      "Prendas de vestir y calzado": 17.2,
      Educación: 6.2,
    },
  },
  {
    Enero: {
      GENERAL: 20.6,
      "Bienes y servicios": 44.4,
      Transporte: 26.3,
      Comunicación: 25.1,
      "Recreación y cultura": 24,
      "Equipamiento y mantenimiento del hogar": 22.3,
      "Bebidas alcohólicas y tabaco": 21,
      Salud: 20.5,
      "Alimentos y bebidas no alcohólicas": 20.4,
      "Restaurantes y hoteles": 19.4,
      "Vivienda, agua, electricidad, gas y otros combustibles": 14,
      "Prendas de vestir y calzado": 11.9,
      Educación: 0.9,
    },
  },
  {
    Febrero: {
      GENERAL: 13.2,
      "Bienes y servicios": 16.6,
      Transporte: 21.6,
      Comunicación: 24.7,
      "Recreación y cultura": 8.6,
      "Equipamiento y mantenimiento del hogar": 10.3,
      "Bebidas alcohólicas y tabaco": 17.7,
      Salud: 13.6,
      "Alimentos y bebidas no alcohólicas": 11.9,
      "Restaurantes y hoteles": 11.2,
      "Vivienda, agua, electricidad, gas y otros combustibles": 20.2,
      "Prendas de vestir y calzado": 7.2,
      Educación: 9.9,
    },
  },
];

const dataCaba = [
  {
    Diciembre: {
      GENERAL: 21.7,
      "Bienes y servicios": 12.4,
      Transporte: 30.4,
      Comunicación: 22.2,
      "Recreación y cultura": 16,
      "Equipamiento y mantenimiento del hogar": 21.9,
      "Bebidas alcohólicas y tabaco": 23,
      Salud: 19.4,
      "Alimentos y bebidas no alcohólicas": 30.4,
      "Restaurantes y hoteles": 19.8,
      "Vivienda, agua, electricidad, gas y otros combustibles": 11.6,
      "Prendas de vestir y calzado": 16.2,
      Educación: 15.9,
      "Cuidado personal, protección social y otros": 26.9,
    },
  },
  {
    Enero: {
      GENERAL: 21.1,
      "Bienes y servicios": 24.2,
      Transporte: 33.7,
      Comunicación: 16.7,
      "Recreación y cultura": 30.5,
      "Equipamiento y mantenimiento del hogar": 20.2,
      "Bebidas alcohólicas y tabaco": 22.7,
      Salud: 30.3,
      "Alimentos y bebidas no alcohólicas": 25.4,
      "Restaurantes y hoteles": 24.1,
      "Vivienda, agua, electricidad, gas y otros combustibles": 10,
      "Prendas de vestir y calzado": 10.6,
      Educación: 1.5,
      "Cuidado personal, protección social y otros": 35.7,
    },
  },
  {
    Febrero: {
      GENERAL: 14.1,
      "Bienes y servicios": 30,
      Transporte: 21,
      Comunicación: 19.4,
      "Recreación y cultura": 9.4,
      "Equipamiento y mantenimiento del hogar": 7.5,
      "Bebidas alcohólicas y tabaco": 21.1,
      Salud: 21.1,
      "Alimentos y bebidas no alcohólicas": 14.7,
      "Restaurantes y hoteles": 8,
      "Vivienda, agua, electricidad, gas y otros combustibles": 13.2,
      "Prendas de vestir y calzado": 9.8,
      Educación: 9.4,
      "Cuidado personal, protección social y otros": 14.3,
    },
  },
];

const coloresCategorias = {
  GENERAL: "#FF0000",
  "Bienes y servicios": "#00FF00",
  Transporte: "#0000FF",
  Comunicación: "#FFFF00",
  "Recreación y cultura": "#00FFFF",
  "Equipamiento y mantenimiento del hogar": "#FF00FF",
  "Bebidas alcohólicas y tabaco": "#FFA500",
  Salud: "#800080",
  "Alimentos y bebidas no alcohólicas": "#008000",
  "Restaurantes y hoteles": "#800000",
  "Vivienda, agua, electricidad, gas y otros combustibles": "#000080",
  "Prendas de vestir y calzado": "#FFC0CB",
  Educación: "#CBEE27",
  "Cuidado personal, protección social y otros": "#8A2BE2",
};

const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text
      x={x}
      y={y}
      dy={-10}
      dx={12}
      fill={stroke}
      fontSize={12}
      className="font-bold"
      textAnchor="middle"
    >
      {`%${value}`}
    </text>
  );
};

export default function InflacionDesglose() {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([
    "GENERAL",
  ]);
  const [dataInflacion, setDataInflacion] = useState("nacional");
  let data = dataInflacion === "nacional" ? dataNacion : dataCaba;

  const categorias = Object.keys(data[0].Diciembre);

  const handleCategoriaSeleccionada = (categoria) => {
    if (categoriasSeleccionadas.includes(categoria)) {
      setCategoriasSeleccionadas(
        categoriasSeleccionadas.filter((cat) => cat !== categoria)
      );
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
    }
  };

  const graficoData = data.map((mes) => {
    const item = { Mes: Object.keys(mes)[0] };
    categoriasSeleccionadas.forEach((categoria) => {
      item[categoria] = mes[item.Mes][categoria];
    });
    return item;
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-1/5 bg-gray-500 text-white items-center justify-center flex"></div>

      <div className="w-full h-4/5 flex">
        <div className="h-full w-3/4 flex items-center justify-center">
          <ResponsiveContainer width={"95%"} height={"80%"}>
            <LineChart
              width={800}
              height={400}
              data={graficoData}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Mes" />
              <YAxis domain={[0, 50]} />
              <Tooltip />

              {categoriasSeleccionadas.map((categoria) => (
                <Line
                  type="monotone"
                  dataKey={categoria}
                  key={categoria}
                  label={
                    <CustomizedLabel color={coloresCategorias[categoria]} />
                  }
                  strokeWidth={2}
                  stroke={coloresCategorias[categoria]} // Usar el color preestablecido
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          className={`h-full w-1/4 border-l-2 ${
            dataInflacion === "caba"
              ? "bg-yellow-50 border-yellow-400"
              : "bg-pink-50 border-pink-400"
          }`}
        >
          <div className="w-full h-16 p-4 justify-evenly flex ">
            <button
              onClick={() => setDataInflacion("caba")}
              className={`h-full rounded h-14 bg-yellow-300 p-2 w-1/3 justify-center flex items-center border-2 border-yellow-600 ${
                dataInflacion === "caba" ? "font-bold" : ""
              }`}
            >
              CABA
            </button>
            <button
              onClick={() => setDataInflacion("nacional")}
              className={`h-full rounded h-[5%] bg-pink-200 p-2 w-1/3 justify-center flex items-center border-2 border-[#f57b6dff] ${
                dataInflacion === "nacional" ? "font-bold" : ""
              }`}
            >
              NACIONAL
            </button>
          </div>
          <div className="w-full h-[90%] flex flex-col justify-evenly items-center">
            {categorias.map((categoria) => (
              <div key={categoria} className="flex ml-4 items-center ">
                <input
                  type="checkbox"
                  id={categoria}
                  checked={categoriasSeleccionadas.includes(categoria)}
                  onChange={() => handleCategoriaSeleccionada(categoria)}
                  className="hidden" // Oculta el checkbox real
                />
                <label
                  className={`w-[25rem] text-center text-xs font-semibold relative cursor-pointer  rounded-xl py-1 ${
                    dataInflacion === "nacional"
                      ? "hover:bg-pink-100"
                      : "hover:bg-yellow-100"
                  }`}
                  // "w-[26rem] text-center text-xs font-bold relative cursor-pointer hover:bg-yellow-100 rounded-xl py-1"
                  htmlFor={categoria}
                  style={{
                    "--checkbox-color": coloresCategorias[categoria],
                  }}
                >
                  <div className="checkbox"></div>{" "}
                  {/* Este div será estilizado como el checkbox */}
                  {categoria.toUpperCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
