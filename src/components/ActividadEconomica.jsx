import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";
import CountUp from "react-countup";
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import { PiAlignBottomDuotone } from "react-icons/pi";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

export default function ActividadEconomica() {
  const [generalOapertura, setGeneralOapertura] = useState("general");
  const [mesSeleccionado, setMesSeleccionado] = useState("MAYO"); // Cambiar cada mes a mano porque se me rompió mucho al hacerlo automatico
  const [selectedCategories, setSelectedCategories] = useState([
    "143.3_NO_PR_2004_A_21",
  ]);

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: {},
  });
  const meses2024 = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];
  const seriesConfig = {
    "143.3_NO_PR_2004_A_21": { name: "INDICE GENERAL", color: "#1f77b4" },
    "11.3_IF_2004_M_25": { name: "Subsidios netos", color: "#ff7f0e" },
    "11.3_SEGA_2004_M_48": {
      name: "Inmobiliarias, empresariales y alquiler",
      color: "#2ca02c",
    },
    "11.3_HR_2004_M_24": {
      name: "Servicios sociales (salud)",
      color: "#d62728",
    },
    "11.3_IM_2004_M_25": {
      name: "Intermediación financiera",
      color: "#9467bd",
    },
    "11.3_C_2004_M_60": {
      name: "Administración pública, defensa y seguridad social",
      color: "#8c564b",
    },
    "11.3_ITC_2004_M_21": {
      name: "Electricidad, gas y agua",
      color: "#e377c2",
    },
    "11.3_ISD_2004_M_26": {
      name: "Explotación de minas y canteras",
      color: "#7f7f7f",
    },
    "11.3_AGCS_2004_M_41": {
      name: "Comercio mayorista y minorista y reparaciones",
      color: "#bcbd22",
    },
    "11.3_EMC_2004_M_25": {
      name: "Transporte, almacenamiento y comunicaciones",
      color: "#17becf",
    },
    "11.3_TAC_2004_M_60": { name: "Servicios comunitarios", color: "#ffbb78" },
    "11.3_P_2004_M_20": { name: "Hoteles y restaurantes", color: "#98df8a" },
    "11.3_ISOM_2004_M_39": {
      name: "Agricultura, ganadería, caza y silvicultura",
      color: "#ff9896",
    },
    "11.3_CMMR_2004_M_10": { name: "Enseñanza", color: "#c5b0d5" },
    "11.3_VIPAA_2004_M_5": { name: "Pesca", color: "#c49c94" },
    "11.3_VMASD_2004_M_23": {
      name: "Industria Manufacturera",
      color: "#f7b6d2",
    },
  };
  const formatDate = (dateString) => {
    const dateParts = dateString.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;

    if (year === 2024) {
      return meses2024[month];
    }

    return `${meses2024[month]}-${year.toString().substring(2, 4)}`;
  };

  const filterAndFormatData = (data) =>
    data.map(([dateString, value]) => ({
      date: formatDate(dateString),
      value: Number(value.toFixed(2)),
    }));

  const formattedData = Object.keys(state.data).reduce((acc, id) => {
    const seriesData = filterAndFormatData(state.data[id]);
    seriesData.forEach((entry) => {
      const existingEntry = acc.find((e) => e.date === entry.date);
      if (existingEntry) {
        existingEntry[id] = entry.value;
      } else {
        acc.push({ date: entry.date, [id]: entry.value });
      }
    });
    return acc;
  }, []);

  const fetchDataForSeries = async (id) => {
    const response = await fetch(
      `https://apis.datos.gob.ar/series/api/series/?ids=${id}&limit=5000&format=json`
    );
    if (!response.ok) {
      throw new Error(`Error fetching data for series ${id}`);
    }
    const data = await response.json();
    return data.data;
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const dataPromises = Object.keys(seriesConfig).map((id) =>
          fetchDataForSeries(id)
        );
        const allData = await Promise.all(dataPromises);
        const dataObject = Object.keys(seriesConfig).reduce(
          (acc, id, index) => {
            acc[id] = allData[index];
            return acc;
          },
          {}
        );
        setState({ loading: false, error: null, data: dataObject });
      } catch (error) {
        setState({ loading: false, error: error.message, data: {} });
      }
    };

    fetchAllData();
  }, []);

  if (state.error) {
    console.error(state.error);
    return <p>Error al cargar los datos</p>;
  }
  const indexMesSeleccionado = formattedData.findIndex(
    (item) => item.date === mesSeleccionado
  );

  let valoresGenerales = 0;
  if (indexMesSeleccionado !== -1) {
    // Si se encontró, intenta acceder al valor '143.3_NO_PR_2004_A_21'
    valoresGenerales =
      formattedData[indexMesSeleccionado]["143.3_NO_PR_2004_A_21"];
  } else {
    // Si no se encontró, puedes mostrar un mensaje de error o simplemente no mostrar nada
    console.error(
      `No se encontraron datos para el mes seleccionado: ${mesSeleccionado}`
    );
  }

  // Calcular la variación intermensual para el indicador específico
  let variacionIntermensual = "N/A";
  if (indexMesSeleccionado > 0) {
    const valorMesSeleccionado =
      formattedData[indexMesSeleccionado]["143.3_NO_PR_2004_A_21"];
    const valorMesAnterior =
      formattedData[indexMesSeleccionado - 1]["143.3_NO_PR_2004_A_21"];

    if (valorMesAnterior !== 0) {
      variacionIntermensual = (
        ((valorMesSeleccionado - valorMesAnterior) / valorMesAnterior) *
        100
      ).toFixed(2);
    }
  }

  let variacionInteranual = "N/A";

  if (indexMesSeleccionado !== -1) {
    const mesActual =
      formattedData[indexMesSeleccionado]["143.3_NO_PR_2004_A_21"];

    // Buscar el mismo mes pero del año anterior
    const mesAnterior = formattedData.find((item) => {
      const [mes, año] = item.date.split("-");
      return (
        meses2024.indexOf(mes) === meses2024.indexOf(mesSeleccionado) &&
        año === "23"
      );
    });

    if (mesAnterior) {
      const valorMesAnterior = mesAnterior["143.3_NO_PR_2004_A_21"];

      // Calcular la variación interanual
      if (valorMesAnterior !== 0) {
        variacionInteranual = (
          ((mesActual - valorMesAnterior) / valorMesAnterior) *
          100
        ).toFixed(2);
      }
    }
  }

  const toggleCategory = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== id)
      );
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const selectAllCategories = () => {
    setSelectedCategories(Object.keys(seriesConfig));
  };

  const deselectAllCategories = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center h-[5%] w-full">
        <select
          value={mesSeleccionado}
          onChange={(e) => setMesSeleccionado(e.target.value)}
          className="w-4/5 text-center bg-gray-500 text-gray-900 font-semibold h-full"
        >
          {formattedData
            .filter(({ date }) => !/\d+$/.test(date)) // Filtrar los meses que no terminan en un número
            .map(({ date }, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
        </select>

        <div className="w-1/5 bg-gray-600 h-full flex items-center justify-evenly">
          <button
            className={`w-20 h-6 text-xs rounded  ${
              generalOapertura === "general"
                ? "bg-gray-300"
                : "bg-gray-500 hover:bg-gray-50"
            }`}
            onClick={() => setGeneralOapertura("general")}
          >
            GENERAL
          </button>
          <button
            className={`w-20 h-6 text-xs rounded  ${
              generalOapertura === "apertura"
                ? "bg-gray-300"
                : "bg-gray-500 hover:bg-gray-50"
            }`}
            onClick={() => setGeneralOapertura("apertura")}
          >
            APERTURA
          </button>
        </div>
      </div>

      {generalOapertura === "general" ? (
        <div className="w-full h-full bg-gray-900">
          <div className="w-full h-3/5 flex">
            <div className="w-1/3 h-full flex items-center justify-center">
              <div className="w-64 h-64 rounded-full relative flex items-center justify-center">
                <CountUp
                  decimals="2"
                  className="text-blue-200 text-6xl font-black"
                  duration={1}
                  end={valoresGenerales}
                />
                <img
                  src="/assets/esfera.png"
                  className="w-64 h-64 absolute"
                  alt=""
                />
                <div className="absolute -top-14 -left-24 flex items-center justify-center h-12 text-2xl">
                  <FaMagnifyingGlassChart className="mr-2 text-yellow-400 flex items-center justify-center " />
                  <h1 className="italic text-blue-200  w-90">índice general</h1>
                </div>
              </div>
            </div>

            <div className="w-1/3 h-full flex items-center justify-center">
              <div className="w-64 h-64 rounded-full relative flex items-center justify-center">
                {variacionInteranual > 0 ? (
                  <MdOutlineKeyboardDoubleArrowUp
                    size={120}
                    className="absolute -left-28 text-green-500"
                  />
                ) : (
                  <MdOutlineKeyboardDoubleArrowDown
                    size={120}
                    className="absolute -left-28 text-red-500"
                  />
                )}
                <CountUp
                  decimals={2}
                  className="text-blue-200 text-6xl font-black"
                  duration={1.5}
                  end={variacionInteranual}
                />
                <img
                  src="/assets/esfera.png"
                  className="w-64 h-64 absolute"
                  alt=""
                />
                <div className="absolute -top-14 -left-24 flex items-center justify-center h-12 text-2xl">
                  <PiAlignBottomDuotone className="mr-2 text-yellow-400 flex items-center justify-center " />
                  <h1 className="italic text-blue-200  w-90">
                    variación interanual
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full flex items-center justify-center">
              <div className="w-64 h-64 rounded-full relative flex items-center justify-center">
                {variacionIntermensual > 0 ? (
                  <MdOutlineKeyboardDoubleArrowUp
                    size={120}
                    className="absolute -left-28 text-green-500"
                  />
                ) : (
                  <MdOutlineKeyboardDoubleArrowDown
                    size={120}
                    className="absolute -left-28 text-red-500"
                  />
                )}
                <CountUp
                  decimals={2}
                  className="text-blue-200 text-6xl font-black"
                  duration={1.5}
                  end={variacionIntermensual}
                />
                <img
                  src="/assets/esfera.png"
                  className="w-64 h-64 absolute"
                  alt=""
                />
                <div className="absolute -top-14 -left-24 flex items-center justify-center h-12 text-2xl">
                  <PiAlignBottomDuotone className="mr-2 text-yellow-400 flex items-center justify-center " />
                  <h1 className="italic text-blue-200  w-90">
                    variación mensual
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-2/5 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={formattedData.filter(
                  (entry) =>
                    entry.date.includes("20") ||
                    entry.date.includes("21") ||
                    entry.date.includes("22") ||
                    entry.date.includes("23") ||
                    !/\d+$/.test(entry.date)
                )}
                margin={{ top: 0, right: 40, left: 0, bottom: 40 }}
              >
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#bfdbfe", fontSize: "10px" }}
                />
                <YAxis domain={[110, 170]} tick={{ fill: "#bfdbfe" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "none",
                    borderRadius: "5px",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                  formatter={(value, name) => [
                    value,
                    seriesConfig[name]?.name || name,
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="143.3_NO_PR_2004_A_21"
                  stroke="#fef08a"
                  strokeWidth={2}
                  dot={{ stroke: "#fef08a", fill: "#fef08a" }}
                />
                <ReferenceLine
                  x={"ENERO-21"}
                  stroke="#bfdbfe"
                  strokeWidth={2}
                />
                <ReferenceLine
                  x={"ENERO-22"}
                  stroke="#bfdbfe"
                  strokeWidth={2}
                />
                <ReferenceLine
                  x={"ENERO-23"}
                  stroke="#bfdbfe"
                  strokeWidth={2}
                />
                <ReferenceLine x={"ENERO"} stroke="#bfdbfe" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <div className="w-full h-[95%] flex">
          <div className="w-2/3 h-full bg-gray-900 relative flex items-center justify-start p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                margin={{ top: 0, right: 40, left: -20, bottom: 0 }}
                data={formattedData.filter(
                  (entry) =>
                    entry.date.includes("23") || !/\d+$/.test(entry.date)
                )}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "white" }} />
                <YAxis
                  domain={[60, 220]}
                  tick={{ fontSize: 10, fill: "white" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(30, 30, 30, 1)",
                    border: "none",
                    borderRadius: "15px",
                    color: "white",
                  }}
                />
                <ReferenceLine x={"ENERO"} stroke="#bfdbfe" strokeWidth={2} />
                <ReferenceLine
                  style={{ opacity: 0.2 }}
                  x={mesSeleccionado}
                  stroke="gray"
                  strokeWidth={18}
                />
                {selectedCategories.map((id) => (
                  <Line
                    key={id}
                    type="monotone"
                    dataKey={id}
                    name={seriesConfig[id].name}
                    stroke={seriesConfig[id].color}
                    strokeWidth={
                      seriesConfig[id].name === "INDICE GENERAL" ? 3 : 1.5
                    }
                    dot={{
                      stroke: seriesConfig[id].color,
                      fill: seriesConfig[id].color,
                    }}
                    strokeDasharray={
                      seriesConfig[id].name === "INDICE GENERAL" ? "10 10" : ""
                    }
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="w-1/3 h-full">
            <div className="w-full h-[5%] flex">
              <div className="w-1/2 h-full flex items-center justify-center text-gray-500 text-[10px]">
                <button
                  onClick={selectAllCategories}
                  className="border-b rounded-xl hover:text-yellow-400 w-20 bg-gray-800 text-gray-100 mx-4"
                >
                  Todas
                </button>
                <button
                  onClick={deselectAllCategories}
                  className="border-b rounded-xl hover:text-yellow-400 w-20 bg-gray-800 text-gray-100 mx-4"
                >
                  Ninguna
                </button>
              </div>
              <div className="w-1/2 h-full flex px-2 items-end justify-between text-xs text-gray-600">
                <p>índice</p>
                <p>intermensual</p>
                <p>interanual</p>
              </div>
            </div>
            <div className="w-full h-[95%]">
              <ul className="flex flex-col items-start justify-between h-full px-4 pb-2 text-xs">
                {Object.keys(seriesConfig).map((id) => {
                  const mesData = formattedData.find(
                    (item) => item.date === mesSeleccionado
                  );
                  const valor = mesData ? mesData[id] : "N/A";

                  // Variación Intermensual
                  let variacionIntermensual = "N/A";
                  const indexMesSeleccionado = formattedData.findIndex(
                    (item) => item.date === mesSeleccionado
                  );
                  if (indexMesSeleccionado > 0) {
                    const valorMesAnterior =
                      formattedData[indexMesSeleccionado - 1][id];
                    if (valorMesAnterior !== 0) {
                      variacionIntermensual = (
                        ((valor - valorMesAnterior) / valorMesAnterior) *
                        100
                      ).toFixed(2);
                    }
                  }

                  // Variación Interanual
                  let variacionInteranual = "N/A";
                  if (indexMesSeleccionado !== -1) {
                    const mesActual = formattedData[indexMesSeleccionado][id];
                    const mesAnterior = formattedData.find((item) => {
                      const [mes, año] = item.date.split("-");
                      return (
                        meses2024.indexOf(mes) ===
                          meses2024.indexOf(mesSeleccionado) && año === "23"
                      );
                    });
                    if (mesAnterior) {
                      const valorMesAnterior = mesAnterior[id];
                      if (valorMesAnterior !== 0) {
                        variacionInteranual = (
                          ((mesActual - valorMesAnterior) / valorMesAnterior) *
                          100
                        ).toFixed(2);
                      }
                    }
                  }

                  return (
                    <li
                      key={id}
                      className={`cursor-pointer rounded w-full flex items-center justify-between ${
                        selectedCategories.includes(id) ? "" : "text-gray-400"
                      }`}
                      onClick={() => toggleCategory(id)}
                    >
                      <span
                        className={`w-6 h-6 rounded-full mr-2 border border-black ${
                          selectedCategories.includes(id) ? "" : "bg-white"
                        }`}
                        style={{
                          backgroundColor: selectedCategories.includes(id)
                            ? seriesConfig[id].color
                            : "white",
                        }}
                      ></span>
                      <p
                        className={`hover:font-semibold rounded-xl w-44 overflow-hidden truncate ${
                          selectedCategories.includes(id) ? "" : "text-gray-400"
                        }`}
                      >
                        {seriesConfig[id].name}
                      </p>
                      <p>{valor}</p>
                      <p
                        className={`w-20 text-right ${
                          selectedCategories.includes(id)
                            ? variacionIntermensual > 0
                              ? "font-semibold text-green-500"
                              : "font-semibold text-red-500"
                            : ""
                        }`}
                      >
                        {variacionIntermensual}%
                      </p>
                      <p
                        className={`w-20 text-right ${
                          selectedCategories.includes(id)
                            ? variacionInteranual > 0
                              ? "font-semibold text-green-500"
                              : "font-semibold text-red-500"
                            : ""
                        }`}
                      >
                        {variacionInteranual}%
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
