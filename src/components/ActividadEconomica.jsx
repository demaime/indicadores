import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const colors = {
  "Agricultura, ganadería, caza y silvicultura": "#e6194b",
  Pesca: "#3cb44b",
  "Explotación de minas y canteras": "#ffe119",
  "Industria manufacturera": "#4363d8",
  "Electricidad, gas y agua": "#f58231",
  Construcción: "#911eb4",
  "Comercio mayorista, minorista y reparaciones": "#42d4f4",
  "Hoteles y restaurantes": "#f032e6",
  "Transporte y comunicaciones": "#bfef45",
  "Intermediación financiera": "#fabebe",
  "Actividades inmobiliarias, empresariales y de alquiler": "#469990",
  "Adm. pública y defensa; planes de seguridad social": "#e6beff",
  Enseñanza: "#9a6324",
  "Servicios sociales y de salud": "#ffa66a",
  "Otras actividades de servicios comunitarios, sociales y personales":
    "#800000",
  "Impuestos netos de subsidios": "#aaffc3",
};

export default function ActividadEconomica() {
  const [generalOapertura, setGeneralOapertura] = useState("general");
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  const data = [
    { mes: "ENERO", dato: 136.5, intermensual: -1.9, interanual: -4.1 },
    { mes: "FEBRERO", dato: 133, intermensual: -2.5, interanual: -3 },
    { mes: "MARZO", dato: 141.7, intermensual: 6.5, interanual: -8.4 },
  ];

  const dataApertura = {
    "Agricultura, ganadería, caza y silvicultura": [
      { mes: "ENERO", dato: 91.4, intermensual: -17.07, interanual: 11.9 },
      { mes: "FEBRERO", dato: 73.7, intermensual: -19.39, interanual: 5 },
      { mes: "MARZO", dato: 143.3, intermensual: 94.82, interanual: 14.1 },
    ],
    Pesca: [
      { mes: "ENERO", dato: 153.9, intermensual: 19.31, interanual: -13.4 },
      { mes: "FEBRERO", dato: 167.7, intermensual: 8.93, interanual: 31.4 },
      { mes: "MARZO", dato: 114, intermensual: -31.73, interanual: 2.9 },
    ],
    "Explotación de minas y canteras": [
      { mes: "ENERO", dato: 114.8, intermensual: 3.42, interanual: 7.3 },
      { mes: "FEBRERO", dato: 109.2, intermensual: -4.87, interanual: 11.3 },
      { mes: "MARZO", dato: 111.2, intermensual: 1.68, interanual: 5.9 },
    ],
    "Industria manufacturera": [
      { mes: "ENERO", dato: 100.7, intermensual: -10.29, interanual: -10.8 },
      { mes: "FEBRERO", dato: 103.3, intermensual: 2.55, interanual: -8.3 },
      { mes: "MARZO", dato: 111.6, intermensual: 7.67, interanual: -19.6 },
    ],
    "Electricidad, gas y agua": [
      { mes: "ENERO", dato: 155.5, intermensual: -5.39, interanual: -5.8 },
      { mes: "FEBRERO", dato: 157.3, intermensual: 1.16, interanual: 7.9 },
      { mes: "MARZO", dato: 152.1, intermensual: -3.38, interanual: -7.5 },
    ],
    Construcción: [
      { mes: "ENERO", dato: 124.4, intermensual: -6.2, interanual: -18.8 },
      { mes: "FEBRERO", dato: 119.2, intermensual: -4.22, interanual: -20.7 },
      { mes: "MARZO", dato: 113, intermensual: -4.94, interanual: -29.9 },
    ],
    "Comercio mayorista, minorista y reparaciones": [
      { mes: "ENERO", dato: 132.7, intermensual: -4.24, interanual: -8.4 },
      { mes: "FEBRERO", dato: 136, intermensual: 2.47, interanual: -6.3 },
      { mes: "MARZO", dato: 140.6, intermensual: 3.38, interanual: -16.7 },
    ],
    "Hoteles y restaurantes": [
      { mes: "ENERO", dato: 160.9, intermensual: -7.69, interanual: -0.5 },
      { mes: "FEBRERO", dato: 156.2, intermensual: -2.84, interanual: -0.3 },
      { mes: "MARZO", dato: 124.9, intermensual: -20.06, interanual: -1.5 },
    ],
    "Transporte y comunicaciones": [
      { mes: "ENERO", dato: 176.5, intermensual: -0.23, interanual: -0.1 },
      { mes: "FEBRERO", dato: 171.8, intermensual: -2.59, interanual: -0.1 },
      { mes: "MARZO", dato: 178.4, intermensual: 3.67, interanual: -1.4 },
    ],
    "Intermediación financiera": [
      { mes: "ENERO", dato: 147.7, intermensual: -4.4, interanual: -10.8 },
      { mes: "FEBRERO", dato: 139.2, intermensual: -5.59, interanual: -11.2 },
      { mes: "MARZO", dato: 152.8, intermensual: 9.79, interanual: -15.2 },
    ],
    "Actividades inmobiliarias, empresariales y de alquiler": [
      { mes: "ENERO", dato: 147.8, intermensual: -3.23, interanual: -1 },
      { mes: "FEBRERO", dato: 147.3, intermensual: -0.34, interanual: -0.5 },
      { mes: "MARZO", dato: 148.2, intermensual: 0.34, interanual: -3.1 },
    ],
    "Adm. pública y defensa; planes de seguridad social": [
      { mes: "ENERO", dato: 166.4, intermensual: -1, interanual: 1.1 },
      { mes: "FEBRERO", dato: 166.8, intermensual: 0.24, interanual: 1.2 },
      { mes: "MARZO", dato: 164.9, intermensual: -1.14, interanual: 0.2 },
    ],
    Enseñanza: [
      { mes: "ENERO", dato: 167.1, intermensual: -4.48, interanual: 1.9 },
      { mes: "FEBRERO", dato: 168.6, intermensual: 0.9, interanual: 1.9 },
      { mes: "MARZO", dato: 170.7, intermensual: 1.19, interanual: 0.9 },
    ],
    "Servicios sociales y de salud": [
      { mes: "ENERO", dato: 186.8, intermensual: 15.83, interanual: 1.7 },
      { mes: "FEBRERO", dato: 178.6, intermensual: -4.38, interanual: 1.4 },
      { mes: "MARZO", dato: 192.7, intermensual: 7.84, interanual: 1 },
    ],
    "Otras actividades de servicios comunitarios, sociales y personales": [
      { mes: "ENERO", dato: 148.1, intermensual: 15.79, interanual: -1 },
      { mes: "FEBRERO", dato: 138.7, intermensual: -6.72, interanual: -2 },
      { mes: "MARZO", dato: 131.1, intermensual: -5.59, interanual: -2.7 },
    ],
    "Impuestos netos de subsidios": [
      { mes: "ENERO", dato: 159.2, intermensual: 24.61, interanual: -5.9 },
      { mes: "FEBRERO", dato: 149, intermensual: -6.95, interanual: -4 },
      { mes: "MARZO", dato: 153.4, intermensual: 2.36, interanual: -11 },
    ],
  };

  const meses = dataApertura["Agricultura, ganadería, caza y silvicultura"].map(
    (item) => item.mes
  );
  const categorias = Object.keys(dataApertura);

  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );

  const handleChangeMes = (event) => {
    setMesSeleccionado(event.target.value);
  };

  const handleToggleCategoria = (categoria) => {
    setCategoriasSeleccionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((item) => item !== categoria)
        : [...prev, categoria]
    );
  };

  const handleSelectTodas = () => {
    setCategoriasSeleccionadas(categorias);
  };

  const handleBorrarSeleccion = () => {
    setCategoriasSeleccionadas([]);
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center h-[5%] w-full">
        <select
          value={mesSeleccionado}
          onChange={handleChangeMes}
          className="w-4/5  text-center bg-blue-900 text-gray-200 font-semibold h-full"
        >
          {meses.map((mes, index) => (
            <option key={index} value={mes}>
              {mes}
            </option>
          ))}
        </select>

        <div className="w-1/5 bg-blue-600 h-full flex items-center justify-evenly">
          <button
            className={`w-20 h-6 text-xs rounded  ${
              generalOapertura === "general"
                ? "bg-gray-300"
                : "bg-gray-500 hover:bg-white"
            }`}
            onClick={() => setGeneralOapertura("general")}
          >
            GENERAL
          </button>
          <button
            className={`w-20 h-6 text-xs rounded  ${
              generalOapertura === "apertura"
                ? "bg-gray-300"
                : "bg-gray-500 hover:bg-white"
            }`}
            onClick={() => setGeneralOapertura("apertura")}
          >
            APERTURA
          </button>
        </div>
      </div>
      {generalOapertura === "general" ? (
        <></>
      ) : (
        <div className="w-full h-[95%] flex">
          <div className="w-1/2 h-full bg-gray-900 relative flex items-center justify-start">
            <ResponsiveContainer width="95%" height="90%">
              <LineChart
                data={meses.map((mes, index) => {
                  const result = { mes };
                  categoriasSeleccionadas.forEach((categoria) => {
                    const datosMes = dataApertura[categoria].find(
                      (item) => item.mes === mes
                    );
                    if (datosMes) {
                      result[categoria] = datosMes.intermensual;
                    } else {
                      result[categoria] = null; // Opcional: manejar casos donde no haya datos
                    }
                  });
                  return result;
                })}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                {categoriasSeleccionadas.map((categoria) => (
                  <Line
                    key={categoria}
                    type="monotone"
                    dataKey={categoria}
                    stroke={colors[categoria]}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
            {categoriasSeleccionadas.length === 0 && (
              <div className="absolute inset-0 h-16 flex items-center justify-center text-white font-bold text-lg bg-red-500 top-1/3">
                Seleccione alguna categoría para mostrar en el gráfico
              </div>
            )}
            <div className="absolute bottom-2 w-full flex items-center justify-evenly text-[8px] text-gray-200 ">
              <button
                className="border-b border-gray-400 rounded-xl px-2"
                onClick={handleSelectTodas}
              >
                Seleccionar todas
              </button>
              <button
                className="border-b border-gray-400 rounded-xl px-2"
                onClick={handleBorrarSeleccion}
              >
                Borrar selección
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-around overflow-y-auto">
            {categorias.map((categoria, index) => {
              const datosMes = dataApertura[categoria].find(
                (item) => item.mes === mesSeleccionado
              );
              return (
                <div
                  key={index}
                  className="border-b border-gray-200 px-4 p-1 flex justify-between items-center w-full cursor-pointer relative"
                  onClick={() => handleToggleCategoria(categoria)}
                >
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-full mr-2 border border-black"
                      style={{
                        backgroundColor: categoriasSeleccionadas.includes(
                          categoria
                        )
                          ? colors[categoria]
                          : "#FFFFFF",
                      }}
                    ></div>
                    <span>{categoria}</span>
                  </div>
                  <span>{datosMes ? datosMes.intermensual : "-"} %</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
