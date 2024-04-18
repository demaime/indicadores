import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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
  {
    Marzo: {
      GENERAL: 11,
      "Bienes y servicios": 9.6,
      Transporte: 13,
      Comunicación: 15.9,
      "Recreación y cultura": 8.5,
      "Equipamiento y mantenimiento del hogar": 5,
      "Bebidas alcohólicas y tabaco": 12.3,
      Salud: 12.2,
      "Alimentos y bebidas no alcohólicas": 10.5,
      "Restaurantes y hoteles": 8.3,
      "Vivienda, agua, electricidad, gas y otros combustibles": 13.3,
      "Prendas de vestir y calzado": 10.9,
      Educación: 36.8,
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
  {
    Marzo: {
      GENERAL: 13.2,
      "Bienes y servicios": 15,
      Transporte: 8.5,
      Comunicación: 24.5,
      "Recreación y cultura": 6,
      "Equipamiento y mantenimiento del hogar": 8.6,
      "Bebidas alcohólicas y tabaco": 13.1,
      Salud: 16.9,
      "Alimentos y bebidas no alcohólicas": 11,
      "Restaurantes y hoteles": 7.6,
      "Vivienda, agua, electricidad, gas y otros combustibles": 17.9,
      "Prendas de vestir y calzado": 11.5,
      Educación: 36.8,
      "Cuidado personal, protección social y otros": 10,
    },
  },
];

const coloresCategorias = {
  GENERAL: "#FF0000",
  "Bienes y servicios": "#00FF00",
  Transporte: "#6b6ff2",
  Comunicación: "#eefa48",
  "Recreación y cultura": "#20B2AA",
  "Equipamiento y mantenimiento del hogar": "#f765b3",
  "Bebidas alcohólicas y tabaco": "#FFA500",
  Salud: "#F6905F",
  "Alimentos y bebidas no alcohólicas": "#32a852",
  "Restaurantes y hoteles": "#b80208",
  "Vivienda, agua, electricidad, gas y otros combustibles": "#000080",
  "Prendas de vestir y calzado": "#FFC0CB",
  Educación: "#ADC2E2",
  "Cuidado personal, protección social y otros": "#a464d1",
};

const variacionAcumuladaNacion = {
  Enero: "20.6%",
  Febrero: "36.6%",
  Marzo: "51.6%",
};
const variacionAcumuladaCaba = {
  Enero: "21.7%",
  Febrero: "38.9%",
  Marzo: "57.3%",
};
const variacionAnualNacion = {
  Enero: "254.2%",
  Febrero: "276.2%",
  Marzo: "287.9%",
};
const variacionAnualCaba = {
  Enero: "238.5%",
  Febrero: "264.5%",
  Marzo: "285.3%",
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
  const [mesSeleccionadoIndex, setMesSeleccionadoIndex] = useState(
    data.length - 1
  );

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

  let variacionAnual =
    dataInflacion === "nacional" ? variacionAnualNacion : variacionAnualCaba;

  let variacionAcumulada =
    dataInflacion === "nacional"
      ? variacionAcumuladaNacion
      : variacionAcumuladaCaba;

  const graficoData = data.map((mes) => {
    const item = { Mes: Object.keys(mes)[0] };
    categoriasSeleccionadas.forEach((categoria) => {
      item[categoria] = mes[item.Mes][categoria];
    });
    return item;
  });

  const cambiarMes = (direccion) => {
    if (direccion === "anterior") {
      setMesSeleccionadoIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    } else if (direccion === "siguiente") {
      setMesSeleccionadoIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full h-1/5 flex border-b">
        <div
          className={`h-full w-1/6 text-center text-gray-800 text-4xl flex items-center justify-center ${
            dataInflacion === "caba" ? "bg-yellow-300" : "bg-pink-300"
          }`}
        >
          Valores Mensuales
        </div>
        <div
          className={`h-full w-5/6 flex flex-col border-y-4 ${
            dataInflacion === "caba" ? "border-yellow-300" : "border-pink-300"
          }`}
        >
          <div className="w-full h-1/5 bg-gray-800 flex items-center">
            {" "}
            <RiArrowLeftSLine
              className="text-white cursor-pointer"
              onClick={() => cambiarMes("anterior")}
            />{" "}
            <select
              value={Object.keys(data[mesSeleccionadoIndex])[0]}
              onChange={(e) =>
                setMesSeleccionadoIndex(
                  data.findIndex(
                    (mesData) => Object.keys(mesData)[0] === e.target.value
                  )
                )
              }
              className="text-white bg-gray-800 text-center w-full appearance-none"
            >
              {data.map((mesData, index) => (
                <option key={index} value={Object.keys(mesData)[0]}>
                  {Object.keys(mesData)[0]}
                </option>
              ))}
            </select>
            <RiArrowRightSLine
              className="text-white cursor-pointer"
              onClick={() => cambiarMes("siguiente")}
            />{" "}
          </div>
          <div className="w-full h-4/5 bg-gray-500 flex items-center justify-evenly">
            <div
              className={`bg-gray-800 w-1/6 h-2/3 rounded flex flex-col items-center justify-between ${
                dataInflacion === "caba" ? "text-yellow-300" : "text-pink-300"
              }`}
            >
              <span className="h-1/3 text-xs border-b flex items-center justify-center w-full text-gray-200">
                Valor Mensual
              </span>
              <span className="h-2/3 text-2xl flex items-center justify-center w-full">
                {data[mesSeleccionadoIndex][
                  Object.keys(data[mesSeleccionadoIndex])[0]
                ].GENERAL.toFixed(1)}{" "}
                %
              </span>
            </div>
            <div
              className={`bg-gray-800 w-1/6 h-2/3 rounded flex flex-col items-center justify-between ${
                dataInflacion === "caba" ? "text-yellow-300" : "text-pink-300"
              }`}
            >
              <span className="h-1/3 text-xs border-b flex items-center justify-center w-full text-gray-200">
                Variación mensual
              </span>
              <span className="h-2/3 text-2xl flex items-center justify-center w-full">
                {mesSeleccionadoIndex === 0
                  ? "-"
                  : `${(
                      data[mesSeleccionadoIndex][
                        Object.keys(data[mesSeleccionadoIndex])[0]
                      ].GENERAL -
                      data[mesSeleccionadoIndex - 1][
                        Object.keys(data[mesSeleccionadoIndex - 1])[0]
                      ].GENERAL
                    ).toFixed(1)}pp`}
              </span>
            </div>
            <div
              className={`bg-gray-800 w-1/6 h-2/3 rounded flex flex-col items-center justify-between ${
                dataInflacion === "caba" ? "text-yellow-300" : "text-pink-300"
              }`}
            >
              <span className="h-1/3 text-xs border-b flex items-center justify-center w-full text-gray-200">
                Variación Acumulada Anual (2024)
              </span>
              <span className="h-2/3 text-2xl flex items-center justify-center w-full">
                {mesSeleccionadoIndex === 0
                  ? "-"
                  : variacionAcumulada[
                      Object.keys(data[mesSeleccionadoIndex])[0]
                    ]}
              </span>
            </div>
            <div
              className={`bg-gray-800 w-1/6 h-2/3 rounded flex flex-col items-center justify-between ${
                dataInflacion === "caba" ? "text-yellow-300" : "text-pink-300"
              }`}
            >
              <span className="h-1/3 text-xs border-b flex items-center justify-center w-full text-gray-200">
                Variación Interanual (vs{" "}
                {mesSeleccionadoIndex === 0
                  ? "Dic"
                  : Object.keys(data[mesSeleccionadoIndex])[0].slice(0, 3)}{" "}
                {mesSeleccionadoIndex === 0 ? "2022" : "2023"})
              </span>
              <span className="h-2/3 text-2xl flex items-center justify-center w-full">
                {mesSeleccionadoIndex === 0
                  ? "-"
                  : variacionAnual[Object.keys(data[mesSeleccionadoIndex])[0]]}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-4/5 flex">
        <div className="h-full w-3/4 flex flex-col items-center justify-around">
          <h1 className="w-2/3 text-center text-white bg-gray-800 rounded">
            Gráfico evolutivo de variables específicas
          </h1>
          <ResponsiveContainer width={"95%"} height={"80%"}>
            <LineChart
              width={800}
              height={400}
              data={graficoData}
              margin={{ right: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Mes" />
              <YAxis domain={[0, 50]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(60, 60, 60, 1)",
                  border: "none",
                  borderRadius: "15px",
                }}
              />

              {categoriasSeleccionadas.map((categoria) => (
                <Line
                  type="monotone"
                  dataKey={categoria}
                  key={categoria}
                  label={
                    <CustomizedLabel color={coloresCategorias[categoria]} />
                  }
                  strokeWidth={2}
                  stroke={coloresCategorias[categoria]}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          className={`h-full w-1/4 border-l-2 flex flex-col items-center justify-between  ${
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
          <div className="w-full h-[80%] flex flex-col justify-evenly items-center">
            {categorias.map((categoria) => (
              <div
                key={categoria}
                className="flex items-center justify-between w-full"
              >
                <input
                  type="checkbox"
                  id={categoria}
                  checked={categoriasSeleccionadas.includes(categoria)}
                  onChange={() => handleCategoriaSeleccionada(categoria)}
                  className="hidden"
                />
                <label
                  className={`w-full text-center text-[10px] font-semibold relative cursor-pointer rounded-xl py-1 ${
                    dataInflacion === "nacional"
                      ? "hover:bg-pink-200"
                      : "hover:bg-yellow-200"
                  }`}
                  htmlFor={categoria}
                  style={{
                    "--checkbox-color": coloresCategorias[categoria],
                  }}
                >
                  <div className="checkbox"></div> {categoria.toUpperCase()}
                </label>
              </div>
            ))}
          </div>
          <div className="h-[5%] flex items-center w-full justify-evenly">
            {" "}
            <button
              onClick={() => setCategoriasSeleccionadas(categorias)}
              className="rounded text-gray-400 text-[10px] w-1/3 justify-center flex items-center border-b-2 border-gray-600"
            >
              Seleccionar todas
            </button>
            <button
              onClick={() => setCategoriasSeleccionadas([])}
              className="rounded text-gray-400 text-[10px] w-1/3 justify-center flex items-center border-b-2 border-gray-600"
            >
              Borrar selección
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
