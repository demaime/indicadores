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
import { FaSpinner } from "react-icons/fa";

const seriesConfig = {
  "143.3_NO_PR_2004_A_21": { name: "GENERAL", color: "#1f77b4" },
  "11.3_IF_2004_M_25": { name: "Subsidios netos", color: "#ff7f0e" },
  "11.3_SEGA_2004_M_48": {
    name: "Inmobiliarias, empresariales y alquiler",
    color: "#2ca02c",
  },
  "11.3_HR_2004_M_24": { name: "Servicios sociales (salud)", color: "#d62728" },
  "11.3_IM_2004_M_25": { name: "Intermediación financiera", color: "#9467bd" },
  "11.3_C_2004_M_60": {
    name: "Administración pública, defensa y seguridad social",
    color: "#8c564b",
  },
  "11.3_ITC_2004_M_21": { name: "Electricidad, gas y agua", color: "#e377c2" },
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
  "11.3_VMASD_2004_M_23": { name: "Industria Manufacturera", color: "#f7b6d2" },
};

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

const TestComponent = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: {},
  });

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

  if (state.loading) {
    return <FaSpinner className="spinner" />;
  }

  const months2023 = [
    "ENE-23",
    "FEB-23",
    "MAR-23",
    "ABR-23",
    "MAY-23",
    "JUN-23",
    "JUL-23",
    "AGO-23",
    "SEP-23",
    "OCT-23",
    "NOV-23",
    "DIC-23",
  ];

  const months2024 = [
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth();
    if (year === 2023) {
      return months2023[month];
    } else if (year === 2024) {
      return months2024[month];
    }
    return dateString.substring(0, 7);
  };

  const filterAndFormatData = (data) =>
    data
      .filter(([dateString]) => {
        const year = new Date(dateString).getFullYear();
        return year === 2023 || year === 2024;
      })
      .map(([dateString, value]) => ({
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

  console.log(formattedData);

  return (
    <div className="bg-gray-100 h-full w-full">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[-40, 10]} />
          <Tooltip />
          <Legend />
          {Object.keys(seriesConfig).map((id) => (
            <Line
              key={id}
              type="monotone"
              dataKey={id}
              name={seriesConfig[id].name}
              stroke={seriesConfig[id].color}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TestComponent;
